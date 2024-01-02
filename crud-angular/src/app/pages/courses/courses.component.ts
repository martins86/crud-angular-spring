import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Course } from 'src/app/shared/interfaces/course';

import { CoursesService } from 'src/app/shared/services/courses/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  courses: Observable<Course[]>;

  constructor(private coursesService: CoursesService) {
    this.courses = this.getAllCourses();
  }

  getAllCourses(): Observable<Course[]> {
    return this.coursesService.getAll();
  }
}
