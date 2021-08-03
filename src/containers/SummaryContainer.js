import { connect } from 'react-redux';
import { Summary } from '../components/Summary';
import {
  selectSubtotal,
  selectTipAmount,
  selectTotal
} from '../store/items/selectors';

const mapDispatchToProps = (state) => {
  let subtotal = selectSubtotal(state);
  let tipAmount = selectTipAmount(state);
  let total = selectTotal(state);
  console.log(subtotal, tipAmount, total);
  return {
    subtotal,
    tipAmount,
    total
  };
};

export const SummaryContainer = connect(mapDispatchToProps)(Summary);
