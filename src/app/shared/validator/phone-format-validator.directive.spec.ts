import { PhoneFormatValidatorDirective } from './phone-format-validator.directive';
import {RegionService} from '../services/region.service';
import {TestBed} from '@angular/core/testing';
import {FormControl} from '@angular/forms';
import {SG_INDEX, US_INDEX} from '../constants';

describe('PhoneFormatValidatorDirective', () => {
  let validator: PhoneFormatValidatorDirective;
  let service: RegionService;
  const failValidatorResult = { invalidPhoneNumber: true };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PhoneFormatValidatorDirective,
        RegionService
      ]
    });

    validator = TestBed.get(PhoneFormatValidatorDirective);
    service = TestBed.get(RegionService);
  });

  it('should create an instance', () => {
    expect(validator).toBeTruthy();
  });

  it('valid SG phone number', () => {
    service.selectedRegionIndex = SG_INDEX;
    const formControl = new FormControl();
    formControl.setValue('98987676');
    expect(validator.validate(formControl)).toBeNull();
  });

  it('invalid SG phone number by negative 1', () => {
    service.selectedRegionIndex = SG_INDEX;
    const formControl = new FormControl();
    formControl.setValue('-98987676');
    expect(validator.validate(formControl)).toEqual(failValidatorResult);
  });

  it('invalid SG phone number by negative 2', () => {
    service.selectedRegionIndex = SG_INDEX;
    const formControl = new FormControl();
    formControl.setValue('-9898767');
    expect(validator.validate(formControl)).toEqual(failValidatorResult);
  });

  it('invalid SG phone number by length', () => {
    service.selectedRegionIndex = SG_INDEX;
    const formControl = new FormControl();
    formControl.setValue('989876762');
    expect(validator.validate(formControl)).toEqual(failValidatorResult);
  });

  it('invalid SG phone number by content 1', () => {
    service.selectedRegionIndex = SG_INDEX;
    const formControl = new FormControl();
    formControl.setValue('1234567a');
    expect(validator.validate(formControl)).toEqual(failValidatorResult);
  });

  it('invalid SG phone number by content 2', () => {
    service.selectedRegionIndex = SG_INDEX;
    const formControl = new FormControl();
    formControl.setValue('12345678a');
    expect(validator.validate(formControl)).toEqual(failValidatorResult);
  });

  it('valid US phone number', () => {
    service.selectedRegionIndex = US_INDEX;
    const formControl = new FormControl();
    formControl.setValue('9898767612');
    expect(validator.validate(formControl)).toBeNull();
  });

  it('invalid US phone number', () => {
    service.selectedRegionIndex = US_INDEX;
    const formControl = new FormControl();
    formControl.setValue('989876762111');
    expect(validator.validate(formControl)).toEqual(failValidatorResult);
  });

  it('invalid US phone number by negative 1', () => {
    service.selectedRegionIndex = US_INDEX;
    const formControl = new FormControl();
    formControl.setValue('-1234567890');
    expect(validator.validate(formControl)).toEqual(failValidatorResult);
  });

  it('invalid US phone number by negative 2', () => {
    service.selectedRegionIndex = US_INDEX;
    const formControl = new FormControl();
    formControl.setValue('-123456789');
    expect(validator.validate(formControl)).toEqual(failValidatorResult);
  });

  it('invalid US phone number by content 1', () => {
    service.selectedRegionIndex = US_INDEX;
    const formControl = new FormControl();
    formControl.setValue('123456789a');
    expect(validator.validate(formControl)).toEqual(failValidatorResult);
  });

  it('invalid US phone number by content 1', () => {
    service.selectedRegionIndex = US_INDEX;
    const formControl = new FormControl();
    formControl.setValue('1234567890a');
    expect(validator.validate(formControl)).toEqual(failValidatorResult);
  });
});
