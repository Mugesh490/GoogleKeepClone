import { Component, OnInit } from '@angular/core';
import { NotesService } from './../../service/notes/notes.service';

@Component({
  selector: 'app-archive-container',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  archiveList:any;
  constructor(private notesService:NotesService) { }

  ngOnInit(): void {
    this.notesService.getAllNotes('getNotesList').subscribe({
      next:(res:any)=>{
        console.log(res.data.data);
        this.archiveList=res.data.data.filter((i:any)=>{
          return i.isArchived==true;
        });
      },
      error:err=>console.log(err),
      complete:()=>{}
  });
}

}
