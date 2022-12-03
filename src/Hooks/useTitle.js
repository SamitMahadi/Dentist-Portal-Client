import { useEffect } from "react";

const useTitle = title=>{
    useEffect(()=>{
        document.title=`${title}-Dentist Portal`
    },[title])
};

export default useTitle;