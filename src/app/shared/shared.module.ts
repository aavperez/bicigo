import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowComponent } from '../components/show/show.component';
import { pesosPipe } from '../custom.pipe';



@NgModule({
  declarations: [ShowComponent,pesosPipe],
  imports: [
    CommonModule
  ],
  exports: [
    ShowComponent,
    pesosPipe
  ]
})
export class SharedModule { }
