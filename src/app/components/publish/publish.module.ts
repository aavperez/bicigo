import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublishRoutingModule } from './publish-routing.module';
import { PublishComponent } from './publish.component';

import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [PublishComponent],
  imports: [
    CommonModule,
    PublishRoutingModule,
    ReactiveFormsModule
  ]
})
export class PublishModule { }
