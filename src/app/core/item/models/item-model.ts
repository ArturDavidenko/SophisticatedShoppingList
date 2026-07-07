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
    createdAt: new Date('2026-07-03'),
    description: 'A high-precision wireless mouse for smooth navigation.',
    category: 'Electronics',
  },
  {
    id: '2',
    title: 'Coffee Beans',
    quantity: 2,
    isCompleted: false,
    productUrl: 'https://www.starbucksathome.com/',
    createdAt: new Date('2026-07-02'),
    description: 'Premium Arabica coffee beans for a rich and aromatic brew.',
    category: 'Groceries',
  },
  {
    id: '3',
    title: 'Mechanical Keyboard',
    quantity: 1,
    isCompleted: true,
    productUrl: 'https://www.keychron.com/',
    createdAt: new Date('2026-07-01'),
    description: 'A durable mechanical keyboard with customizable RGB lighting.',
    category: 'Electronics',
  },
  {
    id: '4',
    title: 'Notebook',
    quantity: 3,
    isCompleted: false,
    productUrl: 'https://www.moleskine.com/',
    createdAt: new Date('2026-06-30'),
    description: 'A high-quality notebook for capturing ideas and thoughts.',
    category: 'Stationery',
  },
  {
    id: '5',
    title: 'Water Bottle',
    quantity: 1,
    isCompleted: false,
    productUrl: 'https://www.camelbak.com/',
    createdAt: new Date('2026-06-29'),
    description: 'A durable and leak-proof water bottle for staying hydrated.',
    category: 'Fitness',
  }
];

