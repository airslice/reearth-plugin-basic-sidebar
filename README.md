# reearth-plugin-basic-sidebar

# Overview

This is a reearth plugin designed to be used as a template to enable developers focus on content of sidebar.

- Features:
  - Show / Hide (minimal size and show a menu button).
  - Tabs with responsive height.
- Work with:
  - React
  - [Antd](https://ant.design/components/overview/)

# Start

## Install

```
yarn
```
## Development

```
yarn start
```

## Build

```
yarn build
```

or more recommended:

```
yarn package
```

This will `build` and `zip` plugin files into `/package` folder.

# Development

## Basic Re:earth plugin

Please read [official plugin guide](https://docs.reearth.io/developer-guide/plugin/introduction) first.

For minimal structure of plugin & basic usage templates please refer [reearth-plugin-templates](https://github.com/KaWaite/reearth-plugin-templates).

## Plugin files:

A standard Re:earth plugin requires two files:

1. `reearth.yml`: discribe the manifest for the plugin.

   Update content for your plugin at `/public/reearth.yml`.

2. A `${id}.js` file: the script of the plugin.

   Notice: you should use the extension id (defined in your `reearth.yml` `extensions` -> `id`) as this script's filename. Lowercase is recommended. With this repo you don't need to change anything as they're pre-setted as `sidebar`.

   One plugin can have multiple extensions (displays as widgets in Re:earth projects). For this repo we only create one extension `sidebar`.

   The script is basically a series of calls to Re:earth plugin API. For example:

   ```typescript
   (GlobalThis as any).reearth.ui.show(html);
   (GlobalThis as any).reearth.ui.postMessage('foo');
   (GlobalThis as any).reearth.on('message',(msg)=>{});
   ```
  
   Most plugin (this sidebar plugin also) will have a UI, which is an HTML page and will be shown with `reearth.ui.show`.

   Now we have made the development of plugin into two parts:

   - Web(UI) part: this is a normal development of a front-end page.
     - All releated development happens in `/web`.
     - The main entrance is `/web/components/sidebar/main.tsx`.
     - React & Antd is already in use.
     - Run `yarn serve` to start a local develop server.
  
   - Plugin part: this is the code directly in plugin script file.
     - All related development happens in `/src`.
     - The main script is `/src/widgets/sidebar.ts`.
     - You can use reearth plugin API in this script.
     - All data should be transformed through 
       - `reearth.ui.postMessage` -> plugin to web
       - `parent.postMessage` -> web to plugin
   
## How to test

- For web part you can directly check the page render with develop server.
- For plugin part and the general plugin:
  
   Option 1: Run `yarn build` and copy paste the `dist/plugin/sidebar.js` content into plugin editor.
    This behaviors almost equal to real project except you need to manually set WAS. For sidebar please select `LeftMiddle`.
  
   Option 2: Run `yarn package` and install your plugin into reearh project with the packaged `zip` file.
    This is exactly what your plugin will behavior.
    
## Thanks to

This solution basically refers to [Plateauview Project](https://github.com/eukarya-inc/reearth-plateauview), thanks to all the contributors!
