import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './config/database/database.module';
import { ProcessoModule } from './modules/processo/processo.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    ProcessoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
