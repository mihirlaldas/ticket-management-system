export const RAISE_TICKET = "RAISE_TICKET";
export const SEE_TICKETS = "SEE_TICKETS";
export const raiseTicket = (name, content, owner) => {
  return {
    type: RAISE_TICKET,
    payload: { name: name, content: content, owner: owner, isOpen: true }
  };
};

export const seeTickets = () => {
  return {
    type: SEE_TICKETS
  };
};
export default { RAISE_TICKET, raiseTicket, SEE_TICKETS, seeTickets };
