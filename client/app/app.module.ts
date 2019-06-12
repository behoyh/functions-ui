import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppsListComponent } from './apps-list/apps-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AppsListService } from './apps-list/apps-list.service';

@NgModule({
  declarations: [
    AppComponent,
    AppsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [AppsListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
