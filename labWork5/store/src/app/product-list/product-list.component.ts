import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products!: any[];
  @Input() productsLinks!: string[];
  @Input() selectedCategory!: string;
  filteredProducts: any[] = [];

  constructor() {}

  ngOnChanges() {
    if (this.selectedCategory) {
      this.filterByCategory(this.selectedCategory);
    }
  }

  filterByCategory(category: string) {
    this.filteredProducts = this.products.filter(product => product.category === category);
  }

  likeProduct(product: any) {
    product.likes = (product.likes || 0) + 1;
  }

  removeProduct(product: any) {
    const index = this.filteredProducts.indexOf(product);
    if (index !== -1) {
      this.filteredProducts.splice(index, 1);
    }
  }
}
