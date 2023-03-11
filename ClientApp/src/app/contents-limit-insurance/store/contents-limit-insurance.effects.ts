import {
  getContentsLimitInsuranceCategoriesList,
  getContentsLimitInsuranceCategoriesListSuccess,
} from './contents-limit-insurance.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { finalize, map, mergeMap } from 'rxjs/operators';
import { ContentsLimitInsurance, ContentsLimitInsuranceCategory } from 'src/app/api/models';
import { ContentsLimitInsuranceService } from 'src/app/api/services';
import {
  addContentsLimitInsuranceItem,
  addContentsLimitInsuranceItemComplete,
  addContentsLimitInsuranceItemSuccess,
  deleteContentsLimitInsuranceItem,
  deleteContentsLimitInsuranceItemComplete,
  deleteContentsLimitInsuranceItemSuccess,
  getContentsLimitInsuranceList,
  getContentsLimitInsuranceListComplete,
  getContentsLimitInsuranceListSuccess,
} from 'src/app/contents-limit-insurance/store/contents-limit-insurance.actions';

@Injectable()
export class ContentsLimitInsuranceEffects {
  constructor(private actions$: Actions, private apiService: ContentsLimitInsuranceService) {}

  getContensLimitInsuranceList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getContentsLimitInsuranceList),
      mergeMap(() =>
        this.apiService.apiContentsLimitInsuranceItemsGet$Json().pipe(
          map((items: ContentsLimitInsurance[]) => getContentsLimitInsuranceListSuccess({ payload: items })),
          finalize(() => getContentsLimitInsuranceListComplete())
        )
      )
    )
  );

  getContentsLimitInsuranceCategoriesList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getContentsLimitInsuranceCategoriesList),
      mergeMap(() =>
        this.apiService.apiContentsLimitInsuranceItemsCategoriesGet$Json().pipe(
          map((items: ContentsLimitInsuranceCategory[]) =>
            getContentsLimitInsuranceCategoriesListSuccess({ payload: items })
          ),
          finalize(() => getContentsLimitInsuranceListComplete())
        )
      )
    )
  );

  deleteContentsLimitInsuranceItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteContentsLimitInsuranceItem),
      mergeMap((action) =>
        this.apiService.apiContentsLimitInsuranceItemsIdDelete$Json({ id: action.payload }).pipe(
          map(() => deleteContentsLimitInsuranceItemSuccess({ payload: action.payload })),
          finalize(() => deleteContentsLimitInsuranceItemComplete())
        )
      )
    )
  );

  addContentsLimitInsuranceItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addContentsLimitInsuranceItem),
      mergeMap((action) =>
        this.apiService.apiContentsLimitInsuranceItemsPost$Json({ body: action.payload }).pipe(
          map((id: number) => {
            const newItem = { ...action.payload, id };
            return addContentsLimitInsuranceItemSuccess({ payload: newItem });
          }),
          finalize(() => addContentsLimitInsuranceItemComplete())
        )
      )
    )
  );
}
