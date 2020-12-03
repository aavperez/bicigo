import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';

import { pesosPipe } from '../../custom.pipe';


@NgModule({
  declarations: [SearchComponent,pesosPipe],
  imports: [
    CommonModule,
    SearchRoutingModule
  ]
})
export class SearchModule { }
