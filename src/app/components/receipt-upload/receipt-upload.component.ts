import { Component, Inject } from '@angular/core';
import { ReceiptService } from '../../services/receipt.service';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button'
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import { ReceiptUploadDialogComponent } from '../receipt-upload-dialog/receipt-upload-dialog.component';
import { Receipt } from '../../models/receipt';
import { MAT_DIALOG_DATA, MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-receipt-upload',
  standalone: true,
  imports: [
    MatCardModule,
    ReceiptUploadDialogComponent
  ],
  templateUrl: './receipt-upload.component.html',
  styleUrl: './receipt-upload.component.scss'
})

export class ReceiptUploadComponent {
  isUploaded: boolean;
  animal!: string;
  constructor(private service: ReceiptService, private dialog: MatDialog) {
    this.isUploaded = false;
  }

  onChangeFile(event: any) {
    if(event.target.files.length > 0) {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append ('file', file);
      this.service.uploadImage(formData).subscribe((response => {
        this.isUploaded = true;
        this.openDialog(response);
      }));
    }
  }
  openDialog(receipt: Receipt) {
    const dialogRef = this.dialog.open(ReceiptUploadDialogComponent, {
      data: receipt
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result==true) {
        console.log("Viewing Receipt "+ result);
      } else if(result>0) {
        console.log("discarding receipt with id: "+ result);
        this.service.deleteById(result).subscribe((response => {
        }));
        console.log("receipt discarded");
      }
    });
  }
  
}