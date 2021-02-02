import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RetailerService {
baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }
  getAllUsers(){
        debugger
      return this.http.get(this.baseUrl+'/api/home/getAllUsers');
    }
     getUsers(id){
     
      return this.http.get(this.baseUrl+'/api/home/getAllUsersById/'+id);
    }
    addentity(entity) {

        return this.http.post<any>(this.baseUrl+'/api/home/saveEntity', entity);
    }
    getallentity(){
       return this.http.get(this.baseUrl+'/api/home/getAllEntity');
    }
     getentity(id){
   //  debugger
       return this.http.get(this.baseUrl+'/api/home/getAllEntityById/'+id);
    }
     addprogram(program) {
      
        return this.http.post<any>(this.baseUrl+'/api/home/savePrograms', program);
    }
      getallprogram(){
     // debugger
       return this.http.get(this.baseUrl+'/api/home/getAllPrograms');
    }
     getprogram(id){
      debugger
       return this.http.get(this.baseUrl+'/api/home/getAllProgramsById/'+id);
    }
    getallretailer(){
        debugger
      return this.http.get(this.baseUrl+'/api/home/getAllRetailerDetails');
    }
    getretailerentity(id){
       debugger
       return this.http.get(this.baseUrl+'/api/home/getRetailerDetailsById/'+id);
    }    

}
