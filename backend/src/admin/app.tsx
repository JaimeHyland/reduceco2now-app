import type { StrapiApp } from '@strapi/strapi/admin';

export default {
  config: {
    locales: ['en'],
    translations: {
        en: {
            'Auth.form.welcome.title' : "Welcome to ReduceCo2Now",
            'Auth.form.welcome.subtitle' : "Log in to the admin panel"
        }
    }
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
