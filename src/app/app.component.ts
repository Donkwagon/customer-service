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

  constructor(private flowService: FlowService) {
  }

  ngOnInit() {
    this.newFlow = new Flow();
  }

  createFlow() {
    this.flowService.createFlow(this.newFlow).then(res => {
      if (res) {
        console.log(res);
      }
    });
  }
}
