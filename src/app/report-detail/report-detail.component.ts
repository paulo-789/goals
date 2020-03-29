import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { Report } from '../report';

@Component({
  selector: 'app-report-detail',
  templateUrl: './report-detail.component.html',
  styleUrls: ['./report-detail.component.css']
})
export class ReportDetailComponent implements OnInit {

 @Input() goal:Report;
 @Output() isComplete = new EventEmitter<boolean>();
 
 goalDelete(complete:boolean){
   this.isComplete.emit(complete);
 }
  constructor() { }

  ngOnInit() {
  }

}
