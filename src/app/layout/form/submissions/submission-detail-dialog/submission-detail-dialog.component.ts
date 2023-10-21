import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SubmissionService } from '../service/submission.service';
import { FormModel, QuestionTypesEnum } from 'src/shared/models/question.model';
import { CommonModule } from '@angular/common';
import { JalaliPipe } from 'src/shared/pipes/jalali.pipe';

@Component({
  selector: 'app-submission-detail-dialog',
  templateUrl: './submission-detail-dialog.component.html',
  styleUrls: ['./submission-detail-dialog.component.scss'],
  standalone: true,
  imports: [
    CommonModule
  ]
})
export class SubmissionDetailDialogComponent implements OnInit {

  subDetail: FormModel = new FormModel();
  infoList: { lable: string, value: string }[] = [];
  userName: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { subId: string, userName: string },
    private service: SubmissionService,
    private jalali: JalaliPipe
  ) { }

  ngOnInit(): void {
    this.userName = this.data.userName;
    this.getSubDetail();
  }

  getSubDetail() {
    this.service.getSubmissionDetail(this.data.subId).subscribe(res => {
      if (!res.hasError) {
        this.subDetail = res.result;
        this.createInfoList();
      }
    })
  }

  createInfoList() {
    for (const q of this.subDetail?.questions) {
      let answer = '';
      if(q.type == QuestionTypesEnum.date)
        answer = this.jalali.transform(q.answerValue);
      else
        answer = q.answerValue!;
      this.infoList.push({lable: q.key, value: answer});
    }
  }

}
