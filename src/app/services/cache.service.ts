import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
private cache= new Map<string,any>();
  constructor() { }

  get(key:string):any{
    return this.cache.get(key);
  }
  set(key:string , value:any): void{
    this.cache.set(key,value);
  }
}
