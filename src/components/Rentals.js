import React from "react";
import house1 from "../assets/house1.jpg";
import house2 from "../assets/house2.jpg";
import house3 from "../assets/house3.jpg";
import Rental from "./Rental";

const Rentals = () => {
  const rentals = [
    {
      title: "Hidden Haven - 5 Bed Villa with pool & Sea Views",
      image: house1,
      location: "Texas, USA",
      date: "Jan 28 - Aug 9",
      price: "1,541",
    },
    {
      title: "Hidden Haven - 5 Bed Villa with pool & Sea Views",
      image: house2,
      location: "Regensi 2, Indonesia",
      date: "Jan 28 - Aug 9",
      price: "1,541",
      },
    {
      title: "Hidden Haven - 5 Bed Villa with pool & Sea Views",
      image: house3,
      location: "Gramapuri, Indonesia",
      date: "Jan 28 - Aug 9",
      price: "1,541",
      },
    {
      title: "Hidden Haven - 5 Bed Villa with pool & Sea Views",
      image: house1,
      location: "Texas, USA",
      date: "Jan 28 - Aug 9",
      price: "1,541",
    },
    {
      title: "Hidden Haven - 5 Bed Villa with pool & Sea Views",
      image: house2,
      location: "Regensi 2, Indonesia",
      date: "Jan 28 - Aug 9",
      price: "1,541",
      },
    {
      title: "Hidden Haven - 5 Bed Villa with pool & Sea Views",
      image: house3,
      location: "Gramapuri, Indonesia",
      date: "Jan 28 - Aug 9",
      price: "1,541",
      },
    {
      title: "Hidden Haven - 5 Bed Villa with pool & Sea Views",
      image: house1,
      location: "Texas, USA",
      date: "Jan 28 - Aug 9",
      price: "1,541",
    },
    {
      title: "Hidden Haven - 5 Bed Villa with pool & Sea Views",
      image: house2,
      location: "Regensi 2, Indonesia",
      date: "Jan 28 - Aug 9",
      price: "1,541",
      },
    {
      title: "Hidden Haven - 5 Bed Villa with pool & Sea Views",
      image: house3,
      location: "Gramapuri, Indonesia",
      date: "Jan 28 - Aug 9",
      price: "1,541",
      },
    {
      title: "Hidden Haven - 5 Bed Villa with pool & Sea Views",
      image: house1,
      location: "Texas, USA",
      date: "Jan 28 - Aug 9",
      price: "1,541",
    },
    {
      title: "Hidden Haven - 5 Bed Villa with pool & Sea Views",
      image: house2,
      location: "Regensi 2, Indonesia",
      date: "Jan 28 - Aug 9",
      price: "1,541",
      },
    {
      title: "Hidden Haven - 5 Bed Villa with pool & Sea Views",
      image: house3,
      location: "Gramapuri, Indonesia",
      date: "Jan 28 - Aug 9",
      price: "1,541",
      },
    {
      title: "Hidden Haven - 5 Bed Villa with pool & Sea Views",
      image: house1,
      location: "Texas, USA",
      date: "Jan 28 - Aug 9",
      price: "1,541",
    },
    {
      title: "Hidden Haven - 5 Bed Villa with pool & Sea Views",
      image: house2,
      location: "Regensi 2, Indonesia",
      date: "Jan 28 - Aug 9",
      price: "1,541",
      },
    {
      title: "Hidden Haven - 5 Bed Villa with pool & Sea Views",
      image: house3,
      location: "Gramapuri, Indonesia",
      date: "Jan 28 - Aug 9",
      price: "1,541",
      },
    {
      title: "Hidden Haven - 5 Bed Villa with pool & Sea Views",
      image: house1,
      location: "Texas, USA",
      date: "Jan 28 - Aug 9",
      price: "1,541",
    },
    {
      title: "Hidden Haven - 5 Bed Villa with pool & Sea Views",
      image: house2,
      location: "Regensi 2, Indonesia",
      date: "Jan 28 - Aug 9",
      price: "1,541",
      },
    {
      title: "Hidden Haven - 5 Bed Villa with pool & Sea Views",
      image: house3,
      location: "Gramapuri, Indonesia",
      date: "Jan 28 - Aug 9",
      price: "1,541",
      },
  ];
  return (
    <div className="py-3 sm:py-5">
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {rentals.map((rental) => (
          <Rental
            title={rental.title}
            image={rental.image}
            location={rental.location}
            date={rental.date}
            price={rental.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Rentals;
