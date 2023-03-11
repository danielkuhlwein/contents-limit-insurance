import { ContentsLimitInsurance, ContentsLimitInsuranceCategory } from 'src/app/api/models';
import { InsuranceItemNode } from 'src/app/contents-limit-insurance/models/insurance-item-node';

export default interface ContentsLimitInsuranceState {
  items: ContentsLimitInsurance[];
  loading: boolean;
  categories: {
    items: ContentsLimitInsuranceCategory[];
    loading: boolean;
  };
}

export const initialState = {
  items: new Array<ContentsLimitInsurance>(),
  loading: false,
  categories: {
    items: new Array<ContentsLimitInsuranceCategory>(),
    loading: false,
  },
};
