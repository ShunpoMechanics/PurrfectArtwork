import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { DataManagementService } from "../shared/data-management/data-management.service";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.css"],
})
export class GalleryComponent implements OnInit {
  loadedPieces = [];

  constructor(private data: DataManagementService) {}

  ngOnInit() {
    this.fetchPieces();
  }

  private fetchPieces() {
    this.data.getInventory().subscribe((posts) => {
      console.log(posts);
    });
  }
}
