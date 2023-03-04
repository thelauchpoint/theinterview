import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as FeatureActions from './feature.actions';
import { FeatureEntityState } from './interface/state.interface';

export const FEATURE_STATE_KEY = 'feature';

export interface FeatureState extends EntityState<FeatureEntityState> {
  selected_id: string;
  error: { statusCode?: string; error: string; message: string } | null;
}

export const FeatureEntityAdaptor: EntityAdapter<FeatureEntityState> = createEntityAdapter<FeatureEntityState>({
  selectId: (policy) => policy._id,
});

export const initialFeatureState: FeatureState = FeatureEntityAdaptor.getInitialState({
  // set initial required properties
  selected_id: '',
  error: null,
});

export const featureReducer = createReducer(
  initialFeatureState,
  on(FeatureActions.init, (state) => state),
  on(FeatureActions.getFeatureSuccess, (state: FeatureState, data) => {
    const entity: FeatureEntityState = {
      ...data,
    };
    return FeatureEntityAdaptor.upsertOne(entity, {
      ...state,
      selected_id: entity._id,
    });
  }),
  on(FeatureActions.getFeatureFailure, (state: FeatureState, error: { statusCode?: string; error: string; message: string }) => ({
    ...state,
    error,
  }))
);
