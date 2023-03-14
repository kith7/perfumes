import { createServer, Model } from "miragejs";

createServer({
  models: {
    perfume: Model,
  },

  seeds(server) {
    server.create("perfume", {
      id: "1",
      title: "perfume Oil",
      description:
        "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
      price: 13,
      discountPercentage: 8.4,
      rating: 4.26,
      stock: 65,
      brand: "Impression of Acqua Di Gio",
      category: "fragrances",
      thumbnail: "https://i.dummyjson.com/data/products/11/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/11/1.jpg",
        "https://i.dummyjson.com/data/products/11/2.jpg",
        "https://i.dummyjson.com/data/products/11/3.jpg",
        "https://i.dummyjson.com/data/products/11/thumbnail.jpg",
      ],
      type: "simple",
    });
    server.create("perfume", {
      id: "2",
      title: "Brown Perfume",
      description: "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
      price: 40,
      discountPercentage: 15.66,
      rating: 4,
      stock: 52,
      brand: "Royal_Mirage",
      category: "fragrances",
      thumbnail: "https://i.dummyjson.com/data/products/12/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/12/1.jpg",
        "https://i.dummyjson.com/data/products/12/2.jpg",
        "https://i.dummyjson.com/data/products/12/3.png",
        "https://i.dummyjson.com/data/products/12/4.jpg",
        "https://i.dummyjson.com/data/products/12/thumbnail.jpg",
      ],
      type: "cologne",
    });
    server.create("perfume", {
      id: "3",
      title: "Fog Scent Xpressio Perfume",
      description:
        "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men",
      price: 13,
      discountPercentage: 8.14,
      rating: 4.59,
      stock: 61,
      brand: "Fog Scent Xpressio",
      category: "fragrances",
      thumbnail: "https://i.dummyjson.com/data/products/13/thumbnail.webp",
      images: [
        "https://i.dummyjson.com/data/products/13/1.jpg",
        "https://i.dummyjson.com/data/products/13/2.png",
        "https://i.dummyjson.com/data/products/13/3.jpg",
        "https://i.dummyjson.com/data/products/13/4.jpg",
        "https://i.dummyjson.com/data/products/13/thumbnail.webp",
      ],
      type: "luxury",
    });
    server.create("perfume", {
      id: "4",
      title: "Non-Alcoholic Concentrated Perfume Oil",
      description:
        "Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil",
      price: 120,
      discountPercentage: 15.6,
      rating: 4.21,
      stock: 114,
      brand: "Al Munakh",
      category: "fragrances",
      thumbnail: "https://i.dummyjson.com/data/products/14/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/14/1.jpg",
        "https://i.dummyjson.com/data/products/14/2.jpg",
        "https://i.dummyjson.com/data/products/14/3.jpg",
        "https://i.dummyjson.com/data/products/14/thumbnail.jpg",
      ],
      type: "simple",
    });
    server.create("perfume", {
      id: "5",
      title: "Eau De Perfume Spray",
      description:
        "Genuine Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality",
      price: 30,
      discountPercentage: 10.99,
      rating: 4.7,
      stock: 105,
      brand: "Lord - Al-Rehab",
      category: "fragrances",
      thumbnail: "https://i.dummyjson.com/data/products/15/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/15/1.jpg",
        "https://i.dummyjson.com/data/products/15/2.jpg",
        "https://i.dummyjson.com/data/products/15/3.jpg",
        "https://i.dummyjson.com/data/products/15/4.jpg",
        "https://i.dummyjson.com/data/products/15/thumbnail.jpg",
      ],
      type: "luxury",
    });
    server.create("perfume", {
      id: "6",
      title: "De Best Perrr",
      description:
        "Genuine Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality",
      price: 30,
      discountPercentage: 10.99,
      rating: 4.7,
      stock: 105,
      brand: "Lord El Ra",
      category: "fragrances",
      thumbnail: "https://i.dummyjson.com/data/products/15/thumbnail.jpg",
      images: [
        "https://i.dummyjson.com/data/products/15/1.jpg",
        "https://i.dummyjson.com/data/products/15/2.jpg",
        "https://i.dummyjson.com/data/products/15/3.jpg",
        "https://i.dummyjson.com/data/products/15/4.jpg",
        "https://i.dummyjson.com/data/products/15/thumbnail.jpg",
      ],
      type: "cologne",
    });
  },

  routes() {
    this.namespace = "api";
    this.logging = false;

    this.get("/perfumes", (schema, request) => {
      return schema.perfumes.all();
    });

    this.get("/perfumes/:id", (schema, request) => {
      const id = request.params.id;
      return schema.perfumes.find(id);
    });
  },
});
