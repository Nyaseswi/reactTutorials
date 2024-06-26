import {useEffect} from 'react'

function UseTitleHook(count) {
    useEffect(() =>{
        document.title = `count:${count}`
       },[count]);
}

export default UseTitleHook
