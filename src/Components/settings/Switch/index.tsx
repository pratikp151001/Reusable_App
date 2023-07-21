import React from 'react'
import './index.css'

export default function index(props: any) {
    const { checked, handleStatusChange, id } = props
    return (
        <>

            <label className="switch">
                {checked == `Enable` ?
                    <input type="checkbox" defaultChecked={true} onClick={(e) => { handleStatusChange(e, id) }} /> :
                    <input type="checkbox" defaultChecked={false} onClick={(e) => {
                        handleStatusChange(e, id)
                    }
                    } />
                }
                <span className="slider round" ></span>
            </label>
        </>
    )
}
