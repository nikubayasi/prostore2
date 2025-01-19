'use server';

import { signInFormSchema } from "../validators";
import { signIn,signOut} from '@/auth';
// import { isRedirectError } from 'next/dist/client/components/redirect';
import { redirect } from 'next/navigation';

// Sign in the user with credentials
export async function signInWithCredentials(prevState: unknown, formData: FormData) {
  try {
    const user = signInFormSchema.parse({
      email: formData.get('email'),
      password: formData.get('password')
    });

    const result = await signIn('credentials', {
      redirect: false, // リダイレクトを無効化
      ...user,
    });

    if (result?.error) {
      console.error('Sign-in failed:', result.error);
      return { success: false, message: 'Invalid Email or Password' };
    }

    return { success: true, message: 'Signed in successfully' };
  } catch (error) {
    console.error('Sign-in error:', error);
    return {success:false, message: 'Invalid Email of Password'}
  }
}
// Sign in the user with credentisals
// export async function signInWithCredentials(prevState: unknown,
// formData: FormData){
//   try{
//     const user = signInFormSchema.parse({
//       email: formData.get('email'),
//       password:formData.get('password')
//     });
//     await signIn('credentials',user);
//     return {success:true, message: 'Signed in successfully'}
//   }catch(error){
//     if(isRedirectError(error)){
//       throw error;
//     }
//     return {success:false, message: 'Invalid Email of Password'}
//   }
// }
// // Sign  user out

export async function signOutUser(){
  await signOut();
}