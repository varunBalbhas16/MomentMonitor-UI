import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,NgForm} from '@angular/forms'; 
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SupervisorService } from '../../../services/supervisor.service';
@Component({
  selector: 'app-supervisorbatchdetails',
  templateUrl: './supervisorbatchdetails.component.html',
  styleUrls: ['./supervisorbatchdetails.component.scss']
})
export class SupervisorbatchdetailsComponent implements OnInit {
getalldata:any={};
regiForm: FormGroup;  
  constructor(private fb: FormBuilder,private supervisorService: SupervisorService,private route: ActivatedRoute,private router: Router) {
   }

  ngOnInit() {
  debugger
    this.getsupervisorEntity(this.route.snapshot.params['id']);
  }
  getsupervisorEntity(id){
  debugger
         this.supervisorService.getsupervisorentity(id).subscribe(data=>{
         debugger
         this.getalldata = data;
         //this.regiForm.setValue(data);
     
   }); 
   }
}
