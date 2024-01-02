import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { Course } from 'src/app/shared/interfaces/course';

import { CoursesService } from 'src/app/shared/services/courses/courses.service';

import { TableCrudCoursesModule } from 'src/app/shared/components/table-crud-courses/table-crud-courses.module';

const shared = [TableCrudCoursesModule];

import { CoursesComponent } from './courses.component';

describe('Testes do CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;
  let serviceCourses: CoursesService;

  const coursesMock: Course[] = [
    { id: 'any_id', name: 'any_name', category: 'any_category' }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ...shared],
      declarations: [CoursesComponent],
      providers: [CoursesService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    serviceCourses = TestBed.inject(CoursesService);
    fixture.detectChanges();
  });

  it('Deve inicializar CoursesComponent', () => {
    expect(component).toBeTruthy();
  });

  describe('Teste do getAllCourses', () => {
    it('Deve acionar o getAll com sucesso', () => {
      // Arrange
      spyOn(serviceCourses, 'getAll');

      // Act
      component.getAllCourses();

      // Assert
      expect(serviceCourses.getAll).toHaveBeenCalled();

    });

    it('Deve retornar array de courses do tipo course', () => {
      // Arrange
      spyOn(serviceCourses, 'getAll').and.returnValue(of(coursesMock));

      // Act
      const response = component.getAllCourses();

      // Assert
      expect(response).toEqual(of(coursesMock));
    });
  });
});
