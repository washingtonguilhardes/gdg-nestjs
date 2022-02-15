import { Address } from '../entities/address.entity';

export class CreateUserDto {
  nome: string;

  email: string;

  enderecos: Address[];
}
