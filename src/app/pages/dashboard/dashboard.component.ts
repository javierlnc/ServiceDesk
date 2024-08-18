import { User } from '../../services/auth/user';
import { LoginService } from './../../services/auth/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent  implements OnInit{
  userData: User | undefined;
  constructor(private loginService:LoginService ){}
    ngOnInit(): void {
      this.loginService.curretUserData.subscribe({
        next:(userData)=> {
          this.userData = userData;
        }
      })
    }

}
