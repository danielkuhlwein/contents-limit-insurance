import { InsuranceItemNode } from '../../models/insurance-item-node';

import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { InsuranceItemFlatNode } from 'src/app/renters-insurance/models/insurance-item-flat-node';

const TREE_DATA: InsuranceItemNode[] = [
  {
    name: 'Electronics',
    price: 0,
    categoryPrice: 0,
    children: [
      { name: 'TV', price: 2000, categoryPrice: 0 },
      { name: 'Playstation', price: 400, categoryPrice: 0 },
      { name: 'Stereo', price: 1600, categoryPrice: 0 },
    ],
  },
  {
    name: 'Clothing',
    price: 0,
    categoryPrice: 0,
    children: [
      { name: 'Shirts', price: 1100, categoryPrice: 0 },
      { name: 'Jeans', price: 1100, categoryPrice: 0 },
    ],
  },
  {
    name: 'Kitchen',
    price: 0,
    categoryPrice: 0,
    children: [
      { name: 'Pots and Pans', price: 3000, categoryPrice: 0 },
      { name: 'Flatware', price: 500, categoryPrice: 0 },
      { name: 'Knife Set', price: 500, categoryPrice: 0 },
      { name: 'Misc', price: 1000, categoryPrice: 0 },
    ],
  },
];

@Component({
  selector: 'app-contents-limit-insurance-list',
  templateUrl: './contents-limit-insurance-list.component.html',
  styleUrls: ['./contents-limit-insurance-list.component.scss'],
})
export class ContentsLimitInsuranceListComponent implements OnInit {
  private _transformer = (node: InsuranceItemNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
      price: node.price,
      categoryPrice: !!node.children ? node.children.map((x) => x.price).reduce((a, b) => a + b, 0) : 0,
    };
  };

  treeControl = new FlatTreeControl<InsuranceItemFlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  get totalCategoryPrice() {
    return (node: InsuranceItemNode) => {
      console.log(node);
      return node.children?.map((x) => x.price).reduce((a, b) => a + b, 0);
    };
  }

  get totalPrice(): number {
    return this.dataSource.data.map((x) => x.price).reduce((a, b) => a + b, 0);
  }

  get allNodesExpanded() {
    return this.treeControl?.dataNodes?.every((node) => this.treeControl.isExpanded(node));
  }

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  ngOnInit() {
    this.treeControl.expandAll();
  }

  /**
   * Expand or collapse all nodes
   */
  expandAllNodes() {
    // check if all tree nodes are expanded or not
    if (this.treeControl.dataNodes.every((node) => this.treeControl.isExpanded(node))) {
      // if all tree nodes are expanded, then collapse them
      this.treeControl.collapseAll();
    } else {
      // if any tree node is collapsed, then expand them
      this.treeControl.expandAll();
    }
  }

  hasChild = (_: number, node: InsuranceItemFlatNode) => node.expandable;
}
