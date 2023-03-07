/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ContentsLimitInsuranceListComponent } from './contents-limit-insurance-list.component';

describe('ContentsLimitInsuranceListComponent', () => {
  let component: ContentsLimitInsuranceListComponent;
  let fixture: ComponentFixture<ContentsLimitInsuranceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentsLimitInsuranceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentsLimitInsuranceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
