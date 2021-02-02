import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { LoginService } from '../../../services/login.service';
//import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-topnav',
    templateUrl: './topnav.component.html',
    styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {
    public pushRightClass: string;
  //  debugger
firstname;
    constructor(public router: Router, private loginService: LoginService) {
        this.router.events.subscribe(val => {
            if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {
        this.pushRightClass = 'push-right';
       // debugger
         this.firstname = localStorage.firstname;
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    onLoggedout() {
       this.loginService.logout();
        this.router.navigate(['/login']);
    }

  /*  changeLang(language: string) {
        this.translate.use(language);
    }*/
}
