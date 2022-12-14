class Header {

    handlerOpenShoppingPage() {
        shoppingPages.render()
    }

    render(count) {

        const html = `
            <div class="header-container">
                <div class="header-counter" onclick="headerPage.handlerOpenShoppingPage()">
                ❤️ ${count}
                </div>
            </div>
        `;

        ROOT_HEADER.innerHTML = html;
    }



}

const productsStore =  localStorangeUtil.getProducts();
const headerPage = new Header();
headerPage.render(productsStore.length);