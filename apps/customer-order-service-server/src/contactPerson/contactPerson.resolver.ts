import * as graphql from "@nestjs/graphql";
import { ContactPersonResolverBase } from "./base/contactPerson.resolver.base";
import { ContactPerson } from "./base/ContactPerson";
import { ContactPersonService } from "./contactPerson.service";

@graphql.Resolver(() => ContactPerson)
export class ContactPersonResolver extends ContactPersonResolverBase {
  constructor(protected readonly service: ContactPersonService) {
    super(service);
  }
}
