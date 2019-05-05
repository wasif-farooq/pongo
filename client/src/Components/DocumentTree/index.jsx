import React from 'react';
import DocumentRoot from 'Components/DocumentRoot'

const DocumentTree = (props) => {

    const { documents } = props;

    return (
        <ul>
            {documents.map((document) => {
                return <DocumentRoot
                    key={document._id}
                    document={document}
                ></DocumentRoot>
            })}
        </ul>
    )
}

export default DocumentTree