import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBankaccountComponent } from './edit-bankaccount.component';

describe('EditBankaccountComponent', () => {
  let component: EditBankaccountComponent;
  let fixture: ComponentFixture<EditBankaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBankaccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditBankaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
