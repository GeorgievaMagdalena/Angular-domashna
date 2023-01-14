import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    coreCourse=COURSES[0];
    RxJS = COURSES[1];
    NgRx = COURSES[2];
    kursevi=COURSES;

onAppViewed(){
  console.log("Suzi e pojjaka");
}

onClick(cr:Course){
  console.log(cr);
}

}