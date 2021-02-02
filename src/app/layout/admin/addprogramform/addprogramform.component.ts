import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormArray, FormGroup, Validators, NgForm} from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {first} from 'rxjs/operators';
import {UserService} from '../../../services/user.service';
import swal from 'sweetalert2/dist/sweetalert2.js';

//import swal from 'sweetalert2';

@Component({
  selector: 'app-addprogramform',
  templateUrl: './addprogramform.component.html',
  styleUrls: ['./addprogramform.component.scss']
})
export class AddprogramformComponent implements OnInit {
  regiForm: FormGroup;
  dataSource = [];
  getallprogram;
  startdate;
  enddate;

  constructor(private fb: FormBuilder, private userService: UserService, private route: ActivatedRoute, private router: Router) {
    this.regiForm = fb.group({
      'contributorId': this.route.snapshot.params['id'],
      'programId': [null, Validators.required],
      'startDate': [null, Validators.required],
      'endDate': [null, Validators.required],
      //'assignProgram': this.fb.array([]),
    });
  }

  ngOnInit() {
    this.Getallprogram();
  }

  getprogramdetails(getallprograms) {

  debugger
    this.startdate = new Date(getallprograms.startDate).toISOString();
    this.enddate = new Date(getallprograms.endDate).toISOString();
    this.regiForm.value.programId = getallprograms.programId;
  }

  addprogramFormSubmit(form: NgForm) {
  debugger
    console.log(form);
    //var assignsProgram = form.value.assignProgram[0];
    form.value.programId = form.value.programId.programId;
    this.userService.assignprogram(form.value).pipe(first()).subscribe(
      data => {
      debugger
        // alert(data);
        if (data.message == 'success') {
          swal.fire({
            type: 'success',
            //title: 'Entity program mapped successfully!',
            text: '' + data.description + ' program mapped successfully!',
          });
          this.router.navigate(['/admin/activeprogramlist']);
        } else {
          swal.fire({
            //type:'success',
            //title: 'Entity program mapped successfully!',
            text: 'this program is already mapped to this entity!',
          });
        }
      },
      error => {

        //alert("ggg");

        swal.fire({
          title: 'Server Error',
          //text: "You will not be able to recover this file!",
          type: 'error',
        });
      });
  }

  Getallprogram() {
    this.userService.getallprogram().subscribe(data => {
      this.getallprogram = data;
    });
  }

  /*onChange(name) {
  debugger

        const creds = this.regiForm.get('assignProgram') as FormArray;
      creds.push(this.fb.group({
           'contributorId':this.route.snapshot.params['id'],
           'programId':name.program.programId,
           'programname':name.program.programName,
           'StartDate' : [null, Validators.required],
           'EndDate' : [null, Validators.required],
      }));

  }*/

}
