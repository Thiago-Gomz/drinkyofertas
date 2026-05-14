export type Offer = {
  id: number;
  title: string;
  image: string;
  oldPrice: string;
  newPrice: string;
  discount: string;
  store: string;
  url: string;
  coupon?: string;
  source?: string;
};

export const offers: Offer[] = [
  {
    id: 1,
    title: "Kit Gin Tanqueray + Tônica",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_850000-MLB.jpg",
    oldPrice: "R$ 159,90",
    newPrice: "R$ 99,90",
    discount: "-37%",
    store: "Mercado Livre",
    url: "https://mercadolivre.com.br",
    coupon: "GIN10",
    source: "manual",
  },
  {
    id: 2,
    title: "Heineken 12 Latas",
    image:
      "https://m.media-amazon.com/images/I/71h7jU0V3DL._AC_SL1500_.jpg",
    oldPrice: "R$ 89,90",
    newPrice: "R$ 69,90",
    discount: "-22%",
    store: "Amazon",
    url: "https://amazon.com.br",
    coupon: "",
    source: "manual",
  },
  {
    id: 3,
    title: "Kit Churrasco Completo Premium",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_777777-MLB.jpg",
    oldPrice: "R$ 249,90",
    newPrice: "R$ 179,90",
    discount: "-28%",
    store: "Shopee",
    url: "https://shopee.com.br",
    coupon: "CHURRA20",
    source: "manual",
  },
];