import { Component, OnInit } from "@angular/core";
import { DataManagementService } from "../shared/data-management/data-management.service";

@Component({
  selector: "app-comissions",
  templateUrl: "./comissions.component.html",
  styleUrls: ["./comissions.component.css"],
})
export class ComissionsComponent implements OnInit {
  constructor(data: DataManagementService) {}

  ngOnInit() {}

  referencePic(event) {}
}
