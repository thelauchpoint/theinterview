import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { FeatureService } from '../services/feature.service';
import * as FeatureActions from './feature.actions';

@Injectable()
export class FeatureEffects {
  constructor(private actions$: Actions, private _FeatureService: FeatureService) {}

  createEffect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(FeatureActions.getFeature),
      switchMap((action) => {
        return this._FeatureService.get().pipe(
          map((data) => {
            return FeatureActions.getFeatureSuccess(data);
          }),
          catchError(
            (error: {
              error: {
                statusCode?: string;
                error: string;
                message: string;
              };
            }) => of(FeatureActions.getFeatureFailure(error.error))
          )
        );
      }),
      catchError((error) => of(FeatureActions.getFeatureFailure(error)))
    );
  });
}
