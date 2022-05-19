import { Component, Input, OnInit } from '@angular/core';
import { BandaDetail } from '../BandaDetail';

@Component({
  selector: 'app-banda-detail',
  templateUrl: './banda-detail.component.html',
  styleUrls: ['./banda-detail.component.css']
})
export class BandaDetailComponent implements OnInit {

  @Input() entrenadorDetail! : BandaDetail;
  Entrenador: BandaDetail | undefined;
  constructor() { }

  ngOnInit() {
  }

}
