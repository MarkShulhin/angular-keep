import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../../interfaces/note';
import { Router } from '@angular/router';

@Component({
  selector: 'note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  @Input() note: Note;
  @Input() noteChange: Function;
  @Input() deleteNote: Function;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onDelete(): void {
    this.deleteNote(this.note);
  }

  onArchive(): void {
    const newNote = {
      ...this.note,
      isArchived: !this.note.isArchived,
    }
    this.noteChange(newNote);
  }

  onDoneToggle(): void {
    const newNote = {
      ...this.note,
      isDone: !this.note.isDone,
    };
    this.noteChange(newNote);
  }

  toEditPage(): void {
    this.router.navigate([`/edit/${this.note.id}`]);
  }

}
