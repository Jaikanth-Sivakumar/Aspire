import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private service: ProductsService
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.service.getProductById(productId).subscribe((data: any) => {
        this.product = data;
      });
    } else {
      // Handle the case where productId is null
      console.error('Product ID is null');
    }
  }
}
