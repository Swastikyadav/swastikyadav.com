import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Link from 'gatsby-link';

function Learn() {
  return(
    <Layout>
      <SEO title="Learn in public" />
      <p>This is where I document all my learnings. Topics that I wrote about are checked.</p>
      <h2>JavaScript (Language of the web)</h2>
      <ul className="learn-list">
        <li><input type="checkbox" disabled />Variables, Data Types and Operators</li>
        <li><input type="checkbox" checked disabled /><Link to="/statements-and-expressions">Program Structure, Expression / Statement</Link></li>
        <li><input type="checkbox" checked disabled /><Link to="/js-scopes-and-hoisting">JS Scopes and Hoisting</Link></li>
        <li><input type="checkbox" disabled />Functions - Higher Order functions</li>
        <li><input type="checkbox" disabled />Functions 2 - Recursion, Closures</li>
        <li><input type="checkbox" disabled />Objects and Arrays in detail</li>
        <li><input type="checkbox" disabled />Difference b/w for...in loop and for...of loop</li>
        <li><input type="checkbox" disabled />Object oriented JavaScript - Classes, Inheritance and prototype</li>
        <li><input type="checkbox" checked disabled /><Link to="/async-javascript">Asynchronous JavaScript - Callbacks, Promises, Async/Await</Link></li>
        <li><input type="checkbox" disabled />Network Requests - Xhr Http request, fetch</li>
        <li><input type="checkbox" disabled />Execution Context - The brain of JavaScript</li>
        <li><input type="checkbox" disabled />ES6+</li>
      </ul>
      <h2>DOM (document object model)</h2>
      <ul className="learn-list">
        <li><input type="checkbox" disabled />Events - Bubbling and capturing, Event delegation</li>
        <li><input type="checkbox" disabled />Mouse Event - mouseover/out, mouseenter/leave, and Scrolling</li>
        <li><input type="checkbox" disabled />Drag and Drop</li>
        <li><input type="checkbox" disabled />Event loop - Microtask and macrotask</li>
      </ul>
      <h2>ReactJS (A JavaScript library)</h2>
      <ul className="learn-list">
        <li><input type="checkbox" disabled />JSX and Rendering Elements</li>
        <li><input type="checkbox" disabled />Compnents, Props and State</li>
        <li><input type="checkbox" disabled />Component LifeCycle</li>
        <li><input type="checkbox" disabled />Controlled and Uncontrolled component</li>
        <li><input type="checkbox" disabled />Code Splitting</li>
        <li><input type="checkbox" disabled />Context API</li>
        <li><input type="checkbox" disabled />Error Boundries</li>
        <li><input type="checkbox" disabled />Higher order component</li>
        <li><input type="checkbox" disabled />Reconciliation</li>
        <li><input type="checkbox" disabled />Static TypeChecking and TypeChecking with PropTypes</li>
        <li><input type="checkbox" disabled />React Hooks - useState, useEffect, useRef, useContext, useReducer</li>
        <li><input type="checkbox" disabled />Build your custom Hooks</li>
      </ul>
      <h2>NodeJS / ExpressJS (JavaScript run time environment)</h2>
      <ul className="learn-list">
        <li><input type="checkbox" disabled />NodeJS Basics</li>
        <li><input type="checkbox" disabled />Reading and Writting a file.</li>
        <li><input type="checkbox" disabled />Creating a server with http module</li>
        <li><input type="checkbox" disabled />Intro to ExpressJS</li>
        <li><input type="checkbox" disabled />ExpressJS - Routing</li>
        <li><input type="checkbox" disabled />Writting and using Middleware</li>
        <li><input type="checkbox" disabled />Express API</li>
        <li><input type="checkbox" disabled />Error Handling</li>
        <li><input type="checkbox" disabled />MVC structure in Express app and using Async/Await</li>
        <li><input type="checkbox" disabled />EJS - Template Engine</li>
        <li><input type="checkbox" disabled />Building a server side CRUD app with NodeJS and Express</li>
        <li><input type="checkbox" disabled />Basic authentication with passportJS</li>
        <li><input type="checkbox" disabled />Third party authentication</li>
        <li><input type="checkbox" disabled />Real time features with socket.io</li>
      </ul>
      <h2>Ruby (Programmer's best friend)</h2>
      <ul className="learn-list">
        <li><input type="checkbox" checked disabled /><Link to="/intro-ruby">Intro to Ruby: DataTypes and Variables</Link></li>
        <li><input type="checkbox" checked disabled /><Link to="/ruby-control-flow">Control Flow in Ruby</Link></li>
        <li><input type="checkbox" checked disabled /><Link to="/ruby-loops-iterators">Loops and iterators</Link></li>
        <li><input type="checkbox" disabled />Arrays and Hashes</li>
        <li><input type="checkbox" disabled />Methods, Blocks and Sorting</li>
        <li><input type="checkbox" disabled />Blocks, Procs, and Lambdas</li>
        <li><input type="checkbox" disabled />Object oriented programming with Ruby</li>
      </ul>
      <h2>Ruby On Rails (Framework to build faster apps based on Ruby)</h2>
      <ul className="learn-list">
        <li><input type="checkbox" disabled />Active Record - Modles</li>
        <li><input type="checkbox" disabled />Active Record - Migration, Validation and Callbacks</li>
        <li><input type="checkbox" disabled />Action Controller</li>
        <li><input type="checkbox" disabled />All about rails routing</li>
        <li><input type="checkbox" disabled />The Asset pipeline</li>
        <li><input type="checkbox" disabled />Working with JavaScript in rails</li>
        <li><input type="checkbox" disabled />Testing Rails application</li>
        <li><input type="checkbox" disabled />Building a CRUD API in rails</li>
        <li><input type="checkbox" disabled />Action Mailer Basics</li>
        <li><input type="checkbox" disabled />Active Storage</li>
        <li><input type="checkbox" disabled />Action Cable</li>
        <li><input type="checkbox" disabled />Basic session based authentication in rails app</li>
        <li><input type="checkbox" disabled />Using Devise to manage authentication</li>
        <li><input type="checkbox" disabled />Third party authentication with OmniAuth</li>
      </ul>
      <h2>New Technologies</h2>
      <ul className="learn-list">
        <li><input type="checkbox" disabled />GatsbyJS</li>
        <li><input type="checkbox" disabled />GraphQL</li>
      </ul>
      <h2>Algorithm</h2>
      <ul className="learn-list">
        <li><input type="checkbox" disabled />Intro to Algorithm</li>
        <li><input type="checkbox" disabled />Binary Search</li>
        <li><input type="checkbox" disabled />Asymptotic Notation</li>
        <li><input type="checkbox" disabled />Selection Sort</li>
        <li><input type="checkbox" disabled />Insertion Sort</li>
        <li><input type="checkbox" disabled />Recursive Algorithm</li>
        <li><input type="checkbox" disabled />Merge sort</li>
        <li><input type="checkbox" disabled />Quick sort</li>
        <li><input type="checkbox" disabled />Graph representation</li>
      </ul>
    </Layout>
  );
}

export default Learn;