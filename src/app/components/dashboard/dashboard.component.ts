import { Component, OnInit } from '@angular/core';
import { Note } from '../../interfaces/note';
import { NoteService } from '../../services/note.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public notes: Note[] = [];
  constructor(
    private noteService: NoteService,
    private route: ActivatedRoute,
    public router: Router,
  ) { }

  ngOnInit() {
    this.notes = this.route.snapshot.data.notes;
  }

  addedNote(newNote: Note): void {
    this.noteService.addNote(newNote)
      .subscribe((addedNote) => {this.notes = this.notes.concat(addedNote)});    
  }

  deleteNote = (note: Note): void => {
    this.notes = this.notes.filter(n => n !== note);
    this.noteService.deleteNote(note)
      .subscribe();
  }

  noteChange = (note: Note): void => {
    const currentNote = this.notes.find((currentNote) => currentNote.id === note.id);
    const noteIndex = this.notes.indexOf(currentNote);
    const newNotes = [...this.notes];
    newNotes[noteIndex] = note;
    this.notes = newNotes;

    this.noteService.updateNote(note)
      .subscribe();
  };
}
