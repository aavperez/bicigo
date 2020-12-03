import { Component, OnInit } from '@angular/core';
import { BicigoApiService } from 'src/app/services/bicigo-api.service';
import { Publication } from './interfaces/publication';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public publications: Publication[];

  constructor(
    private bicigoApiService: BicigoApiService
  ) { }

  ngOnInit() {
    this.bicigoApiService.getPublications().subscribe(resp => {
      console.log(resp.data);
      this.publications = resp.data;
    })
  }

}
