import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
//import { tap, map, filter } from 'rxjs/operators';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CollectingService {
baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }
  addcollection(collection) { 
        debugger     
        return this.http.post<any>(this.baseUrl+'/api/home/saveClothesCollection', collection);
    } 
  getschoolhistory()
  {
       debugger
       return this.http.get(this.baseUrl+'/api/home/getSchoolHistory');
  } 
  getretailerhistory()
  {
       debugger
       return this.http.get(this.baseUrl+'/api/home/getRetailerHistory');
  }

    search(term){
debugger
        return this.http.get(this.baseUrl+'/api/home/getProgramNames/' + term);
      
    } 
    getContributorNames(term){
    debugger
    return this.http.get<any[]>(this.baseUrl+'/api/home/getSchoolContributorNames/' + term);
      
    }

     getSchoolContributorNames(term){
    debugger
    return this.http.get<any[]>(this.baseUrl+'/api/home/getSchoolContributorNames/' + term);
      
    }
    getRetailerContributorNames(term){
    debugger
    return this.http.get<any[]>(this.baseUrl+'/api/home/getRetailerContributorNames/' + term);
    }
   getSchools(id){
         debugger
       return this.http.get<any[]>(this.baseUrl+'/api/home/getProgramsByContributors/'+ id);
    }
    }
