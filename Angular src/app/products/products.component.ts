import { Component } from '@angular/core';
import { products } from './products.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from '../details/details.component';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from '../products.service';
import { all } from 'axios';
import { max } from 'rxjs';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule, RouterLink, DetailsComponent],
  providers: [ProductsService],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})

export class ProductsComponent {
  category:String="all";
  priceRange:String='';

  // Products:products[]=[{productName: "Redmi 13C", productPrice: 7699, productCategory: "electronics", productDescription: "(Stardust Black, 4GB RAM, 128GB Storage) | Powered by 4G Mediatek Helio G85 | 90Hz Display | 50MP AI Triple Camera", productImage: "https://m.media-amazon.com/images/I/71d1ytcCntL._SX679_.jpg"},
  // {productName: "Acer Aspire Lite", productPrice: 34999, productCategory: "electronics", productDescription: "AMD Ryzen 5 5500U Premium Thin and Light Laptop (16 GB RAM/512 GB SSD/Windows 11 Home) AL15-41, 39.62 cm (15.6\") Full HD Display, Metal Body, Steel Gray, 1.59 KG", productImage: "https://m.media-amazon.com/images/I/71czGb00k5L._SX679_.jpg"},
  // {productName: "boAt Airdopes 311 Pro TWS Earbuds", productPrice: 1199, productCategory: "electronics", productDescription: "w/Up to 50 HRS Playtime, Dual Mics with ENx™ Tech, 50 ms Low-Latency Beast™ Mode, ASAP™ Charging, IWP™ Tech, BT v5.3, IPX4 Resistance(Dusk Blue)", productImage: "https://m.media-amazon.com/images/I/61PYkqwxP0L._SX522_.jpg"},
  // {productName: "Wakefit Mattress", productPrice: 6773, productCategory: "home", productDescription: "7 Years Warranty | Dual Comfort with Hard & Soft Foam, Diwan Mattress, Foam Mattress, 5-Inch Bed Mattress, Diwan Size Mattress (72x48x5_7 Pressure Zone Foam)", productImage: "https://m.media-amazon.com/images/I/618g6GM-ZgL._SX679_.jpg"},
  // {productName: "LookMark", productPrice: 299, productCategory: "clothing", productDescription: "Men's Cotton Blend Printed Stitched Half Sleeve Regular Fit Shirt", productImage: "https://m.media-amazon.com/images/I/51zkKVzqlcL.jpg"}
  // ]

  Products:any
Product: any;

  constructor(private service:ProductsService){}

  ngOnInit(){
    this.service.getAllProducts().subscribe((data)=>{
      //console.log(data);
      this.Products=data;
    })
  }


  shouldDisplayProduct(product: any): boolean {
    const price = product.productPrice;
    
    // Check category filter
    if (this.category !== 'all' && product.productCategory !== this.category) {
      return false;
    }
    
    // Check price range filter
    if (this.priceRange) {
      if (this.priceRange === '500' && price > 500) {
        return false;
      } else if (this.priceRange === '10000' && (price <= 500 || price > 10000)) {
        return false;
      } else if (this.priceRange === '35000' && (price <= 10000 || price > 35000)) {
        return false;
      }
    }

    return true;
  }


}
