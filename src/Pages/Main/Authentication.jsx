import AuthForm from '../../Components/AuthForm';

function Authentication() {
  return <AuthForm></AuthForm>;
}
export default Authentication;

// export async function action({ request }) {
//   const searchParams = new URL(request.url).searchParams;
//   const mode = searchParams.get('mode') || 'login'

//   const data = await request.formData();
//   const authData = {
//     email: data.get('email'),
//     password: data.get('password'),
//   };
// }
