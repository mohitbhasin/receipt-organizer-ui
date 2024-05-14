import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiptFilterComponent } from './receipt-filter.component';

describe('ReceiptFilterComponent', () => {
  let component: ReceiptFilterComponent;
  let fixture: ComponentFixture<ReceiptFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceiptFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReceiptFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
