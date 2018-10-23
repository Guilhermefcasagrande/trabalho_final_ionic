import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListaProfessoresService {

  currentProfessor: any;

  constructor(private http: HttpClient) { }

  getProfessor(url){
    return this.http.get(`http://localhost/api_rest_ionic/controllers/${url}`);
  }
}
