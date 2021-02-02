import {Component, OnInit, Renderer2} from '@angular/core';
import {FormBuilder, FormGroup, Validators, NgForm} from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialog} from '@angular/material';
//import { SuccessdialogComponent } from '../successdialog/successdialog.component';
import {SortingService} from '../../../services/sorting.service';
import {first, switchMap} from 'rxjs/operators';
import {Subscription, timer, pipe} from 'rxjs';
import {Router, ActivatedRoute} from '@angular/router';
import swal from 'sweetalert2/dist/sweetalert2.all.min.js';
import 'sweetalert2/src/sweetalert2.scss';


@Component({
  selector: 'app-sortingclothes',
  templateUrl: './sortingclothes.component.html',
  styleUrls: ['./sortingclothes.component.scss']
})
export class SortingclothesComponent implements OnInit {
  validation_messages;
  regiForm: FormGroup;
  //Weight: string = '';
  Weight: number = 0;
  image1: string = '';
  categories: any = {};
  imageUrl: any = {};
  totalweight: number = 0;
  showUndo: boolean = false;
  categoriesform: any = {};
// totalreusable:number = 0;
  private WeightArray: Array<any> = [];
  reverseArray: Array<any> = [];
  dataUndoArray: Array<any> = [];
  private newAttribute: any = {};
  selectedValue: String[] = [];
  weightvalue: any = {};
  bagWeight: any = localStorage.studentBagWeight;
  subscription: Subscription;
  isLiveStatus: boolean = true;

  constructor(private fb: FormBuilder, public dialog: MatDialog, private sortingService: SortingService, private route: ActivatedRoute, private router: Router, private renderer: Renderer2) {
    this.regiForm = fb.group({
      'Weight': ['', [Validators.required, Validators.pattern(/^[0-9]+(\.[0-9]{1,3})?$/)]],
      //'items': ['', [Validators.required, Validators.pattern('/^-?[0-9][^\\.]*$/')]]
      'items': ['', [Validators.required, Validators.pattern('[0-9]+')]]
      //'items': ['', [Validators.required, Validators.pattern('\d+')]],
      //'categories': '',   ng-pattern="/^(0|\-?[1-9][0-9]*)$/"
    });
    this.validation_messages = {
      'Weight': [
        {type: 'required', message: 'Weight is required'},
        {type: 'pattern', message: 'Enter a valid Weight.'}
      ],
      'items': [
        {type: 'required', message: 'items is required'},
        {type: 'pattern', message: 'Enter whole number without decimal values.'}
      ],
    };
  }

  resetForm() {
    this.regiForm.reset();
  }

  onFormSubmit(form: NgForm) {
  debugger
    let totalreusable: number;
    totalreusable = 0;

    let totalwaste: number;
    totalwaste = 0;

    this.categoriesform.schoolStudentContributionId = localStorage.SchoolStudentContributionId;
    this.categoriesform.batchNumber = localStorage.batchnumber;
    this.categoriesform.sortingUserId = localStorage.Userid;
    this.categoriesform.batchType = localStorage.type;

    for (let num of this.WeightArray) {
    debugger

      if (num.category == '1 - Kids 0-24 Months') {
        this.categoriesform.category1 = num.weight;
        // totalreusable = totalreusable + num.weight;
      } else if (num.category == '2 - Kids Jeans & Long Pants') {
        this.categoriesform.category2 = num.weight;
        //totalreusable = totalreusable + num.weight;
      } else if (num.category == '3 - Kids Shorts & Swim Wear') {
        this.categoriesform.category3 = num.weight;
        //totalreusable = totalreusable + num.weight;
      } else if (num.category == '4 - Kids Long Sleeve') {
        this.categoriesform.category4 = num.weight;
        //totalreusable = totalreusable + num.weight;
      } else if (num.category == '5 - Kids Jerseys') {
        this.categoriesform.category5 = num.weight;
        //totalreusable = totalreusable + num.weight;
      } else if (num.category == '6 - Kids Skirts & Dresses') {
        this.categoriesform.category6 = num.weight;
        //totalreusable = totalreusable + num.weight;
      } else if (num.category == '7 - Kids Short Sleeve & T Shirts') {
        this.categoriesform.category7 = num.weight;
        //totalreusable = totalreusable + num.weight;
      } else if (num.category == '8 - Ladies Dresses & Skirts') {
        this.categoriesform.category8 = num.weight;
        //totalreusable = totalreusable + num.weight;
      } else if (num.category == '9 - Ladies Long Pants, Jeans & Shorts') {
        this.categoriesform.category9 = num.weight;
        //totalreusable = totalreusable + num.weight;
      } else if (num.category == '10 - Ladies Long Sleeves') {
        this.categoriesform.category10 = num.weight;
        //totalreusable = totalreusable + num.weight;
      } else if (num.category == '11 - Ladies Short Sleeves') {
        this.categoriesform.category11 = num.weight;
        //totalreusable = totalreusable + num.weight;
      } else if (num.category == '12 - Ladies Jersey') {
        this.categoriesform.category12 = num.weight;
        //totalreusable = totalreusable + num.weight;
      } else if (num.category == '13 - Mens') {
        this.categoriesform.category13 = num.weight;
        // totalreusable = totalreusable + num.weight;
      } else if (num.category == '14 - Big Size') {
        this.categoriesform.category14 = num.weight;
        ///totalreusable = totalreusable + num.weight;
      } else if (num.category == '15 - A-Grade') {
        this.categoriesform.category15 = num.weight;
        //totalreusable = totalreusable + num.weight;
      } else if (num.category == '16 - B-Grade') {
        this.categoriesform.category16 = num.weight;
        //totalreusable = totalreusable + num.weight;
      } else if (num.category == '17 - Wash') {
        this.categoriesform.category17 = num.weight;
        //totalreusable = totalreusable + num.weight;
      } else if (num.category == '18 - Repair') {
        this.categoriesform.category18 = num.weight;
        //totalreusable = totalreusable + num.weight;
      } else if (num.category == '19 - Shoes') {
        this.categoriesform.category19 = num.weight;
        // totalwaste = num.weight;
      } else if (num.category == '20 - Unusable') {
        this.categoriesform.category20 = num.weight;
        //totalwaste = num.weight;
      } else {
        alert('categories undefined');
      }
    }

    this.categoriesform.totalReusable = this.totalweight;
    this.categoriesform.totalWaste = 0;
    let differenceInWeights = this.totalweight - this.bagWeight;
    if (differenceInWeights > 0.05 || differenceInWeights < -0.05) {

      swal.fire({
        title: 'Please check. The sorted items total weight do not match with the entire Bag Weight.',
        type: 'error',
      });
      return;
    }

    this.sortingService.saveSortingclothes(this.categoriesform).pipe(first()).subscribe(
      data => {
      debugger
        //alert(data);
        swal.fire({
          //type: 'Success',
          text: 'Total Recycled: ' + data.totalReusable + ', Total Waste: ' + data.totalWaste + '',
          showCancelButton: true,
          confirmButtonColor: '#049F0C',
          cancelButtonColor: '#ff0000',
          confirmButtonText: 'Continue Sorting',
          cancelButtonText: 'Close Batch'
        }).then((result) => {
        debugger
          if (result.value == true) {
          debugger
            swal.fire({
              text: 'Sorting will be continued!',
            }).then((result) => {
              this.router.navigate(['/sorting/studentdetails']);
            });
          } else {
            this.router.navigate(['/sorting/systemdetails']);
          }
        });
      },
      error => {

        swal.fire({
          title: 'Server Error',
          //text: "You will not be able to recover this imaginary file!",
          type: 'error',
        });
      });

  }

  ngOnInit() {
    /*
    this.subscription = timer(0, 10000).pipe(
      switchMap(() => this.sortingService.getWeightByUser(localStorage.Userid))
    ).subscribe(data => this.weightvalue = data);
    */

  }

  /*
    ngOnDestroy() {
      //this.subscription.unsubscribe();
    }
  */
  additems() {
  debugger;
    var weight = this.regiForm.value.Weight;
    var image = this.imageUrl;
    var category = this.categories;
    var res = this.WeightArray.find(({image}) => image === this.imageUrl);

    swal.fire({
      // type:'warning',
      //   title: 'Are you sure to delete the entity ',
      text: 'Weight: ' + weight + ', Category: ' + category + '',
      showCancelButton: true,
      confirmButtonColor: '#049F0C',
      cancelButtonColor: '#ff0000',
      confirmButtonText: 'Ok',
      cancelButtonText: 'Cancel'
    }).then((result) => {
    debugger;
      if (result.value == true) {
        if (res == undefined) {
          this.WeightArray.push({weight, image, category});
        } else {
          for (let num of this.WeightArray) {
            if (res.image == num.image) {
              num.weight = weight + num.weight;
            }
          }
        }
      }
    });
  }

  image(event) {
  debugger;
    if( null === this.regiForm.value.Weight || undefined == this.regiForm.value.Weight ) {
      swal.fire({
        title: 'Please click \'Get Weight\' button or enter the Weight before picking a category.',
        type: 'info',
      });
      return ;
    }
    if(null === this.regiForm.value.items || undefined == this.regiForm.value.items || '' === this.regiForm.value.items) {
      swal.fire({
        title: 'Please enter \'Number of items\' before picking a category.',
        type: 'info',
      });
      return ;
    }

    if ( 0 == this.regiForm.value.Weight ) {
      swal.fire({
        title: 'Please check the weight, this should be more than zero kgs.',
        type: 'info',
      });
      return ;
    } else if ( 0 == this.regiForm.value.items ) {
      swal.fire({
        title: 'Please check the Number of Items, this should be more than zero.',
        type: 'info',
      });
      return ;
    } else if ( !Number.isInteger(this.regiForm.value.items) ) {
      swal.fire({
        title: 'Please check the Number of Items. This should be a whole number.',
        type: 'info',
      });
      return ;
    }

    var img = document.getElementById(event.target.attributes.id.nodeValue), style = window.getComputedStyle(img);
    this.imageUrl = style.backgroundImage.slice(4, -1).replace(/"/g, '');
    this.categories = event.target.attributes.value.nodeValue;

    var weight = this.regiForm.value.Weight;
    var item = this.regiForm.value.items;
    var image = event.target.attributes.id.value;
    var category = this.categories;
    var res = this.WeightArray.find(({image}) => image === img.id);

    swal.fire({
      text: 'Weight: ' + weight + ' Kgs ,   Category: ' + category + '',
      showCancelButton: true,
      confirmButtonColor: '#049F0C',
      cancelButtonColor: '#ff0000',
      confirmButtonText: 'Ok',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.value) {
        if (res == undefined) {
          this.WeightArray.push({weight, image, category, item});
          this.dataUndoArray.push({weights: weight, image: image, category: category, item: item});
          this.totalweight = 0.0;
        } else {

          for (let num of this.WeightArray) {
            if (res.image == num.image) {
              num.weight = weight + num.weight;
              num.item = item + num.item;
              this.totalweight = 0.0;
              this.dataUndoArray.push({weights: weight, image: image, category: category, item: item});
            }
          }
        }
        if (this.dataUndoArray.length <= 0) {
          this.showUndo = false;
        } else {
          this.showUndo = true;
        }

        for (let num of this.WeightArray) {
          var tmpWeight = '' + num.weight;
          var tmpTotalWeight = '' + this.totalweight;

          this.totalweight = parseFloat(tmpTotalWeight) + parseFloat(tmpWeight);
          this.totalweight = parseFloat(this.totalweight.toPrecision(3));
        }
        //clear the weight and items field
        this.resetForm();
      }
    });
  }

  Removerow(index) {
    const removeWeight = this.WeightArray[index].weight;
    const removeItems = this.WeightArray[index].item;
    const removeCategory = this.WeightArray[index].category;
    swal.fire({
      text: 'Do you want to remove ' + removeItems + ' units of category ' + removeCategory + ' clothes weighing ' + removeWeight + ' Kgs ?',
      showCancelButton: true,
      confirmButtonColor: '#049F0C',
      cancelButtonColor: '#ff0000',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'

    }).then((result) => {
      if (result.value) {
        this.WeightArray.splice(index, 1);
        this.dataUndoArray.splice(index, 1);
        this.totalweight = 0;
        for (let num of this.WeightArray) {
          this.totalweight = this.totalweight + num.weight;
        }
      }
    });
  }


  undo1(index) {
  debugger;
    for (let num of this.dataUndoArray) {
      if (index.category == num.category) {
        this.reverseArray.push(num);
      }
    }
    if (this.reverseArray.length > 1) {
      let lastindex = this.reverseArray.length - 2;
      for (let i = 0; i < this.reverseArray.length; i++) {
        if (lastindex == i) {
        debugger
          index.weight = this.reverseArray[i].weight;
          this.reverseArray = [];
          //  this.reverseArray.pop();
        }
      }
    }
  }

  undo() {
  debugger;
    this.dataUndoArray.pop();
    this.totalweight = 0;
    this.WeightArray = [];
    for (let num of this.dataUndoArray) {
    debugger
      var res = this.WeightArray.find(({image}) => image === num.image);
      if (res == undefined) {
      debugger
        this.WeightArray.push({weight: num.weights, image: num.image, category: num.category, item: num.item});

      } else {
        for (let element of this.WeightArray) {
        debugger
          if (res.image == element.image) {
          debugger
            element.weight = res.weight + element.weight;

          }
        }
      }
    }

    if (this.dataUndoArray.length <= 0) {
      this.showUndo = false;
    } else {
      this.showUndo = true;
    }
    for (let num of this.WeightArray) {
    debugger
      this.totalweight = this.totalweight + num.weight;
    }
  }

  toggleChange(event) {
  debugger;
    let toggle = event.source;
    if (toggle) {
      let group = toggle.buttonToggleGroup;
      if (event.value.some(item => item == toggle.value)) {
        group.value = [toggle.value];
        this.selectedValue = group.value;
      }

      if (toggle.value == 'ONLINE') {
        this.isLiveStatus = true;
        /*
        this.sortingService.getWeight().pipe(first()).subscribe(
          data => {
          debugger
            this.renderer.selectRootElement('#weight').focus();
            this.weightvalue = data;
          },
          error => { });
         */

        this.sortingService.getWeightByUser(localStorage.Userid).pipe(first()).subscribe(
          data => {
          debugger
            this.renderer.selectRootElement('#weight').focus();
            this.weightvalue = data;
          },
          error => {
          });
      } else {
        this.isLiveStatus = false;
      }
    }
  }

  getWeight() {
    this.sortingService.getWeightByUser(localStorage.Userid).pipe(first()).subscribe(
      data => {
        this.renderer.selectRootElement('#weight').focus();
        this.weightvalue = data;
      },
      error => {
      });
  }
}
