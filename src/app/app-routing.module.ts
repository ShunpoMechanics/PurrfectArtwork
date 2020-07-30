import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PaintingsComponent } from "./paintings/paintings.component";
import { HomeComponent } from "./home/home.component";
import { AccountComponent } from "./account/account.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { ArtworkComponent } from "./artwork/artwork.component";
import { AuthComponent } from "./auth/auth.component";
import { InventoryItemComponent } from "./inventory-item/inventory-item.component";
import { AuthGuard } from "./auth/auth.guard";
import { ComissionsComponent } from './comissions/comissions.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "paintings", component: PaintingsComponent },
  { path: "account", component: AccountComponent },
  { path: "about-us", component: AboutUsComponent },
  { path: "artwork", component: ArtworkComponent },
  { path: "auth", component: AuthComponent },
  {path: "comissions-form", component: ComissionsComponent},
  {
    path: "inventory",
    component: InventoryItemComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
