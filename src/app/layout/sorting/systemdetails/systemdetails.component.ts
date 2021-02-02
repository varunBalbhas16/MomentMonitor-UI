import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, NgForm} from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SortingService} from '../../../services/sorting.service';
import {first} from 'rxjs/operators';
import {Router, ActivatedRoute} from '@angular/router';
import swal from 'sweetalert2/dist/sweetalert2.all.min.js';
import 'sweetalert2/src/sweetalert2.scss';

@Component({
  selector: 'app-systemdetails',
  templateUrl: './systemdetails.component.html',
  styleUrls: ['./systemdetails.component.scss']
})
export class SystemdetailsComponent implements OnInit {
  regiForm: FormGroup;
  sort: string;
  sortings: string;

  constructor(private fb: FormBuilder, private sortingService: SortingService, private route: ActivatedRoute, private router: Router) {
    this.regiForm = fb.group({
      'sortingUserId': localStorage.Userid,
      'batchnumber': [null, Validators.required],
      'digitalScale': [null, Validators.required]
    });
  }

  ngOnInit() {
  }

  onsystemdetailsFormSubmit(form: NgForm) {
  debugger
    console.log(form);

    localStorage.setItem('batchnumber', form.value.batchnumber);
    localStorage.setItem('digitalScale', form.value.digitalScale);

    this.sortingService.addsytemdetails(form.value).pipe(first()).subscribe(
      data => {
        this.router.navigate(['/sorting/studentdetails']);
      },
      error => {

      });
  }
}
