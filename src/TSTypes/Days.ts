export type MaxedDays = {
  id: string;
  limit: number;
  days: number[];
};

export type DocDays = {
  maxedDays: MaxedDays;
  pending: number[];
  confirmed: number[];
};

export type Days = {
  id: string;
  pto: DocDays;
  wfh: DocDays;
};
