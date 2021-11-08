import { ObjectType } from '@nestjs/graphql';
import { User } from 'src/db/models';

@ObjectType()
export class GetMePayload extends User {}
