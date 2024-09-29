import { api } from "../../config/apiConfig";
import {
  FIND_PRODUCTS_REQUEST,
  FIND_PRODUCTS_SUCCESS,
  FIND_PRODUCTS_FAILURE,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
  FIND_PRODUCT_BY_ID_FAILURE,
  FIND_PRODUCTS_REQUEST_WITH_ADMIN,
  FIND_PRODUCTS_SUCCESS_WITH_ADMIN,
  FIND_PRODUCTS_FAILURE_WITH_ADMIN,
  CREATE_PRODUCTS_REQUEST
} from "./ActionType";

export const findProducts = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCTS_REQUEST });
  const {
    colors,
    sizes,
    minPrice,
    maxPrice,
    minDiscount,
    category,
    stock,
    sort,
    pageNumber,
    pageSize,
  } = reqData;

  const query = new URLSearchParams({
  color: colors || '',
  size: sizes || '',
  minPrice: minPrice || '',
  maxPrice: maxPrice || '',
  minDiscount: minDiscount || '',
  category: category || '',
  stock: stock || '',
  sort: sort || '',
  pageNumber: pageNumber || 1,
  pageSize: pageSize || 10,
  }).toString();
  console.log(query);
  try {
    const { data } = await api.get(`http://localhost:5454/api/products?${query}`);
    console.log("Product data", data);
    dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data });

  } catch (error) {
    dispatch({ type: FIND_PRODUCTS_FAILURE, payload: error.message });
  }
};

export const findProductsById = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });
  const productId  = reqData;
  try {
    const  {data}  = await api.get(`/api/products/id/${productId}`);
    dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message });
  }
};

export const findAdminProducts = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCTS_REQUEST_WITH_ADMIN });

  try {
    const { data } = await api.get(`http://localhost:5454/api/products`);
    console.log(data, "admin data");
    dispatch({ type: FIND_PRODUCTS_SUCCESS_WITH_ADMIN, payload: data });
  } catch (error) {
    dispatch({ type: FIND_PRODUCTS_FAILURE_WITH_ADMIN, payload: error.message });
  }
};


export const createProduct = (product) => async(dispatch) =>{
   try {
    dispatch({type: CREATE_PRODUCTS_REQUEST})
    const {data} = await api.post(`http://localhost:5454/api/admin/products`,product.data)
   } catch (error) {
    
   }
}

