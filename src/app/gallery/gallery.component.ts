import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  loadedPieces = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetchPieces();
  }

  private fetchPieces ()
  {
    this.http.get(environment.firebaseAPI + 'posts.json').subscribe(posts => {
      console.log(posts);
    });
  }


}
