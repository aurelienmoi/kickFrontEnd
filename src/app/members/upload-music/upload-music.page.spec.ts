import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadMusicPage } from './upload-music.page';

describe('UploadMusicPage', () => {
  let component: UploadMusicPage;
  let fixture: ComponentFixture<UploadMusicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadMusicPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadMusicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
