import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory-item',
  templateUrl: './inventory-item.component.html',
  styleUrls: ['./inventory-item.component.css']
})
export class InventoryItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onCreateInventory(postData: {name: string; description: string; price: number})
  {
    console.log(postData.description);
  }

}
