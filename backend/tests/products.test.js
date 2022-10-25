import request from "supertest";
import {app} from "../server";

describe("products", () => {
    describe("get product routes", () => {
        describe("given the product does not exist", () => {
            it("expect 404",async () => {
                const productId = "product-123";
                await request(app).get(`/api/products/${productId}`).expect(404);
            });
        });
    });
});