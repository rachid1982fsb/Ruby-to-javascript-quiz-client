

export const logout =()=>{
    localStorage.removeItem('token');
    return {
        type: "LOGOUT",
        payload: {}
    }
}
export const onLogin =(data)=>{
    localStorage.setItem('token', data.jwt);
    return {
        type: "LOGIN",
        payload: data
    }
}

export const setSources =(source) =>{
    return{
        type: "GET_SOURCE",
        payload: source
    }
}

export const setTestCases =(testCases) =>{
    return{
        type: "GET_TEST_CASES",
        payload: testCases
    }
}

