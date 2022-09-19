import { useMemo } from "react";

import Card from "../../atoms/Card";

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
      {longList.map((i) => (
        <Card key={i}>
          <p>{i}</p>
        </Card>
      ))}
    </>
  );
};

export default PanelOne;
