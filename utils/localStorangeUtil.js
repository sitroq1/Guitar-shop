class LocalStorangeUtil {

    constructor() {
        this.keyName = 'products';
    }

    getProducts() {
        const productsLocalStorange = localStorage.getItem(this.keyName);

        if (productsLocalStorange !== null) {
            return JSON.parse(productsLocalStorange);
        }
        return [];

    }

    pushProducts(id) {
        let products = this.getProducts();

        let pushProducts = false;

        let productId = products.indexOf(id);

        if (productId === -1) {
            products.push(id);
            pushProducts = true;
        }
        else {
            products.splice(productId, 1);
        }

        localStorage.setItem(this.keyName, JSON.stringify(products));

        return {pushProducts, products}
    }
}

const localStorangeUtil = new LocalStorangeUtil();
