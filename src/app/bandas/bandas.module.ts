import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BandasComponent } from './bandas.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BandasComponent],
  exports: [BandasComponent]
})
export class BandasModule { }
