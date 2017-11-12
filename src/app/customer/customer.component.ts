import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Flow } from './../@core/classes/flow';
import { FlowService } from './../@core/services/flow.service';

import { Stage } from './../@core/classes/stage';
import { StageService } from './../@core/services/stage.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
  providers: [ FlowService, StageService ]
})
export class CustomerComponent implements OnInit {
  flows: Flow[];

  constructor(
    private route: ActivatedRoute,
    private flowService: FlowService,
    private stageService: StageService
  ) {
  }

  ngOnInit() {
    this.getFlows();
  }

  getFlows() {
    this.flowService.getFlows().then(res => {
      if (res) {
        console.log(res);
        this.flows = res;
      }
    });
  }

}
