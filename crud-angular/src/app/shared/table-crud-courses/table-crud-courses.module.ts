import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';

const material = [MatTableModule];

import { TableCrudCoursesComponent } from './table-crud-courses.component';

@NgModule({
  declarations: [
    TableCrudCoursesComponent
  ],
  imports: [
    CommonModule,
    ...material
  ],
  exports: [
    TableCrudCoursesComponent
  ]
})
export class TableCrudCoursesModule { }
