const {app} = require("../server")
const request = require("superagent")

describe("products", () => {
    describe("get product routes", () => {
        describe("given the product does not exist", () => {
            it("expect 404",async () => {
                const productId = "product-123"
                await request(app).get(`/api/products/${productId}`).expect(404);
            });
        });
    });
});