import { Component, ElementRef, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DogDialogComponent } from '../dog-dialog/dog-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  menuOptions: string[] = ['Dog', 'Cat'];

  constructor(private dialog: MatDialog) {}

  openDogDialog(option: string): void {
    const dialogRef = this.dialog.open(DogDialogComponent, {
      width: '900px',
      height: '900px',
      data: { message: 'Hello, world!'}
    });
  }

  onMenuItemClick(option: string) {
    if (option === 'Dog') {
      this.openDogDialog(option);
      console.log('Selected option:', option);
    } else {
      console.log('Selected option:', option);
    }
  }
}
