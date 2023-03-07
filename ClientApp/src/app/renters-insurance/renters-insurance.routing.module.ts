import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RentersInsuranceComponent } from 'src/app/renters-insurance/renters-insurance.component';

const routes: Routes = [{ path: '', component: RentersInsuranceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RentersRoutingModule {}
