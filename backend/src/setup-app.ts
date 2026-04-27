import { INestApplication } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

export function setupApp(app: INestApplication) {

  app.enableCors({
    origin:
      process.env.NODE_ENV === 'production'
        ? process.env.ALLOWED_ORIGIN
        : 'http://localhost:3000',
  });
  
  app.use('/', (req: Request, res: Response, next: NextFunction) => {
    if (req.path === '/') return res.redirect('/graphql');
    next();
  });

  app.use('/health', (_req: Request, res: Response) => {
    return res.status(200).json({ status: 'ok' });
  });

  
}