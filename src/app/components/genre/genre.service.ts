import { Injectable, OnInit } from '@angular/core';
import { Genre } from './genre';
//import { Hash } from 'crypto';

@Injectable({
  providedIn: 'root'
})
export class GenreService implements OnInit{
  public genre: Genre;

  constructor(
    //private hash: Hash
  ) {

    this.genre = {
      id: "0",
      name: 'Library',
      macro: '',
      comments: [],
      SOPs: [],
      restrictions: [],
      subGenres: [
        {     //ROOT EXTERIOR
          id: "1",
          name: "Exterior",
          macro: "exterior",
          subGenres: [
            {     //SUB SIDING
              id: "2",
              name: "Siding Condition",
              macro: "siding_condition",
              subGenres: [],
              SOPs: [],
              restrictions: [],
              comments: [
                {
                  id: "1",
                  name: "EIFS",
                  macro: "eifs",
                  text: 'Some of the siding or trim on home is "EIFS" (Exterior Insulation and Finish Systems) or usually called "Synthetic Stucco." I did not perform a test for possible water intrusion, recommend to have a stucco contractor out to advise you on this.'
                },
                {
                  id: "2",
                  name: "Logs",
                  macro: "logs_maintenance",
                  text: 'Recommended maintenance on a log home is to re-chink between the logs and to seal the logs as needed with a good waterproof sealant.'
                }
              ]
            }
          ],
          SOPs: [],
          restrictions: [],
          comments: []
        },{   // ROOT ELECTRICAL
          id: "3",
          name: "Electical",
          macro: "electrical",
          subGenres: [],
          SOPs: [],
          restrictions: [],
          comments: []
        },{   // ROOT INTERIOR
          id: "4",
          name: "Interior",
          macro: "interior",
          comments: [
            {
              id: "3",
              name: "Interior Moisture",
              macro: "interior_moisture",
              text: "There was moiture in the interior"
            },{
              id: "4",
              name: "Typical Minor Flaws",
              macro: "typical_minor_flaws",
              text: "Typical minor flaws noted, this is common for most homes. Recommend to evaluate and have a contractor advise you as needed."
            },
          ],
          subGenres: [],
          SOPs: [],
          restrictions: [],
        }
      ]
    }
  }

  ngOnInit(){
    this.createGenreID()
  }
  createGenreID(){
    //console.log(this.hash.digest().toString())
    
  }
}
