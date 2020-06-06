import App from 'next/app';
import Head from 'next/head'
import React from 'react';
import { wrapper } from "../store";
import "./styles.css";

class MyApp extends App {
  render() {
    const { Component } = this.props;
    return (
      <>
        <Head>
          <title>Title</title>
        </Head>
        <Component />
      </>
    );
  }

}

export default wrapper.withRedux(MyApp);
