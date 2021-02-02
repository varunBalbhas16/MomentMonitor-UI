import { Component, OnInit,Renderer2 } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators,NgForm} from '@angular/forms'; 
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatDialog} from '@angular/material';
//import { SuccessdialogComponent } from '../successdialog/successdialog.component';
import { SortingService } from '../../../services/sorting.service';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2/dist/sweetalert2.all.min.js';
import 'sweetalert2/src/sweetalert2.scss';

@Component({
  selector: 'app-retailersortingclothes',
  templateUrl: './retailersortingclothes.component.html',
  styleUrls: ['./retailersortingclothes.component.scss']
})
export class RetailersortingclothesComponent implements OnInit {
 regiForm: FormGroup;
 validation_messages; 
 weightvalue:any={};
 maincategories;
 mainbackgroundcolor;
 subbackgroundcolor;
 retailerdetails:any={};
Organisation = localStorage.RetailerName;
 boxWeight = localStorage.boxWeight;
 boxNumber = localStorage.boxNumber;
 Date = new Date();
  retailercategoriesform:any={};
 totalweight:number = 0;
  checktotalweight:number = 0;
   showUndo:boolean = false;
  private WeightArray: Array<any> = [];
  dataUndoArray: Array<any> = [];
 selected = [false, false, false, false, false, false];
  allItems : String[] = ['usable','repaur'];
  constructor(private fb: FormBuilder,public dialog: MatDialog,private sortingService: SortingService,private route: ActivatedRoute,private router: Router,private renderer: Renderer2, private _location: Location ) { 
  this.regiForm = fb.group({  
      'Weight': [null, [Validators.required, Validators.pattern(/^[0-9]+(\.[0-9]{1,2})?$/)]],
      'items': [null, [Validators.required, Validators.pattern("[0-9]+")]],
      
    });  
     this.validation_messages = {
        'Weight': [
          { type: 'required', message: 'Weight is required' },
          { type: 'pattern', message: 'Enter a two digit number only' }
        ],
        'items': [
          { type: 'required', message: 'items is required' },
          { type: 'pattern', message: 'Enter  the whole number only' }
        ],

        }

      

  }

  ngOnInit() {


  }
MainCategories(items,index){
	debugger
	this.maincategories = 'clicked';
	this.mainbackgroundcolor = items;
//	this.selected[index] = !this.selected[index];

}

SubCategories(item){
	debugger
	this.subbackgroundcolor = item;
	  var  weight = this.regiForm.value.Weight;
    this.totalweight = this.totalweight+weight;
    this.checktotalweight =this.checktotalweight+weight;
      var items = this.regiForm.value.items;
      var retailerSubCategoryName = item;
      var categoryName = this.mainbackgroundcolor;
      var category = categoryName+','+retailerSubCategoryName;
      var checkarray =categoryName+','+retailerSubCategoryName;
       var res = this.WeightArray.find(({category}) => category === checkarray);
      //  var res1 = this.WeightArray.find(({categoryName}) => categoryName === this.mainbackgroundcolor);
      if((this.regiForm.value.Weight == undefined || this.regiForm.value.Weight == null) && this.regiForm.value.items == null) {
        swal.fire({
        text: 'Please enter Weight and Number Of Items',   
         }) 
         }
         else if(this.regiForm.value.Weight == undefined || this.regiForm.value.Weight == null){
         swal.fire({
        text: 'Please enter  Weight',   
         })
         }
         else if(this.regiForm.value.items == null){
         swal.fire({
        text: 'Please enter Number Of Items',   
         }) 
         }
         else{
	    swal.fire({
       // type:'warning',
       //   title: 'Are you sure to delete the entity ',
         // text: 'Weight: '+weight+'Kg ,   Category: '+items+'', 
          text: 'Confirm to add '+categoryName+': '+retailerSubCategoryName+' '+items+' items for '+weight+' Kgs',   
          showCancelButton: true,
          confirmButtonColor: '#049F0C',
          cancelButtonColor:'#ff0000',
          confirmButtonText: 'Ok',
          cancelButtonText: 'Cancel'
        }).then((result) =>{
           debugger
           if(result.value == true){

        if(this.totalweight > this.boxWeight) {
     
           swal.fire({
          text:'The total sorted weight is greater than the box weight before sorting. Please check and restart sorting again by pressing BACK button',
          confirmButtonColor: '#049F0C',
          confirmButtonText: 'Back',
           }).then((result) =>{
            if(result.value == true){
           debugger
      swal.fire({
          text: 'All the sorted items weight will be lost for this box. Do you want to restart sorting this box again?',
          showCancelButton: true,
          confirmButtonColor: '#049F0C',
          cancelButtonColor:'#ff0000',
          confirmButtonText: 'Yes',
          cancelButtonText: 'No'
        }).then((result) =>{
            if(result.value == true){
            this._location.back();
           }
       
           });
          }
          
        })
        this.totalweight = 0;
         for (let num of this.WeightArray) {
             debugger
              this.totalweight = this.totalweight+num.weight;

             }
       }
         else {
           debugger
          if(res == undefined ){
       debugger
        this.WeightArray.push({weight,retailerSubCategoryName,items,categoryName,category})
  this.dataUndoArray.push({weights:weight,retailerSubCategoryName:retailerSubCategoryName,items:items,categoryName:categoryName,category:category}); 
 
    }
  else {

  debugger

for (let num of this.WeightArray) {
debugger
    if(res.retailerSubCategoryName == num.retailerSubCategoryName && res.categoryName == num.categoryName){
    num.weight = weight+num.weight;
      this.dataUndoArray.push({weights:weight,retailerSubCategoryName:retailerSubCategoryName,items:items,categoryName:categoryName,category:category}); 
    }
   }
 }

  this.totalweight = 0;
         for (let num of this.WeightArray) {
             debugger
              this.totalweight = this.totalweight+num.weight;

             }

             this.weightvalue.description=0;
              this.weightvalue.items=0;
 }
 if(this.dataUndoArray.length <= 0){
this.showUndo = false;
 }
 else {
 this.showUndo = true;
 }


          }
        else if (result.dismiss === swal.DismissReason.cancel) {
        this.totalweight = 0;
         this.checktotalweight =0;
         for (let num of this.WeightArray) {
             debugger
              this.totalweight = this.totalweight+num.weight;

             }
      }
           })
           }
}

   undo(){
debugger
 this.dataUndoArray.pop();
this.totalweight = 0;
this.WeightArray =[];
for (let num of this.dataUndoArray) {
debugger
  var res = this.WeightArray.find(({category}) => category === num.category);
  if(res == undefined){
  debugger
    this.WeightArray.push({weight:num.weights,retailerSubCategoryName:num.retailerSubCategoryName,items:num.items,categoryName:num.categoryName,category:num.category})
 
    }
    else{
   for (let element of this.WeightArray) {
   debugger
    if(res.category == element.category){
    debugger
    element.weight = res.weight+element.weight;
     
    }
   }
    }
}

 if(this.dataUndoArray.length <= 0){
this.showUndo = false;
 }
 else {
 this.showUndo = true;
 }
 for (let num of this.WeightArray) {
 debugger
  this.totalweight = this.totalweight+num.weight;
 }
   }
Removerow(index)
{
  debugger
  this.WeightArray.splice(index, 1);
  this.dataUndoArray.splice(index, 1);

  this.totalweight = 0;
 for (let num of this.WeightArray) {
 debugger
  this.totalweight = this.totalweight+num.weight;
 }
}

onFormSubmit(form:NgForm)  
  {  
    //console.log(form);  
   debugger
     let totalreusable: number;
      totalreusable =0;
         
   let totalwaste :number;
   totalwaste = 0;

  this.retailercategoriesform.boxNumber =localStorage.boxNumber;
   this.retailercategoriesform.batchNumber = localStorage.batchnumber;
   this.retailercategoriesform.sortingUserId =localStorage.Userid;
   this.retailercategoriesform.batchType =localStorage.type;
   this.retailercategoriesform.clothesSortingprocessId =localStorage.clothesSortingId;
   this.retailercategoriesform.sortingCategoryDetailsList =  this.WeightArray;
   this.sortingService.saveretailerSortingclothes(this.retailercategoriesform).pipe(first()).subscribe(
              data => {
                          debugger
                  //alert(data);
                swal.fire({
                  //type: 'Success',
                  text: 'The Total Sorted Weight is : '+data.description+' Kgs',
                  showCancelButton: true,
                  confirmButtonColor: '#049F0C',
                  cancelButtonColor:'#ff0000',
                  confirmButtonText: 'Continue Sorting',
                  cancelButtonText: 'Close Batch'
                  }).then((result) =>{
                  debugger
                  if(result.value == true){
                   debugger
                 swal.fire({
                 text: 'Sorting will be continued!',              
                }).then((result) => {
               this.router.navigate(['/sorting/studentdetails']);
                }); 
                } 
                else
                {
                 this.router.navigate(['/sorting/systemdetails']);
                }
                })
                },
                error => {
                   
                    //alert("ggg");
                swal.fire({
                title: "Server Error",
                //text: "You will not be able to recover this imaginary file!",
                type: "error",
                 });
                 
                }); 
      

  }
}
