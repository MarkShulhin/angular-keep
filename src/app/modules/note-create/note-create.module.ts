import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteCreateComponent } from './note-create/note-create.component';
import { MaterialComponentsModule } from '../material-components/material-components.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NoteCreateComponent,
  ],
  imports: [
    CommonModule,
    MaterialComponentsModule,
    FormsModule
  ],
  exports: [
    NoteCreateComponent,
  ]
})
export class NoteCreateModule { }
