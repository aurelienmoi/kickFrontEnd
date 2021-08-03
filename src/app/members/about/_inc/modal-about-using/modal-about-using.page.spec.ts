import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAboutUsingPage } from './modal-about-using.page';

describe('ModalAboutUsingPage', () => {
  let component: ModalAboutUsingPage;
  let fixture: ComponentFixture<ModalAboutUsingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAboutUsingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAboutUsingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
