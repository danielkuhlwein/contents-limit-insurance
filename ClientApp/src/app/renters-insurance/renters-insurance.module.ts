import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentersInsuranceComponent } from './renters-insurance.component';
import { RentersRoutingModule } from 'src/app/renters-insurance/renters-insurance.routing.module';

@NgModule({
  imports: [CommonModule, RentersRoutingModule],
  declarations: [RentersInsuranceComponent],
})
export class RentersInsuranceModule {}
