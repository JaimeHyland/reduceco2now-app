import type { Schema, Struct } from '@strapi/strapi';

export interface BlockContentBlock extends Struct.ComponentSchema {
  collectionName: 'components_block_content_blocks';
  info: {
    displayName: 'block';
  };
  attributes: {
    content: Schema.Attribute.Blocks & Schema.Attribute.Required;
    goal: Schema.Attribute.String;
    leverStatus: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CardContentCard extends Struct.ComponentSchema {
  collectionName: 'components_card_content_cards';
  info: {
    displayName: 'card';
  };
  attributes: {
    content: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

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
      'block-content.block': BlockContentBlock;
      'card-content.card': CardContentCard;
      'links-and-buttons.concecuences': LinksAndButtonsConcecuences;
      'links-and-buttons.learn-more': LinksAndButtonsLearnMore;
      'links-and-buttons.levers': LinksAndButtonsLevers;
      'links-and-buttons.link-internal': LinksAndButtonsLinkInternal;
      'links-and-buttons.nav-option': LinksAndButtonsNavOption;
      'links-and-buttons.news': LinksAndButtonsNews;
    }
  }
}
