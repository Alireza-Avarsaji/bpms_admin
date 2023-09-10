import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionModel } from 'src/shared/models/question.model';
import { TSResult } from 'src/shared/models/result-model/TServiceResult';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  apiUrl = 'https://192.168.98.12:5001/Question';

  constructor(private httpclient: HttpClient) { }

  postQuestion(body: QuestionModel): Observable<TSResult<string>> {
    return this.httpclient.post<TSResult<string>>(`${this.apiUrl}/CreateQuestion`, body);
  }

  getQuestionById(id: string): Observable<TSResult<QuestionModel>> {
    return this.httpclient.get<TSResult<QuestionModel>>(`${this.apiUrl}/GetQuestion/${id}`);
  }


}
