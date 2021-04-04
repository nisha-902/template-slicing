import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Liststudent1Component } from './liststudent1.component';

describe('Liststudent1Component', () => {
  let component: Liststudent1Component;
  let fixture: ComponentFixture<Liststudent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Liststudent1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Liststudent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
