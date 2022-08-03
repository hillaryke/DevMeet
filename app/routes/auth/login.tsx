import PropTypes from "prop-types";
import { Form, Link } from "@remix-run/react";
import { Fragment } from "react";

// import { connect } from "react-redux";
// import { Link, Redirect, withRouter } from "react-router-dom";

// import { loginUser } from "../../actions/auth";

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
         <h1 className="large text-primary">Sign In</h1>
         <p className="lead"><i className="fas fa-user"/> Sign into Your Account</p>
         <Form className="form">
            <div className="form-group">
               <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  disabled={false}
               />
            </div>
            <div className="form-group">
               <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  minLength={6}
                  disabled={false}
               />
            </div>
            <input type="submit" className="btn btn-primary" value="Login"/>
         </Form>
         <p className="my-1">
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
