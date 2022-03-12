//modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//environment
import { environment } from '../environments/environment';
//firebase
import { AngularFireModule } from '@angular/fire/compat';
//analytics
import {
  ScreenTrackingService,
  UserTrackingService,
} from '@angular/fire/analytics';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
//ngx-translate
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
//components
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { MainComponent } from './components/main/main.component';
import { UsComponent } from './components/us/us.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AppRoutingModule } from './app-routing.module';
import { ScullyLibModule } from '@scullyio/ng-lib';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    UsComponent,
    MainPageComponent,
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    // initialize firebase tools
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    // ngx-translate and the loader module
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    //scully to compyle SSG
    ScullyLibModule,
  ],
  providers: [
    ScreenTrackingService,
    UserTrackingService,
    ScreenTrackingService,
    UserTrackingService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
