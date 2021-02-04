const datamatematika = {
    tinggi : 0,
    panjang :0 ,
    lebar :0
   
   }
export const matematika = (state =datamatematika,action) =>{
   
       switch(action.type){
       case "SET_TINGGI":
       state = {
          ...state,
          tinggi : action.payload
       }
       break
       case "SET_PANJANG":
         state = {
           ...state,
           panjang : action.payload
        }
       break
       case "SET_LEBAR":
         state = {
           ...state,
           lebar : action.payload
        }
       break
       }
   
       return state
   }
   