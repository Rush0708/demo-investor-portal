import { Injectable, Inject } from "@angular/core"
import { HttpClient } from "@angular/common/http";

@Injectable()
export class BaseRepository {

  protected baseUrl: string;
  constructor(protected httpClient: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
  }
}
