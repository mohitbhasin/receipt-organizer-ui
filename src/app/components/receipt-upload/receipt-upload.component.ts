import { Component } from '@angular/core';
import { ReceiptService } from '../../services/receipt.service';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button'
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-receipt-upload',
  standalone: true,
  imports: [
    MatButtonModule, 
    MatCheckboxModule, 
    MatIconModule, 
    MatDividerModule, 
    MatCardModule
  ],
  templateUrl: './receipt-upload.component.html',
  styleUrl: './receipt-upload.component.scss'
})


export class ReceiptUploadComponent {
  constructor(private service: ReceiptService) {

  }

  onChangeFile(event: any) {
    if(event.target.files.length > 0) {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append ('file', file);
      this.service.uploadImage(formData).subscribe((res => {
        console.log(res);
      }));
    }
  }
}
