export interface Item {
  id: string;
  title: string;
  description?: string;
  quantity: number;
  isCompleted: boolean;
  category?: string;
  imageUrl?: string;
  productUrl?: string;
  createdAt: Date;
}

export const MOCK_SHOPPING_ITEMS: Item[] = [
  {
    id: '1',
    title: 'Wireless Mouse',
    quantity: 1,
    isCompleted: false,
    productUrl: 'https://www.logitech.com/',
    createdAt: new Date('2026-07-03')
  },
  {
    id: '2',
    title: 'Coffee Beans',
    quantity: 2,
    isCompleted: false,
    productUrl: 'https://www.starbucksathome.com/',
    createdAt: new Date('2026-07-02')
  },
  {
    id: '3',
    title: 'Mechanical Keyboard',
    quantity: 1,
    isCompleted: true,
    productUrl: 'https://www.keychron.com/',
    createdAt: new Date('2026-07-01')
  },
  {
    id: '4',
    title: 'Notebook',
    quantity: 3,
    isCompleted: false,
    productUrl: 'https://www.moleskine.com/',
    createdAt: new Date('2026-06-30')
  },
  {
    id: '5',
    title: 'Water Bottle',
    quantity: 1,
    isCompleted: false,
    productUrl: 'https://www.camelbak.com/',
    createdAt: new Date('2026-06-29')
  }
];

