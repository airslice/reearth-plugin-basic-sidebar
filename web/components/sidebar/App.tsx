import type { actHandles } from "@web/types";
import { Tabs, ConfigProvider } from "antd";
import {
  // useCallback,
  useEffect,
  // useState,
  useMemo,
  // useRef,
  // useReducer,
} from "react";

ConfigProvider.config({
  theme: {
    primaryColor: "#00BEBE",
  },
});

const App = () => {
  const actHandles: actHandles = useMemo(() => {
    return {};
  }, []);

  useEffect(() => {
    (globalThis as any).addEventListener("message", (msg: any) => {
      if (msg.source !== (globalThis as any).parent || !msg.data.act) return;
      actHandles[msg.data.act as keyof actHandles]?.(msg.data.payload);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Tabs
        defaultActiveKey="1"
        centered
        items={new Array(3).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: `Tab ${id}`,
            key: id,
            children: `Content of Tab Pane ${id}`,
          };
        })}
      />
    </>
  );
};

export default App;
