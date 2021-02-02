import { Component, OnInit ,Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { filter, map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators , NgForm ,FormsModule,ReactiveFormsModule} from '@angular/forms'; 
import { CollectingService } from '../../../services/collecting.service';
import swal from 'sweetalert2/dist/sweetalert2.all.min.js';
import 'sweetalert2/src/sweetalert2.scss';
@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {
 public form: string;
 regiForm: FormGroup;
 regiForm1: FormGroup;
    schools = [];
addcollection:any={};
   public retailers = <any>[];
  programid;
allprogram;
getretailer;
selectedValue : String[] = [];
//searchTerm : FormControl = new FormControl();
  programname = <any>[];
  retailer = <any>[];
  school = <any>[];

  constructor(public dialog: MatDialog,private fb: FormBuilder,private collectingService: CollectingService,private route: ActivatedRoute,private router: Router) {
  this.regiForm = fb.group({
     'userid':localStorage.Userid,
    'type' : ['retailer'],
    'contributorId':1,
     'name':[null, Validators.required],
     'programId':[null, Validators.required],  
     'noOfBags' : [null, Validators.required],   
     'collectionTotalWeight' : [null, Validators.required]
    });

  this.regiForm1 = fb.group({
     'userid':localStorage.Userid,  
      'type' : ['school'],
      'contributorId':1,
      'name':[null, Validators.required],
      'programId':[null, Validators.required],    
      'noOfBags' : [null, Validators.required],
      'collectionTotalWeight' :[null, Validators.required],
    });     
  }

 onFormSubmit(form)  
  {  
    debugger

 form.value.contributorId = form.value.name.contributorId;
   this.addcollection.contributorId = form.value.contributorId;
   this.addcollection.programId = form.value.programId;
   this.addcollection.noOfBags = form.value.noOfBags;
   this.addcollection.collectionTotalWeight = form.value.collectionTotalWeight;
   this.addcollection.type = form.value.type;
    this.addcollection.collectionUserId = form.value.userid;

   this.collectingService.addcollection(this.addcollection).pipe(first()).subscribe(
              data => {
                debugger
                  //alert(data);
                swal.fire({
                type:'success',
                //title: 'Created!',
                //text: 'Collection started successfully with batch '+data.batchNumber+'',
                text: 'Collection started successfully!',               
                });
                if(data.description =='school'){
                  this.router.navigate(['/collecting/schoolhistory']);
                }
                else{
                 this.router.navigate(['/collecting/retailerhistory']);
                }
                },
                error => {
                    debugger
                    //alert("ggg");
                swal.fire({
                title: "Server Error",
                //text: "You will not be able to recover this imaginary file!",
                type: "error",
                 })                 
                });  



  }  
  
  ngOnInit() {


       this.regiForm.controls['name'].valueChanges.subscribe(
      term => {
        if (term != '') {
       debugger
       if(term.type == 'retailer'){
           this.collectingService.getSchools(term.contributorId).subscribe(data=>{
            debugger
            this.allprogram = data;
            });

          }
          this.collectingService.getRetailerContributorNames(term).subscribe(
            data => {
            debugger
               this.retailers = data;

          })
        }   
        });

      this.regiForm1.controls['name'].valueChanges.subscribe(
      term => {
        if (term != '') {
          debugger
          if(term.type == 'school'){
           this.collectingService.getSchools(term.contributorId).subscribe(data=>{
            debugger
            this.allprogram = data;
            });

          }
          this.collectingService.getSchoolContributorNames(term).subscribe(
            data => {
            debugger
              this.school = data;
               
               
             
          })
        }

    })


  }

  displayprogramFn(name): string {
  debugger


    if (!name) return '';

    return name ? name.name : name;
    
   
    }

  dd(name){
  debugger
 
  }

toggleChange(event) {
//debugger
    let toggle = event.source;
    if (toggle) {
        let group = toggle.buttonToggleGroup;
        if (event.value.some(item => item == toggle.value)) {
            group.value = [toggle.value];
            this.selectedValue =group.value;
        }
    }
}

}

