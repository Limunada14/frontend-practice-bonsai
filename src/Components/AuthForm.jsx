import { Form, useSearchParams } from 'react-router-dom';

function AuthForm() {
  const [searchParams] = useSearchParams();
  const hasEmail = searchParams.get('email');

  console.log(hasEmail);

  return (
    <Form>
      <p>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" value={hasEmail ? hasEmail : ''} required />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" name="password" required />
      </p>
    </Form>
  );
}
export default AuthForm;
