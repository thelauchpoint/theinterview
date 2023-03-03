import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { UIModule } from '@theinterview/xplat/nativescript/features';

@NgModule({
  imports: [UIModule, NativeScriptCommonModule, CommonModule],
  exports: [UIModule, NativeScriptCommonModule, CommonModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class SharedModule {}
