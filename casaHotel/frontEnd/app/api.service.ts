import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public http: HttpClient
  ) { }

  addEtage(data){
    return this.http.post('http://localhost/server/casaHotel/backEnd/create.php',data);
  }
}
