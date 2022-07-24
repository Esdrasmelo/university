import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const RedisDecorator = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const _context =
      GqlExecutionContext.create(context).getContext().redisClient;

    return _context;
  },
);
