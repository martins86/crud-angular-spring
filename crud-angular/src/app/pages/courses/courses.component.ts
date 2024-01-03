import { Component } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

import { MatDialog } from '@angular/material/dialog';

import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Course } from 'src/app/shared/interfaces/course';
import { ErrorLog } from 'src/app/shared/interfaces/error.log';

import { CoursesService } from 'src/app/shared/services/courses/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  courses: Observable<Course[]> = of([]);

  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog
  ) {
    this.getAllCourses();
  }

  getAllCourses(): void {
    this.courses = this.coursesService.getAll()
      .pipe(
        catchError(
          (error) => {
            console.log(error)
            this.openDialogError({
              code: error.status,
              message: error.message,
              url: error.url
            })
            return of([])
          }
        )
      );
  }

  openDialogError(MessageError: ErrorLog) {
    this.dialog.open(ErrorDialogComponent, {
      data: MessageError,
    });
  }
}
