import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public onClick($event:any){
    console.log("Submitted");
    console.log($event.target.value);
  }
  public onEmail($event:any){
    console.log($event.target.value);
  }

}
