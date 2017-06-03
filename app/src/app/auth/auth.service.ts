import {Injectable} from '@angular/core';
import {AUTH_CONFIG} from './auth0-variables';
import {Router} from '@angular/router';
import 'rxjs/add/operator/filter';
import auth0 from 'auth0-js';

@Injectable()
export class AuthService {

  public userProfile: any;

  auth0 = new auth0.WebAuth({
    clientID: AUTH_CONFIG.clientID,
    domain: AUTH_CONFIG.domain,
    responseType: 'token id_token',
    audience: `https://${AUTH_CONFIG.domain}/userinfo`,
    redirectUri: 'http://localhost:4200/callback',
    scope: 'openid profile'
  });

  constructor(public router: Router) {
  }

  get profile() {
    const local_profile = JSON.parse(localStorage.getItem('profile'));
    if (!!local_profile) {
      return local_profile;
    }
    return this.getProfile().then((profile) => {
      localStorage.setItem('profile', JSON.stringify(profile));
      return profile;
    });
  }

  public login(): void {
    this.auth0.authorize();
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
        this.router.navigate(['/home']);
      } else if (err) {
        this.router.navigate(['/home']);
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  private setSession(authResult): void {
    // Set the time that the access token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('profile');
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  public init(): Promise<{}> {
    let attempts = 10;
    return new Promise((resolve, reject) => {
      let interval = setInterval(() => {
        if (attempts > 0) {
          attempts--;
          if (this.isAuthenticated()) {
            clearInterval(interval);
            resolve();
          }
        } else {
          clearInterval(interval);
          reject();
        }
      }, 100);
    })
  }

  private getProfile() {
    return new Promise((resolve, reject) => {
      if (this.userProfile) {
        resolve(this.userProfile);
        return;
      }
      const accessToken = localStorage.getItem('access_token');
      if (!accessToken) {
        throw new Error('Access token must exist to fetch profile');
      }

      this.auth0.client.userInfo(accessToken, (err, profile) => {
        if (err) {
          reject(err);
        } else {
          if (profile) {
            this.userProfile = profile;
            resolve(this.userProfile);
          }
        }


      });
    });
  }

}
