import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionDetailDialogComponent } from './submission-detail-dialog.component';

describe('SubmissionDetailDialogComponent', () => {
  let component: SubmissionDetailDialogComponent;
  let fixture: ComponentFixture<SubmissionDetailDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubmissionDetailDialogComponent]
    });
    fixture = TestBed.createComponent(SubmissionDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
