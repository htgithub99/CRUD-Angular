import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { catchError, map } from 'rxjs/operators';
import * as _ from 'lodash';


@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor(private http: HttpClient) { }

  apisUrl = 'http://localhost:3000/products'

  gets(params?: {}): Observable<any> {
    return this.http.get(this.apisUrl).pipe(
      map((result: any) => {
        return _.assign(
          {},
          {
            items: result,
          }
        );
      }),
      catchError((error) => {
        throw error;
      })
    );
  }

  getByid(id: number): Observable<any> {
    return this.http.get(this.apisUrl + '/' + id)
  }

  creates(datas: any) {
    return this.http.post(this.apisUrl, datas).pipe(
      map((result: any) => result)
    )
  }

  updates(datas: any): Observable<any> {
    return this.http.put(this.apisUrl + '/' + datas.id, datas)
  }

  deletes(id: number) {
    return this.http.delete(this.apisUrl + '/' + id).pipe(
      map((result: any) => result.data)
    );
  }
}
