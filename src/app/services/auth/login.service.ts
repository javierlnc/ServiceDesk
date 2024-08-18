import { Injectable } from '@angular/core';
import { LoginRequest } from './login-request';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
   API='https://66c13590f83fffcb5878e50c.mockapi.io/api/v1/Response';
  constructor(private http: HttpClient) { }
  login(credentials:LoginRequest):Observable<User>{
    
    return this.http.get<User>(this.API).pipe(
      catchError(this.handleError)
    )
  };
  private handleError (error:HttpErrorResponse){
    if(error.status===0){
      console.error('se ha producido el siguiente error:', error.error)
    }else{
      console.error(`Se ha generado el siguiente codigo de error ${error.status}, con el siguiente mensaje ${error.error}`)
    }
    return throwError(() => new Error('Algo Fallo'))
  }
}
