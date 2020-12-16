import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apis } from '../../environments/environment';
import { Publications } from '../interfaces/publications';
import { Regions } from "../interfaces/regions";

@Injectable({
  providedIn: 'root'
})
export class BicigoApiService {

  constructor(
    private httpClient: HttpClient
  ) { }


  
  getPublications(){
    return this.httpClient.get<Publications>(apis.apiPublications+'api/buscar');
  }

  searchPublications(data: any){
    return this.httpClient.post<Publications>(apis.apiPublications+'api/buscar', data);
  }


  publish(data: any){
    return this.httpClient.post(apis.apiPublications+'api/guardar-publicacion', data);
  }

  getRegions(){
    return this.httpClient.get<Regions>(apis.apiPublications+'api/regiones');
  } 
}
