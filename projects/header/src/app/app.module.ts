import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { createCustomElement } from '@angular/elements';
import { HeaderModule } from './components/header/header.component';
import { ApplicationMenuModule } from './components/application-menu/application-menu.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    ApplicationMenuModule,
    HttpClientModule,
  ],
  providers: [],
  //bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private injector: Injector) {}
  /// eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngDoBootstrap() {
    const header = createCustomElement(AppComponent, {
      injector: this.injector,
    });
    customElements.define('app-header-mf', header);
  }
}
