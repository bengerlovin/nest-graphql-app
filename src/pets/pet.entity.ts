import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Pet {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  type?: string; // graphql can't infer optional typescript ?
}
