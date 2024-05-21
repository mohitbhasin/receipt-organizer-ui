import { Component, ViewChild} from '@angular/core';
import { ReceiptService } from '../../services/receipt.service';
import {MatListModule} from '@angular/material/list';
import {MatTableModule, MatTableDataSource } from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { Receipt } from '../../models/receipt';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { MatDialog } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { Item } from '../../models/item';
import { ReceiptViewDialogComponent } from '../receipt-view-dialog/receipt-view-dialog.component';

@Component({
  selector: 'app-receipt-view',
  standalone: true,
  templateUrl: './receipt-view.component.html',
  styleUrl: './receipt-view.component.scss',
  imports: [MatListModule, MatTableModule, MatPaginatorModule, ScrollingModule, MatCardModule],
})
export class ReceiptViewComponent {
  displayedColumns: string[] = ['id', 'desc', 'date'];
  title: String;
  receipts: Receipt[] = [];
  items: Item[] = [];
  
  ELEMENT_DATA: Element[] = [];
  dataSource!: MatTableDataSource<Receipt>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(private service: ReceiptService, private dialog: MatDialog) {
    this.title = "Displaying Receipts"
  }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.service.getAll().subscribe(response => {
      this.dataSource = new MatTableDataSource<Receipt>(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource._updateChangeSubscription();
    });
  }

  displayByReceiptId(id: number){
    this.service.getItemsByReceiptId(id).subscribe(result => {
      this.items = result;
      const dialogRef = this.dialog.open(ReceiptViewDialogComponent, {
        data: this.items
      });
      dialogRef.afterClosed().subscribe(result => {
        if(result==true) {
          console.log("Viewing Receipt "+ result);
        } else if(result==false) {
          console.log("discarding receipt with id: "+ id);
          this.service.deleteById(id).subscribe((response => {
            this.refresh();
          }));
          console.log("receipt discarded");
        }
      });
    })
  }
}
