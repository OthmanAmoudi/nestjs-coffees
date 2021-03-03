import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { Coffee } from './entities/coffee.entity';
import { HttpException, Injectable, HttpStatus } from '@nestjs/common';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Mocha',
      brand: 'Starbucks',
      flavors: ['choclate', 'milk', 'hazelnut'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: number) {
    const coffee = this.coffees.find(coffee => coffee.id === id);
    if (!coffee) {
      throw new HttpException(`Coffee ${id} not found`, HttpStatus.NOT_FOUND);
    }
    return coffee;
  }

  create(createCoffeeDto: CreateCoffeeDto) {
    this.coffees.push({ ...createCoffeeDto, id: Math.random() });
    return this.coffees;
  }

  update(id: number, updateCoffeeDto: UpdateCoffeeDto) {
    const coffee = this.findOne(id);
    if (coffee) {
      //update
    }
  }

  remove(id: string) {
    const coffeeIndex = this.coffees.findIndex(coffee => coffee.id === +id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
