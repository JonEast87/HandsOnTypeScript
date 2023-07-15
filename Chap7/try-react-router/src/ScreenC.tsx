import React, {FC, useEffect} from 'react';
import { useNavigate, useParams } from "react-router-dom";

interface ScreenCProps {
    message: string;
    history: any;
    match: any;
}

// changed from object destructing to simply passing props to it to ensure you can access any value
const ScreenC: FC<ScreenCProps> = (props) => {
    // useEffect(() => {

    //     setTimeout(() => {
    //        props.history.push('/');
    //     }, 3000);
    // });

    const navigate = useNavigate();
    const { userid } = useParams();

    const onClickGoback = () => {
        // props.history.goBack();
        // cannot utilize useHistory hook for this version of React like the book asks for, replaced it with useNavigate
        navigate(-1);
    }


    return (<div>
                <div>{'Your id is ' + props.match.params.userid}</div>
                <div>{props.message}</div>
                <div>
                    <button onClick={onClickGoback}>Go back</button>
                </div>
            </div>);
};

export default ScreenC;