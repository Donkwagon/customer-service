import { Component, OnInit } from '@angular/core';
import { Flow } from './@core/classes/flow';
import { FlowService } from './@core/services/flow.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ FlowService ]
})
export class AppComponent {

  newFlow: Flow;
  flows: Flow[];

  constructor(private flowService: FlowService) {
    this.flows = [];
  }

  ngOnInit() {
    this.newFlow = new Flow();
    this.getFlows();
  }

  createFlow() {
    this.flowService.createFlow(this.newFlow).then(res => {
      if (res) {
        console.log(res);
        this.flows.push(res);
      }
    });
  }

  getFlows() {
    this.flowService.getFlows().then(res => {
      if (res) {
        console.log(res);
        this.flows = res;
      }
    });
  }

  toggleFlowEmergency() {
    this.newFlow.emergency ? this.newFlow.emergency = false : this.newFlow.emergency = true;
  }
}
