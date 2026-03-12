import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from './../src/app.module';
import { setupApp } from './../src/setup-app';

describe('App e2e', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    setupApp(app);
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('GET / should redirect to /graphql', async () => {
    await request(app.getHttpServer())
      .get('/')
      .expect(302)
      .expect('Location', '/graphql');
  });

  it('POST /graphql should respond to a basic query', async () => {
    await request(app.getHttpServer())
      .post('/graphql')
      .send({
        query: '{ __typename }',
      })
      .expect(200)
      .expect((res) => {
        expect(res.body.data).toBeDefined();
      });
  });
});