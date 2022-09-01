import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListdeptComponent } from './listdept/listdept.component';
import { FinddeptComponent } from './finddept/finddept.component';
import { AdddeptComponent } from './adddept/adddept.component';
import { EditdeptComponent } from './editdept/editdept.component';
import { FormsModule } from '@angular/forms';
import { ShowdeptComponent } from './showdept/showdept.component';
import { TestclaimComponent } from './testclaim/testclaim.component';
import { IbuyComponent } from './ibuy/ibuy.component';


@NgModule({
  declarations: [
    AppComponent,
    ListdeptComponent,
    FinddeptComponent,
    AdddeptComponent,
    EditdeptComponent,
    ShowdeptComponent,
    TestclaimComponent,
    IbuyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
