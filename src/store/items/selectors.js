import { createSelector } from 'reselect';

export const selectItems = (state) => state.items;
export const selectTipPercentage = (state) => state.tipPercentage;

export const selectItemQuantity = (selectItems) => selectItems.quantity;
export const selectItemPrice = (selectItems) => selectItems.price;

export const selectSubtotal = createSelector([selectItems], (items) =>
  items.reduce((sum, item) => sum + item.price * item.quantity, 0)
);

export const selectTipAmount = createSelector(
  [selectSubtotal, selectTipPercentage],
  (subtotal, tipPrecentage) => subtotal * (tipPrecentage / 100)
);

export const selectTotal = createSelector(
  [selectSubtotal, selectTipAmount],
  (subtotal, tipAmount) => subtotal + tipAmount
);

export const selectItemTotal = createSelector(
  [selectItemQuantity, selectItemPrice],
  (quantity, price) => quantity * price
);
