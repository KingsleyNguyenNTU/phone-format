import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhoneFormatViewComponent } from './phone-format-view/phone-format-view.component';
import {FormsModule} from '@angular/forms';
import { FormatPhonePipe } from './shared/pipe/format-phone.pipe';
import { PhoneFormatValidatorDirective } from './shared/validator/phone-format-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    PhoneFormatViewComponent,
    FormatPhonePipe,
    PhoneFormatValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
