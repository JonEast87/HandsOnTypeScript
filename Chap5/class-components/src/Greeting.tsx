import React from 'react';
// utilizing interfaces for both Greeting prop and state for safe typing
interface GreetingProps {
    // optional entry for this interface to check for
    name?: string
}

interface GreetingState {
    message: string
}

export default class Greeting extends React.Component<GreetingProps, GreetingState> {
    constructor(props: GreetingProps) {
        super(props);
        this.state = {
            message: `Hello from, ${props.name}`
        }
    }

    render() {
        if (!this.props.name) {
            return <div>no name given</div>;
        }
        return <div>
            {this.state.message}
        </div>;
    }
}

