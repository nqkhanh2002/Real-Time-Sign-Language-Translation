import {ComponentFixture, TestBed} from '@angular/core/testing';
import {axe, toHaveNoViolations} from 'jasmine-axe';
import {PlaygroundComponent} from './playground.component';
import {Store} from '@ngxs/store';
import {AppNgxsModule} from '../../core/modules/ngxs/ngxs.module';
import {StartCamera} from '../../core/modules/ngxs/store/video/video.actions';
import {AppTranslocoTestingModule} from '../../core/modules/transloco/transloco-testing.module';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {TranslocoService} from '@ngneat/transloco';
import {IonicModule} from '@ionic/angular';
import {SettingsModule} from '../../modules/settings/settings.module';
import {VideoModule} from '../../components/video/video.module';

fdescribe('PlaygroundComponent', () => {
  let component: PlaygroundComponent;
  let fixture: ComponentFixture<PlaygroundComponent>;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlaygroundComponent],
      imports: [
        AppTranslocoTestingModule,
        AppNgxsModule,
        IonicModule,
        SettingsModule,
        VideoModule,
        NoopAnimationsModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    store = TestBed.inject(Store);
    store.reset({settings: {receiveVideo: false}});

    fixture = TestBed.createComponent(PlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should pass accessibility test', async () => {
    jasmine.addMatchers(toHaveNoViolations);
    const a11y = await axe(fixture.nativeElement);
    expect(a11y).toHaveNoViolations();
  });

  it('should start camera when receiveVideo', () => {
    const dispatchSpy = spyOn(store, 'dispatch');
    store.reset({settings: {receiveVideo: true}});
    expect(dispatchSpy).toHaveBeenCalledWith(StartCamera);
  });

  it('language change should change title', async () => {
    const transloco = TestBed.inject(TranslocoService);

    transloco.setActiveLang('he');
    expect(document.title).toEqual('גן המשחקים לעיבוד שפת הסימנים');

    transloco.setActiveLang('en');
    expect(document.title).toEqual('Sign Language Processing Playground');
  });
});
