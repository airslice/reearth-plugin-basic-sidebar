import type { Theme } from "@web/theme/common";
import ThemeProvider from "@web/theme/provider";
import type { actHandles } from "@web/types";
import { postMsg } from "@web/utils/common";
import { Tabs } from "antd";
import {
  // useCallback,
  useEffect,
  useState,
  useMemo,
  // useRef,
  // useReducer,
} from "react";

const App = () => {
  // const isActive = useRef(false);
  const [theme, setTheme] = useState("light");
  const [overriddenTheme, setOverriddenTheme] = useState<Theme>();

  // const updateReducer = useCallback(
  //   (num: number): number => (num + 1) % 1_000_000,
  //   []
  // );
  // const [, forceUpdate] = useReducer(updateReducer, 0);

  // const onClose = useCallback(() => {}, []);

  // const handleActiveChange = useCallback(
  //   (active: boolean) => {
  //     isActive.current = active;
  //     if (!isActive.current) {
  //       onClose();
  //     }
  //   },
  //   [onClose]
  // );

  // const onResize = useCallback((width: number, height: number) => {
  //   postMsg("resize", [width, height]);
  // }, []);

  const actHandles: actHandles = useMemo(() => {
    return {
      setTheme: ({
        theme,
        overriddenTheme,
      }: {
        theme: string;
        overriddenTheme: Theme;
      }) => {
        setTheme(theme);
        setOverriddenTheme(overriddenTheme);
      },
    };
  }, []);

  useEffect(() => {
    (globalThis as any).addEventListener("message", (msg: any) => {
      if (msg.source !== (globalThis as any).parent || !msg.data.act) return;
      actHandles[msg.data.act as keyof actHandles]?.(msg.data.payload);
    });
    postMsg("getTheme");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider theme={theme} overriddenTheme={overriddenTheme}>
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
    </ThemeProvider>
  );
};

export default App;
