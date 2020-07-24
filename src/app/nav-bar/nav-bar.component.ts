import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

displayArtwork() {
  var x = document.getElementById("paintings-link");
  this.toggle(x);
  x = document.getElementById("geodes-link");
  this.toggle(x);
  x = document.getElementById("etc-link");
  this.toggle(x);
}

toggle(x) {
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
}
