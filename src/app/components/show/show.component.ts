import { Component, OnInit, Input } from '@angular/core';
import { Publication } from '../search/interfaces/publication';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  @Input() publication: Publication;

  constructor() { }

  ngOnInit() {
  }

}
