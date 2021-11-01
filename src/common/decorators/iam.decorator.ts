import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlContextType, GqlExecutionContext } from '@nestjs/graphql';

export const IAM = createParamDecorator(
  (data: string, context: ExecutionContext) => {
    let req = null;

    if (context.getType() === 'http') {
      req = context.switchToHttp().getRequest();
    }

    if (context.getType<GqlContextType>() === 'graphql') {
      const gqlCtx = GqlExecutionContext.create(context);
      const ctx = gqlCtx.getContext();
      req = ctx.req;
    }

    const user = req.user;

    return data ? user[data] : user;
  },
);
