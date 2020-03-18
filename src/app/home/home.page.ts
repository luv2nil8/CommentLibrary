import { Component } from '@angular/core';
import { PopoverController, NavParams } from '@ionic/angular';
import { LibraryPopoverComponent } from '../components/library-popover/library-popover.component';
import { Genre } from '../components/genre/genre';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers:[NavParams]
})
export class HomePage {

  public library: Genre
  public collapsibles: any;
  
  constructor(
    public navParams: NavParams,
    public popoverController: PopoverController,
  ) {
    console.table(this.navParams.data);
  }

  ngOnInit(){
    this.openLibrary(null)
  }

  
  async openLibrary(ev: any) {
    const popover = await this.popoverController.create({
      component: LibraryPopoverComponent,
      event: ev,
      cssClass: "library-popover",
      componentProps: {library: this.library},
      translucent: true
    },);
    return await popover.present();
  }

}