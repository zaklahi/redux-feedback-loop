import {useSelector, useDispatch} from 'react-redux';
import{useHistory} from 'react-router-dom';

const SupportPage = () => {
    const history = useHistory();
    // then we need useSelector and useDispatch
    const support = useSelector(store => store.suppport)
    const dispatch = useDispatch();




const handleChange = (event) => {
    // Pass the data to our reducer
    dispatch({ type: 'SET_SUPPORT', payload: event.target.value });
}



return (
    <>
        {/* <ProgressBar step={1} /> */}
        <h3>How Well Do You Feel Supported?</h3>
        <div>
            {/* Step 3: getter & setter */}
            <input value={support} onChange={handleChange} className="input" type="text" />
            <button onClick={() => history.push('/step/three')} className="button">Next</button>
        </div>
    </>
);
}

export default SupportPage;