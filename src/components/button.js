import React from 'react'

const button = ({option}) => {
    return (
        <div>
            <label>
                Select: 
                <select>
                    <option value="strom">Severe Storm</option>
                    <option value="fires">Wild Fires</option>
                </select>
            </label>

        </div>
    )
}

export default button
