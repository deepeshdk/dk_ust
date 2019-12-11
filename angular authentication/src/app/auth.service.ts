import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throws } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  registerUser(user): Observable<any> {
    return this.http.post('http://localhost:8080/users/register', user);
  }

  loginUser(user): Observable<any> {
    return this.http.post(
      'http://localhost:8080/users/login',
      user);
  }

}
