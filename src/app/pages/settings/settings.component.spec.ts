import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SettingsPageComponent} from './settings.component';
import {axe, toHaveNoViolations} from 'jasmine-axe';
import {AppTranslocoTestingModule} from '../../core/modules/transloco/transloco-testing.module';
import {RouterTestingModule} from '@angular/router/testing';
import {MatDialogRef} from '@angular/material/dialog';
import {IonicModule} from '@ionic/angular';
import {MatTreeModule} from '@angular/material/tree';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatSidenavModule} from '@angular/material/sidenav';

describe('SettingsPageComponent', () => {
  let component: SettingsPageComponent;
  let fixture: ComponentFixture<SettingsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SettingsPageComponent],
      imports: [
        IonicModule,
        MatTreeModule,
        CdkTreeModule,
        MatSidenavModule,
        AppTranslocoTestingModule,
        RouterTestingModule,
      ],
      providers: [{provide: MatDialogRef, useValue: {}}],
    }).compileComponents();

    fixture = TestBed.createComponent(SettingsPageComponent);
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
});
