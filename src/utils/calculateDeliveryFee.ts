import { WeightFee, DistanceFee } from "../helpers/feeRates";

export function calculateDeliveryFee(product, distance) {
    const weightFee = WeightFee.ranges.filter(
      ({ min, max }) => product.weight >= min && product.weight < max
    );
    
    const pricePerKg = weightFee[0].rate == null ? -1 : weightFee[0].rate;
    const distanceFee = DistanceFee.perKm * distance;
    
    return {
        pricePerKg: pricePerKg,
        pricePerKm: distanceFee,
        total: parseFloat(product.price) + pricePerKg + distanceFee,
    }
  }