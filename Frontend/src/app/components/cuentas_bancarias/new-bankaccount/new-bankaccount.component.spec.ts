import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBankaccountComponent } from './new-bankaccount.component';

describe('NewBankaccountComponent', () => {
  let component: NewBankaccountComponent;
  let fixture: ComponentFixture<NewBankaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewBankaccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewBankaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
