import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { User } from '../models/user';
import { CacheService } from './cache.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'https://reqres.in/api/';

  constructor(private http: HttpClient, private cacheService: CacheService) {}

  getUsers(page: number): Observable<User[]> {
    const cacheKey = `users-page-${page}`;
    const cachedData = this.cacheService.get(cacheKey);

    if (cachedData) {
      return of(cachedData);
    } else {
      return this.http
        .get<any>(`${this.baseUrl}/users?page=${page}`)
        .pipe(tap((data) => this.cacheService.set(cacheKey, data)));
    }
  }

  getUser(id: number): Observable<any> {
    const cacheKey = `user-${id}`;
    const cachedData = this.cacheService.get(cacheKey);

    if (cachedData) {
      return of(cachedData);
    } else {
      return this.http
        .get<any>(`${this.baseUrl}/users/${id}`)
        .pipe(
          tap((data) => this.cacheService.set(cacheKey, data))
        );
    }
  }
}
