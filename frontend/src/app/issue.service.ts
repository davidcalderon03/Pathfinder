import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  private loggedIn: Boolean = true; //MUST RESOLVE
  private username: String = "dc"; //MUST RESOLVE
  readonly ROOT_URL = 'http://localhost:4000'

  constructor(private http: HttpClient) { 
  }

  setLoggedIn(loggedIn: Boolean) {
    this.loggedIn = loggedIn;
  }
  getLoggedIn() {
    return this.loggedIn;
  }
  setUsername(username: String) {
    this.username = username;
  }
  getUsername(){
    return this.username;
  }

  get(uri: String) {
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  }
  post(uri: String, payload: Object) {
    return this.http.post(`${this.ROOT_URL}/${uri}`, payload);
  }
}