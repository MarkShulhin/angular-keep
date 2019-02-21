import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../../interfaces/note';

@Component({
  selector: 'archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  @Input() notes: Note[];
  @Input() noteChange: Function;
  @Input() deleteNote: Function;

  constructor() { }

  ngOnInit() {
  }

}
