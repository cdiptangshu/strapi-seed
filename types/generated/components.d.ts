import type { Schema, Struct } from '@strapi/strapi';

export interface DomainGenre extends Struct.ComponentSchema {
  collectionName: 'components_domain_genres';
  info: {
    description: '';
    displayName: 'Genre';
  };
  attributes: {
    value: Schema.Attribute.Enumeration<
      ['bluegrass', 'blues', 'folk', 'fusion', 'indie', 'jazz', 'rock']
    >;
  };
}

export interface DomainLanguage extends Struct.ComponentSchema {
  collectionName: 'components_domain_languages';
  info: {
    displayName: 'Language';
  };
  attributes: {
    value: Schema.Attribute.Enumeration<
      ['english', 'bengali', 'hindi', 'malayalam']
    >;
  };
}

export interface DomainRole extends Struct.ComponentSchema {
  collectionName: 'components_domain_roles';
  info: {
    description: '';
    displayName: 'Role';
  };
  attributes: {
    value: Schema.Attribute.Enumeration<
      [
        'vocalist',
        'guitarist',
        'bassist',
        'keyboardist',
        'accordionist',
        'composer',
        'lyricist',
        'songwriter',
        'engineer',
        'manager',
      ]
    >;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'domain.genre': DomainGenre;
      'domain.language': DomainLanguage;
      'domain.role': DomainRole;
      'shared.link': SharedLink;
    }
  }
}
