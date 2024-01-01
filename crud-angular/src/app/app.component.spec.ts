import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const material = [MatToolbarModule, MatButtonModule, MatIconModule];

import { CoursesModule } from './pages/courses/courses.module';

const pages = [CoursesModule];

import { AppComponent } from './app.component';

describe('Testes do AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ...material,
        ...pages
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('Deve inicializar AppComponent', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
