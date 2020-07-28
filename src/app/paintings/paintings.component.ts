import { Component, OnInit } from "@angular/core";
import { DataManagementService } from "../shared/data-management/data-management.service";
import { Painting } from "./paintings.model";
import { map } from "rxjs/operators";

@Component({
  selector: "app-paintings",
  templateUrl: "./paintings.component.html",
  styleUrls: ["./paintings.component.css"],
})
export class PaintingsComponent implements OnInit {
  paintings: Painting[];
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
      });
  }
}
