import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-crud-courses',
  templateUrl: './table-crud-courses.component.html',
  styleUrls: ['./table-crud-courses.component.scss']
})
export class TableCrudCoursesComponent {
  @Input() dataSource!: any;

  displayedColumns = ['name', 'category'];
}
