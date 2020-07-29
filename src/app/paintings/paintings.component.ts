import { Component, OnInit } from "@angular/core";
import { DataManagementService } from "../shared/data-management/data-management.service";
import { Painting } from "./paintings.model";
import { map, filter } from "rxjs/operators";
import { element } from "@angular/core/src/render3";

@Component({
  selector: "app-paintings",
  templateUrl: "./paintings.component.html",
  styleUrls: ["./paintings.component.css"],
})
export class PaintingsComponent implements OnInit {
  paintings: Painting[];
  backupPaintings: Painting[];
  filteredPaintings: Painting[];
  constructor(private data: DataManagementService) {}

  ngOnInit() {
    this.getInventory();
  }

  getInventory() {
    this.data
      .getInventory()
      .pipe(
        map((resData) => {
          const paintingArr = [];
          for (const key in resData) {
            if (resData.hasOwnProperty(key))
              paintingArr.push({ ...resData[key], id: key });
          }
          return paintingArr;
        })
      )
      .subscribe((paintings) => {
        this.paintings = paintings;
        this.backupPaintings = paintings;
      });
  }

  filterList() {
    var input = (<HTMLInputElement>(
      document.getElementById("search")
    )).value.toLowerCase();
    this.filteredPaintings = [];
    for (let painting of this.backupPaintings) {
      if (
        painting.name.toLowerCase().includes(input) ||
        painting.description.toLowerCase().includes(input) ||
        painting.type.toLowerCase().includes(input)
      ) {
        this.filteredPaintings.push(painting);
      }
    }
    this.paintings = this.filteredPaintings;
  }
}
