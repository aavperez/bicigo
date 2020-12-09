import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BicigoApiService } from 'src/app/services/bicigo-api.service';



@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.css']
})
export class PublishComponent implements OnInit {

  public publishForm = new FormGroup({
    categoria_id: new FormControl(''),
    subcategoria_id: new FormControl(''),
    marca_id: new FormControl(''),
    modelo_texto: new FormControl(''),
    precio: new FormControl(''),
    descripcion: new FormControl(''),
    region_id: new FormControl(''),
    comuna_id: new FormControl(''),
    nombre: new FormControl('',[Validators.required]),
    email: new FormControl('')
  })

  constructor(
    private bicigoApiService: BicigoApiService
  ) { }

  ngOnInit() {
  }

  submitForm(){
    this.bicigoApiService.publish(this.publishForm.value).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }

}
