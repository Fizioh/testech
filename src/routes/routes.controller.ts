import { Controller, Get } from '@nestjs/common';

@Controller()
export class RoutesController {
    
  @Get('routes')


  findAll(): string {


    return 'Résultat de la 1ere route GET';


  }
}
