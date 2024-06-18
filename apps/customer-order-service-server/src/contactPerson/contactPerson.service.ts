import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ContactPersonServiceBase } from "./base/contactPerson.service.base";

@Injectable()
export class ContactPersonService extends ContactPersonServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
