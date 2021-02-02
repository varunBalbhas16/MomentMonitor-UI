import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,NgForm} from '@angular/forms'; 
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatDialog} from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { SupervisorService } from '../../../services/supervisor.service';
import swal from 'sweetalert2/dist/sweetalert2.all.min.js';
import 'sweetalert2/src/sweetalert2.scss';
@Component({
  selector: 'app-supervisorpage',
  templateUrl: './supervisorpage.component.html',
  styleUrls: ['./supervisorpage.component.scss']
})
export class SupervisorpageComponent implements OnInit {
getallbarcode:any={};
regiForm: FormGroup;  
  constructor(private fb: FormBuilder,public dialog: MatDialog,private supervisorService: SupervisorService,private route: ActivatedRoute,private router: Router) {   
    this.regiForm = fb.group({
      'supervisorId':localStorage.Userid,   
      'collectionId' :this.getallbarcode.collectionId, 
      'batchNumber' :[null, Validators.required],  
      'programName' : [null, Validators.required],
      'name' : [null, Validators.required],
      'numberOfBags' : [null, Validators.required],
      'totalWeight' : [null, Validators.required]
    });  
  
  }
  ngOnInit() {
  }
  onFormSubmit(form)  
  {  
    console.log(form); 
    debugger
    form.value.collectionId = this.getallbarcode.collectionId;
     this.supervisorService.closebatchcheck(form.value.batchNumber).pipe(first()).subscribe(
              data => {
                   debugger
                 
                 if(data.message == 'failure'){
                swal.fire({
                  text: 'message: '+data.result+'',            
                });               
                  }
                  else{
                      this.supervisorService.addsupervisor(form.value).pipe(first()).subscribe(
              data => {
                   debugger
                  //alert(data);
                swal.fire({
                type:'success',
                text: 'Sorting started successfully.',
              //text: 'Barcode: '+data.description+'',
              //text: 'Program Name: '+data.name+'',            
                });
                  this.router.navigate(['/supervisor/supervisorlist']);
                },
                error => {
                   debugger
                    //alert("ggg");
                swal.fire({
                title: "Server Error",
                //text: "You will not be able to recover this imaginary file!",
                type: "error",
                 });
                 
                });
                  }
                },
                error => {
                   debugger
                    //alert("ggg");
                swal.fire({
                title: "Server Error",
                //text: "You will not be able to recover this imaginary file!",
                type: "error",
                 });
                 
                });
  
  
  } 
  barcode(bar)
  {
    debugger
    //console.log(bar);
     this.supervisorService.allbarcode(bar).subscribe(data=>{
     debugger
       this.getallbarcode = data;
      
   });  
  } 


}
