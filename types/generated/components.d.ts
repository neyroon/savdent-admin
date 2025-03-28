import type { Schema, Struct } from '@strapi/strapi';

export interface SharedCertificateItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_certificate_items';
  info: {
    description: '';
    displayName: 'certificate_item';
  };
  attributes: {
    cert: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedCertificates extends Struct.ComponentSchema {
  collectionName: 'components_shared_certificates';
  info: {
    description: '';
    displayName: 'certificates';
  };
  attributes: {
    certificate_item: Schema.Attribute.Component<
      'shared.certificate-item',
      true
    >;
  };
}

export interface SharedMainSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_main_sliders';
  info: {
    description: '';
    displayName: 'main-slider';
    icon: 'dashboard';
  };
  attributes: {
    slide: Schema.Attribute.Component<'shared.slide', true>;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedReviewItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_review_items';
  info: {
    description: '';
    displayName: 'review_item';
  };
  attributes: {
    date: Schema.Attribute.String;
    fullname: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.String;
    review_text: Schema.Attribute.Text;
    stars: Schema.Attribute.Decimal;
  };
}

export interface SharedReviews extends Struct.ComponentSchema {
  collectionName: 'components_shared_reviews';
  info: {
    description: '';
    displayName: 'reviews';
  };
  attributes: {
    review_item: Schema.Attribute.Component<'shared.review-item', true>;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlide extends Struct.ComponentSchema {
  collectionName: 'components_shared_slides';
  info: {
    description: '';
    displayName: 'main-slide';
    icon: 'briefcase';
  };
  attributes: {
    description: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedTab extends Struct.ComponentSchema {
  collectionName: 'components_shared_tab';
  info: {
    description: '';
    displayName: '\u0422\u0430\u0431';
    icon: 'apps';
  };
  attributes: {
    service: Schema.Attribute.Component<'shared.usluga', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedTaby extends Struct.ComponentSchema {
  collectionName: 'components_shared_taby';
  info: {
    description: '';
    displayName: '\u0422\u0430\u0431\u044B';
  };
  attributes: {
    tab: Schema.Attribute.Component<'shared.tab', true>;
  };
}

export interface SharedUsluga extends Struct.ComponentSchema {
  collectionName: 'components_shared_usluga';
  info: {
    displayName: '\u0423\u0441\u043B\u0443\u0433\u0430';
    icon: 'book';
  };
  attributes: {
    contains: Schema.Attribute.String;
    name: Schema.Attribute.String;
    price: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface SharedVideoItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_video_items';
  info: {
    description: '';
    displayName: 'video_item';
  };
  attributes: {
    preview: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    video: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedVideos extends Struct.ComponentSchema {
  collectionName: 'components_shared_videos';
  info: {
    description: '';
    displayName: 'videos';
  };
  attributes: {
    video_item: Schema.Attribute.Component<'shared.video-item', true>;
  };
}

export interface SharedWorkersSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_workers_sliders';
  info: {
    displayName: 'workers-slider';
  };
  attributes: {
    workers_slide: Schema.Attribute.Component<'shared.workes-slide', true>;
  };
}

export interface SharedWorkesSlide extends Struct.ComponentSchema {
  collectionName: 'components_shared_workes_slides';
  info: {
    description: '';
    displayName: 'workes-slide';
  };
  attributes: {
    certificates: Schema.Attribute.Component<'shared.certificates', false>;
    description: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.certificate-item': SharedCertificateItem;
      'shared.certificates': SharedCertificates;
      'shared.main-slider': SharedMainSlider;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.review-item': SharedReviewItem;
      'shared.reviews': SharedReviews;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slide': SharedSlide;
      'shared.tab': SharedTab;
      'shared.taby': SharedTaby;
      'shared.usluga': SharedUsluga;
      'shared.video-item': SharedVideoItem;
      'shared.videos': SharedVideos;
      'shared.workers-slider': SharedWorkersSlider;
      'shared.workes-slide': SharedWorkesSlide;
    }
  }
}
