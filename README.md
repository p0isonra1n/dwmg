# dwmg - Dynamic Web Manifest Generator

Easy to use generator for Web Manifest with the ablity to export to JSON for use
in Dynamic Manifest applications.

## Install
`npm install dwmg`

## Usage

```js
var manifest = new DWMG({
    name: "name",
    short_name: "short_name",
    start_url: "start_url",
    display: DWMG.displayTypes.standalone,
    background_color: "#000000",
    description: "description",
    theme_color: "#FFFFFF",
    orientation: DWMG.orientationTypes.natural,
    categories: ["category1", "category2"]
});

manifest.addIcon("/image.png", "48x48");
manifest.addIcon("/image2.png", DWMG.iconSizes.x72, "image/png");

manifest.addShortcut("Shortcut1", "/url");
manifest.addShortcut("Shortcut2", "/url", "Description");

```

## Coming Soon

- Verification of manifest configuration

## Web App Manifests
Based on the following spec https://developer.mozilla.org/en-US/docs/Web/Manifest

## LICENSE

[MIT](https://github.com/p0isonra1n/dwmg/blob/master/LICENSE)
