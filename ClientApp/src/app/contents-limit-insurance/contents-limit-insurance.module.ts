import * as contentsLimitInsuranceStore from './store';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import {
  AddContentsLimitInsuranceItemDialogComponent
} from 'src/app/contents-limit-insurance/components/add-contents-limit-insurance-item-dialog/add-contents-limit-insurance-item-dialog.component';
import { ContentsLimitInsuranceRoutingModule } from 'src/app/contents-limit-insurance/contents-limit-insurance.routing.module';
import { ContentsLimitInsuranceListComponent } from 'src/app/contents-limit-insurance/pages/contents-limit-insurance-list/contents-limit-insurance-list.component';
import { ContentsLimitInsuranceEffects } from 'src/app/contents-limit-insurance/store/contents-limit-insurance.effects';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ContentsLimitInsuranceRoutingModule,
    MaterialModule,
    EffectsModule.forFeature([ContentsLimitInsuranceEffects]),
    StoreModule.forFeature(
      contentsLimitInsuranceStore.contentsLimitInsuranceFeatureKey,
      contentsLimitInsuranceStore.reducers
    ),
  ],
  declarations: [ContentsLimitInsuranceListComponent, AddContentsLimitInsuranceItemDialogComponent],
})
export class ContentsLimitInsuranceModule {}
