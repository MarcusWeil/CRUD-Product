import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  constructor(private Router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de produtos',
      icon: '',
      routeUrl: '/products'
    }
  }

  ngOnInit(): void {
  }

  ProductCreateRoute() {
    this.Router.navigate(['/products/create'])
  }
}
