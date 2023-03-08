import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'renters',
    loadChildren: () => import('./renters-insurance/renters-insurance.module').then((m) => m.RentersInsuranceModule),
  },
  { path: '**', redirectTo: 'renters/contents-limit-insurance' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // enableTracing: true, // <-- debugging purposes only
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
