import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableCrudCoursesModule } from 'src/app/shared/components/table-crud-courses/table-crud-courses.module';

const shared = [TableCrudCoursesModule];

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
