import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { LibraryPopoverComponent } from '../components/library-popover/library-popover.component';
import { GenreComponent } from '../components/genre/genre.component';
import { CommComponent } from '../components/comm/comm.component';
import { CollapsibleComponent } from '../components/collapsible/collapsible.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, GenreComponent, CommComponent, CollapsibleComponent, LibraryPopoverComponent,],
  entryComponents: [GenreComponent, CommComponent, CollapsibleComponent, LibraryPopoverComponent, ]
})
export class HomePageModule {}
