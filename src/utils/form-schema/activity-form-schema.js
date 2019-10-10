import { fieldRequired, isInteger } from "@mondora/agyo-validations";
import { translateMessage } from "../../i18n";

export const activityFormSchema = {
    type: "object",
    properties: {
        goal: { type: "string", validate: fieldRequired(translateMessage("general.form.field-required")) },
        description: { type: "string" },
        value: { type: "number", validate: isInteger(translateMessage("general.form.field-required")) },
        date: { type: "string", validate: fieldRequired(translateMessage("general.form.field-required")) }
    }
};
