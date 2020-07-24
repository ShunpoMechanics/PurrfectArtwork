import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PaintingsComponent } from './paintings/paintings.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ArtworkComponent } from './artwork/artwork.component';
import { ArtworkCardComponent } from './artwork-card/artwork-card.component';
import { AuthComponent } from './auth/auth.component';
import { HttpClientModule } from '@angular/common/http';
import { InventoryItemComponent } from './inventory-item/inventory-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PaintingsComponent,
    HomeComponent,
    AccountComponent,
    AboutUsComponent,
    GalleryComponent,
    ArtworkComponent,
    ArtworkCardComponent,
    AuthComponent,
    InventoryItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
