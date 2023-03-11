export interface InsuranceItemNode {
  id: number;
  name: string;
  value: number;
  children?: InsuranceItemNode[];
}
