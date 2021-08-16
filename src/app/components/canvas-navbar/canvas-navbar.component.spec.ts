import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasNavbarComponent } from './canvas-navbar.component';

describe('CanvasNavbarComponent', () => {
  let component: CanvasNavbarComponent;
  let fixture: ComponentFixture<CanvasNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanvasNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
