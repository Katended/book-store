import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleStatus } from '../redux/categories/categoriesSlice';
import '../App.css';

const Categories = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categories.status);

  const handleClick = () => {
    dispatch(toggleStatus());
  };

  return (
    <div className="categories">
      <h1>{status}</h1>
      <button id="catButton" type="button" onClick={handleClick}>Toggle Status</button>
    </div>
  );
};
export default Categories;
