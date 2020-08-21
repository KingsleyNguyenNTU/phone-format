import { TestBed } from '@angular/core/testing';
import { RegionService } from './region.service';
import {SG_INDEX, US_INDEX} from '../constants';

describe('RegionService', () => {
  let service: RegionService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegionService]
    });
    service = TestBed.get(RegionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('SG should be +65 and 8 digit', () => {
    expect(service.regionCountryCodeLists[SG_INDEX]).toEqual('SG');
    expect(service.regionPhonePrefixLists[SG_INDEX]).toEqual('+65');
    expect(service.regionPhoneNumberMaxLengths[SG_INDEX]).toEqual(8);
  });

  it('US should be +1 and 10 digit', () => {
    const indexOfUs = 1;
    expect(service.regionCountryCodeLists[US_INDEX]).toEqual('US');
    expect(service.regionPhonePrefixLists[US_INDEX]).toEqual('+1');
    expect(service.regionPhoneNumberMaxLengths[US_INDEX]).toEqual(10);
  });
});
