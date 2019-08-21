import { fieldRequired } from "@mondora/agyo-validations";
import { translateMessage } from "../../i18n";

export const companyFormSchema = {
    type: "object",
    properties: {
        name: { type: "string", validate: fieldRequired(translateMessage("general.form.field-required")) }
    }
};
