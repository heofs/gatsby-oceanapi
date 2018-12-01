import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <div className="card login-container text-center mx-auto">
      <form className="login-form">
        <h1 className="h3 mb-3 font-weight-normal">Ocean API</h1>
        <label htmlFor="inputEmail" className="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="inputEmail"
          className="form-control mb-2"
          placeholder="Email address"
          required
          autoFocus
        />
        <label htmlFor="inputPassword" className="sr-only">
          Password
        </label>
        <input
          type="password"
          id="inputPassword"
          className="form-control mb-2"
          placeholder="Password"
          required
        />
        <div className="custom-control custom-checkbox mb-2">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
        <button className="btn btn-md btn-primary btn-block" type="submit">
          Sign in
        </button>
        <a href="https://ofstad.io/" className="btn btn-md btn-secondary btn-block">
          Back to Ofstad.io
        </a>
      </form>
    </div>
  </Layout>
)

export default IndexPage
