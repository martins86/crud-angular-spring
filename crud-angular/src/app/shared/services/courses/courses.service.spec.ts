import { TestBed } from '@angular/core/testing';

import { CoursesService } from './courses.service';

describe('Testes do CourseService', () => {
  let service: CoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursesService);
  });

  it('Deve inicializar CoursesService', () => {
    expect(service).toBeTruthy();
  });
});
