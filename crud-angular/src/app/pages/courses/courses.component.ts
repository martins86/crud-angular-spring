import { Component } from '@angular/core';

import { Course } from 'src/app/shared/interfaces/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  courses: Course[] = [
    { id: '0', name: 'Angular', category: 'front-end' }
  ];
}
