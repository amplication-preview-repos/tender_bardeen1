import * as graphql from "@nestjs/graphql";
import { ComponentResolverBase } from "./base/component.resolver.base";
import { Component } from "./base/Component";
import { ComponentService } from "./component.service";

@graphql.Resolver(() => Component)
export class ComponentResolver extends ComponentResolverBase {
  constructor(protected readonly service: ComponentService) {
    super(service);
  }
}
