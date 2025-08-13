import axios from "axios";
const API_URL = 'https://4b274847af2c.ngrok-free.app/api';

export const loginApi = async (email, password) =>{
    try{
        const response = await axios.post(`${API_URL}/auth/login`, {
            email,
            password
        });
        if(!response.data.Message){
            console.log('false');
        }
        else{
            console.log('true');
        }
    }

    catch (err){
        console.log(err);
        throw err;
    }
};

export const registerApi = async (name, email, password, confirmPassword) =>{
    try{
        const response = await axios.post(`${API_URL}/auth/register`, {
            name,
            email,
            password,
            confirmPassword
        });
        if(!response.data.success){
            console.log(response.data.message);
        }
        else{
            console.log(response.data.message);
        }
    }
    catch(err){
        console.log(err);
        throw err;
    }
}

export const testApi = async () => {
    try {
        const response = await axios.get(`${API_URL.replace('/api', '')}/api/auth/test`);
        console.log('API está funcionando:', response.data);
        return true;
    } catch (err) {
        console.error('API não está respondendo:', err.message);
        return false;
    }
};