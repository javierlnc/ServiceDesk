import { Injectable } from '@angular/core';
import { LoginRequest } from './login-request';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError, BehaviorSubject, tap } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
currentUserLoginOn: BehaviorSubject<Boolean>= new BehaviorSubject<Boolean>(false);
curretUserData: BehaviorSubject<User> = new BehaviorSubject<User>({id:0,username:'',
  email:'',
  rol:'',
  cargo:'',})

   API='https://66c13590f83fffcb5878e50c.mockapi.io/api/v1/Response';
  constructor(private http: HttpClient) { }
  login(credentials:LoginRequest):Observable<User>{
    
    return this.http.get<User>(this.API).pipe(
      tap(userData => {
        this.curretUserData.next(userData);
        this.currentUserLoginOn.next(true);
      }),
      catchError(this.handleError)
    );
  }
  private handleError (error:HttpErrorResponse){
    if(error.status===0){
      console.error('se ha producido el siguiente error:', error.error)
    }else{
      console.error(`Se ha generado el siguiente codigo de error ${error.status}, con el siguiente mensaje ${error.error}`)
    }
    return throwError(() => new Error('Algo Fallo'))
  }
  get UserData():Observable<User>{
    return this.curretUserData.asObservable();
  }
  get UserLoginOn():Observable<Boolean>{
    return this.currentUserLoginOn.asObservable();
  }
}
