import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Books {
  @Field()
  kind: string;

  @Field()
  id: string;

  @Field()
  etag: string;

  @Field()
  selflink: string;
}