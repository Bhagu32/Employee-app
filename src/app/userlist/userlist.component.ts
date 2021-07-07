import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {

  constructor() { }
  Userdata:any;
  ngOnInit(): void {
    this.Userdata = JSON.parse(localStorage.getItem('singup-data') || '[]');
    console.log(this.Userdata)

  }

}
