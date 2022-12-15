function render() {

    const productsStore =  localStorangeUtil.getProducts();

    headerPage.render(productsStore.length);
    productsPage.render();
}
let CATALOG = [];
render();

