import './OrderHistoryPage.css'
import { checkToken } from '../../utilities/users-service'


export default function OrderHistoryPage(){

    async function handleCheckToken(){
        try {
            const expDate = await checkToken()
            console.log(expDate)
        } catch(err){
            alert("did not work")
        }
        

    }
    return(
        <>
        <h1>OrderHistoryPage</h1>
        <button onClick={ handleCheckToken }>Check When My Login Expires</button>
        </>
        
    )
}