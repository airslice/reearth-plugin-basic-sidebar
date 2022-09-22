import { styled } from "@web/theme";
import { Slider, Steps } from "antd";
import { useMemo } from "react";

import Card from "../../atoms/Card";

const { Step } = Steps;

const PanelOne: React.FC = () => {
  const longList = useMemo(() => {
    const list = [];
    for (let i = 0; i < 20; i += 1) {
      list.push(i);
    }
    return list;
  }, []);

  return (
    <>
      <Card>
        Outer Info
        <Card>
          Inner Info
          <Slider defaultValue={30} />
        </Card>
      </Card>

      <Card>
        <Steps direction="vertical" current={1}>
          <StyledStep title="Finished" description="This is a description." />
          <Step title="In Progress" description="This is a description." />
          <Step title="Waiting" description="This is a description." />
        </Steps>
      </Card>
      {longList.map((i) => (
        <Card key={i}>
          <p>{i}</p>
        </Card>
      ))}
    </>
  );
};

const StyledStep = styled(Step)`
  background-color: #78e4a3;

  .ant-steps-item-icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default PanelOne;
