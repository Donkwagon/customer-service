import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Flow } from './../@core/classes/flow';
import { FlowService } from './../@core/services/flow.service';


@Component({
  selector: 'app-flow',
  templateUrl: './flow.component.html',
  styleUrls: ['./flow.component.scss']
})
export class FlowComponent implements OnInit {
  id: string;
  sub: any;

  flow: Flow;

  constructor(
    private route: ActivatedRoute,
    private flowService: FlowService
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getFlow(this.id);
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

}
