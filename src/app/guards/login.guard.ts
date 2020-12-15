import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router  } from '@angular/router';
import { Observable } from 'rxjs';
import { FirebaseService } from '../services/firebase.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { trigger } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})



export class LoginGuard implements CanActivate {

  private logged: boolean;

  constructor(
    private firebaseService: FirebaseService,
    private angularFireAuth: AngularFireAuth,
    private router: Router

  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    const  user  =  JSON.parse(localStorage.getItem('user'));
    return user  !==  null ? true : this.router.navigate(['admin/login']);

  }
  
}
