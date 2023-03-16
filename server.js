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
        "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume OilFlorals for spring — though hardly groundbreaking, the concept is cliché for good reason: The lightweight, whimsical nature of fresh blooms make them perfect for warm-weather wear.",
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
      type: "flowery",
      agentId: "123",
    });
    server.create("perfume", {
      id: "2",
      title: "Brown Perfume",
      description:
        "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml.  As it pertains to fragrance, few florals are as universally beloved as Kai’s signature scent. The brand, which launched in 1999, has amassed an impressive fanbase, with Nicole Kidman, Cate Blanchett, and Jennifer Aniston among its many celebrity devotees.",
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
      agentId: "123",
    });
    server.create("perfume", {
      id: "3",
      title: "Fog Scent Xpressio Perfume",
      description:
        "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men. Kai’s Perfume Oil is an oil-based version of Kai’s original, celebrity-loved perfume mist. With notes of white florals, including gardenia, the oil has a fresh, clean, delicate finish that blends beautifully with skin, without overpowering its wearer. The fragrance oil, dispensed via a rollerball applicator, is housed in a pocket-sized tube — which, at one ounce, makes the oil extremely portable and TSA-friendly. The formula is notably free from parabens, sulfates, and phthalates.",
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
      agentId: "321",
    });
    server.create("perfume", {
      id: "4",
      title: "Non-Alcoholic Concentrated Perfume Oil",
      description:
        "Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil. I keep the Kai rollerball oil in my purse, particularly on days when I know I’ll be running around. A quick glide of fragrance oil in the morning gives me enough fresh, floral sillage to last until midday. Given its size and ease of application (a rollerball is much less conspicuous than a mist) I can re-up quite literally anywhere I happen to be, whether that’s at my desk, in a cab, or after a long flight.",
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
      type: "flowery",
      agentId: "321",
    });
    server.create("perfume", {
      id: "5",
      title: "Eau De Perfume Spray",
      description:
        "Genuine Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality. A testament to its timelessness, Kai’s fragrance oil is a favorite among shoppers, many of whom have been using the scent for years. “I'm in my 20s and have worn it since I was in my teens,” says one; “I'm sure I will still be wearing it 10, 20, 30 years from now.” Another shopper calls Kai’s scent “heavenly,",
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
      agentId: "123",
    });
    server.create("perfume", {
      id: "6",
      title: "De Best Perrr",
      description:
        "Genuine Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality. Another echoes this sentiment: “It's sweet, fresh, flowery and subtle,” they say, adding that the rollerball applicator is “super convenient to use.” The shopper, who says they switch fragrances with the seasons, says Kai’s is “perfect for spring and summer.” I couldn’t agree more.",
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
      agentId: "321",
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
    this.get("/agent/perfumes", (schema, request) => {
      return schema.perfumes.where({ agentId: "123" });
    });

    this.get("/agent/perfumes/:id", (schema, request) => {
      const id = request.params.id;
      return schema.perfumes.where({ id, agentId: "123" });
    });
  },
});
