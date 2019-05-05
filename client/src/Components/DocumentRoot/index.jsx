import React, { useState } from 'react';

const DocumentRoot = ({ document }) => {
    const [expand, setExpand] = useState(false)

    const toggle = () => {
        setExpand(!expand)
    }

    if (!expand) {
        return (
            <li>
                <span onClick={toggle}>+</span>
                <span>{'_id : ' + document._id}</span>
            </li>
        )
    }

    if (expand) {
        return (
            <li>
                <span onClick={toggle}>-</span>
            </li>
        )
    }
}

export default DocumentRoot