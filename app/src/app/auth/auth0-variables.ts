interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'QxIIB8BTd2DQntWLfAP5jSnHbIEOPqjS',
  domain: 'ivanets.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};
