import { Check, X } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const pricing = [
    {
      imgUrl: "/bmi.jpg",
      title: "QUARTERLY",
      price: 6000,
      length: 3,
    },
    {
      imgUrl: "/bmi.jpg",
      title: "HEAL YEARLY",
      price: 10000,
      length: 6,
    },
    {
      imgUrl: "/bmi.jpg",
      title: "YEARLY",
      price: 16000,
      length: 12,
    },
  ];
  return (
    <section className="pricing">
      <h1>REBOUND FITNESS PLANS</h1>
      <div className="wrapper">
        {pricing.map((element) => {
          return (
            <div className="card" key={element.title}>
              <img src={element.imgUrl} alt={element.title} />
              <div className="title">
                <h1>{element.title}</h1>
                <h1>MEMBERSHIP</h1>
                <h3>Rs {element.price}</h3>
                <p>For {element.length} Months</p>
              </div>
              <div className="description">
                <p>
                  <Check /> Personal Training Sessions
                </p>
                <p>
                  <Check /> Group Fitness Classes
                </p>
                <p>
                  <Check /> Spa and Wellness Center Access
                </p>
                <p>
                  {element.price >= 10000 ? (
                    <Check size={24} />
                  ) : (
                    <X size={24} />
                  )}
                  Nutritional Counseling
                </p>
                <p>
                  {element.price >= 12000 ? (
                    <Check size={24} />
                  ) : (
                    <X size={24} />
                  )}
                  Access to Sports Facilities
                </p>
                <Link to={"/"}>Join Now</Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
