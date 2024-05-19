import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import {AppRoutingModule} from "./app.routing.module";
import {NotFoundComponent} from "./not-found/not-found.component";
import {InfoGameComponent} from "./info-game/info-game.component";
import {HeaderComponent } from './header/header.component';
import {AvatarModule} from "primeng/avatar";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { ToolbarModule } from 'primeng/toolbar';
import {SplitButtonModule} from "primeng/splitbutton";
import { NewAccountComponent } from "./login/new-account/new-account.component";
import { ForgottenPasswordComponent } from './login/forgotten-password/forgotten-password.component';
import { FooterComponent } from './footer/footer.component';
import { BuscadorComponent } from './main-page/buscador/buscador.component';
import { PaginadoComponent } from './main-page/paginado/paginado.component';
import {NgxPaginationModule} from 'ngx-pagination';

import {CatchCodeVerificationComponent} from "./catch-code-verification/catch-code-verification.component";
import {ChangeOldPasswordComponent} from "./change-old-password/change-old-password.component";
import {LoginInterceptor} from "./interceptores/login.interceptor";
import {CarouselModule} from "primeng/carousel";
import {AuthInterceptor} from "./interceptores/auth.interceptor";
import {PaginatorModule} from "primeng/paginator";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainPageComponent,
    NotFoundComponent,
    InfoGameComponent,
    HeaderComponent,
    NewAccountComponent,
    ForgottenPasswordComponent,
    FooterComponent,
    BuscadorComponent,
    PaginadoComponent,
    
    CatchCodeVerificationComponent,
    ChangeOldPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToolbarModule,
    AvatarModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    TableModule,
    HttpClientModule,
    InputTextModule,
    DialogModule,
    ToolbarModule,
    ConfirmDialogModule,
    RatingModule,
    InputNumberModule,
    InputTextareaModule,
    RadioButtonModule,
    DropdownModule,
    ButtonModule,
    SplitButtonModule,
    NgxPaginationModule,
    CarouselModule,
    PaginatorModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoginInterceptor,
      multi: true
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
