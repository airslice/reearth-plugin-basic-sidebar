import html from "../../dist/web/sidebar/index.html?raw";
import type { pluginMessage, actHandles } from "../type";

(globalThis as any).reearth.ui.show(html, {
  width: 350,
  height: 100,
  extended: true,
});

// const updateTheme = () => {
//   (globalThis as any).reearth.ui.postMessage({
//     act: "setTheme",
//     payload: {
//       theme: (globalThis as any).reearth.widget.property.customize?.theme,
//       overriddenTheme: {
//         colors: {
//           background: (globalThis as any).reearth.widget.property.customize
//             ?.backgroundColor,
//           primary: (globalThis as any).reearth.widget.property.customize
//             ?.primaryColor,
//         },
//       },
//     },
//   });
// };

const handles: actHandles = {
  resize: (size: any) => {
    (globalThis as any).reearth.ui.resize(...size);
  },
  setSidebarShown: (shown: boolean) => {
    if (shown) {
      (globalThis as any).reearth.ui.resize(350, 100, true);
    } else {
      (globalThis as any).reearth.ui.resize(40, 40, false);
    }
  },
};

(globalThis as any).reearth.on("message", (msg: pluginMessage) => {
  if (msg?.act) {
    handles[msg.act]?.(msg.payload);
  }
});

// (globalThis as any).reearth.on("update", () => {
//   updateTheme();
// });
