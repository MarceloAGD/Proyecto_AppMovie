import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configurar opciones de CORS
  app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }));

  await app.listen(4000);
}

bootstrap();
