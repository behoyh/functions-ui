import { TestBed, inject, fakeAsync, tick, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule, HttpClient, HttpResponse, HttpRequest } from '@angular/common/http';
import { AppsListService } from './apps-list.service';
import { BrowserModule } from '@angular/platform-browser';
import { createOfflineCompileUrlResolver } from '@angular/compiler';
import { NewAppModel } from './models/NewAppModel';
import { HttpModule, Http } from '@angular/http';
import { platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

describe('AppsListService', () => {
  beforeEach(async () => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000000;
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        BrowserModule,
        HttpClientModule,
        HttpClientTestingModule,
        platformBrowserDynamicTesting()
      ],
      providers: [AppsListService]
    });
  });
  it('should be created', () => {
    const service: AppsListService = TestBed.get(AppsListService);
    expect(service).toBeTruthy();
  });

  it('should connect to server', async (done) => {
    const service: AppsListService = TestBed.get(AppsListService);

    service.getAppsList().subscribe(x => {
      expect(x).toBe(new Response());
      done();
    },
      err => {
        console.error(err);
        done();
      },
      () => {
        done();
      });
  });

  it('should add an app', async (done) => {
    const service: AppsListService = TestBed.get(AppsListService);

    var data = new NewAppModel()
    {

    };

    data.app
    service.addAppsList(data).subscribe(x => {
      expect(x).toBe(new Response());
      done();
    },
      err => {
        console.error(err);
        done();
      },
      () => {
        done();
      });
  });
});
