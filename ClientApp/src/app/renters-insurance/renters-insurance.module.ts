import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import { ContentsLimitInsuranceListComponent } from 'src/app/renters-insurance/pages/contents-limit-insurance-list/contents-limit-insurance-list.component';
import { RentersInsuranceListComponent } from 'src/app/renters-insurance/pages/renters-insurance-list/renters-insurance-list.component';
import { RentersRoutingModule } from 'src/app/renters-insurance/renters-insurance.routing.module';

@NgModule({
  imports: [CommonModule, RentersRoutingModule, MaterialModule],
  declarations: [RentersInsuranceListComponent, ContentsLimitInsuranceListComponent],
})
export class RentersInsuranceModule {}
