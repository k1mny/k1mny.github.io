import { proxy } from "valtio";

interface StateType {
  clicked: number | null;
  urls: string[];
}
export const state = proxy<StateType>({
  clicked: null,
  urls: ['R0000045'].map((u) => `/photos/${u}.jpg`),
});