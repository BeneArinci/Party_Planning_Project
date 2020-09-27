import React from 'react';

const LogIn = ({onRouteChange}) => {
  return (
    <article className="br2 ba dark-gray b--black-10 shadow-2 mv4 w-100 w-50-m w-25-l mw5 center" data-testid = "log-in-form">
      <main className="pa4 black-80">
        <div className="measure center">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0">Log In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="username">Username</label>
              <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" id="user-id"/>
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" id="password"/>
            </div>
          </fieldset>
          <div className="">
            <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
              type="submit" 
              value="Login"
            />
          </div>
          <div className="lh-copy mt3">
            <p
              href="#0" 
              className="f6 link dim black db pointer"
              > Register</p>
          </div>
          <div className="lh-copy mt3">
            <p
              href="#0" 
              className="f6 link dim black db pointer"
              onClick={ () => onRouteChange("Home")}
              > Back</p>
          </div>
        </div>
      </main>
    </article>
  );
}

export default LogIn;