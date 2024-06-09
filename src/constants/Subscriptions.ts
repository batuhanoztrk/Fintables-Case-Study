export const subscriptions: Subscription[] = [
  {
    name: "Pro",
    code: "pro",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    color: "#c7002f",
    price: 9.99,
  },
  {
    name: "Lite",
    code: "lite",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    color: "#d97706",
    price: 4.99,
  },
  {
    name: "Derinlik",
    code: "pd2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 4.99,
  },
  {
    name: "Aracı Kurum Dağılımı",
    code: "pite",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 4.99,
  },
];

type Subscription = {
  name: string;
  code: string;
  description: string;
  color?: string;
  price: number;
};
