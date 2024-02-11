import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dog-dialog',
  templateUrl: './dog-dialog.component.html',
  styleUrls: ['./dog-dialog.component.css']
})
export class DogDialogComponent {
  constructor(public dialogRef: MatDialogRef<DogDialogComponent>, @Inject(MAT_DIALOG_DATA) public data:any) {}

  message  = this.data.message;

  onCloseClick(): void {
    this.dialogRef.close();
  }
}
