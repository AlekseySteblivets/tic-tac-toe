import * as actions from './actions';

export const toggleModal = (value) => dispatch => {
    dispatch(actions.toggleModal(value));

}