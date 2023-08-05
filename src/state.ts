import { proxy } from "valtio";

interface StateType {
  clicked: number | null;
  urls: string[];
}
export const state = proxy<StateType>({
  clicked: null,
  urls: [
    "R0003160.webp",
    "R0003154.webp",
    "R0003146.webp",
    "R0003105.webp",
    "R0003084.webp",
    "R0003064.webp",
    "R0002941.webp",
    "R0002911.webp",
    "R0002894-1.webp",
    "R0002803.webp",
    "R0002738.webp",
    "R0002714-2.webp",
    "R0002310.webp",
    "R0002295.webp",
    "R0002084.webp",
    "R0002080.webp",
    "R0001670.webp",
    "R0001584.webp",
    "R0001224-2.webp",
    "R0001223.webp",
    "R0001186.webp",
    "R0000988.webp",
    "R0000952.webp",
    ].map((u) => `/photos/${u}`),
});