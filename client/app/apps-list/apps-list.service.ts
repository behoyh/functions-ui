import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import 'rxjs/operators';
import { NewAppModel } from './models/NewAppModel';
import { Observable } from 'rxjs';
@Injectable()
export class AppsListService {
  url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  public getAppsList(): Observable<Response> {
    const req = new HttpRequest('GET', "http://localhost:4000/api/apps", {
      reportProgress: true,

    });

    var headers = this.GetHttpHeaders();

    return this.http.get("http://localhost:4000/api/apps", { headers: headers }).pipe(
      map((obj: Response) => {
        return obj;
      }));
  }
  public addAppsList(data: NewAppModel): Observable<Response> {
    var url = '/api/apps/' + encodeURIComponent(data.app.name);
    var method = 'POST'
    if (data.edit) {
      method = 'PATCH';
    }

    var headers = this.GetHttpHeaders();

    var req = new HttpRequest(method, url, data, { headers: headers });

    return this.http.request(req).pipe(
      map((obj: Response) => {
        obj
      }));

  }

  private GetHttpHeaders() : HttpHeaders{
    var headers = new HttpHeaders()
    headers.append("Accept", "*/*");
    headers.append("User-Agent", "PostmanRuntime/7.15.0");
    headers.append("Host", "localhost:4000");
    headers.append("Connection", "keep-alive");
    headers.append("Connection","keep-alive");

    return headers;
  }
}
