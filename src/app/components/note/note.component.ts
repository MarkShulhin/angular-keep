import { Component, OnInit, Input } from '@angular/core';
import { Note } from '../../interfaces/note';
import { Router } from '@angular/router';

@Component({
  selector: 'note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  @Input() note;

  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.note);
  }

  onArchive() {
    this.note.isArchived = true;
  }

  toEditPage() {
    this.router.navigate([`/edit/${this.note.id}`]);
  }
}
