import { createAction, props } from '@ngrx/store';
import { ContentsLimitInsurance, ContentsLimitInsuranceCategory } from 'src/app/api/models';

/* GET CONTENTS LIMIT INSURANCE LIST */
export const getContentsLimitInsuranceList = createAction('Get Contents Limit Insurance List');
export const getContentsLimitInsuranceListSuccess = createAction(
  'Get Contents Limit Insurance List Success',
  props<{ payload: ContentsLimitInsurance[] }>()
);
export const getContentsLimitInsuranceListComplete = createAction('Get Contents Limit Insurance List Complete');
/* GET CONTENTS LIMIT INSURANCE CATEGORIES LIST */
export const getContentsLimitInsuranceCategoriesList = createAction('Get Contents Limit Insurance Categories List');
export const getContentsLimitInsuranceCategoriesListSuccess = createAction(
  'Get Contents Limit Insurance Categories List Success',
  props<{ payload: ContentsLimitInsuranceCategory[] }>()
);
export const getContentsLimitInsuranceCategoriesListComplete = createAction('Get Contents Limit Insurance Categories List Complete');
/* DELETE CONTENTS LIMIT INSURANCE ITEM */
export const deleteContentsLimitInsuranceItem = createAction(
  'Delete Contents Limit Insurance Item',
  props<{ payload: number }>()
);
export const deleteContentsLimitInsuranceItemSuccess = createAction(
  'Delete Contents Limit Insurance Item Success',
  props<{ payload: number }>()
);
export const deleteContentsLimitInsuranceItemComplete = createAction('Delete Contents Limit Insurance Item Complete');
/* ADD CONTENTS LIMIT INSURANCE ITEM */
export const addContentsLimitInsuranceItem = createAction(
  'Add Contents Limit Insurance Item',
  props<{ payload: ContentsLimitInsurance }>()
);
export const addContentsLimitInsuranceItemSuccess = createAction(
  'Add Contents Limit Insurance Item Success',
  props<{ payload: ContentsLimitInsurance }>()
);
export const addContentsLimitInsuranceItemComplete = createAction('Add Contents Limit Insurance Item Complete');
