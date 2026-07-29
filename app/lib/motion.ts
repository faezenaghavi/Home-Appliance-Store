export const MOTION_EASE = [0.22, 1, 0.36, 1] as const;

export const SPLASH_MIN_MS = 900;
export const SPLASH_FADE_MS = 350;

/** Staggered enter — used by hero after splash */
export function heroEnter(delay = 0, duration = 0.85) {
  return {
    delay,
    duration,
    ease: MOTION_EASE,
  };
}

/** Hero / splash shared gray palette */
export const heroGray = {
  base: "#3a3a3a",
  gradient: "linear-gradient(to bottom right, #454545, #3d3d3d, #484440)",
  text: "#eceae6",
  textMuted: "#a8a4a0",
  label: "#a8a8a8",
  accent: "#808080",
};
