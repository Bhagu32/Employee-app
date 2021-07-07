import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor(public frmBuilder: FormBuilder,public router:Router) { }
  signupform!: FormGroup;
  singupdata:any=[];
  ngOnInit(): void {
    this.CreateRegisterform();
  }
   //set value for formGroup
   get a() { return this.signupform.controls; }
   CreateRegisterform() {
     this.signupform = this.frmBuilder.group({
       'name': new FormControl('',Validators.required),
       'email': new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
       'number': new FormControl(),
       'dateofbirth': new FormControl(),
       'password': new FormControl(''),
       'checkbox': new FormControl(''),
     });
 
   }
   register(form: { value: any; })
   {
    var array = JSON.parse(localStorage.getItem('singup-data') || '[]');
     array.push(form.value);
    localStorage.setItem('singup-data', JSON.stringify(array));
    this.router.navigate(['./userlist']);
      
   }
  
   


}


