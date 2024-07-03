import React from "react";
import Footer from "./Footer";
import { UserAction } from '../Store/IndexSlice';
import { useRef } from "react";
import { useDispatch} from "react-redux";


function LoginForm() {

  const userName = useRef('');
  const password = useRef('');

  const dispatch = useDispatch();

  function submitUser(e) {
    e.preventDefault();
    const pUserName = userName.current.value;
    const pPassword = password.current.value;
    userName.current.value = '';
    password.current.value = '';

    dispatch(UserAction.setIsUserAuthenticated({
      body: { "userName": pUserName, "password": pPassword }
    }))
  }

  return (
    <div className="bg-info">
      <div id="layoutAuthentication">
        <div id="layoutAuthentication_content">
          <main>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-5">
                  <div className="card shadow-lg border-0 rounded-lg mt-5">
                    <div className="card-header">
                      <h3 className="text-center font-weight-light my-4">
                        Login
                      </h3>
                    </div>
                    <div className="card-body">
                      <form onSubmit={submitUser}>
                        <div className="form-floating mb-3">
                          <input
                            className="form-control"
                            id="inputEmail"
                            type="email"
                            placeholder="name@example.com"
                            ref={userName}
                          />
                          <label htmlFor="inputEmail">Email address</label>
                        </div>
                        <div className="form-floating mb-3">
                          <input
                            className="form-control"
                            id="inputPassword"
                            type="password"
                            placeholder="Password"
                            ref={password}
                          />
                          <label htmlFor="inputPassword">Password</label>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                          <button className="btn btn-primary" type="submit">
                            Login
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        <div id="layoutAuthentication_footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
