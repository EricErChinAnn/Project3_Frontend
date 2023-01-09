
import React, { useContext } from 'react';
import CustomerContext from "../../context/customers"

export default function Logout(props) {

    const customerContext = useContext(CustomerContext)


    const customerLogout = async () => {


        const result = await customerContext.logout();
        console.log(result);

    }



    return (

        <React.Fragment>
            <h1>Logout</h1>

            <div>
                <input type="submit" className="btn btn-primary" value="Logout" onClick={customerLogout} />
            </div>



        </React.Fragment>

    );
}
