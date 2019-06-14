import { Component, OnInit } from '@angular/core';
import {AppsListService} from './apps-list.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'apps-list',
  templateUrl: './apps-list.component.html',
  styleUrls: ['./apps-list.component.css']
})
export class AppsListComponent implements OnInit {

  apps: Response;

  constructor(private service: AppsListService) {

  }

  ngOnInit() {
    
    this.service.getAppsList().subscribe(x => {
      this.apps = x;
    },
    err=>{
      debugger;
      console.log(err);
      alert(err);
    });
  }
}
