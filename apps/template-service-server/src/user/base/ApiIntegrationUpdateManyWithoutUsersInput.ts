/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiIntegrationWhereUniqueInput } from "../../apiIntegration/base/ApiIntegrationWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class ApiIntegrationUpdateManyWithoutUsersInput {
  @Field(() => [ApiIntegrationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ApiIntegrationWhereUniqueInput],
  })
  connect?: Array<ApiIntegrationWhereUniqueInput>;

  @Field(() => [ApiIntegrationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ApiIntegrationWhereUniqueInput],
  })
  disconnect?: Array<ApiIntegrationWhereUniqueInput>;

  @Field(() => [ApiIntegrationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ApiIntegrationWhereUniqueInput],
  })
  set?: Array<ApiIntegrationWhereUniqueInput>;
}

export { ApiIntegrationUpdateManyWithoutUsersInput as ApiIntegrationUpdateManyWithoutUsersInput };
