const dataAPI = {
    data :{}
 }
 
 export const reducerAPI = (state=dataAPI, action) =>{
 
    switch(action.type){
     case "SET_API_DATA":
       state = {
         ...state,
         data:action.payload
      }
     break
     }
     return state
    }
    
 
 
 