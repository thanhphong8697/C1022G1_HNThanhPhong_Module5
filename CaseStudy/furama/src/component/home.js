import React from "react";
import { useEffect } from "react";

var myIndex = 0;
let timeOut;

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  timeOut = setTimeout(carousel, 4000);
}

export default function Home() {
  useEffect(() => {
    carousel();
    return () => {
      if (timeOut) {
        clearTimeout(timeOut);
      }
    };
  }, []);

  return (
    <>
      <div style={{ marginTop: 72, height: 585 }}>
        {/* Automatic Slideshow Images */}
        <div className="mySlides w3-display-container w3-center">
          <img
            src="https://furamavietnam.com/wp-content/uploads/2018/11/Vietnam_Danang_Furama_Resort_Exterior_Courtyard-Night.jpg"
            style={{ width: "100%", height: 585 }}
          />
          <div className="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small"></div>
        </div>
        <div className="mySlides w3-display-container w3-center">
          <img
            src="https://bazantravel.com/cdn/medias/uploads/53/53114-furama-resort-da-nang-11.jpg"
            style={{ width: "100%", height: 585 }}
          />
          <div className="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small"></div>
        </div>
        <div className="mySlides w3-display-container w3-center">
          <img
            src="https://image.vietgoing.com/hotel/01/39/image_lbh1647657142.gif"
            style={{ width: "100%", height: 585 }}
          />
          <div className="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small"></div>
        </div>
      </div>
    </>
  );
}
