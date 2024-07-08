import { keyboard } from '@testing-library/user-event/dist/keyboard';
import React, { Component } from 'react';

const Item = ({name}) =>{
    return (
        <span>{name}</span>
    )
  

}


class AddItem extends Component{
    state = {
        items: []
    }
    add = e => {
        if( e.keyCode === 13){
            this.setState({
                items:[
                    ...this.state.items,
                    {
                        name: e.target.value,
                        id: new Date().getTime()
                    }
                ]
            })
            e.target.value = ''
        }
    }
    render(){
        return(
           <React.Fragment>
            <input placeholder='Add item' onKeyUp={this.add}/>
            <div>
                <Item name='iceCream'/>
                <Item name='chocolates'/>
                {
                        this.state.items.map((i) => {
                            const { name, id } = i;
                            return <Item name={name} key={id} />;
                        })
                    }
            </div>
           </React.Fragment>
        )
    }
}

export default AddItem