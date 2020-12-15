import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FirebaseService } from '../../services/firebase.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm = new FormGroup({
    email: new FormControl(''),
    pass: new FormControl(''),
  })

  constructor(
    private firebaseService: FirebaseService,
  ) { }

  ngOnInit() {
  }

  register() {
    console.log('try register', this.registerForm.value);
    this.firebaseService.registerByUserEmail(this.registerForm.value.email, this.registerForm.value.pass).then(resp => {
      console.log(resp);
    }).catch(error => {
      console.log(error);
    })
  }

}
