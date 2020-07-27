import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class DataManagementService {
  constructor(private http: HttpClient) {}

  onCreateInventory(postData: {
    name: string;
    description: string;
    price: number;
  }) {
    this.http
      .post(environment.firebaseAPI + "posts.json", postData)
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }

  getInventory() {
    this.http.get(environment.firebaseAPI + "posts.json").subscribe((posts) => {
      console.log(posts);
    });
  }

  markItemSold() {}
}
