import { oneOf, shape } from "prop-types";

const newCondition = "new";
const usedCondition = "used";

export default function ProductCondition({ row }) {
  return row.condition == newCondition ? "Neuf" : "Occasion";
}

ProductCondition.propTypes = {
  row: shape({
    condition: oneOf(newCondition, usedCondition),
  }),
};
