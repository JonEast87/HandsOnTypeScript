import React, { FC, useEffect, useRef } from 'react';

// Interfaces that establish the value types needed for our ListItems
export interface ListItem {
    id: number;
}

export interface ListItems {
    listItems?: Array<ListItem>;
}

// Function Component for creating lists
const ListCreator: FC<ListItems> = ({listItems}:ListItems) => {6
    let renderItems = useRef<Array<JSX.Element> | undefined>();
    useEffect(() => {
       console.log('listItems updated');
       renderItems.current = listItems?.map((item: any, index: any) => {
           return <div key={item.id}>{item.id}</div>;
       });
    }, [listItems]);

    console.log('ListCreator render');
    return (
        <React.Fragment>
            {renderItems.current}
        </React.Fragment>
    );
}

export default ListCreator;