const DWMG = require('../src/index');

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

test('All Variables set correctly', () =>{
    const exported = manifest.exportToJSON();
    expect(exported.name).toEqual("name");
    expect(exported.short_name).toEqual("short_name");
    expect(exported.start_url).toEqual("start_url");
    expect(exported.display).toEqual(DWMG.displayTypes.standalone);
    expect(exported.background_color).toEqual("#000000");
    expect(exported.description).toEqual("description");
    expect(exported.theme_color).toEqual("#FFFFFF");
    expect(exported.orientation).toEqual(DWMG.orientationTypes.natural);
    expect(exported.categories.length).toBeGreaterThan(1);
    expect(exported.categories[0]).toEqual("category1");
    expect(exported.categories[1]).toEqual("category2");
    expect(exported.icons.length).toBeGreaterThan(1);
});

test("Icon handling of blank type", () => {
    const exported = manifest.exportToJSON();
    expect(exported.icons[0].type).toBeUndefined();
    expect(exported.icons[1].type).toBeDefined();
});

test("Shortcut handling of blank description", () => {
    const exported = manifest.exportToJSON();
    expect(exported.shortcuts[0].description).toBeUndefined();
    expect(exported.shortcuts[1].description).toBeDefined();
});