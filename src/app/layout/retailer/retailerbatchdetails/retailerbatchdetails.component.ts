import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,NgForm} from '@angular/forms'; 
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RetailerService } from '../../../services/retailer.service';
@Component({
  selector: 'app-retailerbatchdetails',
  templateUrl: './retailerbatchdetails.component.html',
  styleUrls: ['./retailerbatchdetails.component.scss']
})
export class RetailerbatchdetailsComponent implements OnInit {
getalldata:any={};
regiForm: FormGroup;  
  constructor(private fb: FormBuilder,private retailerService: RetailerService,private route: ActivatedRoute,private router: Router) { 
  this.regiForm = fb.group({  
      'collectionDate' :'',
      'name' :'',
      'programName' : '',
      'type' :'',
      'collectionTotalWeight' : ''
    });  
  }

  ngOnInit() {
     debugger
     this.getretailerEntity(this.route.snapshot.params['id']);
  }
   getretailerEntity(id){
  debugger
         this.retailerService.getretailerentity(id).subscribe(data=>{
         debugger
         this.getalldata = data;
         //this.regiForm.setValue(data);
     
   }); 
   }

}
