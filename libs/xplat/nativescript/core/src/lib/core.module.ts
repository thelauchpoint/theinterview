import { NgModule, Optional, SkipSelf } from '@angular/core';

// nativescript
import { NativeScriptModule, NativeScriptHttpClientModule } from '@nativescript/angular';
import { Device } from '@nativescript/core';
import { FontIconModule, USE_STORE } from 'nativescript-fonticon/angular';

import { fontAwesomeIcons } from '@theinterview/xplat/nativescript/utils';

// libs
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CoreModule, PlatformLanguageToken, PlatformWindowToken } from '@theinterview/xplat/core';
import { throwIfAlreadyLoaded } from '@theinterview/xplat/utils';

// app
import { MobileWindowService } from './services/mobile-window.service';
import { MobileTranslateLoader } from './services/mobile-translate.loader';

// factories
export function platformLangFactory() {
  return Device.language;
}

export function createTranslateLoader() {
  return new MobileTranslateLoader('/assets/i18n/');
}

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptHttpClientModule,
    FontIconModule.forRoot({}),
    CoreModule.forRoot([
      {
        provide: PlatformLanguageToken,
        useFactory: platformLangFactory,
      },
      {
        provide: PlatformWindowToken,
        useClass: MobileWindowService,
      },
    ]),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
      },
    }),
  ],
  providers: [
    {
      // inline icons to avoid extra file handling on app boot
      provide: USE_STORE,
      useValue: {
        fa: fontAwesomeIcons,
      },
    },
  ],
})
export class TheinterviewCoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: TheinterviewCoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'TheinterviewCoreModule');
  }
}
