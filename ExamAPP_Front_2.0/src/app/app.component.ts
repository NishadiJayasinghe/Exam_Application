import { Component } from '@angular/core';
import { AdminService } from './services/admin-service/admin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(public adminService: AdminService) {
    this.checkConnection();
  }

  private checkConnection() {
    this.adminService.checkConnection().subscribe(data => {
      console.log(data);
    }, err => {
      console.error("error");
    })
  }
}
