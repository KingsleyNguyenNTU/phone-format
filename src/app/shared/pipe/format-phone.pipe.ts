import { Pipe, PipeTransform } from '@angular/core';
import {RegionService} from '../services/region.service';
import {SG_INDEX, US_INDEX} from '../constants';

@Pipe({
  name: 'formatPhone'
})
export class FormatPhonePipe implements PipeTransform {

  constructor(private regionService: RegionService) { }

  transform(value: string, args?: any): any {
    const currentRegion = this.regionService.selectedRegionIndex;
    let formattedPhoneNumber: string;
    switch (currentRegion) {
      // Singapore region: +65 dddd dddd
      case SG_INDEX: formattedPhoneNumber = value.slice(0, 4) + ' ' + value.slice(4);
                     break;
      // USA region: +1 (ddd) ddd-dddd
      case US_INDEX: formattedPhoneNumber = '(' + value.slice(0, 3) + ') ' + value.slice(3, 6) + '-' + value.slice(6);
                     break;
      // invalid region
      default: return null;
    }
    // include the phone country code
    formattedPhoneNumber = this.regionService.regionPhonePrefixLists[this.regionService.selectedRegionIndex] + ' ' + formattedPhoneNumber;

    return formattedPhoneNumber;
  }
}
