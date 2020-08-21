import { Injectable } from '@angular/core';
import {SG_INDEX, US_INDEX} from '../constants';

@Injectable({
  providedIn: 'root'
})
export class RegionService {
  private _regionPhonePrefixLists = [];
  get regionPhonePrefixLists(): string[] {
    return this._regionPhonePrefixLists;
  }

  private _regionCountryCodeLists = [];
  get regionCountryCodeLists(): string[] {
    return this._regionCountryCodeLists;
  }

  private _regionPhoneNumberMaxLengths = [];
  get regionPhoneNumberMaxLengths(): number[] {
    return this._regionPhoneNumberMaxLengths;
  }

  selectedRegionIndex = '0';

  constructor() {
    this._regionCountryCodeLists[SG_INDEX] = 'SG';
    this._regionPhonePrefixLists[SG_INDEX] = '+65';
    this._regionPhoneNumberMaxLengths[SG_INDEX] = 8;

    this._regionCountryCodeLists[US_INDEX] = 'US';
    this._regionPhonePrefixLists[US_INDEX] = '+1';
    this._regionPhoneNumberMaxLengths[US_INDEX] = 10;
  }
}
