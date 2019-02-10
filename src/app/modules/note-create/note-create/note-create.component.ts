import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.scss']
})
export class NoteCreateComponent implements OnInit {
  public noteTitle: string;
  public noteDescription: string;

  constructor() { }

  onSubmit() {
    
  }

  ngOnInit() {
  }

}
