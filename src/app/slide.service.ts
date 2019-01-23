import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { SlideInfo } from './SlideInfo';
import { map } from 'rxjs/operators';

const options = {
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

  public getSlide(id: number): Observable<SlideInfo> {
    return this.http.get<SlideInfo>(this.baseUrl + "/slide/" + id, options)
    // .pipe(
    //   map(SlideInfo.createInstance)
    // )
  }
}
