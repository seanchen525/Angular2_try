import { Component } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './products.service';
import { appService } from './app.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { PaginatePipe, PaginationService } from 'ng2-pagination';

@Component ({
    selector: 'my-app',
//    template: `<product-form></product-form><div>{{value}}</div>
//    <ul>
//         <li *ngFor = "let item of collection | paginate: {
//             itemsPerPage: 5, currentPage: p }"> ... </li>
//    </ul>
//    <pagination-controls (pageChange) = "p = $event"></pagination-controls>`,
    // templateUrl: 'app/app.component.html',
    template: '<p>Multiplier: {{2 | Multiplier: 10}}</p>',
    providers: [ProductService, appService]
})

export   class   AppComponent  {
    newdate = new Date(2016, 3,20);
    value: string = "";
    Status: boolean = true;
    newValue: number = 0.12224;
    clicked(event: any) {
        this.Status = !this.Status;
    }
   iproducts: IProduct[];
   constructor(private _product: ProductService, private _appService: appService) {
   }
   
   ngOnInit() : void {
      this._product.getproducts()
      .subscribe(iproducts => this.iproducts = iproducts);
      this.value = this._appService.getApp();
   }

   TutorialName: string = 'Angular JS2';
   appList: string[] = ["Binding", "Display", "Services"];
}