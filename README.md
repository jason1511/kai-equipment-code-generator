# KAI Equipment Code Generator

A hobbyist web tool for generating Indonesian railway equipment markings and plate-style previews.

This project is focused on visual railway markings used on Indonesian rolling stock, including passenger coaches, freight wagons, KRL/KRD-style stock, trainmark plates, and locomotive identification plates.

The tool is built as a frontend-only React application and can export generated plate previews as PNG images.

## Live Demo

[https://generatorkodesarana.pages.dev](https://generatorkodesarana.pages.dev/)

## Features

## 1. Serial Plate Generator

Generates a black equipment serial plate for Indonesian railway rolling stock.

Supported scope:

- Passenger coaches
- Freight wagons
- KRL / KRD-style stock through propulsion mode
- Special-purpose rolling stock

Example outputs:

```text
K1 0 18 01 BD
T1 0 08 01 JAKK
KMP 2 18 01 DP
GB 0 18 01 JAKG
```

The plate includes:

- Rolling stock class
- Propulsion/source code
- Production year
- Unit number
- Depot/allocation code
- Electrical system
- Empty weight
- Service start date / MD
- Last maintenance date / PA
- Next maintenance date / PA YAD
- PEM inspection grid

The generator supports multiple stock code examples such as:

```text
K, K1, K2, K3
T, T1
M, P, B
KM, KP, MP, BP, KMP
GB, GD, GT, GK
SI, SN, SC, SU, SR, SK
```

Propulsion mode is handled separately from the vehicle/class code:

```text
0 = Trailer / not self-propelled
1 = KRL / electric multiple unit
2 = KRDE / diesel-electric railcar
3 = KRDH / diesel-hydraulic railcar
```

This allows examples like:

```text
K1 1 18 01 DP
K3 2 18 01 SBI
K3 3 18 01 SBI
```

## 2. Trainmark Generator

Generates a square orange trainmark plate.

Example output:

```text
F
45 | 10
```

Inputs:

- Speed rating: `D`, `E`, `F`
- Bogie type: `K5`, `K8`, `K10`
- Weight in kilograms

The weight is automatically converted to tonnes for display.

Example:

```text
45000 kg → 45
K10 → 10
```

## 3. Current Locomotive Plate Generator

Generates the current-style locomotive identification plate.

Example outputs:

```text
CC 206 13 01
BB 203 78 02
C 201 55 01
D 401 60 03
```

Inputs:

- Axle code: `A`, `AA`, `B`, `BB`, `C`, `CC`, `D`, `DD`
- Source of motive power
- Type series
- Production year
- Unit number

Example structure:

```text
CC 206 13 01
```

Where:

```text
CC = axle code
2  = source of motive power
06 = type series
13 = production year, 2013
01 = unit number
```

## 4. Old Locomotive Plate Generator

Generates the older-style locomotive identification plate.

Example outputs:

```text
CC 203 01
BB 301 03
```

Inputs:

- Axle code
- Source of motive power
- Type series
- Unit number

Unlike the current locomotive plate, the old plate format does not include the production year.

Example structure:

```text
CC 203 01
```

Where:

```text
CC = axle code
2  = source of motive power
03 = type series
01 = unit number
```

This tool uses a custom old-style locomotive plate font.

## Tech Stack

- React
- TypeScript
- Vite
- CSS
- html-to-image
- Cloudflare Pages

## Project Structure

```text
src/
  assets/
    fonts/
      NishaLocoplate-Regular.ttf

  components/
    EquipmentCodeForm.tsx
    SerialPlatePreview.tsx
    TrainmarkTool.tsx
    TrainmarkPreview.tsx
    LocomotivePlateTool.tsx
    LocomotivePlatePreview.tsx
    OldLocomotivePlateTool.tsx
    OldLocomotivePlatePreview.tsx

  data/
    depotCodes.ts
    motiveSources.ts
    stockTypes.ts

  lib/
    dateHelpers.ts
    formatPlateDate.ts
    generateEquipmentCode.ts
    generatePlate.ts
    generateTrainmark.ts
    generateLocomotivePlate.ts
    generateOldLocomotivePlate.ts

  types/
    rollingStock.ts
    trainmark.ts
    locomotive.ts
    oldLocomotive.ts

  App.tsx
  index.css
  main.tsx
```

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Cloudflare Pages Deployment

This project is intended to be deployed as a static Vite app on Cloudflare Pages.

Recommended Cloudflare Pages settings:

```text
Framework preset: None
Build command: npm run build
Build output directory: dist
Root directory: /
```

Do not deploy the raw project root as the output directory. The production site must serve the built `dist` folder.

If Cloudflare serves this path:

```text
/src/main.tsx
```

then the build output directory is incorrect.

The deployed site should load built files from:

```text
/assets/...
```

## PNG Export

Each generator can export its preview as a PNG image using `html-to-image`.

The export captures the plate element itself, not the full page or card. This keeps the output suitable for:

- Hobbyist references
- Modding textures or mockups
- Model railway documentation
- Visual archives
- Personal railway notes

The generated images are based on the CSS preview layout. For consistent output, the plate designs use fixed dimensions where appropriate.

## Scope Notes

This project separates railway equipment markings into different tools because Indonesian rolling stock plates use different formats depending on the vehicle type.

The black serial plate generator focuses on:

- Passenger coaches
- Freight wagons
- KRL/KRD-style stock
- Special-purpose rolling stock

The locomotive plate generators are separate because locomotive identification plates use a different format.

## Data Notes

Depot/allocation data is simplified for hobbyist use.

Some depot codes may use 2, 3, or 4 characters depending on how the code is commonly represented in railway markings or references. The project does not force all depot codes into a 3-letter format.

Examples:

```text
BD
YK
CN
SDT
JAKK
JAKG
```

## Disclaimer

This is a hobbyist visual tool and reference generator.

It is not an official PT KAI, KAI Commuter, INKA, KCIC, LRT, MRT, or government system.

Some code lists, depot codes, and plate details may be simplified or adapted for hobbyist use. Users should verify details against primary references if accuracy is required for archival, operational, or professional purposes.

## Author

Created by Jason Leonard.

GitHub:

```text
https://github.com/jason1511
```

## Repository

```text
https://github.com/jason1511/kai-equipment-code-generator
```

## License

This project is for educational and hobbyist purposes.

Add a license file if you want to define formal reuse permissions.
