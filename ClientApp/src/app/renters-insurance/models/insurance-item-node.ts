export interface InsuranceItemNode {
  name: string;
  price: number;
  categoryPrice: number;
  children?: InsuranceItemNode[];
}
