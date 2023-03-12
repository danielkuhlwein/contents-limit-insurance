import {
  generateSampleContentsLimitInsuranceItems,
  generateSampleContentsLimitInsuranceItemsError,
  generateSampleContentsLimitInsuranceItemsSuccess,
  getContentsLimitInsuranceCategoriesList,
  getContentsLimitInsuranceCategoriesListSuccess,
} from './contents-limit-insurance.actions';

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ContentsLimitInsurance, ContentsLimitInsuranceCategory } from 'src/app/api/models';
import { ContentsLimitInsuranceService } from 'src/app/api/services';
import {
  addContentsLimitInsuranceItem,
  addContentsLimitInsuranceItemError,
  addContentsLimitInsuranceItemSuccess,
  deleteContentsLimitInsuranceItem,
  deleteContentsLimitInsuranceItemError,
  deleteContentsLimitInsuranceItemSuccess,
  getContentsLimitInsuranceList,
  getContentsLimitInsuranceListError,
  getContentsLimitInsuranceListSuccess,
} from 'src/app/contents-limit-insurance/store/contents-limit-insurance.actions';

@Injectable()
export class ContentsLimitInsuranceEffects {
  constructor(private actions$: Actions, private apiService: ContentsLimitInsuranceService) {}

  getContensLimitInsuranceList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getContentsLimitInsuranceList),
      mergeMap(() =>
        this.apiService.getItems().pipe(
          map((items: ContentsLimitInsurance[]) => getContentsLimitInsuranceListSuccess({ payload: items })),
          catchError(() => of(getContentsLimitInsuranceListError()))
        )
      )
    )
  );

  getContentsLimitInsuranceCategoriesList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getContentsLimitInsuranceCategoriesList),
      mergeMap(() =>
        this.apiService.getCategories().pipe(
          map((items: ContentsLimitInsuranceCategory[]) =>
            getContentsLimitInsuranceCategoriesListSuccess({ payload: items })
          ),
          catchError(() => of(getContentsLimitInsuranceListError()))
        )
      )
    )
  );

  deleteContentsLimitInsuranceItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteContentsLimitInsuranceItem),
      mergeMap((action) =>
        this.apiService.deleteItem({ id: action.payload }).pipe(
          map(() => deleteContentsLimitInsuranceItemSuccess({ payload: action.payload })),
          catchError(() => of(deleteContentsLimitInsuranceItemError()))
        )
      )
    )
  );

  generateSampleContentsLimitInsuranceItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(generateSampleContentsLimitInsuranceItems),
      mergeMap(() =>
        this.apiService.generateSampleItems().pipe(
          map((items: ContentsLimitInsurance[]) =>
            generateSampleContentsLimitInsuranceItemsSuccess({ payload: items })
          ),
          catchError(() => of(generateSampleContentsLimitInsuranceItemsError()))
        )
      )
    )
  );

  addContentsLimitInsuranceItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addContentsLimitInsuranceItem),
      mergeMap((action) =>
        this.apiService.addItem({ body: action.payload }).pipe(
          map((id: number) => {
            const newItem = { ...action.payload, id };
            return addContentsLimitInsuranceItemSuccess({ payload: newItem });
          }),
          catchError(() => of(addContentsLimitInsuranceItemError()))
        )
      )
    )
  );
}
