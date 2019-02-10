import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../../services/note.service';
import { Note } from '../../../interfaces/note';

@Component({
  selector: 'note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.scss']
})
export class NoteCreateComponent implements OnInit {
  public noteTitle: string;
  public noteDescription: string;

  constructor(private NoteService: NoteService) { }

  onSubmit() {
    const newNote = {
      title: this.noteTitle,
      description: this.noteDescription,
      isDone: false,
      isArchived: false,
    };
    this.NoteService.addNote(newNote as Note)
      .subscribe(note => console.log(note));
  }

  ngOnInit() {
  }
}
