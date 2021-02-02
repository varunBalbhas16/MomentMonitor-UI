import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../../../services/login.service';

export class User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
// roleName:string;

    token: string;
}

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
 //currentUser:User;
 currentUser:any ={};
   public showMenu: string;
  constructor(private route: ActivatedRoute,private router: Router, private loginService: LoginService) {

     this.loginService.currentUser.subscribe(x => { 
     //   debugger
     this.currentUser = x;

     });
   }

  ngOnInit() {
//  debugger
  this.showMenu = '';
   }
 
    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }
}
