import { fieldRequired } from "@mondora/agyo-validations";
import { EmailValidator } from "commons-validator-js";
import combineValidators from "@mondora/agyo-validations/lib/utils/combineValidators";
import { translateMessage } from "../../i18n";

export const inviteFormSchema = {
    type: "object",
    properties: {
        email: {
            type: "string",
            validate: combineValidators(
                fieldRequired(translateMessage("general.form.field-required")),
                value =>
                    !new EmailValidator().isValid(value ? value : "") && translateMessage("general.form.email-required")
            )
        }
    }
};
