import { createFeatureSelector, createSelector } from '@ngrx/store';
import ContentsLimitInsuranceState from 'src/app/contents-limit-insurance/store/contents-limit-insurance.state';

export const contentsLimitInsuranceFeatureKey = 'contentsLimitInsuranceState';
export const contentsLimitInsuranceFeature = createFeatureSelector<ContentsLimitInsuranceState>(
  contentsLimitInsuranceFeatureKey
);
export const contentsLimitInsurance = {
  items: createSelector(contentsLimitInsuranceFeature, (state) => state.items),
  loading: createSelector(contentsLimitInsuranceFeature, (state) => state.loading),
  categories: {
    items: createSelector(contentsLimitInsuranceFeature, (state) => state.categories.items),
    loading: createSelector(contentsLimitInsuranceFeature, (state) => state.categories.loading),
  },
};
