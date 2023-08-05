import { proxy } from "valtio";

interface StateType {
  clicked: number | null;
  urls: string[];
}
export const state = proxy<StateType>({
  clicked: null,
  urls: [
    "R0003160.jpg",
    "R0003154.jpg",
    "R0003146.jpg",
    "R0003105.jpg",
    "R0003084.jpg",
    "R0003064.jpg",
    "R0002941.jpg",
    "R0002911.jpg",
    "R0002894-1.jpg",
    "R0002803.jpg",
    "R0002738.jpg",
    "R0002714-2.jpg",
    "R0002310.jpg",
    "R0002295.jpg",
    "R0002084.jpg",
    "R0002080.jpg",
    "R0001670.jpg",
    "R0001584.jpg",
    "R0001224-2.jpg",
    "R0001223.jpg",
    "R0001186.jpg",
    "R0000988.jpg",
    "R0000952.jpg",
    ].map((u) => `/photos/${u}`),
});