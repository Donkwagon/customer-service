import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Flow } from './../@core/classes/flow';
import { FlowService } from './../@core/services/flow.service';

import { Stage } from './../@core/classes/stage';
import { StageService } from './../@core/services/stage.service';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.scss'],
  providers: [ FlowService, StageService ]
})
export class StageComponent implements OnInit {

  sub: any;
  stageId: string;

  stage: Stage;

  constructor(
    private route: ActivatedRoute,
    private flowService: FlowService,
    private stageService: StageService
  ) {
    this.sub = this.route.params.subscribe(params => {
      this.stageId = params['stageId'];
      this.getStage(this.stageId);
    });
  }

  ngOnInit() {
  }

  getStage(id) {
    this.stageService.getStage(id).then(res => {
      if (res) {
        console.log(res);
        this.stage = res;
      }
    });
  }

}
