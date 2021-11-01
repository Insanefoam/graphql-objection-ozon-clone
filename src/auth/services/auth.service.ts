import { ForbiddenException, Injectable } from '@nestjs/common';
import { GraphQLError } from 'graphql';
import { User } from 'src/db/models';
import { SignInInput, SignUpInput } from '../auth.inputs';
import { compare, hash } from 'bcrypt';
import { SuccessSignInPayload, SuccessSignUpPayload } from '../auth.payloads';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from '../auth.types';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  private async _generateToken(user: JwtPayload): Promise<string> {
    return this.jwtService.sign({ ...user });
  }

  async signIn(input: SignInInput): Promise<SuccessSignInPayload> {
    const user = await User.query().findOne('email', input.email);

    if (!user) {
      throw new GraphQLError(`Пользователя с таким email не существует`);
    }

    const isPasswordCorrect = await compare(input.password, user.password);

    if (!isPasswordCorrect) {
      throw new ForbiddenException(`Неверный пароль`);
    }

    const token = await this._generateToken(user);

    return { user, token };
  }

  async signUp(input: SignUpInput): Promise<SuccessSignUpPayload> {
    const isEmailExists = await User.query().findOne('email', input.email);

    if (isEmailExists) {
      throw new ForbiddenException(`Эмейл уже используется`);
    }

    const { password, ...userData } = input;

    const hashedPassword = await hash(password, 10);

    const user = await User.query().insert({
      ...userData,
      password: hashedPassword,
    });

    const token = await this._generateToken(user);

    return { user, token };
  }

  async validateToken(token: string): Promise<boolean> {
    const isOk = this.jwtService.verify(token);

    return Boolean(isOk);
  }
}
