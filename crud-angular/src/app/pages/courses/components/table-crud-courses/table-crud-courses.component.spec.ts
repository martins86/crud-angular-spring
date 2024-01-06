import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

const material = [MatTableModule, MatToolbarModule];

import { TableCrudCoursesComponent } from './table-crud-courses.component';

describe('Testes do TableCrudCoursesComponent ', () => {
  let component: TableCrudCoursesComponent;
  let fixture: ComponentFixture<TableCrudCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [...material],
      declarations: [TableCrudCoursesComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCrudCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve inicializar TableCrudCoursesComponent', () => {
    expect(component).toBeTruthy();
  });
});
