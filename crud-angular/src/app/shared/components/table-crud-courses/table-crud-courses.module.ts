import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

const material = [MatTableModule, MatToolbarModule];

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
