import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterBackdropComponent } from './poster-backdrop.component';

describe('PosterBackdropComponent', () => {
  let component: PosterBackdropComponent;
  let fixture: ComponentFixture<PosterBackdropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosterBackdropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosterBackdropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
