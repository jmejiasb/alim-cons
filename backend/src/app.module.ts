import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, type ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EbooksModule } from './ebooks/ebooks.module';
import { PurchasesModule } from './purchases/purchase.module';
import { StorageModule } from './common/storage/storage.module';
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
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
    PurchasesModule,
    StorageModule,
    ContactModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
