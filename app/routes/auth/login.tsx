import PropTypes from "prop-types";
import { Form, Link } from "@remix-run/react";
import { Fragment } from "react";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";

import { getSession, commitSession } from "~/session";
import { json, redirect } from "@remix-run/node";

// import { connect } from "react-redux";
// import { Link, Redirect, withRouter } from "react-router-dom";

// import { loginUser } from "../../actions/auth";

// export const loader: LoaderFunction = async ({ request }) => {
//    const session = await getSession(
//       request.headers.get("Cookie")
//    );
//
//    if (session.has("userId")) {
//       return redirect("/dashboard");
//    }
//    ;
//
//    const data = { error: session.get("error") };
//
//    return json(data, {
//       headers: {
//          "Set-Cookie": await commitSession(session),
//       }
//    });
// };
//
// export const action: ActionFunction = async ({ request }) => {
//    const session = await getSession(
//       request.headers.get("Cookie")
//    );
//    const form = await request.formData();
//    const email = form.get("email");
//    const password = form.get("password");
//
//    const userId = await validateCredentials(email, password);
//
//    if (userId == null) {
//       session.flash("error", "Invalid username or password");
//
//       // Redirect back to the login page with errors
//       return redirect("/auth/login", {
//          headers: {
//             "Set-Cookie": await commitSession(session),
//          }
//       });
//    }
//
//    session.set("userId", userId);
//
//    return redirect("/dashboard", {
//       headers: {
//          "Set-Cookie": await commitSession(session),
//       }
//    });
// };

// const Login = ( { loginUser, isAuthenticated, submitting } ) => {
//    const [formData, setFormData] = useState({
//       email: '',
//       password: ''
//    });
//
//    const { email, password } = formData;
//
//    const onInputChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
//
//    const onFormSubmit = event => {
//       event.preventDefault();
//
//       loginUser(email, password);
//    };
//
//    // Redirect if logged in
//    if (isAuthenticated) {
//       return <Redirect to="/dashboard"/>;
//    }

export default function Login() {
   return (
      <Fragment>
         <h1>Sign In</h1>
         <p className="lead"><i className="fas fa-user"/> Sign into Your Account</p>
         <Form method="post">
            <div>
               <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  disabled={false}
               />
            </div>
            <div>
               <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  minLength={6}
                  disabled={false}
               />
            </div>
            <input type="submit" value="Login"/>
         </Form>
         <p>
            Don't have an account? <Link to="/register">Sign Up</Link>
         </p>
      </Fragment>
   );
};

// Login.propTypes = {
//    loginUser: PropTypes.func.isRequired,
//    isAuthenticated: PropTypes.bool,
//    submitting: PropTypes.bool,
// };
//
// const mapStateToProps = state => ( {
//    isAuthenticated: state.auth.isAuthenticated,
//    submitting: state.auth.submitting
// } );
//
// export default connect(mapStateToProps, { loginUser })(withRouter(Login));
