import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../../services/login.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
//currentUser: User;
currentUser:any ={};
  constructor(private route: ActivatedRoute,private router: Router, private loginService: LoginService) {
     this.loginService.currentUser.subscribe(x => {
     // debugger
     this.currentUser = x;
     });
   }
  ngOnInit() {
  }

}
export class User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    token: string;
}