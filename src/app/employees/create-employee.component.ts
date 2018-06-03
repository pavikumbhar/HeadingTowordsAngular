import { Employee } from './../models/employee.model';
import { Department } from './../models/department';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
 // selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  saveEmployee(newEmployee: Employee): void {
    console.log(newEmployee);
  }
  
  employee:Employee={
    id: null,
    name: null,
    gender: null,
    email:'',
    phoneNumber: null,
    contactPreference:null,
    dateOfBirth:null,
    department: '-1',
    isActive: null,
    photoPath:null,

  };

  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
