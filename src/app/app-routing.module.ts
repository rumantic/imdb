import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./main/list/list.component";
import {DetailComponent} from "./main/detail/detail.component";

const routes: Routes = [
  {path: '', component: ListComponent},
  {path: 'movie', component: DetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
