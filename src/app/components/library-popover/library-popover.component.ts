import { Component, OnInit } from '@angular/core';
import { Genre } from '../genre/genre';
import { GenreService } from '../genre/genre.service';

@Component({
  selector: 'app-library-popover',
  templateUrl: './library-popover.component.html',
  styleUrls: ['./library-popover.component.scss'],

})
export class LibraryPopoverComponent implements OnInit {
  
  library: Genre;
  
  constructor(
    private genreService: GenreService
  ) { }

  ngOnInit() {
    this. library = this.genreService.genre;


  console.log("LIBRARY")
  console.table(this.library)
}


}
