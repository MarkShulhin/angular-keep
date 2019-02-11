import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  public isArchivedNotesAllowed: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
