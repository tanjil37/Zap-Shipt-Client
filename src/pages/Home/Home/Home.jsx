import React from "react";
import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import Reviews from "../Reviews/Reviews";
import Works from "../Works/Works";
import Services from "../Services/Services";

const reviewsPromise = fetch("/reviews.json").then((res) => res.json());

const Home = () => {
  return (
    <div className="space-y-[100px] ">
      <Banner />
      <section className="w-11/12 mx-auto ">
        <Works />
      </section>
      <section className="rounded-4xl mx-auto py-[100px] bg-secondary">
        <Services />
      </section>
      <Brands />
      <Reviews reviewsPromise={reviewsPromise}></Reviews>
    </div>
  );
};

export default Home;
