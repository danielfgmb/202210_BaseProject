import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Banda } from './banda';


import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BandasService {
  private apiUrl = environment.baseUrl + 'rockbands.json';

  constructor(private http: HttpClient) { }

  getBandas(): Observable<Banda[]> {
    return this.http.get<Banda[]>(this.apiUrl);
  }

}
