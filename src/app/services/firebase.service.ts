import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
    private angularFireAuth: AngularFireAuth
  ) { }


  async login(email: string, pass: string) {
    try {
      return await this.angularFireAuth.signInWithEmailAndPassword(email, pass);
    } catch (error) {
      console.error('error login firebase -->', error);
    }
  }

  
  async logout() {
    try {
      const logoutResp = await this.angularFireAuth.signOut();
      return logoutResp;
    } catch (error) {
      console.error('error logout firebase -->', error);
      return error;
    }
  }

  async logged() {
    try {
      const currentUser = this.angularFireAuth.currentUser;
      return currentUser;
    } catch (error) {
      return error;
    }
  }


  async registerByUserEmail(email: string, pass: string){
    try {
      const respRegister = await this.angularFireAuth.createUserWithEmailAndPassword(email, pass)
      //return respRegister.user;
    } catch (error) {
      console.error('error register', error);
    }
  }


  
  

}
