export type Offer = {
  id: number;
  title: string;
  description: string;
  price: string;
  oldPrice: string;
  image: string;
  store: string;
  link: string;
};

export const offers: Offer[] = [
  {
    id: 1,
    title: "Kit Gin Tanqueray + Energético",
    description: "Combo premium para seu churrasco do fim de semana.",
    price: "R$ 129,90",
    oldPrice: "R$ 179,90",
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1200&auto=format&fit=crop",
    store: "Amazon",
    link: "https://www.amazon.com.br/",
  },

  {
    id: 2,
    title: "Whisky Jack Daniel's 1L",
    description: "Oferta limitada com frete rápido.",
    price: "R$ 119,90",
    oldPrice: "R$ 159,90",
    image:
      "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?q=80&w=1200&auto=format&fit=crop",
    store: "Mercado Livre",
    link: "https://www.mercadolivre.com.br/",
  },

  {
    id: 3,
    title: "Kit Churrasco Premium",
    description: "Conjunto completo para churrasco profissional.",
    price: "R$ 249,90",
    oldPrice: "R$ 349,90",
    image:
      "https://images.unsplash.com/photo-1529692236671-f1de50a1c5ff?q=80&w=1200&auto=format&fit=crop",
    store: "Shopee",
    link: "https://shopee.com.br/",
  },
];// deploy fix