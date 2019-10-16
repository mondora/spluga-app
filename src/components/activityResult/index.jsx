import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container, Title, FieldRight, FieldCenter, SpinContainer } from "./styled";
import { FormattedMessage } from "react-intl";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Select, Spin } from "antd";
import moment from "moment";

const { Option } = Select;

export const ActivityResult = ({ activities, goals }) => {
    const [goal, setGoal] = useState(goals ? goals[0] : {});

    const formatXAxis = tickItem => {
        return moment(tickItem).format("YYYY-MM-DD");
    };

    const handleGoalChange = e => {
        setGoal(goals.find(g => g.key === e));
    };

    const lastThirtyDays = [...new Array(30)]
        .map((i, idx) => {
            return {
                date: moment()
                    .startOf("day")
                    .subtract(idx, "days")
                    .format("YYYY-MM-DD")
            };
        })
        .reverse();

    if (goals) {
        lastThirtyDays.forEach(day => {
            goals.forEach(g => {
                const filter =
                    activities && activities.length > 0
                        ? activities.filter(activity => {
                              return activity.date === day.date && activity.goal === g.key;
                          })
                        : [];

                const val =
                    filter.length > 0
                        ? filter.reduce((a, b) => ({
                              value: a ? a.value + b.value : 0
                          }))
                        : [];

                day[g.key] = val.value;
            });
        });
    }

    return goal && goals ? (
        <Container>
            <Title>
                <FormattedMessage id="c-activityResult.title" />
            </Title>
            <FieldRight>
                <Select name="goal" onChange={handleGoalChange} defaultValue={goal.key}>
                    {goals.map(g => (
                        <Option key={g.key} value={g.key}>
                            {g.key}
                        </Option>
                    ))}
                </Select>
            </FieldRight>
            <FieldCenter>
                <ResponsiveContainer>
                    <LineChart
                        data={lastThirtyDays}
                        margin={{
                            top: 5,
                            right: 10,
                            left: 10,
                            bottom: 10
                        }}
                    >
                        <XAxis allowDataOverflow dataKey="date" tickFormatter={formatXAxis} />
                        <YAxis allowDataOverflow label={{ value: goal.unit, position: "insideLeft" }} />
                        <Tooltip />
                        <Line
                            connectNulls
                            type="monotone"
                            dataKey={goal.key}
                            stroke="#8884d8"
                            strokeWidth={2}
                            activeDot={{ r: 8 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </FieldCenter>
        </Container>
    ) : (
        <SpinContainer>
            <Spin size="large" />
        </SpinContainer>
    );
};

ActivityResult.propTypes = {
    activities: PropTypes.array,
    goals: PropTypes.array
};

export default ActivityResult;
