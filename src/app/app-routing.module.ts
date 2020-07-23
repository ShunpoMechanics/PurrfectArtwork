import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaintingsComponent } from './paintings/paintings.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ArtworkComponent } from './artwork/artwork.component';

const routes: Routes = [
{  path: '', component: HomeComponent },
{  path: 'paintings', component: PaintingsComponent },
{  path: 'account', component: AccountComponent},
{  path: 'about-us', component: AboutUsComponent},
{  path: 'artwork', component: ArtworkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
