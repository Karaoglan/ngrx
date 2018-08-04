export class ProductsService {
    private products = ['Book'];

    addProduct(productName: string) {
        this.products.push(productName);
    }

    getProducts() {
        return [...this.products];
    }
}
