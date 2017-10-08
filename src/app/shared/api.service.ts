import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  private setHeaders(): Headers {
    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
    return new Headers(headersConfig);
  }
  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${environment.api_url}${path}`,
      JSON.stringify(body),
      {headers: this.setHeaders()}
    )
    .catch(this.formatErrors)
    .map((res: Response) => res.json());
  }

  private formatErrors(error: any) {
    return Observable.throw(error.json());
  }
}
