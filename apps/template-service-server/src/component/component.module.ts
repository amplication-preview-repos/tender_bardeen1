import { Module } from "@nestjs/common";
import { ComponentModuleBase } from "./base/component.module.base";
import { ComponentService } from "./component.service";
import { ComponentController } from "./component.controller";
import { ComponentResolver } from "./component.resolver";

@Module({
  imports: [ComponentModuleBase],
  controllers: [ComponentController],
  providers: [ComponentService, ComponentResolver],
  exports: [ComponentService],
})
export class ComponentModule {}
