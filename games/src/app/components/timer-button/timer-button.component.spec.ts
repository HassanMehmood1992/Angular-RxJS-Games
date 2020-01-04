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

describe("TimerButtonComponent", () => {
  let component: TimerButtonComponent;
  let fixture: ComponentFixture<TimerButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, CardComponent, TimerButtonComponent],
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


  // it("should return a random number between min and max", async(() => {
  //   const fixture = TestBed.createComponent(CardComponent);
  //   component = fixture.componentInstance;
  //   component.game = {
  //     id: 2,
  //     name: "Resident Evil 4",
  //     genre: "Horror",
  //     rating: 5,
  //     img: "./assets/re4.png"
  //   };
  //   fixture.detectChanges();

  //   spyOn(component, "updateRating");

  //   let icon = fixture.debugElement.nativeElement.querySelector("mat-icon");
  //   icon.click();

  //   fixture.whenStable().then(() => {
  //     expect(component.updateRating).toHaveBeenCalled();
  //     expect(component.game.rating).toBe(5);
  //   });
  // }));

});
