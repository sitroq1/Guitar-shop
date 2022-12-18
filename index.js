function render() {

    const productsStore =  localStorangeUtil.getProducts();

    headerPage.render(productsStore.length);
    productsPage.render();
}
spinnerPage.render();
let CATALOG = [];


// fetch('server/catalog.json')
fetch('https://api.npoint.io/7ba196f2e0b547fc024d')
    .then(res => res.json())
    .then(body => {
        CATALOG = body;
        spinnerPage.handleClear();
        render();
    })
    .catch(error => {
        spinnerPage.handleClear();
        errorPage.render();
    });

