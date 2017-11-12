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

  display: boolean;

  constructor(private stageService: StageService) {
    this.display = false;
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

  formDisplay() {
    this.display ? this.display = false : this.display = true;
  }


}
