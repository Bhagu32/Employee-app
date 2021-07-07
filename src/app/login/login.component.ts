import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public frmBuilder: FormBuilder,public router:Router) { }
  loginform!: FormGroup;
  userdata:any;
  alertwindow:boolean=false;
  ngOnInit(): void {
    this.createloginform()
    this.userdata=JSON.parse(localStorage.getItem('singup-data') || '[]');
  }

  get a() { return this.loginform.controls; }
  createloginform()
  {
    this.loginform = this.frmBuilder.group({
      'Emailid': new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      'password': new FormControl(''),
      'checkbox': new FormControl(''),
    });
  }
  login(formdata: any)
  {
    let data;
    data = this.userdata.filter((a: { email: any; }) => a.email == formdata.value.Emailid)
    console.log(data.length)
    if(data.length > 0)
    {
      if(data[0].email==formdata.value.Emailid && data[0].password==formdata.value.password)
      {
        this.alertwindow =false;
        localStorage.setItem('login-data', JSON.stringify({"email":data[0].email,"password":data[0].password}));
        this.router.navigate(['./userlist']);
      }
      else{
        this.alertwindow=true;
      }
    }
    else{
      this.alertwindow=true;
    }
  
  }
  close()
  {
    this.alertwindow =false;
    this.loginform.reset();
  }
}
