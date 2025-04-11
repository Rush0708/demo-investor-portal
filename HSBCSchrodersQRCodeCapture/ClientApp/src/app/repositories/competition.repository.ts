import { Injectable } from "@angular/core";
import { BaseRepository } from "./base.repository";
import { Observable } from "rxjs";
import { Competition } from "../viewModels/competition.viewmodel";
import { HttpParams } from "@angular/common/http";


@Injectable()
export class CompetitionRepository extends BaseRepository {


  checkCompetitiondata(competition: Competition): Observable<any> {
   
    let url = `${this.baseUrl}Competition/Competitions/`;

    return this.httpClient.get(url+competition.competitionId+"/"+competition.competitionCode);
  }
  getCompetitionId(CompetitionName:string): Observable<any> {
    let url = `${this.baseUrl}Competition/GetCompetitionID/`;

    return this.httpClient.get(url + CompetitionName);
  }
}
