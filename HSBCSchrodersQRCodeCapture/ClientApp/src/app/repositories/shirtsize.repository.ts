import { Injectable } from "@angular/core";
import { BaseRepository } from "./base.repository";
import { Observable } from "rxjs";
import { Shirtsizes } from "../viewModels/shirtsizes.viewmodel";


@Injectable()
export class ShirtSizeRepository extends BaseRepository {

  LoadShirtsizes(competitionId : number): Observable<any> {
    let url = `${this.baseUrl}ShirtSize/ShirtSizes/`;
  
    return this.httpClient.get<Shirtsizes[]>(url + competitionId);
  }
}
