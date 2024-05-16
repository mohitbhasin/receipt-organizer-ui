import { Component, AfterViewInit, ViewChild} from '@angular/core';
import { ReceiptService } from '../../services/receipt.service';
import {MatListModule} from '@angular/material/list';
import {MatTableModule, MatTableDataSource } from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { Receipt } from '../../models/receipt';

@Component({
  selector: 'app-receipt-view',
  standalone: true,
  templateUrl: './receipt-view.component.html',
  styleUrl: './receipt-view.component.scss',
  imports: [MatListModule, MatTableModule, MatPaginatorModule],
})
export class ReceiptViewComponent {
  displayedColumns: string[] = ['id', 'receipt', 'date'];
  title: String;
  receipts: Receipt[] = [];
  
  ELEMENT_DATA: Element[] = [];
  dataSource!: MatTableDataSource<Receipt>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {
    this.service.getAll().subscribe(response => {
      this.dataSource = new MatTableDataSource<Receipt>(response);
      this.dataSource.paginator = this.paginator;
    });
  }

  getReceipts(): void {
    this.service.getAll().subscribe({
      next: (data) => {
        this.receipts = data;
      },
      error: (e) => console.error(e)
    });
  }

  constructor(private service: ReceiptService) {
    this.title = "Displaying Receipts"
  }
}
