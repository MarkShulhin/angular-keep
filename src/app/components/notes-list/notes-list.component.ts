import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { Note } from '../../interfaces/note';

@Component({
  selector: 'notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {
  public notes: Note[];
  @Input() isArchivedNotesAllowed: boolean;
  
  constructor(private noteService: NoteService) {
    this.noteChange = this.noteChange.bind(this);
  }

  ngOnInit() {
    this.getNotes();
  }

  getNotes(): void {
    this.noteService.getNotes()
      .subscribe(notes => {this.notes = notes;});
  }

  noteChange(note: Note) {
    this.noteService.updateNote(note)
      .subscribe(() => this.getNotes());
  };
}
