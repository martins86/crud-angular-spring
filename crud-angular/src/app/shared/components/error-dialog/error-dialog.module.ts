import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

const material = [MatDialogModule, MatButtonModule];

import { ErrorDialogComponent } from './error-dialog.component';

@NgModule({
  declarations: [
    ErrorDialogComponent
  ],
  imports: [
    CommonModule,
    ...material
  ],
  providers: [
    {
      provide: MAT_DIALOG_DATA, useValue: {}
    },
    {
      provide: MatDialogRef, useValue: {}
    }
  ],
  exports: [
    ErrorDialogComponent
  ],
})
export class ErrorDialogModule { }
