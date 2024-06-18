import { Module } from "@nestjs/common";
import { ContactPersonModuleBase } from "./base/contactPerson.module.base";
import { ContactPersonService } from "./contactPerson.service";
import { ContactPersonController } from "./contactPerson.controller";
import { ContactPersonResolver } from "./contactPerson.resolver";

@Module({
  imports: [ContactPersonModuleBase],
  controllers: [ContactPersonController],
  providers: [ContactPersonService, ContactPersonResolver],
  exports: [ContactPersonService],
})
export class ContactPersonModule {}
