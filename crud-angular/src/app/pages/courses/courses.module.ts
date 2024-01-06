import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableCrudCoursesModule } from 'src/app/pages/courses/components/table-crud-courses/table-crud-courses.module';
import { ErrorDialogModule } from 'src/app/shared/components/error-dialog/error-dialog.module';

const shared = [TableCrudCoursesModule, ErrorDialogModule];

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';


@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    ...shared
  ],
  exports: [
    CoursesComponent
  ]
})
export class CoursesModule { }
