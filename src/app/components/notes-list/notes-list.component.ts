import { Component, Input } from '@angular/core';
import { Note } from '../../interfaces/note';

@Component({
  selector: 'notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent {
  @Input() notes: Note[];
  @Input() noteChange: Function;
  @Input() deleteNote: Function;

  public searchTerm: string;
  
  constructor() { }
}
