import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path:'', redirectTo:'/detail', pathMatch:'full' },
  { path:'',
    loadChildren:() => import('./home/home.module').then(m => m.HomeModule)
  },
  { path:'detail/:id',
    loadChildren:() => import('./detail/detail.module').then(m => m.DetailModule)
  },
  { path:'**',
    loadChildren:() => import('./not-found/not-found.module').then(m => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
