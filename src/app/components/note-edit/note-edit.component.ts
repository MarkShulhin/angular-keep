import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { Note } from '../../interfaces/note';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.scss']
})
export class NoteEditComponent implements OnInit {
  @Input() note: Note;

  constructor(
    private route: ActivatedRoute,
    private noteService: NoteService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.noteService.getNote(id)
      .subscribe(note => {this.note = note;});
  }

  goBack(): void {
    this.location.back();
  }

  delete(): void {
    this.noteService.deleteNote(this.note)
      .subscribe(() => this.goBack());
  }

  save(): void {
    this.noteService.updateNote(this.note)
      .subscribe(() => this.goBack());
  }
}
