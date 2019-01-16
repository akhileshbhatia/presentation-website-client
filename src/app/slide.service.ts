import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { SlideInfo } from './SlideInfo';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders(
    { 'Content-Type': 'application/json' }
  )
};

@Injectable({
  providedIn: 'root'
})

export class SlideService {
  private baseUrl = "http://localhost:4000/api";

  constructor(private http: HttpClient) {

  }

  public getSlide(id: string): Observable<SlideInfo> {
    return this.http.get(this.baseUrl + "/slide/" + id, httpOptions)
      .pipe(
        map(SlideInfo.createInstance)
      )
  }
}
