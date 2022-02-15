import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { OrdersService } from 'src/orders/orders.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private logger = new Logger(UsersService.name);

  constructor(
    private readonly ordersService: OrdersService,
    private readonly configService: ConfigService
  ) {
    this.logger.debug(configService.get('JWT_SECRET'));
  }

  create(createUserDto: CreateUserDto): User {
    return {
      email: createUserDto.email,
      enderecos: createUserDto.enderecos,
      id: Math.random().toString(32),
      nome: createUserDto.nome,
    };
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: string): User {
    return {
      email: '',
      enderecos: [],
      id,
      nome: 'washington',
      orders: this.ordersService.findAll(),
    };
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
