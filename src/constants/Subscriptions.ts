export const Subscriptions: Subscription[] = [
  {
    name: "Pro",
    code: "pro",
    description: "The complete package",
    color: "#c7002f",
  },
  {
    name: "Lite",
    code: "lite",
    description: "The basics",
    color: "#d97706",
  },
  {
    name: "Derinlik",
    code: "pd2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    name: "Aracı Kurum Dağılımı",
    code: "pite",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

type Subscription = {
  name: string;
  code: string;
  description: string;
  color?: string;
};
