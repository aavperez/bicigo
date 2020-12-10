import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apis } from '../../environments/environment';
import { Publications } from '../components/search/interfaces/publications';
import { Regions } from "../components/publish/interfaces/regions";

@Injectable({
  providedIn: 'root'
})
export class BicigoApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getPublications(){
    return this.httpClient.get<Publications>('https://bicigo2.test/api/buscar');
  }


  publish(data: any){
    return this.httpClient.post("https://bicigo2.test/api/guardar-publicacion", data);
  }

  getRegions(){
    return this.httpClient.get<Regions>("https://bicigo2.test/api/regiones");
  } 
}
