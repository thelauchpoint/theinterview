import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FeatureEntityAdaptor, FeatureState, FEATURE_STATE_KEY } from './feature.reducer';
type ObjectWithAnyProperties = { [key: string]: any };

const selectAllFeatureState = createFeatureSelector<FeatureState>(FEATURE_STATE_KEY);

/**
 * ROOT STATE
 */
export const getAllFeatureState = createSelector(selectAllFeatureState, (state: FeatureState) => state);

export const selectFeatureSelectedId = createSelector(getAllFeatureState, (state: FeatureState) => state.selected_id);
export const selectFeatureError = createSelector(getAllFeatureState, (state: FeatureState) => state.error);

const { selectIds, selectEntities, selectAll, selectTotal } = FeatureEntityAdaptor.getSelectors(getAllFeatureState);

// select the array of connection ids
export const selectSkylabCommercialAutoQuoteIds = selectIds;

// select the dictionary of CommercialAutoPolicy entities
export const selectSkylabCommercialAutoQuoteEntities = selectEntities;

// select the array of CommercialAutoPolicy
export const selectSkylabCommercialAutoQuote = selectAll;

// select the total entity count
export const selectSkylabCommercialAutoQuoteTotal = selectTotal;

export const selectSelectedFeature = createSelector(
  getAllFeatureState,
  selectFeatureSelectedId,
  (state: FeatureState, selected_id) => state.entities[selected_id]
);

/**
 *
 * Traverses an object and selects its keys, converting them into a label and a key, with optional keys to skip.
 * @param {{ label: string; key: string }} input - The object to traverse.
 * @param {string[]} [skipKeys=[]] - The keys to skip.
 * @returns {{label: string, key: string}[]} - The list of selectable keys, with their label and key.
 *
 * We are asking you to write a function to complete the following tasks.
 * The goal is to create a new object per value FOR example if you look at the TRANSACTION_TEST_DATA.
 * You can see the nested value policy.pol_eff_date.day = 29
 *
 * You mission is to create a new object for that value shaped like this.
 * {label: Policy Pol Eff Date Day, key: policy.pol_eff_date.day }
 * You will do this for every value. The final example of the EXPECTED OUTCOME is in ./data/transactions-answer-data.json
 *
 * EST TIME TO COMPLETE: 15min
 * We sovled this in less than 60 lines
 *
 */

export const selectSelectedFeatureLabels = createSelector(
  getAllFeatureState,
  selectFeatureSelectedId,
  (state: FeatureState, selected_id): { label: string; key: string }[] => {
    const feature = state.entities[selected_id];

    // The input object is null or undefined: the function will return an empty array.
    // The input object is an empty object: the function will return an empty array.
    // The input object contains keys that should be skipped: the function will not add these keys to the result list.
    // The input object contains circular references: the function will not get stuck in an infinite loop and will correctly handle each key only once.
    // The input object contains values that are functions or arrays: the function will not add these keys to the result list.
    // The input object contains values that are instances of Date: the function will correctly format the date value into a human-readable string for the corresponding key.

    // This is a starting point
    function getSelectableKeys(input: ObjectWithAnyProperties, skipKeys: string[] = []): { label: string; key: string }[] {
      return [{ label: 'Policy Pol Eff Date Day', key: 'policy.pol_eff_date.day' }];
    }
    if (feature) {
      return getSelectableKeys(feature, ['transactions.object_id', 'dot.documents']);
    } else {
      return [];
    }
  }
);
