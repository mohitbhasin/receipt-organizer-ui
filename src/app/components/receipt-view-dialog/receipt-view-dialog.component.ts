import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogContent, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { Item } from '../../models/item';

@Component({
  selector: 'app-receipt-view-dialog',
  standalone: true,
  imports: [MatDialogContent, MatButtonModule, MatDialogModule],
  templateUrl: './receipt-view-dialog.component.html',
  styleUrl: './receipt-view-dialog.component.scss'
})
export class ReceiptViewDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ReceiptViewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public items: Item[],
  ) {}
}
