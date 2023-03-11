import { InsuranceItemNode } from '../../models/insurance-item-node';
import {
  addContentsLimitInsuranceItem,
  deleteContentsLimitInsuranceItem,
  getContentsLimitInsuranceList,
} from './../../store/contents-limit-insurance.actions';

import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { Store } from '@ngrx/store';
import { map, Observable, Subject, takeUntil } from 'rxjs';
import { ContentsLimitInsurance } from 'src/app/api/models';
import { AddContentsLimitInsuranceItemDialogComponent } from 'src/app/contents-limit-insurance/components/add-contents-limit-insurance-item-dialog/add-contents-limit-insurance-item-dialog.component';
import { InsuranceItemFlatNode } from 'src/app/contents-limit-insurance/models/insurance-item-flat-node';
import { contentsLimitInsurance } from 'src/app/contents-limit-insurance/store/contents-limit-insurance.selectors';
import ContentsLimitInsuranceState from 'src/app/contents-limit-insurance/store/contents-limit-insurance.state';

@Component({
  selector: 'app-contents-limit-insurance-list',
  templateUrl: './contents-limit-insurance-list.component.html',
  styleUrls: ['./contents-limit-insurance-list.component.scss'],
})
export class ContentsLimitInsuranceListComponent implements OnInit, OnDestroy {
  destroy$ = new Subject();
  loading$!: Observable<boolean>;

  private _transformer = (node: InsuranceItemNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      id: node.id,
      name: node.name,
      level: level,
      value: node.value,
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

  get totalValue(): number {
    return this.dataSource.data.map((x) => x.value).reduce((a, b) => a + b, 0);
  }

  get totalItems(): number | undefined {
    return this.dataSource.data.map((x) => x.children?.length).reduce((a, b) => (a || 0) + (b || 0), 0);
  }

  get allNodesExpanded() {
    return this.treeControl?.dataNodes?.every((node) => this.treeControl.isExpanded(node));
  }

  constructor(private store: Store<ContentsLimitInsuranceState>, private dialog: MatDialog) {}

  ngOnInit() {
    this.store.dispatch(getContentsLimitInsuranceList());
    this.loading$ = this.store.select(contentsLimitInsurance.loading).pipe(takeUntil(this.destroy$));
    this.store
      .select(contentsLimitInsurance.items)
      .pipe(takeUntil(this.destroy$))
      .subscribe((items) => {
        this.buildTree(items);
      });
  }

  buildTree(items: ContentsLimitInsurance[]) {
    const categories = items.map((x) => x.category);
    const tree: InsuranceItemNode[] = [];
    categories.forEach((category) => {
      const categoryItems = items.filter((x) => x.category === category);
      const categoryItemNodes: InsuranceItemNode[] = [];
      categoryItems.forEach((item) => {
        categoryItemNodes.push({
          id: item.id || 0,
          name: item.name || '',
          value: item.value || 0,
        });
      });
      // Try to find the category in the tree first
      const categoryNode = tree.find((x) => x.name === category?.name);
      if (categoryNode) {
        // If the category already exists, add the new items to the existing category
        if (!categoryNode.children) categoryNode.children = [];
        categoryNode.children = categoryNode.children.concat(categoryItemNodes);
      } else {
        // If the category doesn't exist, add it to the tree
        tree.push({
          id: category?.id || 0,
          name: category?.name || '',
          children: categoryItemNodes,
          value: 0,
        });
      }
    });
    // For each category, add the total value of the items in the category
    tree.forEach((category) => {
      category.value = category.children ? category.children.map((x) => x.value).reduce((a, b) => a + b, 0) : 0;
    });
    // Sort by category name
    tree.sort((a, b) => (a.name > b.name ? 1 : -1));
    this.dataSource.data = tree;
    this.treeControl.expandAll();
  }

  /**
   * Expand or collapse all nodes
   */
  expandAllNodes() {
    if (!this.treeControl.dataNodes) return;

    // check if all tree nodes are expanded or not
    if (this.treeControl.dataNodes.every((node) => this.treeControl.isExpanded(node))) {
      // if all tree nodes are expanded, then collapse them
      this.treeControl.collapseAll();
    } else {
      // if any tree node is collapsed, then expand them
      this.treeControl.expandAll();
    }
  }

  addItem() {
    const dialogRef = this.dialog.open(AddContentsLimitInsuranceItemDialogComponent, {
      width: '400px',
    });
    dialogRef.afterClosed().subscribe((newItem: ContentsLimitInsurance) => {
      if (newItem) {
        this.store.dispatch(addContentsLimitInsuranceItem({ payload: newItem }));
      }
    });
  }

  deleteItem(id: number) {
    this.store.dispatch(deleteContentsLimitInsuranceItem({ payload: id }));
  }

  hasChild = (_: number, node: InsuranceItemFlatNode) => node.expandable;

  ngOnDestroy() {
    this.destroy$.complete();
  }
}
