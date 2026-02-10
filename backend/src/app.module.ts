import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, type ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EbooksModule } from './ebooks/ebooks.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'alim-cons',
      password: 'mypassword',
      database: 'alim-cons',
      autoLoadEntities: true,
      synchronize: true, // disable in production or something
    }),
    EbooksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
