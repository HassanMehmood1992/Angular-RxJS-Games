import { TestBed, async } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { CardComponent } from "./components/card/card.component";
import { TimerButtonComponent } from "./components/timer-button/timer-button.component";
import { BrowserModule } from "@angular/platform-browser";
import { MatModule } from "./modules/mat/mat.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { StoreModule } from "@ngrx/store";
import { reducer } from "./store/ratingReducer";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SortingPipe } from './pipes/sorting.pipe';

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, CardComponent, TimerButtonComponent,SortingPipe],
      imports: [
        BrowserModule,
        MatModule,
        FlexLayoutModule,
        StoreModule.forRoot({
          games: reducer
        }),
        BrowserAnimationsModule
      ]
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Games'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("Games");
  });

  it('should trigger onResize method when window is resized', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    const spyOnResize = spyOn(component, 'onResize');
    window.dispatchEvent(new Event('resize'));
    expect(spyOnResize).toHaveBeenCalled();
  });

});
