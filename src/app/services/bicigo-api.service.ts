import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apis } from '../../environments/environment';
import { Publications } from '../components/search/interfaces/publications';

@Injectable({
  providedIn: 'root'
})
export class BicigoApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getPublications(){
    return this.httpClient.get<Publications>(apis.apiPublications);
  }
}
