import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CompetitionRepository } from "../repositories/competition.repository";
import { Competition } from "../viewModels/competition.viewmodel";


@Injectable()
export class CompetitionService {
  // Competition model properties (competitionId and unique code ) are getting set using the get and set method in the enter.component.ts
  constructor(private competitionRespository: CompetitionRepository) {
    
  }

  checkCompetitiondata(competition : Competition): Observable<any> {
    return this.competitionRespository.checkCompetitiondata(competition);
  }

  getCompetitionId(competitionName: string): Observable<any> {
    return this.competitionRespository.getCompetitionId(competitionName);
  }
}
