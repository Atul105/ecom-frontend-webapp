import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {


  //data variable
  public username:string = "Jhon Smith"
  public age:number = 40;
  public isActive:boolean = true;

  public account = {
    id:1001,
    name:"Jhon Snow",
    balance:3425.77,
    email:"jhon@gmail.com"
  }

  public company:string[] = ['Google', 'Microsoft', 'wipro', 'dell'];



  constructor() { }

  ngOnInit(): void {
  }

}
