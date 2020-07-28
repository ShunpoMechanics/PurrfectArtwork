import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { PaintingsComponent } from "./paintings/paintings.component";
import { HomeComponent } from "./home/home.component";
import { AccountComponent } from "./account/account.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { GalleryComponent } from "./gallery/gallery.component";
import { ArtworkComponent } from "./artwork/artwork.component";
import { ArtworkCardComponent } from "./artwork-card/artwork-card.component";
import { AuthComponent } from "./auth/auth.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { InventoryItemComponent } from "./inventory-item/inventory-item.component";
import { LoadingSpinnerComponent } from "./shared/loading-spinner/loading-spinner";
import { AuthInterceptor } from "./auth/authInterceptor.service";

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
    InventoryItemComponent,
    LoadingSpinnerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
