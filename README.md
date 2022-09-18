# reearth-plugin-basic-sidebar

## Overview

- This is a reearth plugin.
- This is a basic sidebar which has:
  - Show / Hide (minimal size and show a menu button).
  - Tabs
- This project use:
  - React
  - Chakra UI

## How to use

### Install

```
yarn
```
### Serve

```
yarn start:sidebar
```

### Build

```
yarn build
```

or more suggested:

```
yarn package
```

This will build and zip plugin files to package folder.

## Known issue

- The Chakra library needs to be built in (did not success in use it with CDN) and makes build plugin take some time (around 2min with my machine).
- Thankfully developing the plugin UI does not need to build so it's okey for UI part but still be painful when you handle plugin part which needs to build and install to reearth web to test.
