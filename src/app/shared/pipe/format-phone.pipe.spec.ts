import { FormatPhonePipe } from './format-phone.pipe';
import { TestBed } from '@angular/core/testing';
import {RegionService} from '../services/region.service';
import {SG_INDEX, US_INDEX} from '../constants';

describe('FormatPhonePipe', () => {
  let pipe: FormatPhonePipe;
  let service: RegionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FormatPhonePipe,
        RegionService
      ]
    });

    pipe = TestBed.get(FormatPhonePipe);
    service = TestBed.get(RegionService);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transform SG phone number', () => {
    service.selectedRegionIndex = SG_INDEX;
    expect(pipe.transform('98765432')).toEqual('+65 9876 5432');
  });

  it('transform US phone number', () => {
    service.selectedRegionIndex = US_INDEX;
    expect(pipe.transform('9876543210')).toEqual('+1 (987) 654-3210');
  });
});
