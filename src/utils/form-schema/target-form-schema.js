import { fieldRequired } from "@mondora/agyo-validations";
import { translateMessage } from "../../i18n";

export const targetFormSchema = {
    type: "object",
    properties: {
        name: { type: "string", validate: fieldRequired(translateMessage("general.form.field-required")) },
        description: { type: "string", validate: fieldRequired(translateMessage("general.form.field-required")) },
        stakeholder: { type: "string" },
        goal: { type: "string" },
        value: { type: "number", validate: fieldRequired(translateMessage("general.form.field-required")) },
        startDate: {
            type: "string",
            validate: fieldRequired(translateMessage("general.form.field-required"))
        },
        endDate: {
            type: "string",
            validate: fieldRequired(translateMessage("general.form.field-required"))
        }
    }
};
