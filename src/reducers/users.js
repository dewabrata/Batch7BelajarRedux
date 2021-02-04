const datacontoh = {
    nilai :5,
    username:"Bagus Eka"

}

export const users = (state=datacontoh,action)=>{

  switch(action.type){
  
  case "SET_USERNAME":
    state ={
    ...state,
    username : action.payload
    
    }
    break
  case "SET_NILAI":
  state ={
  ...state,
  nilai : action.payload
  }
  
  break
  }
   return state;

}