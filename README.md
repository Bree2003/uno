# Mindsight Landing

## Installation

```bash
npm install
```


## Development

First, run the development server:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) with your browser to see changes in real time.

## File structure

```c
.
├── public
│   └── ... // Any publicly accessible asset should go here
├── src
│   ├── app
│   │   ├── <route> // Defined routes for the landing
│   │   │   ├── page.tsx
│   │   │   └── ...
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── ...
│   ├── components
│   │   ├── ui // shadcn components folder
│   │   │   └── ...
│   │   └── <component> // Any part of the UI that's gonna be reused/modularized
│   │       └── index.tsx
│   ├── hooks
│   │   └── [hookname].ts // Any part of the UI's state that's gonna be reused
│   ├── styles
│   ├── types
│   │   └── [typename].ts // Prefer to declare any custom type that is used here
│   └── utils
│       └── [utilname].ts // Any function that is reused in many parts of the app
└── ...
```

