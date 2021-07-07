import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class LoginserviceService {
  constructor(private http: HttpClient) { }
  savesignupdata(form: { value: any; }) {
    return localStorage.setItem('singup-data', JSON.stringify(form.value));
  }
}
