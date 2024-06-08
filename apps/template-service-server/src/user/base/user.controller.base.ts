/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { UserService } from "../user.service";
import { UserCreateInput } from "./UserCreateInput";
import { User } from "./User";
import { UserFindManyArgs } from "./UserFindManyArgs";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";
import { UserUpdateInput } from "./UserUpdateInput";
import { ApiIntegrationFindManyArgs } from "../../apiIntegration/base/ApiIntegrationFindManyArgs";
import { ApiIntegration } from "../../apiIntegration/base/ApiIntegration";
import { ApiIntegrationWhereUniqueInput } from "../../apiIntegration/base/ApiIntegrationWhereUniqueInput";
import { TemplateFindManyArgs } from "../../template/base/TemplateFindManyArgs";
import { Template } from "../../template/base/Template";
import { TemplateWhereUniqueInput } from "../../template/base/TemplateWhereUniqueInput";

export class UserControllerBase {
  constructor(protected readonly service: UserService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: User })
  async createUser(@common.Body() data: UserCreateInput): Promise<User> {
    return await this.service.createUser({
      data: data,
      select: {
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        roles: true,
        updatedAt: true,
        username: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [User] })
  @ApiNestedQuery(UserFindManyArgs)
  async users(@common.Req() request: Request): Promise<User[]> {
    const args = plainToClass(UserFindManyArgs, request.query);
    return this.service.users({
      ...args,
      select: {
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        roles: true,
        updatedAt: true,
        username: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async user(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    const result = await this.service.user({
      where: params,
      select: {
        createdAt: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        roles: true,
        updatedAt: true,
        username: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateUser(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() data: UserUpdateInput
  ): Promise<User | null> {
    try {
      return await this.service.updateUser({
        where: params,
        data: data,
        select: {
          createdAt: true,
          email: true,
          firstName: true,
          id: true,
          lastName: true,
          roles: true,
          updatedAt: true,
          username: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteUser(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    try {
      return await this.service.deleteUser({
        where: params,
        select: {
          createdAt: true,
          email: true,
          firstName: true,
          id: true,
          lastName: true,
          roles: true,
          updatedAt: true,
          username: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/apiIntegrations")
  @ApiNestedQuery(ApiIntegrationFindManyArgs)
  async findApiIntegrations(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<ApiIntegration[]> {
    const query = plainToClass(ApiIntegrationFindManyArgs, request.query);
    const results = await this.service.findApiIntegrations(params.id, {
      ...query,
      select: {
        apiKey: true,
        createdAt: true,
        id: true,
        name: true,
        typeField: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/apiIntegrations")
  async connectApiIntegrations(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: ApiIntegrationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      apiIntegrations: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/apiIntegrations")
  async updateApiIntegrations(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: ApiIntegrationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      apiIntegrations: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/apiIntegrations")
  async disconnectApiIntegrations(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: ApiIntegrationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      apiIntegrations: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/templates")
  @ApiNestedQuery(TemplateFindManyArgs)
  async findTemplates(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<Template[]> {
    const query = plainToClass(TemplateFindManyArgs, request.query);
    const results = await this.service.findTemplates(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/templates")
  async connectTemplates(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: TemplateWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      templates: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/templates")
  async updateTemplates(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: TemplateWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      templates: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/templates")
  async disconnectTemplates(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: TemplateWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      templates: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }
}
