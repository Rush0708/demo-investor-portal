import { Injectable } from "@angular/core";
import { BaseRepository } from "./base.repository";
import { Observable } from "rxjs";
import { Questions } from '../viewModels/questions.and.answers.viewmodel';
import { Answers } from '../viewModels/questions.and.answers.viewmodel';
import { HttpParams } from "@angular/common/http";


@Injectable()
export class QuestionAnswerRepository extends BaseRepository {


  getQuestions(competitionId: number): Observable<any> {   
    let url = `${this.baseUrl}QuestionAnswer/Questions/`;
    return this.httpClient.get(url+competitionId);
  }

  getAnswers(questionId: number): Observable<any> {
    let url = `${this.baseUrl}QuestionAnswer/Answers/`;
    return this.httpClient.get(url + questionId);
  }

}
