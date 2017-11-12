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

  stage: Stage;
  flow: Flow;
  stages: Stage[];

  newMessage: any;
  messages: any[];
  scripted: any[];

  constructor(
    private route: ActivatedRoute,
    private flowService: FlowService,
    private stageService: StageService
  ) {
    this.sub = this.route.params.subscribe(params => {
      this.stageId = params['stageId'];
      this.getStage(this.stageId);
      this.getFlow(this.stageId);
      this.getSubStages(this.stageId);
      this.messages = [];
    });

    this.scripted = [];
  }

  ngOnInit() {

    this.newMessage = {
      type: 'out',
      content: ''
    };

  }

  getStage(id) {
    this.stageService.getStage(id).then(res => {
      if (res) {
        console.log(res);
        this.stage = res;
      }
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


  getSubStages(parentId) {
    this.stageService.getStagesByParent(parentId).then(res => {
      if (res) {
        this.stages = res;
      }
    });
  }

  keyDownFunction(event) {
    if (event.keyCode === 13) {
      const text = this.newMessage.content;
      this.messages.push(this.newMessage);
      let response = null;

      if ( text.includes('cancel') ) {
        response = {
          type: 'in',
          content: 'Ok here is the information about flight cancellation',
          link: '/c/5a0880a0b14d8814e75e4de0'
        };
      }

      if ( text.includes('luggage') ) {
        response = {
          type: 'in',
          content: 'Ok here is the link to luggage information',
          link: '/c/5a08807db14d8814e75e4ddf'
        };
      }

      if (response) {
        this.messages.push(response);
      }

      this.newMessage = {
        type: 'out',
        content: ''
      };
    }
  }


}
