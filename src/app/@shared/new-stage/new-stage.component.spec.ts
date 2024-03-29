import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStageComponent } from './new-stage.component';

describe('NewStageComponent', () => {
  let component: NewStageComponent;
  let fixture: ComponentFixture<NewStageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewStageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
