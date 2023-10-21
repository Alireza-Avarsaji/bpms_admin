import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormModel } from 'src/shared/models/question.model';
import { TSResult } from 'src/shared/models/result-model/TServiceResult';
import { SubmissionDetailModel, SubmissionModel } from 'src/shared/models/submission.model';

@Injectable({
  providedIn: 'root'
})
export class SubmissionService {

  apiUrl = 'https://bpms2.darkube.app/api/Submission';

  constructor(private httpclient: HttpClient) { }

  getAllSubmissions(formId: string): Observable<TSResult<SubmissionModel[]>> {
    return this.httpclient.get<TSResult<SubmissionModel[]>>(`${this.apiUrl}/GetSubmissionbyFormId/${formId}`);
  }

  getSubmissionDetail(id: string): Observable<TSResult<FormModel>> {
    return this.httpclient.get<TSResult<FormModel>>(`${this.apiUrl}/getFormDetailbyId/detail/${id}`);
  }


}
