import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-inventory-item',
  templateUrl: './inventory-item.component.html',
  styleUrls: ['./inventory-item.component.css']
})
export class InventoryItemComponent implements OnInit {
  loadedInventory = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onCreateInventory(postData: { name: string; description: string; price: number }) {
    this.http.post(
      environment.firebaseAPI + 'posts.json'
      , postData
      ).subscribe(responseData => {
        console.log(responseData);        
      });
  }

}
