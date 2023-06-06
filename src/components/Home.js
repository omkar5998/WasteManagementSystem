import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/home.css";
import blog1 from "../images/blog1.jpg";
import blog2 from "../images/blog2.jpg";
import blog3 from "../images/blog3.jpg";
import mumimg from "../images/Mumbai.jpg";
import puneimg from "../images/pune.png";
import hydimg from "../images/hyderbad.jpg";
import bangimg from "../images/banglore.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Home() {

  const imageData = [
    {
      label: "Improper e-waste dismantling results in a severe decline of bird diversity",
      alt: "Improper e-waste dismantling results in a severe decline of bird diversity",
      url:
        "https://cdn.pixabay.com/photo/2018/04/04/11/39/safety-net-3289548_1280.jpg"
    },
    {
      label: "Recycle and Dispose of E-Waste Properly",
      alt: "Recycle and Dispose of E-Waste Properly",
      url:
        "https://cdn.pixabay.com/photo/2019/07/14/16/06/park-4337477_1280.jpg"
    },
    {
      label: "Factory waste can develop diseases such as asthma, birth defects, cancer, cardiovascular disease, childhood cancer, COPD, infectious diseases, low birth weight, and preterm delivery",
      alt: "Factory waste can develop diseases such as asthma, birth defects, cancer, cardiovascular disease, childhood cancer, COPD, infectious diseases, low birth weight, and preterm delivery",
      url: "https://cdn.pixabay.com/photo/2019/04/30/16/19/pxclimateaction-4168906_1280.jpg"
    },
    {
      label: "Toxic compounds in the effluent disrupt aquatic ecosystems. When a large amount of biodegradable substances end up in the water",
      alt: "Toxic compounds in the effluent disrupt aquatic ecosystems. When a large amount of biodegradable substances end up in the water",
      url:
        "https://cdn.pixabay.com/photo/2018/01/11/10/59/pollution-3075857_1280.jpg"
    }
  ];

  const sectionData = [
    {
      imageUrl1: "https://www.greenbiz.com/sites/default/files/styles/og_image_1200x630/public/2021-01/ewaste_shutterstock_DAMRONGRATTANAPONG.jpg?itok=QuUYlmTn",
      title1: "Recycling of e-waste in India and its potential",
      para1: "Electronic waste (e-waste) typically includes discarded computer monitors, air conditioners and refrigerators. According to the Global E-Waste Monitor 2017, India generates about 2 million tonnes (MT) of e-waste annually and ranks fifth among e-waste producing countries. In 2016-17, India treated only 0.036 MT of its e-waste.",
      date1: "1st June, 2023",

      imageUrl2: "https://mulamutharevival.files.wordpress.com/2014/08/pic4.jpeg",
      title2: "Nirmalaya Collection",
      para2: "Every Ganapati Visarjan, rivers are choked with hundreds of tonnes of paper, plastic, thermocol, flowers fruits, and cloth. This practice pollutes the city’s already stressed rivers. Zero Waste ‘Nirmalaya’ Project enables devotees to recycle their votive offerings. Hundreds of corporate, citizen and student volunteers work with Zero Waste waste-pickers and staff to divert over a hundred tonnes of this waste each year from the rivers to the recycling stream. While coconuts and fruit are consumed or resold, partner agencies compost flowers, leaves and other biodegradable waste.",
      date2: "3rd June, 2023",


      imageUrl3: "data:image/jpeg;base64,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",
      title3: "8 Reasons To Recycle Your Old Home Appliance",
      para3: "Dangerous effects of non-recycled electronics\n" +
        "Recycling electronics is easier now\n" + "Data Destruction can be securely performed\n" + "Get precious metals out of your e-waste\n" +
        "Help others in need\n" + "Haphazard disposition is illegal\n" + "Recycling old gadgets could save money\n" + "Lesser production due to e-waste recycling\n",
      date3: "4th June, 2023",
    },
    {
      imageUrl1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrsGKSTtrALsvNg23RQ1Sfsun2n-_7mmXYufVqVLqADw&usqp=CAU&ec=48665701",
      title1: "How to reduce your business’s digital carbon footprint",
      para1: "Reduce your consumption by only buying what you truly need. Reuse items whenever possible instead of throwing them away. And recycle materials that can be recycled, such as paper, plastic, glass, and metal." +
        "Avoid single-use items: Opt for reusable alternatives instead of disposable products. For example, use cloth shopping bags instead of plastic bags.",
      date1: "4th June, 2023",

      imageUrl2: "https://wastelessindia.org/wp-content/uploads/2019/11/191104_wastecalculator_impact.jpg",
      title2: "Effective Strategies for Waste Reduction at Home",
      para2: "Every Ganapati Visarjan, rivers are choked with hundreds of tonnes of paper, plastic, thermocol, flowers fruits, and cloth. This practice pollutes the city’s already stressed rivers. Zero Waste ‘Nirmalaya’ Project enables devotees to recycle their votive offerings. Hundreds of corporate, citizen and student volunteers work with Zero Waste waste-pickers and staff to divert over a hundred tonnes of this waste each year from the rivers to the recycling stream. While coconuts and fruit are consumed or resold, partner agencies compost flowers, leaves and other biodegradable waste.",
      date2: "5th June, 2023",

      imageUrl3: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmxOM9aAtuAGC2ys5BRwXkmv0lA--d9y8c4doexkJQXdDoVFEmYtF1BvO19tGsL0jn3XY&usqp=CAU",
      title3: "8 Reasons To Recycle Your Old Home Appliance",
      para3: "Dangerous effects of non-recycled electronics\n" +
        "Recycling electronics is easier now\n" + "Data Destruction can be securely performed\n" + "Get precious metals out of your e-waste\n" +
        "Help others in need\n" + "Haphazard disposition is illegal\n" + "Recycling old gadgets could save money\n" + "Lesser production due to e-waste recycling\n",
      date3: "6th June, 2023",
    }
  ]

  const CitiesData = [
    {
      imageUrl1: "https://images.unsplash.com/photo-1553064483-f10fe837615f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title1: "PUNE",
      date1: "450+ Tonnes",

      imageUrl2: "https://lp-cms-production.imgix.net/image_browser/Mumbai_nightlife_S.jpg?auto=format&q=75",
      title2: "MUMBAI",
      date2: "700+ Tonnes",


      imageUrl3: "https://i.ytimg.com/vi/vYg8Jd8Y7EE/maxresdefault.jpg",
      title3: "NAGPUR",
      date3: "300+ Tonnes",
    },
    {
      imageUrl1: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Bangalore_.jpg/1024px-Bangalore_.jpg",
      title1: "BANGALORE",
      date1: "600+ Tonnes",

      imageUrl2: "https://gumlet.assettype.com/swarajya%2F2022-07%2F685bee56-35be-4dcf-9d1b-452b8be98a8d%2Fkathipura.jpg?auto=format%2Ccompress&w=1200",
      title2: "CHENNAI",
      date2: "500+ Tonnes",

      imageUrl3: "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2022/09/15144355/Untitled-design-2-4.jpg",
      title3: "HYDERABAD",
      date3: "450+ Tonnes",
    },
    {
      imageUrl1: "https://cdn.zeebiz.com/sites/default/files/2023/02/13/226854-delhi-1.jpg",
      title1: "DELHI",
      date1: "700+ Tonnes",

      imageUrl2: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2021/05/Visit-in-Kolkata-1-1280x720.jpg",
      title2: "KOLKATA",
      date2: "475+ Tonnes",


      imageUrl3: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202204/ezgif-sixteen_nine_21.jpg",
      title3: "NOIDA",
      date3: "400+ Tonnes",
    },
  ]


  const renderSlides = imageData.map((image) => (
    <div key={image.alt}>
      <div>
        <img src={image.url} alt={image.alt} style={{ marginTop: '73px', marginBottom: '-200px', width: '100%' }} />
        <h1 className="legend">{image.label}</h1>
      </div>
    </div>
  ));

  const renderSections = sectionData.map((section) => (
    <div class="row" key={section.title1}>
      <div class="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto">
        <div class="card">
          <img
            src={section.imageUrl1}
            class="card img-fluid"
            style={{ width: "415.99px", height: "250px" }}
          />
          <div class="card body ">
            <h2 class="card-title">
              {section.title1}
            </h2>
            <label style={{ color: "red", fontWeight: "bold" }}>{section.date1}</label>
            <p class="card-text text-left" style={{ padding: '15px' }}>
              {section.para1}
            </p>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto">
        <div class="card">
          <img
            src={section.imageUrl2}
            class="card img-fluid"
            style={{ width: "415.99px", height: "250px" }}
          />
          <div class="card body">
            <h2 class="card-title">{section.title2}</h2>
            <label style={{ color: "red", fontWeight: "bold" }}>{section.date2}</label>
            <p class="card-text text-left" style={{ padding: '15px' }}>
              {section.para2}
            </p>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto">
        <div class="card">
          <img
            src={section.imageUrl3}
            class="card img-fluid"
            style={{ width: "415.99px", height: "250px" }}
          />
          <div class="card body">
            <h2 class="card-title">
              {section.title3}
            </h2>
            <label style={{ color: "red", fontWeight: "bold" }}>{section.date3}</label>
            <p class="card-text text-left" style={{ padding: '15px' }}>
              {section.para3}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
  )

  const renderCities = CitiesData.map((city) => (
    <div class="row" key={city.name}>
      <div class="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto">
        <div class="card">
          <img
            src={city.imageUrl1}
            class="card img-fluid"
            style={{ width: "460px", height: "350px" }}
          />
          <div class="card body ">
            <h2 class="card-title">
              {city.title1}
            </h2>
            <h4 style={{ color: "red" }}>{city.date1}</h4>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto">
        <div class="card">
          <img
            src={city.imageUrl2}
            class="card img-fluid"
            style={{ width: "460px", height: "350px" }}
          />
          <div class="card body">
            <h2 class="card-title">{city.title2}</h2>
            <h4 style={{ color: "red" }}>{city.date2}</h4>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-4 col-sm-12 col-10 d-block m-auto">
        <div class="card">
          <img
            src={city.imageUrl3}
            class="card img-fluid"
            style={{ width: "460px", height: "350px" }}
          />
          <div class="card body">
            <h2 class="card-title">
              {city.title3}
            </h2>
            <h4 style={{ color: "red" }}>{city.date3}</h4>
          </div>
        </div>
      </div>
    </div>
  )
  )
  useEffect(() => {
    document.title = "Home";
    if (sessionStorage.getItem("userSession") == null) {
      window.location = "/";
    } else if (localStorage.getItem("user") == null) {
      window.location = "/";
    }
  }, []);
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(to right top, #ba538d, #ad5b9c, #9c63a9, #896bb2, #7572b7, #637dc0, #4f87c5, #3a90c7, #21a0cc, #1aafcc, #34bdc8, #55cac2)",
      }}
    >
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        className="carousel-container"
      >
        {renderSlides}
      </Carousel>

      <section class="container ourservices text-center">
        <h1>OUR SERVICES</h1>
        <div class="row rowsetting">
          <div class="col-lg-4 col-md col-sm-4 col-10 d-block m-auto">
            <div class="imgsetting d-block m-auto bg-dark">
              <i class="fa fa-truck fa-3x text-white"></i>
            </div>
            <h2>Plastic Management</h2>
          </div>

          <div class="col-lg-4 col-md col-sm-4 col-10 d-block m-auto">
            <div class="imgsetting d-block m-auto bg-dark">
              <i class="fa fa-truck fa-3x text-white"></i>
            </div>
            <h2>E-Waste Management</h2>
          </div>

          <div class="col-lg-4 col-md col-sm-4 col-10 d-block m-auto">
            <div class="imgsetting d-block m-auto bg-dark">
              <i class="fa fa-send fa-3x text-white"></i>
            </div>
            <h2>Public Awareness</h2>
          </div>
        </div>
      </section>

      <section
        class=""
        style={{
          backgroundImage:
            "linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)",
        }}
      >
        <div class="container text-center ">
          <br />
          <h1>LATEST BLOGS</h1>
          <br />
          <Carousel
            showArrows={true}
            autoPlay={true}
            infiniteLoop={true}
            className="carousel-container"
          >
            {renderSections}
          </Carousel>

        </div>
        <br />
      </section>

      <section
        style={{
          backgroundImage:
            "linear-gradient(to right top, #ba538d, #ad5b9c, #9c63a9, #896bb2, #7572b7, #637dc0, #4f87c5, #3a90c7, #21a0cc, #1aafcc, #34bdc8, #55cac2)",
        }}
      >
        <div class="text-center p-5">
          <h1 color="blue">Cities We are working in</h1>
          <hr class="hrline" />
          <br />
          <Carousel
            showArrows={true}
            autoPlay={true}
            infiniteLoop={true}
            className="carousel-container"
          >
            {renderCities}
          </Carousel>
        </div>
      </section>
    </div>
  );
}

export default Home;
