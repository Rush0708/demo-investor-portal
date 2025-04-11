import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ShirtSizeRepository} from "../repositories/shirtsize.repository";
import { Shirtsizes } from "../viewModels/shirtsizes.viewmodel";


@Injectable()
export class ShirtSizeService {  
  constructor(private shirtsizeRespository: ShirtSizeRepository) {

  }

  LoadShirtsizes(competitionId: number): Observable<any> {
    return this.shirtsizeRespository.LoadShirtsizes(competitionId);
  }
}
