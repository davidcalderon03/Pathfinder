import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  readonly ROOT_URL = 'http://localhost:4000'

  constructor(private http: HttpClient) { }

  get(uri: String) {
    return this.http.get(`${this.ROOT_URL}/${uri}`);
  }
  post(uri: String, payload: Object) {
    return this.http.post(`${this.ROOT_URL}/${uri}`, payload);
  }


}