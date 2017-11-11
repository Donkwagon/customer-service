import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StageNodeComponent } from './stage-node.component';

describe('StageNodeComponent', () => {
  let component: StageNodeComponent;
  let fixture: ComponentFixture<StageNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StageNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StageNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
