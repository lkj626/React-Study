import useReactRouter from 'use-react-router';

function RouterHookSample(props) {
    const {history, location, match} = useReactRouter();
    console.log({history, location, match});
    return null;
}

export default RouterHookSample;