import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ContentsLimitInsuranceListComponent } from 'src/app/contents-limit-insurance/pages/contents-limit-insurance-list/contents-limit-insurance-list.component';

const routes: Routes = [
  { path: '', component: ContentsLimitInsuranceListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentsLimitInsuranceRoutingModule {}
