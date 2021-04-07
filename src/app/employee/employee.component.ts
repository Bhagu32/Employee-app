import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor() { }

CandidateData:any=[];
updatedcandidatelist:any=[];
isnormal:boolean=false;
experiencecandidate:any=[];
mySelection:any=[];
isdistinct:boolean=false;
DistinctCandidateData:any=[];
Data:any=[{
  "id": 11,
  "name": "Ash",
  "department": "Finance",
  "joining_date":'2016-10-08',
  
},
{"id": 12,"name": "John","department": "HR","joining_date": '2011-01-18'},
{ "id": 13, "name": "Zuri", "department": "Operations", "joining_date": '2019-11-28'},
{"id": 14,  "name": "Vish",  "department": "Development",   "joining_date": '2017-07-07'},
{ "id": 15, "name": "Barry",  "department": "Operations", "joining_date": '2014-08-19'},
{"id": 16,"name": "Ady",  "department": "Finance",  "joining_date": '2014-10-05'}, 
{ "id": 17,"name": "Gare","department": "Development",  "joining_date": '2014-04-06'},
{ "id": 18,  "name": "Hola",  "department": "Development",  "joining_date": '2010-12-08'}, 
{"id": 19,  "name": "Ola",  "department": "HR",  "joining_date": '2011-05-07'},
{ "id": 20,  "name": "Kim",  "department": "Finance",  "joining_date": '2010-10-20'}
];
  ngOnInit(): void {
    this.getData();
  }
  getData()
  {
    this.isnormal=true;
    this.CandidateData=[];
    const today = new Date().getTime();
    for (var i = 0; i < this.Data.length; i++)
    {
      var dt1 = new Date(this.Data[i].joining_date).getTime();
      var diff =(today - dt1) / 1000;
      diff /= (60 * 60 * 24);
      diff =Math.abs((diff/365.25))
      this.CandidateData.push({"name": this.Data[i].name,"department": this.Data[i].department,"joining_date": this.Data[i].joining_date,"experience":diff.toFixed(1)})  
    }

  }
  
  SortByName()
  {
    this.isdistinct=false;
    this.CandidateData.sort((a: { name: string; }, b: { name: any; }) => a.name.localeCompare(b.name));
  }
  ResetData()
  {
    this.isdistinct=false;
    this.isnormal=true;
    this.getData();
  }
  SortByJoiningDate()
  {
    this.isnormal=true;
    this.isdistinct=false;
   this.CandidateData.sort((a: { joining_date: string | number | Date; },b: { joining_date: string | number | Date; }) =>  new Date(b.joining_date).getTime() - new Date(a.joining_date).getTime())
  }
  SearchbyName(seractext:any)
  {
    debugger
    this.isnormal=true;
    this.isdistinct=false;
    if(seractext.value != "")
    {
      this.CandidateData=this.CandidateData.filter((a: { name: string; }) => a.name.toLowerCase() == seractext.value.toLowerCase());
    }
    else{
      this.getData();
    }
    
  }
  RemoveDevelopmentcandidates()
  {
    this.isnormal=true;
    this.isdistinct=false;
    this.CandidateData=this.CandidateData.filter((a: { department: string; }) => a.department != "Development");
  }
 
  DistinctDepartment()
  {
    this.isnormal=false;
    this.isdistinct=true;
    this.DistinctCandidateData=[];
    var filterCandidateData=[];
    for(var i = 0; i< this.CandidateData.length; i++){    
      if(this.CandidateData.indexOf(this.CandidateData[i].department) === -1){
        filterCandidateData.push(this.CandidateData[i].department);        
      }        
    }

  var unique = filterCandidateData.filter((v: any, i: any, a: string | any[]) => a.indexOf(v) === i);
  var sortdata=[];  
  for(var j=0;j<unique.length;j++)
  {
    sortdata = this.CandidateData.filter((a: { department: string; }) => a.department == unique[j]);
    this.DistinctCandidateData.push({"department":unique[j],"count":sortdata.length})
  }

}

calculateExperience()
{
  this.CandidateData=[];
  this.isdistinct=false;
  this.isnormal=true;
  const today = new Date().getTime();
  for (var i = 0; i < this.Data.length; i++)
  {
    var dt1 = new Date(this.Data[i].joining_date).getTime();
    var diff =(today - dt1) / 1000;
     diff /= (60 * 60 * 24);
     diff =Math.abs((diff/365.25))
    if(diff > 2)
    {
      this.CandidateData.push({"name": this.Data[i].name,"department": this.Data[i].department,"joining_date": this.Data[i].joining_date,"experience":diff.toFixed(1)})

    }
    
  }
  
}
}
