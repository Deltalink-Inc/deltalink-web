export const WeightFee = {
  ranges: [
    { min: 0, max: 1, rate: 3 },
    { min: 1, max: 3, rate: 5 },
    { min: 3, max: 8, rate: 9 },
    { min: 8, max: 12, rate: 12 },
    { min: 12, max: Infinity, rate: null },
  ],
};
export const DistanceFee = {
  perKm: 0.5,
};


