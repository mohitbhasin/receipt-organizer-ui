import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReceiptViewComponent } from './components/receipt-view/receipt-view.component';
import { ReceiptUploadComponent } from './components/receipt-upload/receipt-upload.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    ReceiptViewComponent, 
    ReceiptUploadComponent, 
    MatDividerModule, 
    MatListModule,
    MatGridListModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'receipt-organizer-ui';
}
