import type { Schema, Struct } from '@strapi/strapi';

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

export interface SectionsHeader extends Struct.ComponentSchema {
  collectionName: 'components_sections_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    learNmore: Schema.Attribute.String;
    subtitle: Schema.Attribute.String & Schema.Attribute.Required;
    Title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'links-and-buttons.link-internal': LinksAndButtonsLinkInternal;
      'sections.header': SectionsHeader;
    }
  }
}
