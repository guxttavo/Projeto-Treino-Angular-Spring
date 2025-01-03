import { NgModule } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { CadastrarUsuarioComponent } from './components/usuario/cadastrar-usuario/cadastrar-usuario.component';
import { EditarUsuarioComponent } from './components/usuario/editar-usuario/editar-usuario.component';
import { CadastrarCarroComponent } from './components/carro/cadastrar-carro/cadastrar-carro.component';
import { EditarCarroComponent } from './components/carro/editar-carro/editar-carro.component';
import { ConfirmDialogComponent } from './shared/dialogs/confirm-dialog/confirm-dialog.component';
import { OAuthModule, provideOAuthClient } from 'angular-oauth2-oidc';

const oAuthConfig = {
  clientId: 'Iv23lirfPfOsGxDYtFPI',
  issuer: 'YOUR_OAUTH_PROVIDER_URL',
  redirectUri: window.location.origin,
  scope: 'openid profile email',
  responseType: 'code',
};

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CadastrarUsuarioComponent,
    CadastrarCarroComponent,
    EditarUsuarioComponent,
    ConfirmDialogComponent,
    EditarCarroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
    HttpClientModule,
    OAuthModule.forRoot(),
    NgxMaskDirective,
    NgxMaskPipe,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatRadioModule,
    MatSelectModule,
    MatOptionModule,
    MatDialogModule
  ],
  providers: [
    provideNgxMask(),
    provideOAuthClient(),
    provideHttpClient(),
    MatDatepickerModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
