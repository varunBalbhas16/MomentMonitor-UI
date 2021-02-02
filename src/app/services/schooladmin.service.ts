import { Injectable } from '@angular/core';
//import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { throwError } from 'rxjs';
import {catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SchooladminService {
baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }
  getallschooladmin(){
        debugger
      return this.http.get(this.baseUrl+'/api/home/getSchoolAdminDetails');
    }
  getallstudenthistory()
  {
     debugger
      return this.http.get(this.baseUrl+'/api/home/getStudentHistory');
  }

  getSchoolContributions(schoolId){
    debugger;
    return this.http.get(this.baseUrl + '/api/home/getSchoolContributions/' + schoolId);
  }

  getSchoolStudents(schoolId){
  debugger;
    return this.http.get(this.baseUrl + '/api/home/getSchoolStudents/' + schoolId);
  }
     /*  upload(formData){
      debugger
    return this.http.post<any>(this.baseUrl+'/api/home/uploadfile', formData, {
      reportProgress: true,
      observe: 'events'
    }).pipe(
      map(event => this.getEventMessage(event, formData)),
      catchError(this.handleError)
    );
  }*/

upload(formData) {
    debugger
        return this.http.post<any>(this.baseUrl+'/api/home/uploadfile', formData);
    }

 /* private getEventMessage(event: HttpEvent<any>, formData) {
debugger
    switch (event.type) {

      case HttpEventType.UploadProgress:
        return this.fileUploadProgress(event);

      case HttpEventType.Response:
        return this.apiResponse(event);

      default:
        return `File "${formData.get('uploadingFile').name}" surprising upload event: ${event.type}.`;
    }
  }

  private fileUploadProgress(event) {
    const percentDone = Math.round(100 * event.loaded / event.total);
    return { status: 'progress', message: percentDone };
  }

  private apiResponse(event) {
    return event.body;
  }

  private handleError(error: HttpErrorResponse) {
  debugger
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened. Please try again later.');
  }*/
}
