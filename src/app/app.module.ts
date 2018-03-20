import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HttpModule } from '@angular/http';
import { AppInventory } from './inventory.component';
import { Appproduct } from './product.component';
import { PageNotFoundComponent } from './NotFound.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductFormComponent } from './product-form.component';
import { FormsModule } from '@angular/forms';
import { Ng2PaginationModule } from 'ng2-pagination';
import { MultiplierPipe } from './multiplier.pipe';

const appRouters: Routes = [
    { path: 'Product', component: Appproduct },
    { path: 'Inventory', component: AppInventory },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports:      [ BrowserModule,HttpModule,
  RouterModule.forRoot(appRouters), FormsModule, Ng2PaginationModule ],
  declarations: [ AppComponent, AppInventory, Appproduct, PageNotFoundComponent, ProductFormComponent, MultiplierPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
