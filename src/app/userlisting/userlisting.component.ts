import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-userlisting',
  templateUrl: './userlisting.component.html',
  styleUrls: ['./userlisting.component.css']
})
export class UserlistingComponent {

  constructor(private service: AuthService) {
    this.LoadUser();
  }
  
  userList: any;
  dataSource: any;

  LoadUser() {
    this.service.GetAll().subscribe(res => {
      this.userList = res;
      this.dataSource = new MatTableDataSource(this.userList);
    });
  }

  displayedColumns: string[] = ['username', 'name', 'email', 'role', 'status', 'action'];

  UpdateUser(code: any) {

  }
}
