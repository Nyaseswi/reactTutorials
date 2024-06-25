import React from 'react';

const Title = () =>{
    console.log('title component')
return(
    <div>
        <h3>Use Call Back & React Memo</h3>
    </div>
)
}

export default React.memo(Title)