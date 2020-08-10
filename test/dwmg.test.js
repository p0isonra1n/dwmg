const DWMG = require('../src/index');

var manifest = new DWMG({
    name: "name",
    short_name: "short_name",
    start_url: "start_url",
    display: DWMG.displayTypes.standalone,
    background_color: "#000000",
    description: "description"
});

manifest.addIcon("/image.png", "48x48");
manifest.addIcon("/image2.png", "72x72", "image/png");

test('All Variables set correctly', () =>{
    const exported = manifest.exportToJSON();
    expect(exported.name).toEqual("name");
    expect(exported.short_name).toEqual("short_name");
    expect(exported.start_url).toEqual("start_url");
    expect(exported.display).toEqual(DWMG.displayTypes.standalone);
    expect(exported.background_color).toEqual("#000000");
    expect(exported.description).toEqual("description");
    expect(exported.icons.length).toBeGreaterThan(1);
});

test("Icon handling of blank type", () => {
    const exported = manifest.exportToJSON();
    expect(exported.icons[0].type).toBeUndefined();
    expect(exported.icons[1].type).toBeDefined();
});