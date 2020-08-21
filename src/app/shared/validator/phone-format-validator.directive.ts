import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors} from '@angular/forms';
import {RegionService} from '../services/region.service';

@Directive({
  selector: '[phoneFormatByRegion]',
  providers: [{provide: NG_VALIDATORS, useExisting: PhoneFormatValidatorDirective, multi: true}]
})
export class PhoneFormatValidatorDirective {
  constructor(private regionService: RegionService) { }

  validate(control: AbstractControl): ValidationErrors | null {
    if (!control.value) {
      return null;
    }

    const regionPhoneNumberMaxLengths = this.regionService.regionPhoneNumberMaxLengths[this.regionService.selectedRegionIndex];
    return Number.isInteger(+control.value)
              && +control.value >= 0
              && control.value.length === regionPhoneNumberMaxLengths ? null : { invalidPhoneNumber: true };
  }

}
