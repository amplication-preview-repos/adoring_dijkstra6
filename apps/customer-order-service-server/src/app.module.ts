import { Module } from "@nestjs/common";
import { OrderModule } from "./order/order.module";
import { ContactPersonModule } from "./contactPerson/contactPerson.module";
import { ProductModule } from "./product/product.module";
import { CustomerModule } from "./customer/customer.module";
import { OrderItemModule } from "./orderItem/orderItem.module";
import { ShippingModule } from "./shipping/shipping.module";
import { EmployeeModule } from "./employee/employee.module";
import { AddressModule } from "./address/address.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    OrderModule,
    ContactPersonModule,
    ProductModule,
    CustomerModule,
    OrderItemModule,
    ShippingModule,
    EmployeeModule,
    AddressModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
