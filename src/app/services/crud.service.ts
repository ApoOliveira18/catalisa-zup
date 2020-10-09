import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor(private http: HttpClient) {}

  public getFotos(): Observable<any> {
    return this.http.get(
      `https://hopeful-bardeen-451fdc.netlify.app/api/all.json`
    );
  }
}
