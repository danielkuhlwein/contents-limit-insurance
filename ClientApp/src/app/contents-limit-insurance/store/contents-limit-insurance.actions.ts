import { createAction, props } from '@ngrx/store';
import { ContentsLimitInsurance, ContentsLimitInsuranceCategory } from 'src/app/api/models';

/* GET CONTENTS LIMIT INSURANCE LIST */
export const getContentsLimitInsuranceList = createAction('Get Contents Limit Insurance List');
export const getContentsLimitInsuranceListSuccess = createAction(
  'Get Contents Limit Insurance List Success',
  props<{ payload: ContentsLimitInsurance[] }>()
);
export const getContentsLimitInsuranceListError = createAction('Get Contents Limit Insurance List Error');
/* GET CONTENTS LIMIT INSURANCE CATEGORIES LIST */
export const getContentsLimitInsuranceCategoriesList = createAction('Get Contents Limit Insurance Categories List');
export const getContentsLimitInsuranceCategoriesListSuccess = createAction(
  'Get Contents Limit Insurance Categories List Success',
  props<{ payload: ContentsLimitInsuranceCategory[] }>()
);
export const getContentsLimitInsuranceCategoriesListError = createAction(
  'Get Contents Limit Insurance Categories List Error'
);
/* DELETE CONTENTS LIMIT INSURANCE ITEM */
export const deleteContentsLimitInsuranceItem = createAction(
  'Delete Contents Limit Insurance Item',
  props<{ payload: number }>()
);
export const deleteContentsLimitInsuranceItemSuccess = createAction(
  'Delete Contents Limit Insurance Item Success',
  props<{ payload: number }>()
);
export const deleteContentsLimitInsuranceItemError = createAction('Delete Contents Limit Insurance Item Error');
/* ADD CONTENTS LIMIT INSURANCE ITEM */
export const addContentsLimitInsuranceItem = createAction(
  'Add Contents Limit Insurance Item',
  props<{ payload: ContentsLimitInsurance }>()
);
export const addContentsLimitInsuranceItemSuccess = createAction(
  'Add Contents Limit Insurance Item Success',
  props<{ payload: ContentsLimitInsurance }>()
);
export const addContentsLimitInsuranceItemError = createAction('Add Contents Limit Insurance Item Error');
/* GENERATE SAMPLE CONTENTS LIMIT INSURANCE ITEMS */
export const generateSampleContentsLimitInsuranceItems = createAction('Generate Sample Contents Limit Insurance Items');
export const generateSampleContentsLimitInsuranceItemsSuccess = createAction(
  'Generate Sample Contents Limit Insurance Items Success',
  props<{ payload: ContentsLimitInsurance[] }>()
);
export const generateSampleContentsLimitInsuranceItemsError = createAction(
  'Generate Sample Contents Limit Insurance Items Error'
);
