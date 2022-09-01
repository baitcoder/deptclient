import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListdeptComponent } from './listdept/listdept.component';
import { EditdeptComponent } from './editdept/editdept.component';  
import { FinddeptComponent } from './finddept/finddept.component';
import { AdddeptComponent } from './adddept/adddept.component';
import { ShowdeptComponent } from './showdept/showdept.component';
import { TestclaimComponent } from './testclaim/testclaim.component';
import { IbuyComponent } from './ibuy/ibuy.component';

const routes: Routes = [
  {path:"add",component:AdddeptComponent},
  {path:"list",component:ListdeptComponent},
  {path:"find/:id",component:FinddeptComponent},
  {path:"edit/:id",component:EditdeptComponent},
  {path:"showdept",component:ShowdeptComponent},
  {path:"claimHistory",component:TestclaimComponent},
  {path:"AddUser",component:IbuyComponent}
  // {path:"approve",component:TestclaimComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
