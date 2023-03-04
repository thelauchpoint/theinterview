import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseUserConfigService } from './mongo-database.config.service';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useClass: MongooseUserConfigService,
      connectionName: 'interview',
    }),
  ],
  providers: [],
  exports: [],
})
export class MongoDatabaseModule {}
