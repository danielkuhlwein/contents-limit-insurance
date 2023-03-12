import {
  addContentsLimitInsuranceItem,
  addContentsLimitInsuranceItemError,
  addContentsLimitInsuranceItemSuccess,
  generateSampleContentsLimitInsuranceItems,
  generateSampleContentsLimitInsuranceItemsError,
  generateSampleContentsLimitInsuranceItemsSuccess,
  getContentsLimitInsuranceCategoriesList,
  getContentsLimitInsuranceCategoriesListError,
  getContentsLimitInsuranceCategoriesListSuccess,
} from './contents-limit-insurance.actions';
import ContentsLimitInsuranceState, { initialState } from './contents-limit-insurance.state';

import { Action, createReducer, MetaReducer, on } from '@ngrx/store';
import {
  deleteContentsLimitInsuranceItem,
  deleteContentsLimitInsuranceItemError,
  deleteContentsLimitInsuranceItemSuccess,
  getContentsLimitInsuranceList,
  getContentsLimitInsuranceListError,
  getContentsLimitInsuranceListSuccess,
} from 'src/app/contents-limit-insurance/store/contents-limit-insurance.actions';

export const reducer = createReducer(
  initialState,

  /* GET CONTENTS LIMIT INSURANCE LIST */
  on(getContentsLimitInsuranceList, (state: ContentsLimitInsuranceState) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(getContentsLimitInsuranceListSuccess, (state: ContentsLimitInsuranceState, action) => {
    return {
      ...state,
      items: action.payload,
      loading: false,
    };
  }),
  on(getContentsLimitInsuranceListError, (state: ContentsLimitInsuranceState) => {
    return {
      ...state,
      loading: false,
    };
  }),

  /* GET CONTENTS LIMIT INSURANCE CATEGORIES LIST */
  on(getContentsLimitInsuranceCategoriesList, (state: ContentsLimitInsuranceState) => {
    return {
      ...state,
      categories: {
        items: state.categories.items,
        loading: true,
      },
    };
  }),
  on(getContentsLimitInsuranceCategoriesListSuccess, (state: ContentsLimitInsuranceState, action) => {
    return {
      ...state,
      categories: {
        items: action.payload,
        loading: false,
      },
    };
  }),
  on(getContentsLimitInsuranceCategoriesListError, (state: ContentsLimitInsuranceState) => {
    return {
      ...state,
      categories: {
        items: state.categories.items,
        loading: false,
      },
    };
  }),

  /* DELETE CONTENTS LIMIT INSURANCE ITEM */
  on(deleteContentsLimitInsuranceItem, (state: ContentsLimitInsuranceState) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(deleteContentsLimitInsuranceItemSuccess, (state: ContentsLimitInsuranceState, action) => {
    return {
      ...state,
      items: state.items.filter((item) => item.id !== action.payload),
      loading: false,
    };
  }),
  on(deleteContentsLimitInsuranceItemError, (state: ContentsLimitInsuranceState) => {
    return {
      ...state,
      loading: false,
    };
  }),

  /* ADD CONTENTS LIMIT INSURANCE ITEM */
  on(addContentsLimitInsuranceItem, (state: ContentsLimitInsuranceState) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(addContentsLimitInsuranceItemSuccess, (state: ContentsLimitInsuranceState, action) => {
    return {
      ...state,
      items: [...state.items, action.payload],
      loading: false,
    };
  }),
  on(addContentsLimitInsuranceItemError, (state: ContentsLimitInsuranceState) => {
    return {
      ...state,
      loading: false,
    };
  }),
  on(generateSampleContentsLimitInsuranceItems, (state: ContentsLimitInsuranceState) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(generateSampleContentsLimitInsuranceItemsSuccess, (state: ContentsLimitInsuranceState, action) => {
    return {
      ...state,
      items: action.payload,
      loading: false,
    };
  }),
  on(generateSampleContentsLimitInsuranceItemsError, (state: ContentsLimitInsuranceState) => {
    return {
      ...state,
      loading: false,
    };
  })
);

export function contentsLimitInsuranceReducer(state: ContentsLimitInsuranceState | undefined, action: Action) {
  return reducer(state, action);
}

export const metaReducers: MetaReducer<ContentsLimitInsuranceState>[] = [];
