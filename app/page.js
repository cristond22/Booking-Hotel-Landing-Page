"use client";
import { Link, Element } from "react-scroll";

//import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage.jsx";
import Newsletter from './components/Newsletter.jsx';
import Header from './components/Header.jsx';
import BookNow from "./components/Booknow.jsx";

export default function Home() {
  return (
    <>
      <Header />
      <BookNow />
      <Homepage />
      <Newsletter />
    </>
  );
}
