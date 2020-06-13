import { Injectable } from '@nestjs/common';
import { Customer } from './customer.entity';

@Injectable()
export class CustomerService {

  customers: Array<Customer> = [];

  constructor() {
    const customer = new Customer();

    this.customers.push(customer);
  }

  findAll() {
    return this.customers;
  }

  save(customer: Customer) {
    this.customers.push(customer);
  }

}