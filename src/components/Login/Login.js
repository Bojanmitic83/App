import React from "react";
import "./Style.css";

const Login= ({setUsername,setPassword,login})=>{
    return (
      <div className="login-pf-page" >
        <div id="kc-header" className="login-pf-page-header">
          <div id="kc-header-wrapper" className="">
            {" "}
            Avalon{" "}
          </div>{" "}
        </div>{" "}
        <div className="card-pf ">
          <header className="login-pf-header">
            <h1 id="kc-page-title"> Log In</h1>{" "}
          </header>{" "}
          <div id="kc-content">
            <div id="kc-content-wrapper">
              <div id="kc-form">
                <div id="kc-form-wrapper">
                  <form
                    id="kc-form-login"
                    onSubmit={login}
                    //onSubmit={login.disabled = true; return true};
                    action="https://identity.appmodule.net/auth/realms/Avalon/login-actions/authenticate?session_code=r8JJBvIl9vqelRTbDL9FOwaevaObKNl1kI_WyXJJrgA&amp;execution=8956abde-648a-4122-8e3b-4c1c9020a9a1&amp;client_id=tcs-client&amp;tab_id=j94CbqK52Gk"
                    method="post"
                  >
                    <div className="form-group">
                      <label className="control-label">
                        {" "}
                        Username or email{" "}
                      </label>

                      <input
                        tabIndex="1"
                        id="username"
                        className="form-control"
                        name="username"
                        
                        type="text"
                        autoFocus
                        autoComplete="off"
                        onChange={(e)=>{
                          setUsername(e.target.value)
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <label  className="control-label">
                        {" "}
                        Password{" "}
                      </label>{" "}
                      <input
                        tabIndex="2"
                        id="password"
                        className="form-control"
                        name="password"
                        type="password"
                        autoComplete="off"
                        onChange={(e)=>{
                          setPassword(e.target.value)
                        }}
                      />
                    </div>
                    <div className="form-group login-pf-settings">
                      <div id="kc-form-options"></div> <div className=""></div>
                    </div>
                    <div id="kc-form-buttons" className="form-group">
                      <input
                        tabIndex="4"
                        className="btn btn-primary btn-block btn-lg"
                        name="login"
                        id="kc-login"
                        type="submit"
                        value="Log In"
                        
                      />
                    </div>{" "}
                  </form>{" "}
                </div>{" "}
              </div>
            </div>{" "}
          </div>
        </div>{" "}
      </div>
    );
  }


export default Login;
