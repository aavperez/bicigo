import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FirebaseService } from '../../services/firebase.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm = new FormGroup({
    email: new FormControl(''),
    pass: new FormControl('')
  })

  constructor(
    private firebaseService: FirebaseService
  ) { }

  ngOnInit() {
  }


  onLogin() {
    this.firebaseService.login(this.loginForm.value.email, this.loginForm.value.pass).then(resp => {

      if (resp){
        localStorage.setItem('user', JSON.stringify(resp.user));
      } else {
        localStorage.setItem('user', null);
      }

      console.log("Login OK:" + resp.user.email);

    }).catch(error => {
      console.log("Login NOK:"+error);
    });
  }

}
