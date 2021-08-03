import { connect } from 'react-redux';
import {
  removeItem,
  updatePrice,
  updateQuantity
} from '../store/items/actions';
import { MenuItem } from '../components/MenuItem';
import { selectItemTotal } from '../store/items/selectors';

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    remove: () => dispatch(removeItem(ownProps.uuid)),
    updatePrice: (price) => dispatch(updatePrice(ownProps.uuid, price)),
    updateQuantity: (quantity) =>
      dispatch(updateQuantity(ownProps.uuid, quantity)),
    total: selectItemTotal(ownProps)
  };
};

export const MenuItemContainer = connect(null, mapDispatchToProps)(MenuItem);
