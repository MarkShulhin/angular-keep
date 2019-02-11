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
  public isArchivedNotesAllowed: boolean = false;
  
  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.getNotes();
  }

  getNotes(): void {
    this.noteService.getNotes()
      .subscribe(notes => this.notes = notes);
  }

  public DoneChange(note: Note) {
    this.noteService.updateNote(note)
      .subscribe(note => console.log(note));
  };
}
