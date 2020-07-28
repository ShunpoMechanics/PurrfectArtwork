import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { AuthService } from "src/app/auth/auth.service";
import { take, exhaustMap } from "rxjs/operators";
import { Observable } from "rxjs";
import * as firebase from "firebase/app";
import "firebase/storage";

@Injectable({
  providedIn: "root",
})
export class DataManagementService {
  constructor(private http: HttpClient) {
    var firebaseConfig = {
      apiKey: "AIzaSyAyM314WPy2gPfdwds-OTePE9crQIhoyT8",
      authDomain: "purrfectartwork.firebaseapp.com",
      databaseURL: "https://purrfectartwork.firebaseio.com",
      projectId: "purrfectartwork",
      storageBucket: "purrfectartwork.appspot.com",
      messagingSenderId: "695831695608",
      appId: "1:695831695608:web:d9388c6f355bca4ff5eb0d",
      measurementId: "G-BLLBV9HGLC",
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  downloadUrl: Observable<string>;
  upload: File = null;
  onCreateInventory(postData: {
    name: string;
    description: string;
    price: number;
    file: File;
  }) {
    this.uploadImage(this.upload);
    return this.http.post(environment.firebaseAPI + "posts.json", postData); //rename posts to inventory
  }

  getInventory() {
    return this.http.get(environment.firebaseAPI + "posts.json");
  }

  markItemSold() {}

  referencePic(files: FileList) {
    this.upload = files.item(0);
  }

  uploadImage(file: File) {
    var ref = firebase.storage().ref();

    var metadata = {
      contentType: "image/jpeg",
    };

    var uploadTask = ref
      .child("images/" + this.upload.name)
      .put(file, metadata);
  }
}
