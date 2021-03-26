import React from "react";
import { FormattedMessage } from "react-intl";

import { Month } from "./styled";

const getCurrentMonth = () => new Date(Date.now()).getMonth();

const MonthsBar = React.memo(() => (
    <div>
        {Array.from({ length: 12 }, (v, i) =>
            getCurrentMonth() + i >= 12 ? getCurrentMonth() + i - 12 : getCurrentMonth() + i
        ).map((month, index) => (
            <Month key={index}>
                <FormattedMessage key={month} id={`c-sdgImpactChart-months-${month}`} />
            </Month>
        ))}
    </div>
));

export default MonthsBar;
