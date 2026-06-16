export type BranchId = 'maadi' | 'tagamoa';

export interface BranchInfo {
  id: BranchId;
  name: string;
  address: string;
  phones: string[];
  whatsappPhone: string;
  whatsappLink: string;
  mapLink: string;
}

export const branches: Record<BranchId, BranchInfo> = {
  maadi: {
    id: 'maadi',
    name: 'فرع المعادي',
    address: 'زهراء المعادي - الشطر الثالث عشر - أمام HUB 50 MALL',
    phones: ['01020727773', '01110085927'],
    whatsappPhone: '201110085927',
    whatsappLink: 'https://api.whatsapp.com/send?phone=201110085927&text=مرحبا%20محمصة%20بدر%20الدين%20فرع%20المعادي',
    mapLink: 'https://maps.google.com/?q=زهراء+المعادي+الشطر+الثالث+عشر+HUB+50+MALL'
  },
  tagamoa: {
    id: 'tagamoa',
    name: 'فرع التجمع',
    address: 'التسعين الشمالي - تقاطع محور السادات - أسفل كوبري النائب العام - MUSE MALL موازي اللوتس الشمالية',
    phones: ['01117555759', '01001706283'],
    whatsappPhone: '201117555759',
    whatsappLink: 'https://api.whatsapp.com/send?phone=201117555759&text=مرحبا%20محمصة%20بدر%20الدين%20فرع%20التجمع',
    mapLink: 'https://maps.google.com/?q=التسعين+الشمالي+محور+السادات+MUSE+MALL+اللوتس+الشمالية'
  }
};
