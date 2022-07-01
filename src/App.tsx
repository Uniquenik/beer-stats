import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootReducer} from "./redux/store";
import {loadBeersRequest} from "./redux/beers-state/beers-action-creators";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MyProducts from "./components/myProducts";
import Statictics from "./components/statictics";
import JsonForm from "./components/jsonForm";
import Navigation from "./layouts/navigation";


function App() {

  const dispatch = useDispatch()
  const {beers} = useSelector((state:RootReducer) => state.beers)

  useEffect(() => {
    dispatch(loadBeersRequest())

  },[])



  return (
    <BrowserRouter>
      <Navigation>
        <Routes>
          <Route path={'/products'} element={<MyProducts/>}/>
          <Route path={'/'} element={<Statictics/>}/>
          <Route path={'/form'} element={<JsonForm/>}/>
        </Routes>
      </Navigation>
    </BrowserRouter>
  );
}

export default App;
