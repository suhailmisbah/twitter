const counterReducer = (state = '', action) => {

    if(action.type === 'insert'){
        
        let obj = {caption: action.caption, url: action.url}
        localStorage.setItem('myData', JSON.stringify(obj));
    }
     return null
}

export default counterReducer;