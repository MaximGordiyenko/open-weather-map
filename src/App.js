import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FindCity from "./Components/FindCity";
import Search from "./Components/Search";
import axios from "axios";
import { getFailure, getStarted, getSuccess } from "./Redux/action";
import Chart from "./Components/Charts/Chart";

function App() {
  const data = useSelector(state => state);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('Kyiv');
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(getWeatherCast(search));
  };
  
  const getWeatherCast = (city) => {
    dispatch(getStarted());
    return dispatch => {
      axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&id=524901&appid=be61c03bfad1e0f8c8b51dcf39815798`)
        .then(res => {
          dispatch(getSuccess(res.data));
        })
        .catch(err => {
          dispatch(getFailure(err.message));
        });
    };
  };
  
  useEffect(() => {
    dispatch(getWeatherCast(search));
  }, [dispatch]);
  
  return (
    <div className="App">
      <Search search={search} setSearch={setSearch} handleSubmit={handleSubmit}/>
      {data.loading ? (<h2>Loading...</h2>) :
        data.error ? (<h2>City not found, error: <i>{data.error}</i></h2>) :
          <>
            <FindCity data={data}/>
            <Chart data={data}/>
          </>
      }
    </div>
  );
}

export default App;
