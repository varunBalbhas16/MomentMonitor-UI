import {Injectable} from '@angular/core';
import {HttpClient, HttpEvent, HttpErrorResponse, HttpEventType} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  adduser(user) {
    debugger;
    return this.http.post<any>(this.baseUrl + '/api/home/saveUser', user);
  }

  addentityuniquename(name) {
    debugger;
    return this.http.get<any[]>(this.baseUrl + '/api/home/getContributorByNames/' + name);
  }

  assignprogram(user) {
    debugger;
    return this.http.post<any>(this.baseUrl + '/api/home/saveSchoolsByPrograms', user);
  }

  getAllUsers() {
    debugger;
    return this.http.get(this.baseUrl + '/api/home/getAllUsers');
  }

  getUsers(id) {
    return this.http.get(this.baseUrl + '/api/home/getAllUsersById/' + id);
  }

  addentity(entity) {

    return this.http.post<any>(this.baseUrl + '/api/home/saveEntity', entity);
  }

  getallentity() {
    return this.http.get(this.baseUrl + '/api/home/getAllEntity');
  }

  deleteentity(id) {
    debugger;
    return this.http.delete(this.baseUrl + '/api/home/deleteEntity/' + id);
  }

  getprogramlist() {
    return this.http.get(this.baseUrl + '/api/home/getSchoolByPrograms');
  }

  getentity(id) {
    //  debugger
    return this.http.get(this.baseUrl + '/api/home/getAllEntityById/' + id);
  }

  addprogram(program) {
    return this.http.post<any>(this.baseUrl + '/api/home/savePrograms', program);
  }

  addprogramuniquename(name) {
    debugger;
    return this.http.get<any[]>(this.baseUrl + '/api/home/getProgramByNames/' + name);
  }

  getallprogram() {
    // debugger
    return this.http.get(this.baseUrl + '/api/home/getAllPrograms');
  }

  deleteprogram(id) {
    debugger;
    return this.http.delete(this.baseUrl + '/api/home/deleteProgram/' + id);
  }

  deletuser(id) {
    debugger;
    return this.http.delete(this.baseUrl + '/api/home/deleteUser/' + id);
  }

  getprogram(id) {
    debugger;
    return this.http.get(this.baseUrl + '/api/home/getAllProgramsById/' + id);
  }

  getadmindashboard() {
    return this.http.get(this.baseUrl + '/api/home/getAdminDashboard');
  }

  getSchoolContributorNames(term) {
    debugger;
    return this.http.get<any[]>(this.baseUrl + '/api/home/getSchoolContributorNames/' + term);
  }

  /*Fields for FTA application*/
  getZonesHavingName(name: string) {
    return this.http.get<any[]>(this.baseUrl + '/api/home/getZoneByName/' + name);
  }
  getZonesHavingNameLike(name: string) {
    return this.http.get<any[]>(this.baseUrl + '/api/home/getZoneByNameLike/' + name);
  }

  checkUniqueZone(zone) {
    return this.http.get<any>(this.baseUrl + '/api/home/isZoneUnique/' + zone.zone + '/' + zone.code + '/' + zone.zoneId);
  }

  addZone(zone) {
    return this.http.post<any>(this.baseUrl + '/api/home/saveZone', zone);
  }

  editZone(zone) {
    return this.http.post<any>(this.baseUrl + '/api/home/saveZone', zone);
  }

  getDepartmentsHavingName(name: string) {
    return this.http.get<any[]>(this.baseUrl + '/api/home/getDepartmentByName/' + name);
  }

  addDepartment(dept) {
    return this.http.post<any>(this.baseUrl + '/api/home/saveDepartment', dept);
  }

  deleteZone(id: any) {
    return this.http.delete(this.baseUrl + '/api/home/deleteZone/' + id);
  }

  getAllZones() {
    return this.http.get(this.baseUrl + '/api/home/getAllZones');
  }

  getZoneById(id) {
    return this.http.get(this.baseUrl + '/api/home/getZoneById/' + id);
  }

  deleteDepartment(id: any) {
    return this.http.delete(this.baseUrl + '/api/home/deleteDepartment/' + id);
  }

  getAllDepartments() {
    return this.http.get(this.baseUrl + '/api/home/getAllDepartments');
  }

  getDepartmentById(id) {
    return this.http.get(this.baseUrl + '/api/home/getDepartmentById/' + id);
  }

  checkUniqueDepartment(department) {
    return this.http.get<any>(this.baseUrl + '/api/home/isDepartmentUnique/' + department.name + '/' + department.departmentId);
  }
  getUsersHavingNameLike(name: string) {
    return this.http.get<any[]>(this.baseUrl + '/api/home/getUsersByNameLike/8/' + name);
  }

  getDeptHeadsHavingNameLike(name: string) {
    return this.http.get<any[]>(this.baseUrl + '/api/home/getUsersByNameLike/9/' + name);
  }

  checkUniqueCentre(centre) {
    debugger;
    return this.http.get<any>(this.baseUrl + '/api/home/isCentreParamsUnique/' + centre.centreName + '/' + centre.centreCode );
  }

  getCentreById(id) {
    return this.http.get(this.baseUrl + '/api/home/getCentreById/' + id);
  }

  addCentre(centre) {
    debugger;
    return this.http.post<any>(this.baseUrl + '/api/home/saveCentre', centre);
  }

  getAllCentres() {
    return this.http.get(this.baseUrl + '/api/home/getAllCentres');
  }

  deleteCentre(id: any) {
    return this.http.delete(this.baseUrl + '/api/home/deleteCentre/' + id);
  }

  getDepartmentsHavingNameLike(centre: number, name: string) {
    return this.http.get<any[]>(this.baseUrl + '/api/home/getDepartmentsByNameLike/' + centre + '/' + name);
  }

  getUnmappedDepartmentsForCentre(centre: number, search: string){
    return this.http.get<any[]>(this.baseUrl + '/api/home/getUnMappedDepartmentsWithSearch/' + centre + '/' + search);
  }

  getMappedDepartmentsForCentre(centre: number) {
    return this.http.get<any[]>(this.baseUrl + '/api/home/getAllMappedDepartments/' + centre);
  }

  checkAlreadyMappedDepartment(form) {
    return this.http.get<any>(this.baseUrl + '/api/home/isDepartmentMappedToCentre/' + form.centreId + '/' + form.departmentId);
  }

  searchAllDepartmentHeads(search: string) {
    return this.http.get<any[]>(this.baseUrl + '/api/home/searchDepartmentHeads/' + search);
  }

  saveMappedDepartment(mappedDepartment) {
    debugger;
    return this.http.post<any>(this.baseUrl + '/api/home/saveCentreDepartment', mappedDepartment);
  }

  searchCentresByName(search: string) {
    debugger;
    return this.http.get<any[]>(this.baseUrl + '/api/home/searchCentresByName/' + search);
  }

  searchCentreDepartmentsByName(centerid: number, search: string) {
    debugger;
    return this.http.get<any[]>(this.baseUrl + '/api/home/searchCentreDepartmentByName/' + centerid + '/' + search);
  }

  raiseTicket(raisedTicket) {
    debugger;
    return this.http.post<any>(this.baseUrl + '/api/home/saveTicket', raisedTicket);
  }

  searchDpmsByName(search: string) {
    debugger;
    return this.http.get<any[]>(this.baseUrl + '/api/home/searchDpmsByName/' + search);
  }

  getAllTickets() {
    return this.http.get(this.baseUrl + '/api/home/listTickets');
  }

  deleteTicket(id: any) {
    return this.http.delete(this.baseUrl + '/api/home/deleteTicket/' + id);
  }

  getNonMappedDPMs(search: any) {
    return this.http.get<any[]>(this.baseUrl + '/api/home/searchNonMappedDpmsByName/' + search);
  }
  
  getFieldTrips() {
    return this.http.get(this.baseUrl + '/api/home/getAllTrips/20191129');
  }
  
  getDriverAttendance() {
    return this.http.get<any[]>(this.baseUrl + '/api/home/getAllAttendance');
  }
   
  getDriverAttendanceBwDates(range) {
    debugger;
    return this.http.post<any>(this.baseUrl + '/api/home/getAttendanceBwDates', range );
  }

  getTripsBwDates(form: any) {
    debugger;
    return this.http.post<any>(this.baseUrl + '/api/home/getTripsBwDates', form );
  }
}
