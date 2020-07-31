import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { NgForm } from "@angular/forms";
import { DataManagementService } from "../shared/data-management/data-management.service";

@Component({
  selector: "app-inventory-item",
  templateUrl: "./inventory-item.component.html",
  styleUrls: ["./inventory-item.component.css"],
})
export class InventoryItemComponent implements OnInit {
  files: FileList;
  constructor(private data: DataManagementService) {}

  ngOnInit() {}

  referencePic(pic) {
    this.files = pic;
    this.data.referencePic(pic);
  }

  onSubmit(form: NgForm) {
    this.data.onCreateInventory(form.value);
    form.reset();
  }
}
