import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { AuthService } from "src/app/auth/auth.service";
import { take, exhaustMap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class DataManagementService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  onCreateInventory(postData: {
    name: string;
    description: string;
    price: number;
  }) {
    return this.http.post(environment.firebaseAPI + "posts.json", postData); //rename posts to inventory
  }

  getInventory() {
    return this.http.get(environment.firebaseAPI + "posts.json");
  }

  markItemSold() {}
}
