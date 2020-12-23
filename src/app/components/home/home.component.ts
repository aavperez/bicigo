import {
  Component,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BicigoApiService } from 'src/app/services/bicigo-api.service';
import { Publication } from '../../interfaces/publication';
import { Router } from '@angular/router';
import { FirestoreService } from 'src/app/services/firestore.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements 
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
    {

    public valor: string = 'bicicletas';

    public searchForm = new FormGroup({
      busqueda: new FormControl('')
    });

    public publications: Publication[] = [];
    public loading: boolean;


    constructor(
      private bicigoApiService: BicigoApiService,
      private router: Router,
      private firestoreService: FirestoreService,
    ) { }

    ngOnChanges() {
      console.log(`ngOnChanges`);
    }
    ngOnInit() {
      console.log(`ngOnInit`);
      this.loading = false;
    }
    ngDoCheck() {
      console.log('ngDoCheck');
    }
    ngAfterContentInit() {
      console.log('ngAfterContentInit');
    }
    ngAfterContentChecked() {
      console.log('ngAfterContentChecked');
    }
    ngAfterViewInit() {
      console.log('ngAfterViewInit');
    }
    ngAfterViewChecked() {
      console.log('ngAfterViewChecked');
    }
    ngOnDestroy() {
      console.log('ngOnDestroy');
    }

    submitForm(){
      this.loading = true; 
      let r = this.bicigoApiService.searchPublications(this.searchForm.value)
      .subscribe(
        response => {
          this.loading = false;
          this.publications=response.data;
          this.firestoreService.storeBusqueda(this.searchForm.value);
        },
        error => console.log(error)
      )

    }


    sendPublication= function (valor: Publication) {
      this.publication=valor;
    }

}
