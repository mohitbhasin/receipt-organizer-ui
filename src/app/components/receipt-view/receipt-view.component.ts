import { Component, ViewChild} from '@angular/core';
import { ReceiptService } from '../../services/receipt.service';
import {MatListModule} from '@angular/material/list';
import {MatTableModule, MatTableDataSource } from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { Receipt } from '../../models/receipt';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { ReceiptUploadDialogComponent } from '../receipt-upload-dialog/receipt-upload-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-receipt-view',
  standalone: true,
  templateUrl: './receipt-view.component.html',
  styleUrl: './receipt-view.component.scss',
  imports: [MatListModule, MatTableModule, MatPaginatorModule, ScrollingModule, MatCardModule],
})
export class ReceiptViewComponent {
  displayedColumns: string[] = ['id', 'receipt', 'date'];
  title: String;
  receipts: Receipt[] = [];
  items = Array.from({length: 1000}).map((_, i) => `Item #${i}`);
  
  ELEMENT_DATA: Element[] = [];
  dataSource!: MatTableDataSource<Receipt>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(private service: ReceiptService, private dialog: MatDialog) {
    this.title = "Displaying Receipts"
  }

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

  display(receipt: Receipt) {
    console.log(receipt.id);
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
