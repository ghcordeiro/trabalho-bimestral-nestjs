import { Controller, Get, Post, Body } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Customer } from './customer.entity';
import { CustomerDto } from './customer.dto';
import { plainToClass } from "class-transformer";

@Controller('customers')
export class CustomerController {

    constructor(private readonly service: CustomerService) {
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    @Get()
    findAll() {
        return this.service.findAll();
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    @Post()
    save(@Body() customerDto: CustomerDto) {
        const customer = plainToClass(Customer, customerDto);
        return this.service.save(customer);
    }

}