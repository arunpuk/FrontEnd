import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveQuotationsComponent } from './active-quotations.component';

describe('ActiveQuotationsComponent', () => {
  let component: ActiveQuotationsComponent;
  let fixture: ComponentFixture<ActiveQuotationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveQuotationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveQuotationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
