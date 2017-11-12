import { Component, OnInit, Input } from '@angular/core';
import { Stage } from './../../@core/classes/stage';
import { StageService } from './../../@core/services/stage.service';

@Component({
  selector: 'app-stage-node',
  templateUrl: './stage-node.component.html',
  styleUrls: ['./stage-node.component.scss'],
  providers: [ StageService]
})
export class StageNodeComponent implements OnInit {

  @Input()
  stage: Stage;
  stages: Stage[];

  displayNewForm: boolean;

  constructor(
    private stageService: StageService
  ) {
    this.stages = [];
    this.displayNewForm = false;
  }

  ngOnInit() {
    this.getSubStages(this.stage._id);
  }

  getSubStages(parentId) {
    this.stageService.getStagesByParent(parentId).then(res => {
      if (res) {
        this.stages = res;
      }
    });
  }

  toggleForm() {
    this.displayNewForm ? this.displayNewForm = false : this.displayNewForm = true;
  }

}
