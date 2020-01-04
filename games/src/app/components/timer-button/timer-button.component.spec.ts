import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { StoreModule } from "@ngrx/store";
import { TimerButtonComponent } from "./timer-button.component";
import { AppComponent } from "src/app/app.component";
import { CardComponent } from "../card/card.component";
import { BrowserModule } from "@angular/platform-browser";
import { MatModule } from "src/app/modules/mat/mat.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { reducer } from "src/app/store/ratingReducer";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SortingPipe } from 'src/app/pipes/sorting.pipe';

describe("TimerButtonComponent", () => {
  let component: TimerButtonComponent;
  let fixture: ComponentFixture<TimerButtonComponent>;

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

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create timer component", () => {
    expect(component).toBeTruthy();
  });

  it("should return a random number between min and max", async(() => {
    expect(component.getRandomNumber(1, 5)).toBeLessThan(6);
    expect(component.getRandomNumber(1, 5)).toBeGreaterThan(0);
  }));

  it("should call toggleRating on click", async(() => {
    spyOn(component, "toggleRating");

    let button = fixture.debugElement.nativeElement.querySelector("button");
    button.click();

    fixture.whenStable().then(() => {
      expect(component.toggleRating).toHaveBeenCalled();
    });
  }));

  it("should change the label to 'Stop Random Rating", () => {
    let button = fixture.debugElement.nativeElement.querySelector("button");
    button.click();
    fixture.detectChanges();

    expect(component.label).toEqual("Stop Random Rating");
  });

  it("should switch random rating", () => {
    let button = fixture.debugElement.nativeElement.querySelector("button");
    button.click();
    fixture.detectChanges();
    expect(component.isRatingOn).toBe(false);
  });
});
