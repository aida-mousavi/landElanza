import React, {useEffect} from 'react';
import axios from "axios";

async function FetchAllData() {

        const data=await axios.get('http://localhost:8000/users').then((res)=> res).then(result => result.data)
        console.log(data)
}

export default FetchAllData;