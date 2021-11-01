import { CustomScalar, Scalar } from '@nestjs/graphql';
import { isURL } from 'class-validator';
import { GraphQLError, ValueNode } from 'graphql';

export class UrlScalar {}

@Scalar('URL', () => UrlScalar)
export class UrlScalarHelper implements CustomScalar<string, string> {
  description = 'URL Scalar type';

  serialize(value: string): string {
    return value;
  }

  parseValue(value: string): string {
    const isValid = isURL(value);

    if (!isValid) {
      throw new GraphQLError('Неверный URL формат');
    }

    return value;
  }

  parseLiteral(ast: ValueNode): string {
    if (ast.kind !== 'StringValue') {
      throw new GraphQLError('Неверный URL формат');
    }

    return this.parseValue(ast.value);
  }
}
