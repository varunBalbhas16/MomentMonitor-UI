import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, NgForm, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {Router, ActivatedRoute} from '@angular/router';
import {AgmMap} from '@agm/core';
import {first} from 'rxjs/operators';
import {UserService} from '../../../services/user.service';
import swal from 'sweetalert2/dist/sweetalert2.all.min.js';
import 'sweetalert2/src/sweetalert2.scss';

@Component({
  selector: 'app-addcenter',
  templateUrl: './addcenter.component.html',
  styleUrls: ['./addcenter.component.scss']
})

export class AddcenterComponent implements OnInit {
  regiForm: FormGroup;
  public form: string;
  centreCheck;
  lat = 13.081670;
  lng = 80.276698;
  zoomed = 15;
  zoneId: number;
  headId: number;
  xcoordinates: string;
  showMarker = false;
  public zones = <any> [];
  public centreheads = <any> [];
  latitude: number;
  longitude: number;

  constructor(private fb: FormBuilder, public dialog: MatDialog, private userService: UserService, private route: ActivatedRoute, private router: Router) {
    this.regiForm = fb.group({
      'centreName': ['', Validators.compose([
        Validators.maxLength(60),
        Validators.minLength(5),
        Validators.pattern(/^[a-zA-Z0-9.\_\- ]*$/),
        Validators.required
      ])],
      'centreCode': ['', Validators.compose([
        Validators.maxLength(10),
        Validators.minLength(1),
        Validators.pattern(/^[a-zA-Z0-9\-]*$/),
        Validators.required
      ])],
      'landline': ['', Validators.compose([
        Validators.maxLength(15),
        Validators.minLength(8),
        Validators.pattern(/^[0-9\-]*$/)
      ])],
      czone: ['', Validators.compose(null)],
      chead: ['', Validators.compose(null)],
      address: ['', Validators.compose(null)],
      xcoordinates: ['', Validators.compose(null)],
      firstName: ['', Validators.compose(null)],
      lastName: ['', Validators.compose(null)],
      contact: ['', Validators.compose(null)],
      latitude: ['', Validators.compose(null)],
      longitude: ['', Validators.compose(null)],
      zoneId: ['', Validators.compose(null)],
      headId: ['', Validators.compose(null)],
    });

    this.centreCheck = {
      'centreName': [
        {type: 'required', message: 'Centre Name is required'},
        {type: 'minlength', message: 'Centre Name must be at least 5 characters long'},
        {type: 'maxlength', message: 'Centre Name cannot be more than 60 characters long'},
        {type: 'pattern', message: 'Centre Name must contain only alphabets and numbers'},
      ],
      'centreCode': [
        {type: 'required', message: 'Centre Code is required'},
        {type: 'minlength', message: 'Centre Code must be at least 1 letter or number'},
        {type: 'maxlength', message: 'Centre Code cannot be more than 10 characters'},
        {type: 'pattern', message: 'Centre Code must contain only alphabets and numbers'},
      ],
      'landline': [
        {type: 'minlength', message: 'Centre Landline must be at least 8 digits'},
        {type: 'maxlength', message: 'Centre Landline cannot be more than 15 characters'},
        {type: 'pattern', message: 'Centre Landline must contain only alphabets and numbers'},
      ],
    };
  }

  onFormSubmit(form: NgForm) {
    console.log(form);
    debugger;
    this.userService.checkUniqueCentre(form).subscribe(
      data => {
        debugger;
        // tslint:disable-next-line:triple-equals
        if (null != data && data.result == 'success') {
          debugger;
          this.userService.addCentre(form).pipe(first()).subscribe(
            data => {
              debugger;
              //alert(data);
              swal.fire({
                type: 'success',
                //   title: 'Created!',
                text: data.result,
              });
              this.router.navigate(['/admin/listcentre']);
            },
            error => {

              // alert("ggg");
              swal.fire({
                title: 'Server Error',
                //text: "You will not be able to recover this file!",
                type: 'error',
              });
            });
        } else {
          swal.fire({
            text: 'We already have this Centre name please check',
          });
        }
      },
      error => {
        swal.fire({
          title: 'Server Error',
          type: 'error',
        });
      });
  }

  ngOnInit() {
    this.regiForm.controls['czone'].valueChanges.subscribe(
      term => {
        if (term != '') {
          //localStorage.setItem('zoneId', term.zoneId);
          this.zoneId = term.zoneId;
          debugger;
          if (term.zoneId != null) {
            this.userService.getZoneById(term.zoneId).subscribe(zdata => {
              debugger;
              //this.zones = zdata;
            });
          }
          this.userService.getZonesHavingNameLike(term).subscribe(
            zndata => {
              debugger;
              this.zones = zndata;
          });
        }
      });

    this.regiForm.controls['chead'].valueChanges.subscribe(
      cterm => {
        if (cterm != '') {
          debugger;
          if (cterm.userId != null) {
            this.userService.getUsers(cterm.userId).subscribe(data => {
              debugger;
              //this.centreheads = data;
              this.headId = cterm.userId;
              //localStorage.setItem('userId', cterm.userId);
            });
          }
          this.userService.getUsersHavingNameLike(cterm).subscribe(
            data => {
              debugger;
              this.centreheads = data;
            });
        }
      });
  }

  onPickLocation(event){
    this.lat = event.coords.lat;
    this.lng = event.coords.lng;
    this.showMarker = true;
    this.xcoordinates = ''+ this.lat + " : " + this.lng;
    this.latitude = this.lat;
    this.longitude = this.lng;
  }

  displayZones(name): string {
    debugger;
    if (!name) {
      return '';
    }
    return name ? name.zone : name;
  }

  displayCHeads(name): string {
    debugger;
    if (!name) {
      return '';
    }
    return name ? name.firstName + ' ' + name.lastName : name;
  }
}
