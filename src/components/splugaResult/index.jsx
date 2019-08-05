import React from "react";
import PropTypes from "prop-types";
import { Result, Button } from "antd";

import { Container, Confirm, Paragraph } from "./styled";
export const SplugaResult = ({ title, subTitle, param }) => {
  return (
    <Container>
      <Result status="success" title={title} subTitle={subTitle} />
      <Confirm>
        <Paragraph>{param}</Paragraph>
        <Button type="primary" href="">
          Ok
        </Button>
      </Confirm>
    </Container>
  );
};

Container.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string
};

export default SplugaResult;
