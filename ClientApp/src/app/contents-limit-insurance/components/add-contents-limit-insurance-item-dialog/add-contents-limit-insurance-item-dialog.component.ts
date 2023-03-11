import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ContentsLimitInsuranceCategory } from 'src/app/api/models';
import {
  addContentsLimitInsuranceItem,
  getContentsLimitInsuranceCategoriesList,
} from 'src/app/contents-limit-insurance/store/contents-limit-insurance.actions';
import { contentsLimitInsurance } from 'src/app/contents-limit-insurance/store/contents-limit-insurance.selectors';
import ContentsLimitInsuranceState from 'src/app/contents-limit-insurance/store/contents-limit-insurance.state';

@Component({
  selector: 'add-contents-limit-insurance-item-dialog',
  templateUrl: './add-contents-limit-insurance-item-dialog.component.html',
  styleUrls: ['./add-contents-limit-insurance-item-dialog.component.scss'],
})
export class AddContentsLimitInsuranceItemDialogComponent implements OnInit {
  categories$!: Observable<ContentsLimitInsuranceCategory[]>;
  loading$!: Observable<boolean>;
  form!: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<AddContentsLimitInsuranceItemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AddContentsLimitInsuranceItemDialogComponent,
    private store: Store<ContentsLimitInsuranceState>,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.store.dispatch(getContentsLimitInsuranceCategoriesList());
    this.categories$ = this.store.select(contentsLimitInsurance.categories.items);
    this.loading$ = this.store.select(contentsLimitInsurance.categories.loading);
    this.form = this.fb.group({
      category: ['', Validators.required],
      name: ['', [Validators.required, Validators.maxLength(50)]],
      value: ['', [Validators.required, Validators.min(0), Validators.max(1000000)]],
    });
  }

  addItem() {
    if (!this.form.valid) {
      this.snackBar.open('Please fill out all required fields.', 'Close', { duration: 3000 });
      return;
    }
    this.dialogRef.close({
      name: this.form.get('name')?.value,
      value: this.form.get('value')?.value,
      category: this.form.get('category')?.value,
    });
  }
}
