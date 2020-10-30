import { Injectable } from '@angular/core';
import { map } from 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
// import { map } from 'rxjs/operators';
import { Album } from './album';
import { Product } from './product';
@Injectable()
export class ProductService {
  private _albumUrl = "../assets/album.json";
  private _productsUrl = '../assets/products.json';
  // constructor(private _http: Http) { }

  constructor(private _http: Http) { }

  getAlbum (id: number): Observable<Album> {
    return this._http.get(this._albumUrl).pipe(
      map(response => <Album>response.json())
    );
    // return this._http.get(this._albumUrl).map((response) => <Album>response.json());
  }

  getProducts(): Observable<Product[]> {
    return this._http.get(this._productsUrl).map((response) => <Product[]>response.json());
    // return this._http.get(this._productsUrl).pipe(
    //   map(response => <Product[]>response.json())
    // );
  }

}
