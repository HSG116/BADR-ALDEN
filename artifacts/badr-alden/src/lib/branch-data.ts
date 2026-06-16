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
  workingHours: string;
  workingDays: string;
  deliveryAreas: string[];
  features: { icon: string; label: string; detail: string }[];
  color: string;
  colorLight: string;
}

export const branches: Record<BranchId, BranchInfo> = {
  maadi: {
    id: 'maadi',
    name: 'فرع المعادي',
    nameShort: 'المعادي',
    tagline: 'في قلب زهراء المعادي',
    address: 'زهراء المعادي - الشطر الثالث عشر - أمام HUB 50 MALL',
    addressLines: ['زهراء المعادي', 'الشطر الثالث عشر', 'أمام HUB 50 MALL'],
    landmark: 'أمام HUB 50 MALL مباشرة',
    area: 'زهراء المعادي',
    phones: ['01020727773', '01110085927'],
    whatsappPhone: '201110085927',
    whatsappLink:
      'https://api.whatsapp.com/send?phone=201110085927&text=مرحبا%20محمصة%20بدر%20الدين%20فرع%20المعادي',
    mapLink:
      'https://maps.google.com/?q=زهراء+المعادي+الشطر+الثالث+عشر+HUB+50+MALL',
    workingHours: '10:00 ص – 11:00 م',
    workingDays: 'كل أيام الأسبوع',
    deliveryAreas: [
      'المعادي',
      'زهراء المعادي',
      'دجلة',
      'مصر القديمة',
      'حلوان',
      'طريق النصر',
      'المقطم',
      'التبين',
    ],
    features: [
      { icon: '🏪', label: 'موقع مميز', detail: 'أمام HUB 50 MALL مباشرة — سهل الوصول' },
      { icon: '🚚', label: 'توصيل سريع', detail: 'توصيل لجميع مناطق جنوب القاهرة' },
      { icon: '⏰', label: 'مفتوح يومياً', detail: 'من 10 ص حتى 11 م بلا انقطاع' },
      { icon: '📞', label: 'خطان للتواصل', detail: 'رقمان مخصصان للطلب والاستفسار' },
      { icon: '🥜', label: 'تحميص يومي', detail: 'منتجات محمصة طازجة كل يوم' },
      { icon: '💬', label: 'واتساب فوري', detail: 'رد سريع عبر واتساب طوال اليوم' },
    ],
    color: '#ec8944',
    colorLight: 'rgba(236,137,68,0.10)',
  },
  tagamoa: {
    id: 'tagamoa',
    name: 'فرع التجمع',
    nameShort: 'التجمع',
    tagline: 'في قلب التسعين الشمالي',
    address:
      'التسعين الشمالي - تقاطع محور السادات - أسفل كوبري النائب العام - MUSE MALL موازي اللوتس الشمالية',
    addressLines: [
      'التسعين الشمالي',
      'تقاطع محور السادات',
      'أسفل كوبري النائب العام',
      'MUSE MALL — موازي اللوتس الشمالية',
    ],
    landmark: 'MUSE MALL — موازي اللوتس الشمالية',
    area: 'التجمع الخامس',
    phones: ['01117555759', '01001706283'],
    whatsappPhone: '201117555759',
    whatsappLink:
      'https://api.whatsapp.com/send?phone=201117555759&text=مرحبا%20محمصة%20بدر%20الدين%20فرع%20التجمع',
    mapLink:
      'https://maps.google.com/?q=التسعين+الشمالي+محور+السادات+MUSE+MALL+اللوتس+الشمالية',
    workingHours: '10:00 ص – 11:00 م',
    workingDays: 'كل أيام الأسبوع',
    deliveryAreas: [
      'التجمع الخامس',
      'اللوتس',
      'النرجس',
      'الرحاب',
      'مدينتي',
      'القرنفل',
      'بيت الوطن',
      'الشروق',
    ],
    features: [
      { icon: '🏙️', label: 'موقع استراتيجي', detail: 'قلب التجمع الخامس — MUSE MALL' },
      { icon: '🚚', label: 'توصيل شامل', detail: 'توصيل لجميع مناطق شرق القاهرة' },
      { icon: '⏰', label: 'مفتوح يومياً', detail: 'من 10 ص حتى 11 م بلا انقطاع' },
      { icon: '📞', label: 'خطان للتواصل', detail: 'رقمان مخصصان للطلب والاستفسار' },
      { icon: '🥜', label: 'تحميص يومي', detail: 'منتجات محمصة طازجة كل يوم' },
      { icon: '💬', label: 'واتساب فوري', detail: 'رد سريع عبر واتساب طوال اليوم' },
    ],
    color: '#5c3d21',
    colorLight: 'rgba(92,61,33,0.09)',
  },
};
