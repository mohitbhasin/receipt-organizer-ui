import { Component } from '@angular/core';
import { ReceiptService } from '../receipt.service';
import {MatListModule} from '@angular/material/list';
import {MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-receipt-view',
  standalone: true,
  templateUrl: './receipt-view.component.html',
  styleUrl: './receipt-view.component.scss',
  imports: [MatListModule, MatTableModule],
})
export class ReceiptViewComponent {
  displayedColumns: string[] = ['id', 'receipt', 'date'];
  data: any;
  title: String;

  constructor(private service: ReceiptService) {
    this.title = "Displaying Receipts"
  }

  ngOnInit() {
    this.service.findAll().subscribe(response => {
      this.data = response;
    });
  }
}
