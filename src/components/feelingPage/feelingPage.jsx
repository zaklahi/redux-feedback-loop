import {useSelector, useDispatch} from 'react-redux';
import{useHistory} from 'react-router-dom';

const FeelingPage = () => {
    const history = useHistory();
    // then we need useSelector and useDispatch
    const feeling = useSelector(store => store.feeling)
    const dispatch = useDispatch();




const handleChange = (event) => {
    // Pass the data to our reducer
    dispatch({ type: 'SET_FEELING', payload: event.target.value });
}



return (
    <>
        {/* <ProgressBar step={1} /> */}
        <h3>How Are You Feeling?</h3>
        <div>
            {/* Step 3: getter & setter */}
            <input value={feeling} onChange={handleChange} className="input" type="text" />
            <button onClick={() => history.push('/step/two')} className="button">Next</button>
        </div>
    </>
);
}

export default FeelingPage;