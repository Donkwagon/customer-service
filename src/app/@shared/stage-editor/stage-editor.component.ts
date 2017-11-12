import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stage-editor',
  templateUrl: './stage-editor.component.html',
  styleUrls: ['./stage-editor.component.scss']
})
export class StageEditorComponent implements OnInit {

  editorContent: any;
  constructor() { }

  ngOnInit() {
    this.editorContent = "sdf";
  }

}
