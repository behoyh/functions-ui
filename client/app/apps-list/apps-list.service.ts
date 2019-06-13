import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { map } from 'rxjs/operators';
import 'rxjs/operators';
import { NewAppModel } from './models/NewAppModel';
@Injectable()
export class AppsListService {
  url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  public getAppsList() : any {
    const req = new HttpRequest('GET', "http://localhost:4000/api/apps", {
      reportProgress: true
    });

    return this.http.get("http://localhost:4000/api/apps").pipe(
      map((obj:Response) => {
        obj
      }));
  }
  public addAppsList(data: NewAppModel, edit: boolean) : any {
    var url = '/api/apps/' + encodeURIComponent(data.app.name);
    var method = 'POST'
    if(edit)
    {
      method = 'PATCH';
    }

    var req = new HttpRequest(method,url,data);

    return this.http.request(req).pipe(
      map((obj:Response) => {
        obj
      }));

  }
}
