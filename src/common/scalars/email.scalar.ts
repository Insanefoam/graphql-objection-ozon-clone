import { CustomScalar, Scalar } from '@nestjs/graphql';
import { GraphQLError, ValueNode } from 'graphql';
import { isEmail } from 'class-validator';

export class EmailScalar {}

@Scalar('Email', () => EmailScalar)
export class EmailScalarHelper implements CustomScalar<string, string> {
  description = 'Email scalar type';

  serialize(value: string): string {
    return value;
  }

  parseValue(value: string): string {
    const isValid = isEmail(value);

    if (!isValid) {
      throw new GraphQLError('Неверный email');
    }

    return value;
  }

  parseLiteral(ast: ValueNode): string {
    if (ast.kind !== 'StringValue') {
      throw new GraphQLError('Неверный email');
    }

    return this.parseValue(ast.value);
  }
}
