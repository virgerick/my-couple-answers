import { useRouter } from 'next/dist/client/router'
import React from 'react'

interface Props {

}

const Form = (props: Props) => {
    const router=useRouter()
    return (
        <div>
           {router.query.id}
        </div>
    )
}
export default Form