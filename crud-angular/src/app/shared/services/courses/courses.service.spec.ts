import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CoursesService } from './courses.service';

describe('Testes do CourseService', () => {
  let service: CoursesService;
  let htppTestingController: HttpTestingController;
  let url: string;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CoursesService]
    });
    service = TestBed.inject(CoursesService);
    htppTestingController = TestBed.inject(HttpTestingController)
    url = '/assets/course.json';
  });

  it('Deve inicializar CoursesService', () => {
    expect(service).toBeTruthy();
  });
});
