import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RentersInsuranceListComponent } from 'src/app/renters-insurance/pages/renters-insurance-list/renters-insurance-list.component';
import { ContentsLimitInsuranceListComponent } from 'src/app/renters-insurance/pages/contents-limit-insurance-list/contents-limit-insurance-list.component';

const routes: Routes = [
  { path: '', component: RentersInsuranceListComponent },
  { path: 'contents-limit-insurance', component: ContentsLimitInsuranceListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RentersRoutingModule {}
