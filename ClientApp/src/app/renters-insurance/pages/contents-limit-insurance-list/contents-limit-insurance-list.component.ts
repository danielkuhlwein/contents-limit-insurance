import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export const ELEMENT_DATA = [
  { category: 'Category 1', item: 'Item 1', value: '$1,000' },
  { category: 'Category 2', item: 'Item 2', value: '$2,000' },
  { category: 'Category 3', item: 'Item 3', value: '$3,000' },
  { category: 'Category 4', item: 'Item 4', value: '$4,000' },
  { category: 'Category 5', item: 'Item 5', value: '$5,000' },
  { category: 'Category 6', item: 'Item 6', value: '$6,000' },
  { category: 'Category 7', item: 'Item 7', value: '$7,000' },
  { category: 'Category 8', item: 'Item 8', value: '$8,000' },
  { category: 'Category 9', item: 'Item 9', value: '$9,000' },
  { category: 'Category 10', item: 'Item 10', value: '$10,000' },
  { category: 'Category 11', item: 'Item 11', value: '$11,000' },
  { category: 'Category 12', item: 'Item 12', value: '$12,000' },
  { category: 'Category 13', item: 'Item 13', value: '$13,000' },
  { category: 'Category 14', item: 'Item 14', value: '$14,000' },
  { category: 'Category 15', item: 'Item 15', value: '$15,000' },
  { category: 'Category 16', item: 'Item 16', value: '$16,000' },
  { category: 'Category 17', item: 'Item 17', value: '$17,000' },
  { category: 'Category 18', item: 'Item 18', value: '$18,000' },
  { category: 'Category 19', item: 'Item 19', value: '$19,000' },
  { category: 'Category 20', item: 'Item 20', value: '$20,000' },
  { category: 'Category 21', item: 'Item 21', value: '$21,000' },
];

@Component({
  selector: 'app-contents-limit-insurance-list',
  templateUrl: './contents-limit-insurance-list.component.html',
  styleUrls: ['./contents-limit-insurance-list.component.scss'],
})
export class ContentsLimitInsuranceListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['category', 'item', 'value', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  pageEvent!: any;

  constructor() {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
