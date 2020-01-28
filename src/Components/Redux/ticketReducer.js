import { RAISE_TICKET, SEE_TICKETS } from "./ticketAction";

const initalState = {
  tickets: JSON.parse(localStorage.getItem("tickets"))
};

const ticketReducer = (state = initalState, action) => {
  switch (action.type) {
    case RAISE_TICKET:
      localStorage.setItem(
        "tickets",
        JSON.stringify([...state.tickets, { ...action.payload }])
      );
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
