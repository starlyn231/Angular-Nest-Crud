import { Component, OnInit } from "@angular/core";
import { Product } from "../../interfaces/Product";
import { ProductService } from "../../services/product.service";
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-product-form",
  templateUrl: "./product-form.component.html",
  styleUrls: ["./product-form.component.css"],
})
export class ProductFormComponent implements OnInit {
  product: Product = {
    name: "",
    description: "",
    imageURL: "",
    price: 0,
  };
  edit: boolean = false;

  constructor(
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    // here, capture data of product despues cambio estado de the app
    const params = this.activatedRoute.snapshot.params;
    if (params) {
      this.productService.getProduct(params.id).subscribe((res) => {
        console.log(res);
        this.product = res;
        this.edit = true;
      });
    }
  }
  submitProduct() {
    this.productService.createProduct(this.product).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(["/"]);
      },
      (err) => console.log(err)
    );
  }

  uptdateProduct() {
    delete this.product.createAt;
    this.productService.updateProduct(this.product._id, this.product).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(["/product"]);
      },
      (err) => console.log(err)
    );
  }
}
