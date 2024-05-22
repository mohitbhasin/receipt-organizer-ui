import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptUploadDialogComponent } from './receipt-upload-dialog.component';

describe('ReceiptUploadDialogComponent', () => {
  let component: ReceiptUploadDialogComponent;
  let fixture: ComponentFixture<ReceiptUploadDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceiptUploadDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReceiptUploadDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
