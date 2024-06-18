/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ContactPerson } from "../../contactPerson/base/ContactPerson";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  IsEnum,
  IsNumber,
} from "class-validator";
import { Type } from "class-transformer";
import { OrderItem } from "../../orderItem/base/OrderItem";
import { Shipping } from "../../shipping/base/Shipping";
import { EnumOrderStatus } from "./EnumOrderStatus";

@ObjectType()
class Order {
  @ApiProperty({
    required: false,
    type: () => ContactPerson,
  })
  @ValidateNested()
  @Type(() => ContactPerson)
  @IsOptional()
  contactPerson?: ContactPerson | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  orderDate!: Date | null;

  @ApiProperty({
    required: false,
    type: () => [OrderItem],
  })
  @ValidateNested()
  @Type(() => OrderItem)
  @IsOptional()
  orderItems?: Array<OrderItem>;

  @ApiProperty({
    required: false,
    type: () => [Shipping],
  })
  @ValidateNested()
  @Type(() => Shipping)
  @IsOptional()
  shippings?: Array<Shipping>;

  @ApiProperty({
    required: false,
    enum: EnumOrderStatus,
  })
  @IsEnum(EnumOrderStatus)
  @IsOptional()
  @Field(() => EnumOrderStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  totalAmount!: number | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Order as Order };
