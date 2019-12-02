import { fieldRequired, fieldLength, isInteger } from "@mondora/agyo-validations/";
import combineValidators from "@mondora/agyo-validations/lib/utils/combineValidators";

import { translateMessage } from "../../i18n";

export const targetFormSchema = {
    type: "object",
    properties: {
        name: {
            type: "string",
            validate: combineValidators(
                fieldRequired(translateMessage("general.form.field-required")),
                fieldLength(translateMessage("general.form.field-length"), 1, 30)
            )
        },
        description: { type: "string", validate: fieldRequired(translateMessage("general.form.field-required")) },
        stakeholder: { type: "string" },
        goal: { type: "string" },
        value: { type: "number", validate: isInteger(translateMessage("general.form.field-required")) },
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
