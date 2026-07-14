import type { Schema, Struct } from '@strapi/strapi';

export interface LinksAndButtonsConcecuences extends Struct.ComponentSchema {
  collectionName: 'components_links_and_buttons_concecuences';
  info: {
    displayName: 'Concecuences';
  };
  attributes: {
    Text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LinksAndButtonsLearnMore extends Struct.ComponentSchema {
  collectionName: 'components_links_and_buttons_learn_mores';
  info: {
    displayName: 'learn-more';
  };
  attributes: {
    path: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LinksAndButtonsLevers extends Struct.ComponentSchema {
  collectionName: 'components_links_and_buttons_levers';
  info: {
    displayName: 'Levers';
  };
  attributes: {
    Text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LinksAndButtonsLinkInternal extends Struct.ComponentSchema {
  collectionName: 'components_links_and_buttons_link_internals';
  info: {
    displayName: 'Link internal';
  };
  attributes: {
    class: Schema.Attribute.String;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
    to: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LinksAndButtonsNavOption extends Struct.ComponentSchema {
  collectionName: 'components_links_and_buttons_nav_options';
  info: {
    displayName: 'Home';
  };
  attributes: {
    Text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LinksAndButtonsNews extends Struct.ComponentSchema {
  collectionName: 'components_links_and_buttons_news';
  info: {
    displayName: 'News';
  };
  attributes: {
    Text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'links-and-buttons.concecuences': LinksAndButtonsConcecuences;
      'links-and-buttons.learn-more': LinksAndButtonsLearnMore;
      'links-and-buttons.levers': LinksAndButtonsLevers;
      'links-and-buttons.link-internal': LinksAndButtonsLinkInternal;
      'links-and-buttons.nav-option': LinksAndButtonsNavOption;
      'links-and-buttons.news': LinksAndButtonsNews;
    }
  }
}
