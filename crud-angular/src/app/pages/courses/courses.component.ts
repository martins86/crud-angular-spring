import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
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
  courses$: Observable<Course[]>;

  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog
  ) {
    this.courses$ = this.getAllCourses();
  }

  getAllCourses(): Observable<Course[]> {
    return this.coursesService.getAll()
      .pipe(
        catchError(
          (error: HttpErrorResponse) => {
            this.openDialogError(error)
            return of([])
          }
        )
      );
  }

  openDialogError(error: HttpErrorResponse) {
    const MessageError = this.messageErrors(error);
    this.dialog.open(ErrorDialogComponent, {
      data: MessageError,
    });
  }

  messageErrors(error: HttpErrorResponse): ErrorLog {
    const codeError = error.status.toString();
    const url = error.url ?? '';
    let message: ErrorLog;

    switch (codeError) {
      case '400':
        message = {
          code: 400,
          message: 'Erro na consulta, procure um adminstrador ou tente novamente mais tarde.',
          url: url
        };
        break;

      case '403':
        message = {
          code: 403,
          message: 'Acesso não permitido.',
          url: url
        };
        break;

      case '404':
        message = {
          code: 404,
          message: 'Conteúdo não encontrado.',
          url: url
        };
        break;

      default:
        message = {
          code: 500,
          message: 'Erro inesperado, tente novamete.',
          url: url
        };
        break;
    }

    return message;
  }
}
