import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReceiptViewComponent } from './receipt-view/receipt-view.component';
import { ReceiptUploadComponent } from './receipt-upload/receipt-upload.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReceiptViewComponent, ReceiptUploadComponent, MatDividerModule, MatListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'receipt-organizer-ui';
}
