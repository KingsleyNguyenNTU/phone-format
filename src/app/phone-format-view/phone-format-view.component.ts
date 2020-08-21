import {Component, OnInit, ViewChild} from '@angular/core';
import {RegionService} from '../shared/services/region.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-phone-format-view',
  templateUrl: './phone-format-view.component.html',
  styleUrls: ['./phone-format-view.component.css']
})
export class PhoneFormatViewComponent implements OnInit {
  rawPhoneNumber: string;
  shouldDisplayPhoneLink = false;
  @ViewChild('f') myForm: NgForm;

  constructor(private regionService: RegionService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.shouldDisplayPhoneLink = true;
    return false;
  }

  resetPhoneNumber() {
    this.rawPhoneNumber = '';
    this.myForm.form.markAsPristine();
    this.shouldDisplayPhoneLink = false;
  }
}
