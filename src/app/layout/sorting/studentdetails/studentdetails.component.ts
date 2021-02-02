import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, NgForm} from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SortingService} from '../../../services/sorting.service';
import {first} from 'rxjs/operators';
import {Router, ActivatedRoute} from '@angular/router';
import swal from 'sweetalert2/dist/sweetalert2.all.min.js';
import 'sweetalert2/src/sweetalert2.scss';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.scss']
})
export class StudentdetailsComponent implements OnInit {
  sortprocess: any = {};
  studentdetails: any = {};
  studentdetailsform: any = {};
  retailerdetails: any = {};
  regiForm1: FormGroup;
  regiForm2: FormGroup;
  public students = <any> [];
  digitalScaleWeight: number = 0;

  constructor(private fb: FormBuilder, private sortingService: SortingService, private route: ActivatedRoute, private router: Router) {

    this.regiForm1 = fb.group({
      'userid': localStorage.Userid,
      //'contributionid':[null, Validators.required],
      'SchoolName': [null, Validators.required],
      'StudentName': [null, Validators.required],
      'ClassLeader': [null, Validators.required],
      'grade': [null, Validators.required],
      //'RegisterNumber': [null, Validators.required],
      'bagWeight': [null, Validators.required]
    });
    this.regiForm2 = fb.group({
      'userid': localStorage.Userid,
      'RetailerName': [null, Validators.required],
      'boxWeight': [null, Validators.required],
      'boxNumber': [null, Validators.required]
    });
  }

  onstudentFormSubmit(form: NgForm) {
    console.log(form);
    this.studentdetailsform.bagWeight = form.value.bagWeight;
    this.studentdetailsform.sortingUserId = localStorage.Userid;
    this.studentdetailsform.studentId = localStorage.studentId;
    this.studentdetailsform.clothesSortingId = localStorage.clothesSortingId;
    this.studentdetailsform.schoolProgramMappingId = localStorage.schoolProgramMappingId;
    this.sortingService.saveSortingDetails(this.studentdetailsform).pipe(first()).subscribe(
      data => {
        debugger;
        localStorage.setItem('SchoolStudentContributionId', data.batchNumber);
        localStorage.setItem('studentBagWeight', this.studentdetailsform.bagWeight);
        //alert(data);
        /*swal.fire({
        type:'success',
        //title: 'Created!',
        //text: 'Program added successfully.',
        });*/
        this.router.navigate(['/sorting/sortingclothes']);
      },
      error => {

        //alert("ggg");
        swal.fire({
          title: 'Server Error',
          //text: "You will not be able to recover this imaginary file!",
          type: 'error',
        });

      });

  }

  onretailerFormSubmit(form: NgForm) {
  debugger
    console.log(form);
    this.retailerdetails.boxWeight = form.value.boxWeight;
    this.retailerdetails.boxNumber = form.value.boxNumber;
    localStorage.setItem('boxWeight', form.value.boxWeight);
    localStorage.setItem('boxNumber', form.value.boxNumber);
    localStorage.setItem('RetailerName', form.value.RetailerName);
    this.retailerdetails.sortingUserId = localStorage.Userid;
    this.retailerdetails.batchType = localStorage.type;

    this.retailerdetails.batchNumber = localStorage.batchnumber;
    this.retailerdetails.clothesSortingprocessId = localStorage.clothesSortingId;
//  this.retailerdetails.schoolProgramMappingId = localStorage.schoolProgramMappingId;
    this.sortingService.saveRetailerSortingDetails(this.retailerdetails).pipe(first()).subscribe(
      data => {
      debugger
        if (data.message == 'success') {
          localStorage.setItem('retailerSortingprocessId', data.description);
          this.router.navigate(['/sorting/retailersortingclothes']);
        } else {
          swal.fire({
            //  text: "'+data.result+'",
            text: 'We have sorted Box ' + localStorage.boxNumber + '. Please check the box.',
          });
        }

      },
      error => {

        //alert("ggg");
        swal.fire({
          title: 'Server Error',
          //text: "You will not be able to recover this imaginary file!",
          type: 'error',
        });

      });


  }

  ngOnInit() {
    this.sortingService.getsortdata(localStorage.batchnumber).pipe(first()).subscribe(
      data => {
      debugger;
        if (null != data.errorCode) {
          this.router.navigate(['/sorting/systemdetails']);
          swal.fire({
            text: data.errorMsg,
          });
        } else {
          this.sortprocess = data;
          localStorage.setItem('clothesSortingId', data.clothesSortingId);
          localStorage.setItem('contributorId', data.contributorId);
          localStorage.setItem('schoolProgramMappingId', data.schoolProgramMappingId);
          localStorage.setItem('type', data.type);
        }
      },
      error => {

      });

    this.regiForm1.controls['StudentName'].valueChanges.subscribe(
      term => {
        if (term != '') {
        debugger
          if (term.studentId != null) {
            this.sortingService.getStudentdetails(term.studentId).subscribe(data => {
            debugger
              this.studentdetails = data;
              localStorage.setItem('studentId', data.studentId);
            });
          }
          this.sortingService.getStudentNames(term, localStorage.contributorId).subscribe(
            data => {
            debugger
              this.students = data;

            });
        }
      });
  }

  displayprogramFn(name): string {
  debugger


    if (!name) {
      return '';
    }

    return name ? name.studentName : name;
    //return name.grade ? name.grade : name;

  }

  sorting(studentContributionId) {
  debugger
    localStorage.setItem('studentContributionId', studentContributionId);
    this.sortingService.getstudentdetails(studentContributionId).subscribe(data => {
    debugger
      this.studentdetails = data;
      this.studentdetails.batchnumber = localStorage.batchnumber;
    });

  }

  getWeight() {
    debugger;
    this.sortingService.getWeightByUser(localStorage.Userid).subscribe(data => {
      debugger;
        this.digitalScaleWeight = data.description;
      });
  }
}
