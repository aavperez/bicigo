import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
//import { PublishComponent } from './components/publish/publish.component';
//import { SearchComponent } from './components/search/search.component';
//import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';


import { ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './components/list/list.component';



const firebaseConfig = {
  apiKey: "AIzaSyANJm5fVER4greFuY97rwqysQXMFx-MzJA",
  authDomain: "bicigo-97436.firebaseapp.com",
  projectId: "bicigo-97436",
  storageBucket: "bicigo-97436.appspot.com",
  messagingSenderId: "972974022732",
  appId: "1:972974022732:web:9d0b8aaa47def4c71614e9"
};

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    ReactiveFormsModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
