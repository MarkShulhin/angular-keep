import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NoteEditComponent } from './components/note-edit/note-edit.component';
import { NotesResolver } from './resolvers/notes.resolver';
import { ArchivedNotesResolver } from './resolvers/archived-notes.resolver';

const routes: Routes = [
  { 
    path: '',
    component: DashboardComponent,
    resolve: { notes: NotesResolver }
  },
  { 
    path: 'archive',
    component: DashboardComponent,
    resolve: { notes: ArchivedNotesResolver }
  },
  { path: 'edit/:id', component: NoteEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    NotesResolver,
    ArchivedNotesResolver,
  ]
})
export class AppRoutingModule { }
