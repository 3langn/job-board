import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .addApiKey(
      { type: 'apiKey', name: 'Authorization', in: 'header' },
      'Authorization',
    )
    .setTitle('JobBoard API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);
  app.enableCors();
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
