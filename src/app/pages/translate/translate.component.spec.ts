import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TranslateComponent} from './translate.component';
import {NgxsModule, Store} from '@ngxs/store';
import {ngxsConfig} from '../../core/modules/ngxs/ngxs.module';
import {AppTranslocoModule} from '../../core/modules/transloco/transloco.module';
import {LanguageSelectorComponent} from './language-selector/language-selector.component';
import {AppAngularMaterialModule} from '../../core/modules/angular-material/angular-material.module';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {TranslateState} from '../../modules/translate/translate.state';

describe('TranslateComponent', () => {
  let store: Store;
  let component: TranslateComponent;
  let fixture: ComponentFixture<TranslateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TranslateComponent,
        LanguageSelectorComponent
      ],
      imports: [
        AppTranslocoModule,
        AppAngularMaterialModule,
        NgxsModule.forRoot([TranslateState], ngxsConfig)
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    store = TestBed.inject(Store);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // TODO test state
  //
  // it('swapLanguages should turn spoken-to-signed to signed-to-spoken', () => {
  //   component.spokenToSigned = true;
  //   const spy = spyOn(component, 'setInputMode');
  //
  //   component.swapLanguages();
  //
  //   expect(component.spokenToSigned).toBeFalse();
  //   expect(spy).toHaveBeenCalledWith('webcam');
  // });
  // it('swapLanguages should turn signed-to-spoken to spoken-to-signed', () => {
  //   component.spokenToSigned = false;
  //
  //   component.swapLanguages();
  //
  //   expect(store.snapshot().translate.spokenToSigned).toBeTrue();
  //   expect(component.spokenToSigned).toBeTrue();
  // });
  //
  // for (const mode of ['text', 'upload']) {
  //   it(`setInputMode "${mode}" should StopVideo`, () => {
  //     const spy = spyOn(store, 'dispatch');
  //
  //     component.setInputMode(mode as InputMode);
  //
  //     expect(store.snapshot().translate.inputMode).toBe(mode);
  //     expect(spy).toHaveBeenCalledOnceWith(StopVideo);
  //   });
  // }
  //
  // it('setInputMode "webcam" should StopVideo and StartCamera', () => {
  //   component.inputMode = 'text';
  //   const spy = spyOn(store, 'dispatch');
  //
  //   component.setInputMode('webcam');
  //
  //   expect(component.inputMode).toBe('webcam');
  //   expect(spy.calls.count()).toBe(2);
  //   expect(spy.calls.argsFor(0)[0]).toBe(StopVideo);
  //   expect(spy.calls.argsFor(1)[0]).toBe(StartCamera);
  // });
});