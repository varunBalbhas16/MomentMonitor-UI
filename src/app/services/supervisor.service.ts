import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SupervisorService {
baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }
   addsupervisor(supervisordetails)
    {
        //debugger
        return this.http.post<any>(this.baseUrl+'/api/home/saveSupervisor', supervisordetails);
    }
    getallsupervisor(){
      //  debugger
      return this.http.get(this.baseUrl+'/api/home/getAllSupervisorDetails');
    }
    getAllSortingSupervisor(){
    // debugger
      return this.http.get(this.baseUrl+'/api/home/getAllSortingSupervisor');
    }
    closebatchcheck(batchnumber){
    debugger
     return this.http.get<any>(this.baseUrl+'/api/home/getStatusByBatchNumber/'+batchnumber);
    }
    allbarcode(bar)
    {
       debugger
      return this.http.get(this.baseUrl+'/api/home/getBatchNumberByInfo/'+bar);
    }
    getsupervisorentity(id){
       debugger
       return this.http.get(this.baseUrl+'/api/home/getBatchNumberBySupervisorDetails/'+id);
    }
       closebatch(number){
       debugger
       return this.http.get<any>(this.baseUrl+'/api/home/closeBatch/'+number);
    }
}
