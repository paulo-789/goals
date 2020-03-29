import { Component, OnInit } from '@angular/core';
import { Report } from '../report';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit{
  goals:Report[] = [
    new Report(1, 'Watch finding Nemo','should find it on netflix',new Date(2020,3,14)),
    new Report(2, 'Buy Cookies','she likes them',new Date(2020,4,2)),
    new Report(3,'Get new Phone Case','am expecting to be called',new Date(2020,6,1)),
    new Report(4,'Get Dog Food','pupper',new Date(2020,5,6)),
    new Report(5,'Solve math homework','monday is the dead line',new Date(2020,4,17)),
    new Report(6,'Plot my world domination plan','coz am good at it',new Date(2020,4,8)),
    new Report(7,'visit my girl','she is not feeling well',new Date(2020,4,9)),
  ];
  addNewReport(report){
    let reportLength = this.goals.length;
    report.id = reportLength+1;
    report.completeDate = new Date(report.completeDate)
    this.goals.push(report)
  }
    toggleDetails(index){
      this.goals[index].showDescription = ! this .goals[index].showDescription;
    }
    deleteGoal(isComplete, index){
      if (isComplete) {
        let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

        if (toDelete){
          this.goals.splice(index,1)
        }
      }
    }  

  
  constructor() {}
  ngOnInit() {
  }
}

