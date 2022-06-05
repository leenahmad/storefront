import axios from 'axios';


let initialState = {
  categories: [],
  activeCategory: '',
  categoryDescription: '',
}
let newCategory;
let newDescription;

export default function CategoriesReducer(state = initialState, action) {
  let { type, payload } = action;

  switch(type) {

    case "LOAD_CATEGORIES":
      return {
        categories: payload.results,
        activeCategory: payload.results[0].name,
        categoryDescription: payload.results[0].description
      };

    case "SELECT_CATEGORY":

      newCategory = payload.name;
      newDescription = payload.description

      return { categories: state.categories, activeCategory: newCategory, categoryDescription: newDescription };
      
    default:
      return state;
  }

}

export function selectCategory(name) {

  return {
    type: "SELECT_CATEGORY",
    payload: name,
  }
}

export const loadCategories = () => (dispatch, getState) => {
  return axios.get('https://api-js401.herokuapp.com/api/v1/categories')
    .then(response => {
      dispatch({
        type: "LOAD_CATEGORIES",
        payload: response.data
      });
    });
}