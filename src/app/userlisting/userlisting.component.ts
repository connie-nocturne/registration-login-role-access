import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { UpdatePopupComponent } from '../update-popup/update-popup.component';

@Component({
  selector: 'app-userlisting',
  templateUrl: './userlisting.component.html',
  styleUrls: ['./userlisting.component.css']
})
export class UserlistingComponent {

  constructor(private service: AuthService, private dialog: MatDialog) {
    this.LoadUser();
  }
  
  userList: any;
  dataSource: any;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  LoadUser() {
    this.service.GetAll().subscribe(res => {
      this.userList = res;
      this.dataSource = new MatTableDataSource(this.userList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  displayedColumns: string[] = ['username', 'name', 'email', 'role', 'status', 'action'];

  UpdateUser(code: any) {
    this.dialog.open(UpdatePopupComponent, {
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '500ms',
      width: '50%',
      data: {
        userCode: code
      }
    })
  }

  openDialog() {

  }
}
