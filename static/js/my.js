avalon.config({debug: false});

var vm = avalon.define({
    $id: 'main',
    content: ''
});

avalon.router.add("/home", function (param) {
    vm.content = getHtml('../views/home.html');
});

avalon.router.add("/grid", function (param) {
    vm.content = getHtml('../views/layouts-grid.html');
});


// avalon.router.add("/:tab", function (param) {
//     vm.content = map[param]
// })


avalon.history.start({
    root: "/",
    hashPrefix: ""
});

var hash = location.hash.replace(/#!?/, '');
avalon.router.navigate(hash || '/home', 2); //默认打开
