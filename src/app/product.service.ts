import { Injectable } from '@angular/core';
// import { map } from 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Album } from './album';
@Injectable()
export class ProductService {
  private _albumUrl = "../assets/album.json";
  // constructor(private _http: Http) { }

  constructor(private _http: Http) { }

  getAlbum (id: number): Observable<Album> {
    return this._http.get(this._albumUrl).pipe(
      map(response => response.json())
    );
  }

}
