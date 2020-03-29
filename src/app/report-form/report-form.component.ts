import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {Report} from'../report';
@Component({
  selector: 'app-report-form',
  templateUrl: './report-form.component.html',
  styleUrls: ['./report-form.component.css']
})
export class ReportFormComponent implements OnInit {

    newReport = new Report (0,"","",new Date());
    @Output() addReport = new EventEmitter<Report>();
    submitReport(){
      this.addReport.emit(this.newReport)
    }
  constructor() { }

  ngOnInit(){
  }


}
