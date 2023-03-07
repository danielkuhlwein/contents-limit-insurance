import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ToolbarComponent } from 'src/app/layout/toolbar/toolbar.component';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent],
})
export class LayoutModule {}
