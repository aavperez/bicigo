import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/services/firestore.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  busquedas: any[];

  constructor(
    private firestoreService: FirestoreService,
  ) { }

  ngOnInit() {
    this.firestoreService.getBusquedas().subscribe(
      resp => {
        this.busquedas = resp.map(e => {
          return {
            id: e.payload.doc.id,
            resultado: e.payload.doc.data()
          }
        });
        console.log(this.busquedas);
      },
      error => console.log(error)

    )
  }


  delete(id: string) {
    this.firestoreService.deleteBusqueda(id);
  }

}
