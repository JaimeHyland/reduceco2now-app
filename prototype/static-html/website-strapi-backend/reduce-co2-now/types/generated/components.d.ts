import type { Schema, Struct } from '@strapi/strapi';

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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'links-and-buttons.learn-more': LinksAndButtonsLearnMore;
      'links-and-buttons.link-internal': LinksAndButtonsLinkInternal;
    }
  }
}
