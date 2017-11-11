import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Flow } from './../@core/classes/flow';
import { FlowService } from './../@core/services/flow.service';

import { Stage } from './../@core/classes/stage';
import { StageService } from './../@core/services/stage.service';

@Component({
  selector: 'app-flow',
  templateUrl: './flow.component.html',
  styleUrls: ['./flow.component.scss'],
  providers: [ FlowService, StageService ]
})
export class FlowComponent implements OnInit {
  id: string;
  sub: any;

  flow: Flow;

  newStage: Stage;

  constructor(
    private route: ActivatedRoute,
    private flowService: FlowService,
    private stageService: StageService
  ) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getFlow(this.id);
      this.newStage = new Stage(this.id); // new stage needs parent id
    });
  }

  getFlow(id) {
    this.flowService.getFlow(id).then(res => {
      if (res) {
        console.log(res);
        this.flow = res;
      }
    });
  }

  createStage() {
    this.stageService.createStage(this.newStage).then(res => {
      if (res) {
        console.log(res);
      }
    });
  }

}
