import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Note } from '../interfaces/note';
import { NoteService } from '../services/note.service';

@Injectable()
export class ArchivedNotesResolver implements Resolve<Array<Note>> {
  private notes: Note[];

  constructor(private noteService: NoteService) {}

  async resolve() {
    this.notes = await this.noteService.getNotes().toPromise();

    return this.notes.filter(note => note.isArchived);
  }

}