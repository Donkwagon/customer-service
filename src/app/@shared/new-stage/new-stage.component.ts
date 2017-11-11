import { Component, OnInit, Input } from '@angular/core';
import { Stage } from './../../@core/classes/stage';
import { StageService } from './../../@core/services/stage.service';

@Component({
  selector: 'app-new-stage',
  templateUrl: './new-stage.component.html',
  styleUrls: ['./new-stage.component.scss'],
  providers: [ StageService]
})
export class NewStageComponent implements OnInit {

  @Input()
  parent: any;

  newStage: Stage;

  constructor(private stageService: StageService) {
  }

  ngOnInit() {
    this.newStage = new Stage(this.parent);
  }
  
  createStage() {
    this.stageService.createStage(this.newStage).then(res => {
      if (res) {
        console.log(res);
      }
    });
  }


}
