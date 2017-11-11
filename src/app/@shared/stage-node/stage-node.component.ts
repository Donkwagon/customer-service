import { Component, OnInit, Input } from '@angular/core';
import { Stage } from './../../@core/classes/stage';

@Component({
  selector: 'app-stage-node',
  templateUrl: './stage-node.component.html',
  styleUrls: ['./stage-node.component.scss']
})
export class StageNodeComponent implements OnInit {

  @Input()
  stage: any;

  constructor(
  ) {
  }

  ngOnInit() {
  }

}
