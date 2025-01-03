import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';

const oAuthConfig = {
  issuer: 'https://github.com',
  redirectUri: window.location.origin,
  clientId: 'Iv23lirfPfOsGxDYtFPI',
  scope: 'openid profile email',
  responseType: 'code',
};

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {

  constructor(private readonly oauthService: OAuthService, private http: HttpClient) {
    this.configure();
  }

  private configure() {
    this.oauthService.configure(oAuthConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  login() {
    this.oauthService.initLoginFlow();
  }

  logout() {
    this.oauthService.logOut();
  }

  get idendityClaims() {
    return this.oauthService.getIdentityClaims();
  }

  get accessToken() {
    return this.oauthService.getAccessToken();
  }

  get userProfile() {
    const url = "https://api.github.com/user";

    return this.http.get(url, {
      headers: {
        Authorization: `Bearer ${this.accessToken}`
      }
    })
  }
} 
