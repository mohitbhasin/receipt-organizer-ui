import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptViewDialogComponent } from './receipt-view-dialog.component';

describe('ReceiptViewDialogComponent', () => {
  let component: ReceiptViewDialogComponent;
  let fixture: ComponentFixture<ReceiptViewDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceiptViewDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReceiptViewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
