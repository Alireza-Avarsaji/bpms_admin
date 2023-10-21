import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { configHeaderModel } from 'src/shared/components/table-header/table-header.component';
import { SubmissionModel } from 'src/shared/models/submission.model';
import { SubmissionService } from './service/submission.service';
import { switchMap, tap } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { SubmissionDetailDialogComponent } from './submission-detail-dialog/submission-detail-dialog.component';

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.scss']
})
export class SubmissionsComponent {
 //? Config Table Header
 configTableHeader: configHeaderModel = {
  addBtn: false,
  searchBtn: false,
  excelBtn: false,
  title: 'پاسخ‌ها'
};
formId: string = '';

displayedColumns: string[] = ['تاریخ ثبت', 'نام پاسخ‌دهنده', 'مشاهده جزییات'];


submissions: SubmissionModel[] = [];

constructor(
  private activatedRoute: ActivatedRoute, 
  private service: SubmissionService,
  private dialog: MatDialog
  ) { }

ngOnInit(): void {
  this.activatedRoute.params.pipe(
    switchMap(param => {
      this.formId = param['id'];
      return this.getSubmissions();
    })
  ).subscribe();

}

getSubmissions() {
  return this.service.getAllSubmissions(this.formId).pipe(
    tap(res => {
      if(!res.hasError) {
        this.submissions = res.result;
      }
    })
  )
}

showSubmissionDetail(element: SubmissionModel) {
  const ref = this.dialog.open(SubmissionDetailDialogComponent, {
    data: {
      subId: element.id,
      userName: element.userName
    },
    width: "600px",
    height: "400px",
  });

}


}
