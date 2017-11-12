import { Component, OnInit, Input } from '@angular/core';
import { Stage } from './../../@core/classes/stage';
import { StageService } from './../../@core/services/stage.service';

@Component({
  selector: 'app-stage-editor',
  templateUrl: './stage-editor.component.html',
  styleUrls: ['./stage-editor.component.scss'],
  providers: [ StageService]
})
export class StageEditorComponent implements OnInit {

  editorContent: any;
  @Input()
  stage: any;

  constructor(private stageService: StageService) { }

  ngOnInit() {
    this.editorContent = this.stage.content;
  }


  submit() {
    this.stage.content = this.editorContent;
    this.stageService.updateStage(this.stage);
  }

}
