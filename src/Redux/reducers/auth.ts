import { InitState } from "../../TSTypes/AuthReducerTypes";

const initState: InitState = {
  authenticated: false,
  isLoading: false,
  errors: {}
};

export default function(state, action) {
  if (!state) {
    state = initState;
  }
  switch (action.type) {
    default:
      return state;
  }
}
