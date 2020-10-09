import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CrudService2 {
  constructor(private http: HttpClient) {}

  public getFotos(): Observable<any> {
    return this.http.get(`https://api.github.com/users/ApoOliveira18/repos`);
  }
}
