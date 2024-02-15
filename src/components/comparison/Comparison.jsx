
  
  
  
import React from "react";
import "../comparison/comparison.css";
import Button from '../button/Button';

const Comparison = () => {
  const linkText = [
    {id: 1, text: "Lorem ipsum dolor sit amet consectetur. Vitae elit lacus lobortis aenean diam."},
    {id: 2, text: "Lorem ipsum dolor sit amet consectetur."},
    {id: 3, text: "Lorem ipsum dolor sit amet consectetur. Vitae elit lacus lobortis aenean diam. Lorem ipsum dolor sit amet consectetur."},
    {id: 4, text: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur."},
    {id: 5, text: "Lorem ipsum dolor sit amet consectetur. "},
  ];
  const MyList = ({list}) => {
    return (
      <ul>
        <li>{list.text}</li>
      </ul>

    )
  }
  return (
    <section className="comparisonSection">
    <div className="comparison-container">
      <div className="text-container">

        <div className="title-container-why-different">
          <h1 className="title-why-different">Why Are We Different?</h1>
        

        </div>
        <div className="comparisonMainText">
          <p className="text-why-different">
          We bring emergent technologies of Artificial Intelligence, Machine Learning, and IoT to a new digital process of Making Buildings that makes traditional design & construction practice obsolete in comparison.  

​

That's Collegium.
          </p>
          <div className="comparisonButton">
            <Button label="Contact Us" />
          </div>
        </div>
      </div>
      
      <div className="white-container">

        <h3>Traditional Construction Management</h3>
        
          {linkText.map((list) => (
            <MyList key={list.id} list={list} />

          ))}
        
      </div>

      <div className="dark-container">

        <h3>Collegium Construction Management</h3>
        {linkText.map((list) => (
            <MyList key={list.id} list={list} />

          ))}
        
      </div>
    </div>
    </section>
  );
};

export default Comparison;
