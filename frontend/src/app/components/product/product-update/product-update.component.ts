import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  updateProduct(): void {
    // this.productService.update(this.product).subscribe(() => {
    //   this.productService.showMessage('Produto Atualizado!')
    //   this.router.navigate(['/products'])
    // })
  }
  cancel() {
    this.router.navigate(['/products'])
  }

}
