import { Module } from "@nestjs/common";
import { ShippingModuleBase } from "./base/shipping.module.base";
import { ShippingService } from "./shipping.service";
import { ShippingController } from "./shipping.controller";
import { ShippingResolver } from "./shipping.resolver";

@Module({
  imports: [ShippingModuleBase],
  controllers: [ShippingController],
  providers: [ShippingService, ShippingResolver],
  exports: [ShippingService],
})
export class ShippingModule {}
