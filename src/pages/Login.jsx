/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-undef */
import { FormInput, SubmitBtn } from "../Components";
import { Form, Link, redirect } from 'react-router-dom';
import { customFetch } from '../utils';
import { toast } from 'react-toastify';
import { loginUser } from '../features/user/userSlice';
import { useDispatch } from 'react-redux';

export const action = 
(store) => 
    async ({request}) => {
        const formData = await request.formData();
        const data = Object.fromEntries(formData);

    try {
        const response = await customFetch.post('/auth/local', data);
        //console.log(response); you can check the user here!!
        store.dispatch(loginUser(response.data));
        toast.success('logged in succesfully');
        return redirect('/');
    } catch(error) {
        const errorMessage = error?.response?.data?.error?.message || 'please double check your credentials'
        toast.error(errorMessage);
        return null;
    }
};

const Login = () => {
    return (
        <section className="h-screen grid place-items-center">
            <Form method="post" className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4">
                <h4 className="text-center text-3xl font-bold">Login</h4>
                <FormInput type='email' label='email' name='identifier' defaultvalue='test@test.com' />
                <FormInput type='password' label='password' name='password' defaultvalue='secret' />
                <div className="mt-4">
                    <SubmitBtn text='Login' />
                </div>
                <button type="button" className="btn btn-secondry btn-block">
                    guest user
                </button>
                <p className="text-center">
                    Not a member yet? <Link to='/register' className="ml-2 link link-hover link-primary capitalize" >
                        register
                    </Link>
                </p>
            </Form>
        </section>
    )
}
export default Login