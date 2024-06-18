/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  ContactPerson as PrismaContactPerson,
  Order as PrismaOrder,
  Customer as PrismaCustomer,
} from "@prisma/client";

export class ContactPersonServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ContactPersonCountArgs, "select">
  ): Promise<number> {
    return this.prisma.contactPerson.count(args);
  }

  async contactPeople(
    args: Prisma.ContactPersonFindManyArgs
  ): Promise<PrismaContactPerson[]> {
    return this.prisma.contactPerson.findMany(args);
  }
  async contactPerson(
    args: Prisma.ContactPersonFindUniqueArgs
  ): Promise<PrismaContactPerson | null> {
    return this.prisma.contactPerson.findUnique(args);
  }
  async createContactPerson(
    args: Prisma.ContactPersonCreateArgs
  ): Promise<PrismaContactPerson> {
    return this.prisma.contactPerson.create(args);
  }
  async updateContactPerson(
    args: Prisma.ContactPersonUpdateArgs
  ): Promise<PrismaContactPerson> {
    return this.prisma.contactPerson.update(args);
  }
  async deleteContactPerson(
    args: Prisma.ContactPersonDeleteArgs
  ): Promise<PrismaContactPerson> {
    return this.prisma.contactPerson.delete(args);
  }

  async findOrders(
    parentId: string,
    args: Prisma.OrderFindManyArgs
  ): Promise<PrismaOrder[]> {
    return this.prisma.contactPerson
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .orders(args);
  }

  async getCustomer(parentId: string): Promise<PrismaCustomer | null> {
    return this.prisma.contactPerson
      .findUnique({
        where: { id: parentId },
      })
      .customer();
  }
}
