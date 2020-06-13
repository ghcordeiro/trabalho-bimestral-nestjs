import { Module } from '@nestjs/common';
import { CustomerController } from './Customer/customer.controller';
import { CustomerService } from './Customer/customer.service';

@Module({
  imports: [],
  controllers: [
    CustomerController
  ],
  providers: [
    CustomerService
  ],
})
export class AppModule { }