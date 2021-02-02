import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl = environment.apiUrl;
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {

    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {

    return this.currentUserSubject.value;
  }

  login(user) {
    //  debugger
    // return this.http.post<any>(this.baseUrl+'/api/home/login', user);

    return this.http.post<any>(this.baseUrl + '/api/home/login', user)
      .pipe(map(user => {
        //   debugger
        //  if (user && user.token) {
        if (user) {
          debugger;
          localStorage.setItem('currentUser', JSON.stringify(user));
          localStorage.setItem('Userid', user.userid);
          localStorage.setItem('schooladmincontributorId', user.contributorId);
          localStorage.setItem('firstname', user.firstName);
          localStorage.setItem('centreId', user.centreId);
          this.currentUserSubject.next(user);
        }

        return user;
      }));

  }

  logout() {
    localStorage.removeItem('currentUser');

    this.currentUserSubject.next(null);

  }
}

export class User {
  id: number;
  roleName: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  token: string;

}
