import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [NgbModule, MatListModule, MatDividerModule, FormsModule, CommonModule, HttpClientModule],
  providers: [ProductsService, CartService],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  product: any;
  constructor(private route: ActivatedRoute, private service: ProductsService, private cartService: CartService) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id') as string;
    this.service.getProductById(productId).subscribe((data: any) => {
      this.product = data;
      console.log(data);
    });
  }

  addToCart(): void {
    if (this.product) {
      this.cartService.addToCart(this.product);
    }
  }
}
