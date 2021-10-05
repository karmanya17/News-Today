import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrendingNewsComponent} from './trending-news/trending-news.component';
import { NewsdetailComponent} from './newsdetail/newsdetail.component';


const routes: Routes = [
  {
    path : "",
    component : TrendingNewsComponent
  },
  {
    path : "newsdetail/:id",
    component : NewsdetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
