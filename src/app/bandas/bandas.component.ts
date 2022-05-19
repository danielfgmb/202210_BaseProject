import { Component, OnInit } from '@angular/core';
import { Banda } from './banda';
import { BandasService } from './bandas.service';

@Component({
  selector: 'app-bandas',
  templateUrl: './bandas.component.html',
  styleUrls: ['./bandas.component.css']
})
export class BandasComponent implements OnInit {

  public  bandas: Array<Banda> = [];
  constructor(private bandasService: BandasService) {
  }

  getBandas() {
    this.bandasService.getBandas().subscribe(bandas => {
      this.bandas = bandas;
    });
    }

  getAver() {
    let i=0, aver=0;
    for (i=0;i<this.bandas.length;i++){
      aver=this.bandas[i].numberOfMembers;
    }
    aver=aver/i;
    return Math.ceil(aver);
  }

  ngOnInit() {
    this.getBandas();
  }

}

