import { Module } from '@nestjs/common';
import { PurchasesController } from './controllers/purchases.controller';

// HTTP (MVC)
//
@Module({
  controllers: [PurchasesController],
})
export class MessagingModule {}
