import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule, HttpClient, HttpResponse, HttpRequest } from '@angular/common/http';
import { AppsListService } from './apps-list.service';
import { BrowserModule } from '@angular/platform-browser';

describe('AppsListService', () => {
  beforeEach(async () => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [AppsListService]
    });
    var http;
    http = TestBed.get(HttpClient);
  });
  it('should be created', () => {
    const service: AppsListService = TestBed.get(AppsListService);
    expect(service).toBeTruthy();
  });

  it('should connect to server', async (done) => {
    inject([HttpClient], fakeAsync((http: HttpClient) => {

      var data2;

      const req = new HttpRequest('GET', "http://localhost:4000/api/apps", {
        reportProgress: true
      });

      http.request(req).toPromise().then((x)=> {
        data2 = x;
      });
      done();
    }))();
  })
});
