import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  HomePageComponent
} from './home-page/home-page.component';
import {
  PagesComponent
} from './pages.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';
import { PageRoutingModule } from './page-routing.module';






@NgModule({
  declarations: [HomePageComponent, PagesComponent, HeaderComponent,
    FooterComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    PageRoutingModule
  ],
  exports: [
    HomePageComponent, PagesComponent, HeaderComponent,
    FooterComponent,
  ]
})
export class PagesModule {}
