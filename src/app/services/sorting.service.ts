import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SortingService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  getUsers(id) {

    return this.http.get(this.baseUrl + '/api/home/getAllUsersById/' + id);
  }

  addsytemdetails(sytemdetails) {

    return this.http.post<any>(this.baseUrl + '/api/home/saveDigitalScaleNumber ', sytemdetails);
  }

  getsortdata(params) {
  debugger
    return this.http.get<any>(this.baseUrl + '/api/home/getClothesCollectionByBatchNumber/' + params);

  }

  getstudentdetails(id) {
  debugger
    return this.http.get(this.baseUrl + '/api/home/getStudentDetails/' + id);

  }

  saveSortingDetails(studentdetailsform) {
  debugger
    return this.http.post<any>(this.baseUrl + '/api/home/saveSortingDetails', studentdetailsform);
  }

  saveRetailerSortingDetails(retailerdetails) {
  debugger
    return this.http.post<any>(this.baseUrl + '/api/home/saveRetailerSortingBoxDetails', retailerdetails);
  }

  saveSortingclothes(saveClothesDetails) {
  debugger
    return this.http.post<any>(this.baseUrl + '/api/home/saveClothesDetails', saveClothesDetails);
  }

  saveretailerSortingclothes(retailercategoriesform) {
  debugger
    return this.http.post<any>(this.baseUrl + '/api/home/saveRetailerCategoryProcess', retailercategoriesform);
  }

  getStudentNames(term, contributorId) {
  debugger
    return this.http.get<any[]>(this.baseUrl + '/api/home/getAllStudentsByName/' + term + '/' + contributorId);

  }

  getStudentdetails(Id) {
  debugger
    return this.http.get<any>(this.baseUrl + '/api/home/getStudentsById/' + Id);

  }

  getWeight() {
  debugger
    return this.http.get<any>(this.baseUrl + '/api/home/getWeight');

  }
  getWeightByUser(id) {

    return this.http.get<any>(this.baseUrl + '/api/home/getWeightByUser/'+ id);
  }
}
