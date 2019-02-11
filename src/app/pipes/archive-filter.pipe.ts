import { Pipe, PipeTransform } from '@angular/core';
import { Note } from '../interfaces/note';

@Pipe({
  name: 'archiveFilter'
})
export class ArchiveFilterPipe implements PipeTransform {

  transform(notes: Note[], isArchivedNotesAllowed?: boolean): Note[] {
    if (typeof isArchivedNotesAllowed !== 'boolean') return notes;
    return notes.filter(note => note.isArchived === isArchivedNotesAllowed);
  }

}
