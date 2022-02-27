export type CounterState = {
  counter: number;
  projectName: string;
};

export const initialState: CounterState = {
  counter: 0,
  projectName: 'Counter using NgRX',
};
