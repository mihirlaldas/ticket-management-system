import { RAISE_TICKET, SEE_TICKETS } from "./ticketAction";

const initalState = {
  tickets: []
};

const ticketReducer = (state = initalState, action) => {
  switch (action.type) {
    case RAISE_TICKET:
      return {
        ...state,
        tickets: [...state.tickets, { ...action.payload }]
      };
    case SEE_TICKETS: {
      return state;
    }
    default:
      return state;
  }
};

export default ticketReducer;
