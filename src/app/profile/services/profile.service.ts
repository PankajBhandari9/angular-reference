import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private httpClient: HttpClient) {}

  getProfile(): Observable<any> {
    return this.httpClient.get<any>('/api/profile');
  }
  createProfile(data: Profile): Observable<any> {
    return this.httpClient.post<any>('/api/profile', data);
  }
}
