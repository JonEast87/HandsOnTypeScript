// shorten Greeting that does not handle state and is a functional component instead which is best practice
// while have state control occur in App.tsx/it's parent

import React from 'react';

interface GreetingProps {
    message: string
}

export default function Greeting(props: GreetingProps) {
    console.log('rendering Greeting');

    return (<div>
        {props.message}
    </div>)
}