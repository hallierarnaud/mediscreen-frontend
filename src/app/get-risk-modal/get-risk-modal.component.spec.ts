import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRiskModalComponent } from './get-risk-modal.component';

describe('GetRiskModalComponent', () => {
  let component: GetRiskModalComponent;
  let fixture: ComponentFixture<GetRiskModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetRiskModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetRiskModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
