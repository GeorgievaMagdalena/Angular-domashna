import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course, svetle} from '../model/course';


@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit{
  constructor(){}

  @Input()
  title:string="";

  @Input()
  indeks:number=0;

  @Input()
  crs:Course = svetle;

  ngOnInit(){

  }

  //tochka 1 od domashna
  @Output()
  novo=new EventEmitter<Course>();

  
  onCrsViewed(){
    console.log("Svetle e pojaka od suzi")
    this.novo.emit(this.crs);
  }

  //tochka 3 od domashnata
  stilovi(){
    if(this.crs.category=="BEGINNER"){
      return{'background-color':'lightgreen'}
    }else if(this.crs.category=="INTERMEDIATE"){
      return{'background-color':'khaki'}
    }else{
      return{'background-color':'salmon'}
    }
  }

}
