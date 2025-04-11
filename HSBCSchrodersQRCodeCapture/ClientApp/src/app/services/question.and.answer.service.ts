import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { QuestionAnswerRepository } from "../repositories/question.and.answer.repository";

@Injectable()
export class QuestionAnswerService {
  
  constructor(private questionanswerRepository: QuestionAnswerRepository) {
    
  }

  getQuestions(competitionId : number): Observable<any> {
    return this.questionanswerRepository.getQuestions(competitionId);
  }

  getAnswers(questionId: number): Observable<any> {
    return this.questionanswerRepository.getAnswers(questionId);
  }

  
}
