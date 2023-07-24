import { oneOf } from "prop-types";
import { withinRow } from "../../hoc";

const newCondition = "new";
const usedCondition = "used";

function ProductCondition({ condition }) {
  return condition == newCondition ? "Neuf" : "Occasion";
}

ProductCondition.propTypes = {
  condition: oneOf([newCondition, usedCondition]),
};

const RowProductPrice = withinRow(ProductCondition);

export default RowProductPrice;
