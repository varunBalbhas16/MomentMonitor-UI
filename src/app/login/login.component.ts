import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { first } from 'rxjs/operators';
import swal from 'sweetalert2/dist/sweetalert2.all.min.js';
import 'sweetalert2/src/sweetalert2.scss';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user:any={};
  returnUrl: string;
  constructor(private route: ActivatedRoute,private router: Router, private loginService: LoginService) {
   if (this.loginService.currentUserValue) { 
            this.router.navigate(['/']);
        } }

  ngOnInit() {
   this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/admindashboard';
  }
   login(user){
debugger
       //this.showIcon = user;
         this.loginService.login(user)
            .pipe(first())
            .subscribe(
                data => {
                debugger
                if(data.result != null){
                  swal.fire({
                    text: data.result,
                    type: "error",
                  });
                }
                else{
                this.router.navigate([this.returnUrl]);
                }
                    
                },
                error => {
                debugger
                 swal.fire({               
					text: "Incorrect username and password!",
					type: "error",
                 });   
                
                   // this.loading = false;
                });
   
   }
 
}
