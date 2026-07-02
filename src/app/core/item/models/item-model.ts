export interface Item {
  id: string;
  name: string;
  quantity: number;

  isCompleted: boolean;

  category?: string;

  priority?: 'low' | 'medium' | 'high';

  createdAt: number;

  lastUpdatedAt?: number;
}