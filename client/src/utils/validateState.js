/*
returns the passed state if definded,
noState if !state and noState is defined,
a smiley face if all passed params are !defined
*/
const validateState = (state, noState) =>{
    return state ? state : noState ? noState : ':)';
};

export default validateState;