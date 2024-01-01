import { Injectable } from '@angular/core';
import { Course } from '../../interfaces/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  coursesMock: Course[] = [
    { id: '0', name: 'Angular', category: 'front-end' },
    { id: '1', name: 'Spring', category: 'back-end' }
  ];

  getAll(): Course[] {
    return this.coursesMock;
  }
}
