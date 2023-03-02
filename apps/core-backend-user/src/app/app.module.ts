import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongoModule } from './mongo/mongoose.module';

@Module({
  imports: [MongoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
