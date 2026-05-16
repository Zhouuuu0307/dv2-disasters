/* ============================================================
   DV2 — Vega-Lite chart embedder
   Loads each spec file and renders it into its container.
   ============================================================ */

const opt = { actions: false, renderer: "svg" };

const charts = [
  "chart1",  "chart2",  "chart3",  "chart4",
  "chart5",  "chart6",  "chart7",  "chart8",
  "chart9",  "chart10", "chart11", "chart12"
];

charts.forEach(id => {
  vegaEmbed("#" + id, "vis/" + id + ".json", opt)
    .catch(err => console.error("Failed to load " + id + ":", err));
});
