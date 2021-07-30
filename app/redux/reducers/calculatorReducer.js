import actionTypes from '../actions';

const initialState = {
    input1: 0,
    input2: 0,
    output: 0,
};

const calculatorReducer = (state = initialState,action) => {
    switch (action.type) {
        case actionTypes.sum:{
            // console.log('in sum',action);
            const {input1,input2} = action.payload;
            const output = input1 + input2;
            return {
                ...state,
                input1,
                input2,
                output
            };
        }
        case actionTypes.division:{
         const {input1,input2} = action.payload;
            const output = input1 / input2;
            return {
                ...state,
                input1,
                input2,
                output
            };
        }
        case actionTypes.subtract:{
         const {input1,input2} = action.payload;
            const output = input1 - input2;
            return {
                ...state,
                input1,
                input2,
                output
            };
        }
    
        case actionTypes.multiply:{
         const {input1,input2} = action.payload;
            const output = input1 * input2;
            return {
                ...state,
                input1,
                input2,
                output
            };
        }

        case actionTypes.clear:{
         const {input1,input2} = action.payload;
            const output = input1 + input2;
            return {
                ...state,
                input1,
                input2,
                output
            };
        }

        case actionTypes.modulus:{
         const {input1,input2} = action.payload;
            const output = input1 % input2;
            return {
                ...state,
                input1,
                input2,
                output
            };
        }

        default:
            return state;
     
    }
};

export default calculatorReducer;