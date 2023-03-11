import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'contents-limit-insurance',
    loadChildren: () => import('./contents-limit-insurance/contents-limit-insurance.module').then((m) => m.ContentsLimitInsuranceModule),
  },
  { path: '**', redirectTo: 'contents-limit-insurance' },
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
