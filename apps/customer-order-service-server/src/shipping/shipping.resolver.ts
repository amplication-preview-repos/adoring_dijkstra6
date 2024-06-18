import * as graphql from "@nestjs/graphql";
import { ShippingResolverBase } from "./base/shipping.resolver.base";
import { Shipping } from "./base/Shipping";
import { ShippingService } from "./shipping.service";

@graphql.Resolver(() => Shipping)
export class ShippingResolver extends ShippingResolverBase {
  constructor(protected readonly service: ShippingService) {
    super(service);
  }
}
