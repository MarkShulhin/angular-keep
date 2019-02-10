import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Note } from '../interfaces/note';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const notes: Note[] = [
      { 
        id: 11,
        title: 'Mr. Nice',
        description: 'Some description',
        isDone: false,
        isArchived: false,
      },
      { 
        id: 12,
        title: 'Narco',
        description: 'Some description',
        isDone: false,
        isArchived: false,
      },
      { 
        id: 13,
        title: 'Bombasto',
        description: 'Some description',
        isDone: false,
        isArchived: false,
      },
      { 
        id: 14,
        title: 'Celeritas',
        description: 'Some description',
        isDone: false,
        isArchived: false,
      },
      { 
        id: 15,
        title: 'Magneta',
        description: 'Some description',
        isDone: false,
        isArchived: false,
      },
      { 
        id: 16,
        title: 'RubberMan',
        description: 'Some description',
        isDone: false,
        isArchived: false,
      },
      { 
        id: 17,
        title: 'Dynama',
        description: 'Some description',
        isDone: false,
        isArchived: false,
      },
      { 
        id: 18,
        title: 'Dr IQ',
        description: 'Some description',
        isDone: false,
        isArchived: false,
      },
      { 
        id: 19,
        title: 'Magma',
        description: 'Some description',
        isDone: false,
        isArchived: false,
      },
      { 
        id: 20,
        title: 'Tornado',
        description: 'Some description',
        isDone: false,
        isArchived: false,
      }
    ];
    return {notes};
  }

  genId(notes: Note[]): number {
    return notes.length > 0 ? Math.max(...notes.map(note => note.id)) + 1 : 11;
  }
}
