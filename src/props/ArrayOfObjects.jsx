import React from 'react'

const ArrayOfObjects = () => {
    const data = [
        {
        phone: 8919577668,
        website: "ambrose.net",
        },
        {
            phone:775976679441206,
            website:'conrad.com'

        },
        {
        phone: 5864936943140,
        website: "jacynthe.com",
        }
    ]
  return (
    <div>
      <DataComponent data = {data}/>
    </div>
  )
}

const DataComponent = ({data}) =>{
    
    return(
        <section>
           {
            data.map((eachData) => {
                const {website, phone} = eachData
                return(
                    <div>
                        <h4>{website}</h4>
                        <h4>{phone}</h4>
                    </div>
                )
            })
           }
        </section>
    )

}

export default ArrayOfObjects
