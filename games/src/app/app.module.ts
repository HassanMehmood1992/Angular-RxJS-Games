import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatModule } from "./modules/mat/mat.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { StoreModule } from "@ngrx/store";
import { reducer } from "./store/ratingReducer";
import { CardComponent } from "./components/card/card.component";
import { TimerButtonComponent } from "./components/timer-button/timer-button.component";

@NgModule({
  declarations: [AppComponent, CardComponent, TimerButtonComponent],
  imports: [
    BrowserModule,
    MatModule,
    FlexLayoutModule,
    StoreModule.forRoot({
      games: reducer
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
