# Simple Todo — React Native

A minimal, cross-platform todo list application built with [React Native](https://reactnative.dev/), [Expo](https://expo.dev/), and [Expo Router](https://docs.expo.dev/router/introduction/). Add tasks, mark them as done, and delete them — on iOS, Android, and the web, from a single TypeScript codebase.

## Features

- Add new tasks from an input field in the header
- Live clock that updates every second, stamped onto new tasks
- Mark a task as **Done** (with a completion timestamp) and toggle it back to **Undone**
- Delete tasks individually
- Automatic light/dark theme support via the device color scheme
- Runs on iOS, Android, and the web from a single codebase

## Tech Stack

- **[Expo](https://expo.dev/) ~54** with the New Architecture enabled
- **React Native 0.81** + **React 19**
- **[Expo Router](https://docs.expo.dev/router/introduction/) v6** for file-based routing with typed routes
- **TypeScript** in strict mode with `@/*` path aliases
- **React Navigation** (bottom tabs, native stack)
- **react-native-reanimated** & **react-native-gesture-handler**
- **ESLint** with `eslint-config-expo`

## Project Structure

```
.
├── app/                    # Expo Router screens (file-based routing)
│   ├── _layout.tsx         # Root layout — theme provider + Stack navigator
│   └── index.tsx           # Home screen — holds the task list state
├── components/
│   ├── header.tsx          # Live clock + new-task input + Add button
│   ├── task.tsx            # Single task row with Done / Delete actions
│   └── ui/
│       └── button.tsx      # Reusable styled TouchableOpacity button
├── constants/
│   └── theme.ts            # Colors & Fonts for light/dark modes
├── hooks/
│   ├── use-color-scheme.ts        # Native color scheme hook
│   ├── use-color-scheme.web.ts    # Web-specific variant
│   └── use-theme-color.ts         # Resolves a color against the active theme
├── assets/images/          # App icons, splash screen, favicon
├── scripts/
│   └── reset-project.js    # Moves starter code aside for a clean slate
├── app.json                # Expo configuration
├── package.json
└── tsconfig.json
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm (bundled with Node) — or yarn/pnpm/bun if you prefer
- [Expo Go](https://expo.dev/go) on a physical device, or an iOS simulator / Android emulator for local testing

### Installation

```bash
git clone https://github.com/YohannDCz/simpletodo-reactnative.git
cd simpletodo-reactnative
npm install
```

### Run the app

Start the Expo dev server:

```bash
npx expo start
```

From the dev server output you can open the app in:

- [Expo Go](https://expo.dev/go) — scan the QR code with your device
- An [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- An [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- A [development build](https://docs.expo.dev/develop/development-builds/introduction/)

Or use the platform-specific shortcuts:

```bash
npm run ios       # Open in iOS simulator
npm run android   # Open in Android emulator
npm run web       # Open in the browser
```

## Available Scripts

| Script                  | Description                                        |
| ----------------------- | -------------------------------------------------- |
| `npm run start`         | Start the Expo development server                  |
| `npm run ios`           | Launch the app in the iOS simulator                |
| `npm run android`       | Launch the app in the Android emulator             |
| `npm run web`           | Launch the app in a web browser                    |
| `npm run lint`          | Run ESLint via `expo lint`                         |
| `npm run reset-project` | Move the starter code to `app-example/` and start fresh |

## How It Works

The entry point is `app/_layout.tsx`, which wraps the app in a React Navigation `ThemeProvider` whose value follows the device color scheme, and renders a headerless `Stack` from Expo Router.

The only screen, `app/index.tsx`, holds the list of tasks in local component state:

```ts
const [tasks, setTasks] = useState<TaskProps[]>([]);
```

Each task has an `id`, a `date` (the timestamp when it was created), a `count` (its position in the list at creation time), and `text`. The screen renders a `<Header />` that owns the input field and pushes new tasks into state, then maps over `tasks` to render a `<Task />` component per entry. Each `<Task />` manages its own local "done" state and a completion timestamp, and can remove itself via `setTasks`.

> **Note:** Tasks are kept in memory only — they are not persisted across app restarts.

## Customization

- **Theme colors** — edit `constants/theme.ts` to adjust the light/dark palettes.
- **Icons & splash screen** — replace the images under `assets/images/` and update references in `app.json`.
- **App name / slug** — change `expo.name` and `expo.slug` in `app.json`.

## Resetting the project

When you want to strip the example screens and start from a blank slate, run:

```bash
npm run reset-project
```

This moves the current starter code into an `app-example/` directory and creates a fresh, empty `app/` directory.

## Learn more

- [Expo documentation](https://docs.expo.dev/)
- [Expo Router documentation](https://docs.expo.dev/router/introduction/)
- [React Native documentation](https://reactnative.dev/docs/getting-started)
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/)
