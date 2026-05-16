# DV2 — When Nature Strikes: Australia's Disaster Landscape

**FIT2179 Data Visualisation 2 · Monash University**

## Project structure

```
dv2-disasters/
├── index.html          ← main webpage
├── README.md
├── assets/             ← images, icons, photos (added as needed)
├── css/
│   └── style.css       ← page styling
├── data/               ← cleaned datasets
│   ├── australia_states_simple.geojson
│   └── chart*.csv
├── js/
│   └── main.js         ← chart-embedding script
└── vis/                ← Vega-Lite JSON specifications
    └── chart*.json
```

## Local development

1. Open this folder in VS Code
2. Install the **Live Server** extension
3. Right-click `index.html` → **Open with Live Server**
4. Edits to any file will auto-reload the browser

## Previewing individual charts

With the **Vega Viewer** extension installed:
- Open any `vis/chart*.json`
- Press `Ctrl+Shift+P` → `Vega: Preview`

## Data sources

- EM-DAT, CRED / UCLouvain (emdat.be)
- Insurance Council of Australia, Historical Normalised Catastrophe List (Feb 2026)
- Bureau of Meteorology, Tropical Cyclone Database
- Bureau of Meteorology, ACORN-SAT Temperature Timeseries
- Australian Bureau of Statistics, ASGS State Boundaries 2021 (GDA94)
