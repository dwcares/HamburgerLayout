// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=392286
(function () {
    "use strict";
    var _menuWidth = 300;
    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            args.setPromise(WinJS.UI.processAll().then(init));
        }
    };

    function init() {
        document.querySelector(".header .hamburger").addEventListener("click", toggleMenu);
        document.querySelector(".content").addEventListener("click", returnToContent);
        document.querySelector(".viewport").scrollLeft = _menuWidth;
    }

    function returnToContent(e) {
        var viewport = document.querySelector(".viewport");
        if (viewport.scrollLeft < _menuWidth || viewport.scrollLeft >= _menuWidth * 2) {
            viewport.msZoomTo({
                contentX: _menuWidth
            });
        }
    }

    function toggleMenu(e) {
        var viewport = document.querySelector(".viewport");
        var scrollPos = (viewport.scrollLeft > 0) ? 0 : _menuWidth;
        viewport.msZoomTo({
            contentX: scrollPos
        });
    }

    var itemArray = new WinJS.Binding.List([
{ title: "Marvelous Mint", text: "Gelato", picture: "/images/fruits/60Mint.png" },
{ title: "Succulent Strawberry", text: "Sorbet", picture: "/images/fruits/60Strawberry.png" },
{ title: "Banana Blast", text: "Low-fat frozen yogurt", picture: "/images/fruits/60Banana.png" },
{ title: "Lavish Lemon Ice", text: "Sorbet", picture: "/images/fruits/60Lemon.png" },
{ title: "Creamy Orange", text: "Sorbet", picture: "/images/fruits/60Orange.png" },
{ title: "Very Vanilla", text: "Ice Cream", picture: "/images/fruits/60Vanilla.png" },
{ title: "Banana Blast", text: "Low-fat frozen yogurt", picture: "/images/fruits/60Banana.png" },
{ title: "Lavish Lemon Ice", text: "Sorbet", picture: "/images/fruits/60Lemon.png" },
{ title: "Marvelous Mint", text: "Gelato", picture: "/images/fruits/60Mint.png" },
{ title: "Succulent Strawberry", text: "Sorbet", picture: "/images/fruits/60Strawberry.png" },
{ title: "Banana Blast", text: "Low-fat frozen yogurt", picture: "/images/fruits/60Banana.png" },
{ title: "Lavish Lemon Ice", text: "Sorbet", picture: "/images/fruits/60Lemon.png" },
{ title: "Creamy Orange", text: "Sorbet", picture: "/images/fruits/60Orange.png" },
{ title: "Very Vanilla", text: "Ice Cream", picture: "/images/fruits/60Vanilla.png" },
{ title: "Banana Blast", text: "Low-fat frozen yogurt", picture: "/images/fruits/60Banana.png" },
{ title: "Lavish Lemon Ice", text: "Sorbet", picture: "/images/fruits/60Lemon.png" },
{ title: "Marvelous Mint", text: "Gelato", picture: "/images/fruits/60Mint.png" },
{ title: "Succulent Strawberry", text: "Sorbet", picture: "/images/fruits/60Strawberry.png" },
{ title: "Banana Blast", text: "Low-fat frozen yogurt", picture: "/images/fruits/60Banana.png" },
{ title: "Lavish Lemon Ice", text: "Sorbet", picture: "/images/fruits/60Lemon.png" },
{ title: "Creamy Orange", text: "Sorbet", picture: "/images/fruits/60Orange.png" },
{ title: "Very Vanilla", text: "Ice Cream", picture: "/images/fruits/60Vanilla.png" },
{ title: "Banana Blast", text: "Low-fat frozen yogurt", picture: "/images/fruits/60Banana.png" },
{ title: "Lavish Lemon Ice", text: "Sorbet", picture: "/images/fruits/60Lemon.png" },
    ]);

    var grouped = itemArray.createGrouped(function (item) {
        return item.text;
    }, function (item) {
        return {
            title: item.text
        };
    }, function (left, right) {
        return left.charCodeAt(0) - right.charCodeAt(0);
    });

    WinJS.Namespace.define("App", {
        data: grouped
    });

    app.start();
})();