import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogContent, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { Receipt } from '../../models/receipt';

export interface DialogData {
  animal: string;
  name: string;
}


@Component({
  selector: 'app-receipt-upload-dialog',
  standalone: true,
  imports: [MatDialogContent, MatButtonModule, MatDialogModule],
  templateUrl: './receipt-upload-dialog.component.html',
  styleUrl: './receipt-upload-dialog.component.scss'
})
export class ReceiptUploadDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ReceiptUploadDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Receipt,
  ) {}

  
}
