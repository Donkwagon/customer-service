import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerStageComponent } from './customer-stage.component';

describe('CustomerStageComponent', () => {
  let component: CustomerStageComponent;
  let fixture: ComponentFixture<CustomerStageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerStageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
