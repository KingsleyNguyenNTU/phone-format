import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneFormatViewComponent } from './phone-format-view.component';
import {FormsModule} from '@angular/forms';
import {FormatPhonePipe} from '../shared/pipe/format-phone.pipe';
import {RegionService} from '../shared/services/region.service';
import {PhoneFormatValidatorDirective} from '../shared/validator/phone-format-validator.directive';
import {By} from '@angular/platform-browser';

describe('PhoneFormatViewComponent', () => {
  let component: PhoneFormatViewComponent;
  let fixture: ComponentFixture<PhoneFormatViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        PhoneFormatViewComponent, FormatPhonePipe, PhoneFormatValidatorDirective
      ],
      providers: [
        RegionService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneFormatViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render with correct form input', () => {
    expect(fixture.nativeElement.querySelectorAll('.form-control').length).toEqual(2);
    expect(fixture.nativeElement.querySelectorAll('#region.form-control').length).toEqual(1);
    expect(fixture.nativeElement.querySelector('#region option[value="0"]').label).toEqual('SG');
    expect(fixture.nativeElement.querySelector('#region option[value="1"]').label).toEqual('US');
    expect(fixture.nativeElement.querySelectorAll('#phoneNumber.form-control').length).toEqual(1);
  });

  it('valid phone format', () => {
    fixture.whenStable().then( () => {
      const form = component.myForm.form;
      form.controls.region.setValue('1');
      form.controls.phoneNumber.setValue('1234567890');
      form.markAsDirty();
      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('#formattedPhoneNumber').innerHTML).toBe('Formatted phone number: +1 (123) 456-7890');
      expect(fixture.nativeElement.querySelector('button').disabled).toBeFalsy();
    });

  });

  it('invalid phone format', () => {
    fixture.whenStable().then( () => {
      const form = component.myForm.form;
      form.controls.region.setValue('1');
      form.controls.phoneNumber.setValue('12367890');
      form.controls.phoneNumber.markAsDirty();
      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('#formattedPhoneNumber')).toBeNull();
      expect(fixture.nativeElement.querySelector('.alert-invalid-phone')).toBeTruthy();
      expect(fixture.nativeElement.querySelector('.alert-required-phone')).toBeNull();
      expect(fixture.nativeElement.querySelector('button').disabled).toBeTruthy();
    });

  });

  it('empty phone', () => {
    fixture.whenStable().then( () => {
      const form = component.myForm.form;
      form.controls.region.setValue('1');
      form.controls.phoneNumber.setValue('');
      form.controls.phoneNumber.markAsDirty();
      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('#formattedPhoneNumber')).toBeNull();
      expect(fixture.nativeElement.querySelector('.alert-invalid-phone')).toBeNull();
      expect(fixture.nativeElement.querySelector('.alert-required-phone')).toBeTruthy();
      expect(fixture.nativeElement.querySelector('button').disabled).toBeTruthy();
    });

  });

  it('submit form should generate call button', () => {
    fixture.whenStable().then( () => {
      const form = component.myForm.form;
      form.controls.region.setValue('1');
      form.controls.phoneNumber.setValue('1234567890');

      const formDOM = fixture.debugElement.query(By.css('form'));
      formDOM.triggerEventHandler('ngSubmit', null);
      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('a').href).toBe('tel:+1 (123) 456-7890');
    });

  });
});
