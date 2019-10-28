import { fieldRequired } from "@mondora/agyo-validations";
import { translateMessage } from "../../i18n";

export const appFormSchema = {
    type: "object",
    properties: {
        name: { type: "string", validate: fieldRequired(translateMessage("general.form.field-required")) },
        logo: { type: "string" }
    }
};
