import { oneOf } from "prop-types";

const newCondition = "new";
const usedCondition = "used";

/**
 * ProductCondition
 *
 * pas de HOC ici, il sera utilisé à l'usage de ProductCondition
 */
export default function ProductCondition({ condition }) {
  return condition == newCondition ? "Neuf" : "Occasion";
}

ProductCondition.propTypes = {
  condition: oneOf([newCondition, usedCondition]),
};
