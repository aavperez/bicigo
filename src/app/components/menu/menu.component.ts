import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
    private firebaseService: FirebaseService
  ) { }

  ngOnInit() {
  }

  logout(){
    this.firebaseService.logout().then(resp => {
      localStorage.removeItem('user');
      console.log("Logout OK:");
    }).catch(error => {
      console.log("Logout NOK:"+error);
    });
  }


  logged(){
    const  user  =  JSON.parse(localStorage.getItem('user'));
    return user  !==  null ? true : false;
  }

}
