import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {PhoneFormatViewComponent} from './phone-format-view/phone-format-view.component';
import {FormatPhonePipe} from './shared/pipe/format-phone.pipe';
import {FormsModule} from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        AppComponent, PhoneFormatViewComponent, FormatPhonePipe
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
