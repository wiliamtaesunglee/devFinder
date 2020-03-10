download and acces folder, and run:

npm install

then create e file on the project root and create a config.js

inside the file you need place this code:

const config = {
  redirectUrl: 'com.my.auth.app://oauthredirect',
  clientId: '<project-id>',
  clientSecret: '<project-secret>',
  scopes: ['identity'],
  serviceConfiguration: {
    authorizationEndpoint: 'https://github.com/login/oauth/authorize',
    tokenEndpoint: 'https://github.com/login/oauth/access_token',
    revocationEndpoint:
        'https://github.com/settings/connections/applications/<project-id>'
  }
};

export default config;


then you can run:

npx react-native run-android
npx start

** if you see some error, run againd the comand:

npx reac-native run-android
