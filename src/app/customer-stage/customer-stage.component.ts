import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Flow } from './../@core/classes/flow';
import { FlowService } from './../@core/services/flow.service';

import { Stage } from './../@core/classes/stage';
import { StageService } from './../@core/services/stage.service';

@Component({
  selector: 'app-customer-stage',
  templateUrl: './customer-stage.component.html',
  styleUrls: ['./customer-stage.component.scss'],
  providers: [ FlowService, StageService ]
})
export class CustomerStageComponent implements OnInit {

  sub: any;
  stageId: string;

  stages: Stage[];

  constructor(
    private route: ActivatedRoute,
    private flowService: FlowService,
    private stageService: StageService
  ) {
    this.sub = this.route.params.subscribe(params => {
      this.stageId = params['stageId'];
      this.getSubStages(this.stageId);
    });
  }

  ngOnInit() {
  }


  getSubStages(parentId) {
    this.stageService.getStagesByParent(parentId).then(res => {
      if (res) {
        this.stages = res;
      }
    });
  }


}
