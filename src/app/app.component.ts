import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReceiptViewComponent } from './components/receipt-view/receipt-view.component';
import { ReceiptUploadComponent } from './components/receipt-upload/receipt-upload.component';
import { ReceiptUploadDialogComponent } from './components/receipt-upload-dialog/receipt-upload-dialog.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    ReceiptViewComponent, 
    ReceiptUploadComponent,
    ReceiptUploadDialogComponent,
    MatDividerModule, 
    MatListModule,
    MatGridListModule,
    MatCardModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'receipt-organizer-ui';
}
