export const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_ELEMENTS":
      return {
        ...state,
        productDetails: [],
        totalNumOfProducts: 0,
        totalPriceOfProducts: 0,
      };

    case "REMOVE_ELEMENT":
      // NOT COMPLETED
      state.productDetails = state.productDetails.filter(
        (productDetailsItem) => {
          if (productDetailsItem.id === action.id) {
            state.totalNumOfProducts -= productDetailsItem.amount;
            state.totalPriceOfProducts -=
              productDetailsItem.price * productDetailsItem.amount;
          }
          return productDetailsItem.id !== action.id;
        }
      );
      return { ...state };

    case "INCREASE_QUANTITY": {
      if (state.totalNumOfProducts < 50) {
        for (
          let counter = 0;
          counter < state.productDetails.length;
          counter++
        ) {
          if (state.productDetails[counter].id === action.id) {
            state.productDetails[counter].amount++;
            state.totalNumOfProducts++;
            state.totalPriceOfProducts += state.productDetails[counter].price;
          }
        }
      }
      return { ...state };
    }

    case "DECREASE_QUANTITY": {
      for (let counter = 0; counter < state.productDetails.length; counter++) {
        if (state.productDetails[counter].id === action.id) {
          if (state.productDetails[counter].amount > 0) {
            state.productDetails[counter].amount--;
            state.totalNumOfProducts--;
            state.totalPriceOfProducts -= state.productDetails[counter].price;
          }
        }
      }
      return { ...state };
    }

    default:
      throw new Error("NO MATCHING CASE FOR ACTION");
  }
};
