export type BranchId = 'maadi' | 'tagamoa';

export interface BranchInfo {
  id: BranchId;
  name: string;
  nameShort: string;
  tagline: string;
  address: string;
  addressLines: string[];
  landmark: string;
  area: string;
  phones: string[];
  whatsappPhone: string;
  whatsappLink: string;
  mapLink: string;
  mapEmbedUrl: string;
  workingHours: string;
  workingDays: string;
  deliveryAreas: string[];
  features: { icon: string; label: string; detail: string }[];
  color: string;
  colorGradient: string;
  colorLight: string;
}

export const branches: Record<BranchId, BranchInfo> = {
  maadi: {
    id: 'maadi',
    name: '\u0641\u0631\u0639 \u0627\u0644\u0645\u0639\u0627\u062f\u064a',
    nameShort: '\u0627\u0644\u0645\u0639\u0627\u062f\u064a',
    tagline: '\u0641\u064a \u0642\u0644\u0628 \u0632\u0647\u0631\u0627\u0621 \u0627\u0644\u0645\u0639\u0627\u062f\u064a',
    address: '\u0632\u0647\u0631\u0627\u0621 \u0627\u0644\u0645\u0639\u0627\u062f\u064a - \u0627\u0644\u0634\u0637\u0631 \u0627\u0644\u062b\u0627\u0644\u062b \u0639\u0634\u0631 - \u0623\u0645\u0627\u0645 HUB 50 MALL',
    addressLines: [
      '\u0632\u0647\u0631\u0627\u0621 \u0627\u0644\u0645\u0639\u0627\u062f\u064a',
      '\u0627\u0644\u0634\u0637\u0631 \u0627\u0644\u062b\u0627\u0644\u062b \u0639\u0634\u0631',
      '\u0623\u0645\u0627\u0645 HUB 50 MALL',
    ],
    landmark: '\u0623\u0645\u0627\u0645 HUB 50 MALL \u0645\u0628\u0627\u0634\u0631\u0629',
    area: '\u0632\u0647\u0631\u0627\u0621 \u0627\u0644\u0645\u0639\u0627\u062f\u064a',
    phones: ['01020727773', '01110085927'],
    whatsappPhone: '201110085927',
    whatsappLink:
      'https://api.whatsapp.com/send?phone=201110085927&text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%20%D9%85%D8%AD%D9%85%D8%B5%D8%A9%20%D8%A8%D8%AF%D8%B1%20%D8%A7%D9%84%D8%AF%D9%8A%D9%86%20%D9%81%D8%B1%D8%B9%20%D8%A7%D9%84%D9%85%D8%B9%D8%A7%D8%AF%D9%8A',
    mapLink:
      'https://maps.google.com/?q=%D8%B2%D9%87%D8%B1%D8%A7%D8%A1+%D8%A7%D9%84%D9%85%D8%B9%D8%A7%D8%AF%D9%8A+%D8%A7%D9%84%D8%B4%D8%B7%D8%B1+%D8%A7%D9%84%D8%AB%D8%A7%D9%84%D8%AB+%D8%B9%D8%B4%D8%B1+HUB+50+MALL',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.375072728038!2d31.311851175830746!3d29.96864907496184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145839e96e4cf159%3A0x1193038e253163f0!2z2YXYrdmF2LXYqSDYqNiv2LEg2KfZhNiv2YrZhg!5e0!3m2!1sen!2seg!4v1781576287054!5m2!1sen!2seg',
    workingHours: '9:00 \u0635 \u2013 4:00 \u0641\u062c\u0631\u0627\u064b',
    workingDays: '\u064a\u0648\u0645\u064a\u0627\u064b \u2014 \u0644\u0627 \u062a\u0648\u062c\u062f \u0625\u062c\u0627\u0632\u0629',
    deliveryAreas: [
      '\u0627\u0644\u0645\u0639\u0627\u062f\u064a',
      '\u0632\u0647\u0631\u0627\u0621 \u0627\u0644\u0645\u0639\u0627\u062f\u064a',
      '\u062f\u062c\u0644\u0629',
      '\u0645\u0635\u0631 \u0627\u0644\u0642\u062f\u064a\u0645\u0629',
      '\u062d\u0644\u0648\u0627\u0646',
      '\u0637\u0631\u064a\u0642 \u0627\u0644\u0646\u0635\u0631',
      '\u0627\u0644\u0645\u0642\u0637\u0645',
      '\u0627\u0644\u062a\u0628\u064a\u0646',
    ],
    features: [
      { icon: '\uD83C\uDFEA', label: '\u0645\u0648\u0642\u0639 \u0645\u0645\u064a\u0632', detail: '\u0623\u0645\u0627\u0645 HUB 50 MALL \u0645\u0628\u0627\u0634\u0631\u0629 \u2014 \u0633\u0647\u0644 \u0627\u0644\u0648\u0635\u0648\u0644' },
      { icon: '\uD83D\uDE9A', label: '\u062a\u0648\u0635\u064a\u0644 \u0633\u0631\u064a\u0639', detail: '\u062a\u0648\u0635\u064a\u0644 \u0644\u062c\u0645\u064a\u0639 \u0645\u0646\u0627\u0637\u0642 \u062c\u0646\u0648\u0628 \u0627\u0644\u0642\u0627\u0647\u0631\u0629' },
      { icon: '\u23F0', label: '\u0645\u0641\u062a\u0648\u062d \u064a\u0648\u0645\u064a\u0627\u064b', detail: '\u0645\u0646 10 \u0635 \u062d\u062a\u0649 11 \u0645 \u0628\u0644\u0627 \u0627\u0646\u0642\u0637\u0627\u0639' },
      { icon: '\uD83D\uDCDE', label: '\u062e\u0637\u0627\u0646 \u0644\u0644\u062a\u0648\u0627\u0635\u0644', detail: '\u0631\u0642\u0645\u0627\u0646 \u0645\u062e\u0635\u0635\u0627\u0646 \u0644\u0644\u0637\u0644\u0628 \u0648\u0627\u0644\u0627\u0633\u062a\u0641\u0633\u0627\u0631' },
      { icon: '\uD83E\uDD5C', label: '\u062a\u062d\u0645\u064a\u0635 \u064a\u0648\u0645\u064a', detail: '\u0645\u0646\u062a\u062c\u0627\u062a \u0645\u062d\u0645\u0635\u0629 \u0637\u0627\u0632\u062c\u0629 \u0643\u0644 \u064a\u0648\u0645' },
      { icon: '\uD83D\uDCAC', label: '\u0648\u0627\u062a\u0633\u0627\u0628 \u0641\u0648\u0631\u064a', detail: '\u0631\u062f \u0633\u0631\u064a\u0639 \u0639\u0628\u0631 \u0648\u0627\u062a\u0633\u0627\u0628 \u0637\u0648\u0627\u0644 \u0627\u0644\u064a\u0648\u0645' },
    ],
    color: '#5c3d21',
    colorGradient: 'linear-gradient(135deg, #5c3d21 0%, #8b5e34 100%)',
    colorLight: 'rgba(92,61,33,0.09)',
  },
  tagamoa: {
    id: 'tagamoa',
    name: '\u0641\u0631\u0639 \u0627\u0644\u062a\u062c\u0645\u0639',
    nameShort: '\u0627\u0644\u062a\u062c\u0645\u0639',
    tagline: '\u0641\u064a \u0642\u0644\u0628 \u0627\u0644\u062a\u0633\u0639\u064a\u0646 \u0627\u0644\u0634\u0645\u0627\u0644\u064a',
    address:
      '\u0627\u0644\u062a\u0633\u0639\u064a\u0646 \u0627\u0644\u0634\u0645\u0627\u0644\u064a - \u062a\u0642\u0627\u0637\u0639 \u0645\u062d\u0648\u0631 \u0627\u0644\u0633\u0627\u062f\u0627\u062a - \u0623\u0633\u0641\u0644 \u0643\u0648\u0628\u0631\u064a \u0627\u0644\u0646\u0627\u0626\u0628 \u0627\u0644\u0639\u0627\u0645 - MUSE MALL \u0645\u0648\u0627\u0632\u064a \u0627\u0644\u0644\u0648\u062a\u0633 \u0627\u0644\u0634\u0645\u0627\u0644\u064a\u0629',
    addressLines: [
      '\u0627\u0644\u062a\u0633\u0639\u064a\u0646 \u0627\u0644\u0634\u0645\u0627\u0644\u064a',
      '\u062a\u0642\u0627\u0637\u0639 \u0645\u062d\u0648\u0631 \u0627\u0644\u0633\u0627\u062f\u0627\u062a',
      '\u0623\u0633\u0641\u0644 \u0643\u0648\u0628\u0631\u064a \u0627\u0644\u0646\u0627\u0626\u0628 \u0627\u0644\u0639\u0627\u0645',
      'MUSE MALL \u2014 \u0645\u0648\u0627\u0632\u064a \u0627\u0644\u0644\u0648\u062a\u0633 \u0627\u0644\u0634\u0645\u0627\u0644\u064a\u0629',
    ],
    landmark: 'MUSE MALL \u2014 \u0645\u0648\u0627\u0632\u064a \u0627\u0644\u0644\u0648\u062a\u0633 \u0627\u0644\u0634\u0645\u0627\u0644\u064a\u0629',
    area: '\u0627\u0644\u062a\u062c\u0645\u0639 \u0627\u0644\u062e\u0627\u0645\u0633',
    phones: ['01117555759', '01001706283'],
    whatsappPhone: '201117555759',
    whatsappLink:
      'https://api.whatsapp.com/send?phone=201117555759&text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%20%D9%85%D8%AD%D9%85%D8%B5%D8%A9%20%D8%A8%D8%AF%D8%B1%20%D8%A7%D9%84%D8%AF%D9%8A%D9%86%20%D9%81%D8%B1%D8%B9%20%D8%A7%D9%84%D8%AA%D8%AC%D9%85%D8%B9',
    mapLink:
      'https://maps.google.com/?q=%D8%A7%D9%84%D8%AA%D8%B3%D8%B9%D9%8A%D9%86+%D8%A7%D9%84%D8%B4%D9%85%D8%A7%D9%84%D9%8A+%D9%85%D8%AD%D9%88%D8%B1+%D8%A7%D9%84%D8%B3%D8%A7%D8%AF%D8%A7%D8%AA+MUSE+MALL+%D8%A7%D9%84%D9%84%D9%88%D8%AA%D8%B3+%D8%A7%D9%84%D8%B4%D9%85%D8%A7%D9%84%D9%8A%D8%A9',
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d863.4609742615116!2d31.52332126961692!3d30.041335998432857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDAyJzI4LjgiTiAzMcKwMzEnMjYuMyJF!5e0!3m2!1sen!2seg!4v1781576223703!5m2!1sen!2seg',
    workingHours: '9:00 \u0635 \u2013 4:00 \u0641\u062c\u0631\u0627\u064b',
    workingDays: '\u064a\u0648\u0645\u064a\u0627\u064b \u2014 \u0644\u0627 \u062a\u0648\u062c\u062f \u0625\u062c\u0627\u0632\u0629',
    deliveryAreas: [
      '\u0627\u0644\u062a\u062c\u0645\u0639 \u0627\u0644\u062e\u0627\u0645\u0633',
      '\u0627\u0644\u0644\u0648\u062a\u0633',
      '\u0627\u0644\u0646\u0631\u062c\u0633',
      '\u0627\u0644\u0631\u062d\u0627\u0628',
      '\u0645\u062f\u064a\u0646\u062a\u064a',
      '\u0627\u0644\u0642\u0631\u0646\u0641\u0644',
      '\u0628\u064a\u062a \u0627\u0644\u0648\u0637\u0646',
      '\u0627\u0644\u0634\u0631\u0648\u0642',
    ],
    features: [
      { icon: '\uD83C\uDFD9\uFE0F', label: '\u0645\u0648\u0642\u0639 \u0627\u0633\u062a\u0631\u0627\u062a\u064a\u062c\u064a', detail: '\u0642\u0644\u0628 \u0627\u0644\u062a\u062c\u0645\u0639 \u0627\u0644\u062e\u0627\u0645\u0633 \u2014 MUSE MALL' },
      { icon: '\uD83D\uDE9A', label: '\u062a\u0648\u0635\u064a\u0644 \u0634\u0627\u0645\u0644', detail: '\u062a\u0648\u0635\u064a\u0644 \u0644\u062c\u0645\u064a\u0639 \u0645\u0646\u0627\u0637\u0642 \u0634\u0631\u0642 \u0627\u0644\u0642\u0627\u0647\u0631\u0629' },
      { icon: '\u23F0', label: '\u0645\u0641\u062a\u0648\u062d \u064a\u0648\u0645\u064a\u0627\u064b', detail: '\u0645\u0646 10 \u0635 \u062d\u062a\u0649 11 \u0645 \u0628\u0644\u0627 \u0627\u0646\u0642\u0637\u0627\u0639' },
      { icon: '\uD83D\uDCDE', label: '\u062e\u0637\u0627\u0646 \u0644\u0644\u062a\u0648\u0627\u0635\u0644', detail: '\u0631\u0642\u0645\u0627\u0646 \u0645\u062e\u0635\u0635\u0627\u0646 \u0644\u0644\u0637\u0644\u0628 \u0648\u0627\u0644\u0627\u0633\u062a\u0641\u0633\u0627\u0631' },
      { icon: '\uD83E\uDD5C', label: '\u062a\u062d\u0645\u064a\u0635 \u064a\u0648\u0645\u064a', detail: '\u0645\u0646\u062a\u062c\u0627\u062a \u0645\u062d\u0645\u0635\u0629 \u0637\u0627\u0632\u062c\u0629 \u0643\u0644 \u064a\u0648\u0645' },
      { icon: '\uD83D\uDCAC', label: '\u0648\u0627\u062a\u0633\u0627\u0628 \u0641\u0648\u0631\u064a', detail: '\u0631\u062f \u0633\u0631\u064a\u0639 \u0639\u0628\u0631 \u0648\u0627\u062a\u0633\u0627\u0628 \u0637\u0648\u0627\u0644 \u0627\u0644\u064a\u0648\u0645' },
    ],
    color: '#ec8944',
    colorGradient: 'linear-gradient(135deg, #ed7d2d 0%, #ec8944 100%)',
    colorLight: 'rgba(236,137,68,0.10)',
  },
};
