System.register(['angular2/platform/browser', './demo.form.sku'], function(exports_1) {
    var browser_1, demo_form_sku_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (demo_form_sku_1_1) {
                demo_form_sku_1 = demo_form_sku_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(demo_form_sku_1.DemoFormSku);
        }
    }
});
//# sourceMappingURL=main.js.map