import { fieldRequired } from "@mondora/agyo-validations";
import { translateMessage } from "../../i18n";

export const joinUsFormSchema = {
    type: "object",
    properties: {
        email: { type: "string", validate: fieldRequired(translateMessage("general.form.field-required")) }
    }
};
