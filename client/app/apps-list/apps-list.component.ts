import { Component, OnInit } from '@angular/core';
import {AppsListService} from './apps-list.service';
@Component({
  selector: 'app-apps-list',
  templateUrl: './apps-list.component.html',
  styleUrls: ['./apps-list.component.css']
})
export class AppsListComponent implements OnInit {

  apps: [''];

  constructor(private service: AppsListService) {

  }

  ngOnInit() {
    this.service.getAppsList().subscribe(x =>
      this.apps = x
    );
  }
}
