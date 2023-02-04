import {useSelector, useDispatch} from 'react-redux';
import{useHistory} from 'react-router-dom';

const CommentsPage = () => {
    const history = useHistory();
    // then we need useSelector and useDispatch
    const comments = useSelector(store => store.comments)
    const dispatch = useDispatch();




const handleChange = (event) => {
    // Pass the data to our reducer
    dispatch({ type: 'SET_COMMENTS', payload: event.target.value });
}



return (
    <>
        {/* <ProgressBar step={1} /> */}
        <h3>Any Comments?</h3>
        <div>
            {/* Step 3: getter & setter */}
            <input value={comments} onChange={handleChange} className="input" type="text" />
            <button onClick={() => history.push('/step/four')} className="button">Next</button>
        </div>
    </>
);
}

export default CommentsPage;