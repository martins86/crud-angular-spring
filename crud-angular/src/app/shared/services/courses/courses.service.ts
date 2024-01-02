import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, delay, first, tap } from 'rxjs';

import { Course } from '../../interfaces/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly apiUrlBase = '/assets/course.json';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Course[]> {
    return this.httpClient.get<Course[]>(this.apiUrlBase)
      .pipe(
        first(),
        tap()
      );
  }
}
