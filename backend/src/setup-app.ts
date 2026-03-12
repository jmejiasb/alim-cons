import { INestApplication } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

export function setupApp(app: INestApplication) {
  app.use('/', (req: Request, res: Response, next: NextFunction) => {
    if (req.path === '/') return res.redirect('/graphql');
    next();
  });

  app.enableCors({
    origin:
      process.env.NODE_ENV === 'production'
        ? process.env.ALLOWED_ORIGIN
        : 'http://localhost:3000',
  });
}