import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CardComponent } from "./card.component";
import { AppComponent } from "src/app/app.component";
import { TimerButtonComponent } from "../timer-button/timer-button.component";
import { BrowserModule } from "@angular/platform-browser";
import { MatModule } from "src/app/modules/mat/mat.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { reducer } from "src/app/store/ratingReducer";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StoreModule } from "@ngrx/store";

describe("CardComponent", () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

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
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.game = {
      id: 2,
      name: "Resident Evil 4",
      genre: "Horror",
      rating: 5,
      img: "./assets/re4.png"
    };
    fixture.detectChanges();
  });

  it("should create component with given props", () => {
    expect(component).toBeTruthy();
  });

  it("should render Genre Horror", () => {
    const fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.game = {
      id: 2,
      name: "Resident Evil 4",
      genre: "Horror",
      rating: 5,
      img: "./assets/re4.png"
    };
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(".mat-card-subtitle").textContent).toContain(
      "Genre: Horror"
    );
  });

  it("should call update rating on clicking star", async(() => {
    const fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.game = {
      id: 2,
      name: "Resident Evil 4",
      genre: "Horror",
      rating: 5,
      img: "./assets/re4.png"
    };
    fixture.detectChanges();

    spyOn(component, "updateRating");

    let icon = fixture.debugElement.nativeElement.querySelector("mat-icon");
    icon.click();

    fixture.whenStable().then(() => {
      expect(component.updateRating).toHaveBeenCalled();
    });
  }));
});
