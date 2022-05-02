import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  //variables
  public username:string = "Jhon Smith"
  public age:number = 40;
  public isActive:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
