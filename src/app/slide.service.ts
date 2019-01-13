import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders(
    { 'Content-Type': 'application/json' }
  )
};

@Injectable({
  providedIn: 'root'
})

export class SlideService {
  private actionUrl: string;

  constructor(private http: HttpClient) {
    this.actionUrl = "http://localhost:4000/api/slide/";
  }

  public getSlide<T>(id: string): Observable<T> {
    return this.http.get<T>(this.actionUrl + id, httpOptions);
  }
}
