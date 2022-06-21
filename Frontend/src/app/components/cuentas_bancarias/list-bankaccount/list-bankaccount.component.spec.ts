import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBankaccountComponent } from './list-bankaccount.component';

describe('ListBankaccountComponent', () => {
  let component: ListBankaccountComponent;
  let fixture: ComponentFixture<ListBankaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBankaccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListBankaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
