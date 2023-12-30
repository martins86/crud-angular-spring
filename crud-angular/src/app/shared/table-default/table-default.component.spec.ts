import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDefaultComponent } from './table-default.component';

describe('Testes do TableDefaultComponent', () => {
  let component: TableDefaultComponent;
  let fixture: ComponentFixture<TableDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableDefaultComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve inicializar TableDefaultComponent', () => {
    expect(component).toBeTruthy();
  });
});
