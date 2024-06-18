import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ContactPersonService } from "./contactPerson.service";
import { ContactPersonControllerBase } from "./base/contactPerson.controller.base";

@swagger.ApiTags("contactPeople")
@common.Controller("contactPeople")
export class ContactPersonController extends ContactPersonControllerBase {
  constructor(protected readonly service: ContactPersonService) {
    super(service);
  }
}
