import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt/jtw.strategy';
import { UserModule } from 'src/user/user.module';

@Module({
    imports: [
        UserModule,
        JwtModule.register({
          secret: 'super-secret-cat',
          signOptions: { expiresIn: '60s' }
        })
      ],
      controllers: [AuthController],
      providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
