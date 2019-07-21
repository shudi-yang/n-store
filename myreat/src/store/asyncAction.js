//url params method data receipt typeName apiname id
import axios from 'axios';

export const asyncAction = ({
  url, params={}, method='get', data={}, receipt=false, typeName
}) => (dispatch,getState) => (
  axios({
    params, method, data,url
  }).then(
    res=>{
      console.log(res.data)
      dispatch({type:typeName,payload:res.data});
      if (receipt) return res.data.data
    }
  )
  
);