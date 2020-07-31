import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { take, exhaustMap } from "rxjs/operators";
import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/database";

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

  downloadUrls: string[] = ["", "", "", "", ""];
  upload: FileList = null;
  id: number;
  errorMessage: string = null;
  async onCreateInventory(postData: {
    name: string;
    description: string;
    price: number;
    type: string;
    imagePaths: string;
  }) {
    //Add a way to make unique identifiers so that I can add a table to relate images and inventory
    this.id = Math.floor(Math.random() * 1000) + 1;
    await this.uploadImage(this.upload).then((log) =>
      firebase
        .database()
        .ref("inventory/" + this.id)
        .set({
          id: this.id,
          name: postData.name,
          description: postData.description,
          price: postData.price,
          type: postData.type,
          imagePath1: this.downloadUrls[0],
          imagePath2: this.downloadUrls[1],
          imagePath3: this.downloadUrls[2],
          imagePath4: this.downloadUrls[3],
          imagePath5: this.downloadUrls[4],
        })
    );
    //   .catch((error) => {
    //     if (this.errorMessage == null)
    //       this.errorMessage =
    //         "Something has gone wrong with the inventory creation";
    //   });
    // // return this.http.post(environment.firebaseAPI + "posts.json", postData); //rename posts to inventory
  }

  getInventory() {
    return this.http.get(environment.firebaseAPI + "inventory.json");
  }

  markItemSold() {}

  referencePic(files: FileList) {
    this.upload = files;
  }

  async uploadImage(files: FileList) {
    var storRef = firebase.storage().ref();

    var metadata = {
      contentType: "image/jpeg",
    };

    for (var i = 0; i < files.length; i++) {
      var uploadTask = storRef
        .child("images/" + this.upload[i].name + " " + new Date())
        .put(files[i], metadata);

      await uploadTask
        .then((snapshot) => snapshot.ref.getDownloadURL())
        .then((url) => {
          this.downloadUrls[i] = url;
        });
      // .catch((error) => {
      //   this.errorMessage = "There was an error uploading image #" + i;
      // });
    }
  }
}
