import { Component, OnInit } from '@angular/core';

import { Course } from 'src/app/shared/interfaces/course';

import { CoursesService } from 'src/app/shared/services/courses/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.courses = this.getAllCourses();
  }

  getAllCourses(): Course[] {
    return this.coursesService.getAll();
  }
}
