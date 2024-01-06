import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

const material = [MatTableModule, MatToolbarModule, MatIconModule];


import { IconsCategoryPipe } from '../../pipes/icons-category/icons-category.pipe';

const pipes = [IconsCategoryPipe];

import { TableCrudCoursesComponent } from './table-crud-courses.component';

@NgModule({
  declarations: [
    TableCrudCoursesComponent,
    ...pipes
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
