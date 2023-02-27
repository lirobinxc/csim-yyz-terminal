export enum RecatGroup {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
  E = 'E',
  F = 'F',
  G = 'G',
}

export const RECAT_SPACING_DICT: {
  [key in RecatGroup]: { [key in RecatGroup]: number };
} = {
  A: {
    A: 0,
    B: 4,
    C: 5,
    D: 5,
    E: 6,
    F: 6,
    G: 8,
  },
  B: {
    A: 0,
    B: 3,
    C: 4,
    D: 4,
    E: 5,
    F: 5,
    G: 7,
  },
  C: {
    A: 0,
    B: 0,
    C: 0,
    D: 3,
    E: 3.5,
    F: 3.5,
    G: 6,
  },
  D: {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
    F: 0,
    G: 4,
  },
  E: {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
    F: 0,
    G: 4,
  },
  F: {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
    F: 0,
    G: 0,
  },
  G: {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
    F: 0,
    G: 0,
  },
};
