import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnapRegisterPage } from './snap-register.page';

describe('SnapRegisterPage', () => {
  let component: SnapRegisterPage;
  let fixture: ComponentFixture<SnapRegisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnapRegisterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnapRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
