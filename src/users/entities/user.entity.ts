import { Order } from 'src/orders/entities/order.entity';
import { Address } from './address.entity';

export class User {
  id: string;

  email: string;

  nome: string;

  enderecos: Address[];

  orders?: Order[];
}
