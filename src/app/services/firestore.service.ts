import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private angularFirestore: AngularFirestore
  ) { }


  async storeBusqueda(data: any){
    data['fecha'] = Date();
    return await this.angularFirestore.collection('busquedas').add(data);
  }

  getBusquedas() {
    return this.angularFirestore.collection('busquedas',ref => ref.orderBy('fecha','desc')).snapshotChanges();
  }

  deleteBusqueda(id: string){
    this.angularFirestore.doc('busquedas/' + id).delete();
  }

}
