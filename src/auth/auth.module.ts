import { Module } from '@nestjs/common';
import { AuthMutationResolver, AuthQueryResolver } from './resolvers';
import { AuthService, JwtConfigService } from './services';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies';
import { PassportModule } from '@nestjs/passport';
import { JwtAuthGuard } from './guards';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({ useClass: JwtConfigService }),
  ],
  providers: [
    AuthService,
    AuthMutationResolver,
    AuthQueryResolver,
    JwtStrategy,
    JwtAuthGuard,
  ],
  exports: [JwtStrategy, AuthService],
})
export class AuthModule {}
