import React from "react";
import "../assets/scss/pages/page1.scss";

export default function Page1() {
  return (
    <div className="page1_container">
      <div className="landing_bg_container">
        <img
          src="https://voosh.in/static/media/landing_bg.da8497cd24d321282c0d.webp"
          alt="landing_bg"
          className="landing_bg_icon"
        />
      </div>

      <div className="page1_title_container_content">
        <div className="page1_title_container">
          <div className="title">
            Consolidate your restaurants' insights in one place. Unlock growth.
          </div>

          <div className="subtitle">
            Your one stop solution to view mission-critical data and insights
            from all your locations in one place.
          </div>

          <div className="button_arrow_container">
            <div className="button_container_style">
              <a href="#Waitinglist" className="button_container">
                <div>
                  <span className="text_button">Book Demo</span>
                </div>
              </a>
            </div>
            <div className="arrow_img_container">
              <img
                src="https://voosh.in/static/media/arrow.ff14f58c77374c33f8e8.webp"
                alt="arrow"
                className="arrow_img"
              />
            </div>
          </div>
        </div>

        <div className="my_profile_container">
          <img
            src="https://voosh.in/static/media/three_lines.cb3005e94acb8877cb80.webp"
            alt="three-lines"
            className="three_lines"
          />
          <img
            src="https://voosh.in/static/media/my_profile.61da110e7e1e80c97356.webp"
            alt="my-profile-icon"
            className="my_profile_icon"
          />
        </div>

        <div className="page1_outlet_container">
          <img
            src="https://voosh.in/static/media/page1_1.cb1dbedcdc321b25fb4e.webp"
            alt="page1-outlet-icon1"
            className="page1-outlet-icon1"
          />
          <img
            src="https://voosh.in/static/media/page1_2.4bfc2d124bbd2e50da2d.webp"
            alt="page1-outlet-icon2"
            className="page1-outlet-icon2"
          />
          <img
            src="https://voosh.in/static/media/page1_3.1d108925b5e5156bb2d4.webp"
            alt="page1-outlet-icon3"
            className="page1-outlet-icon3"
          />
          <img
            src="https://voosh.in/static/media/page1_4.a2a22e7f5e42a50552ae.webp"
            alt="page1-outlet-icon4"
            className="page1-outlet-icon4"
          />
          <img
            src="https://voosh.in/static/media/page1_5.f505a37d3e86d1a571da.webp"
            alt="page1-outlet-icon5"
            className="page1-outlet-icon5"
          />
          <img
            src="https://voosh.in/static/media/page1_6.2213ad7f35bd24758114.webp"
            alt="page1-outlet-icon6"
            className="page1-outlet-icon6"
          />
        </div>
      </div>
    </div>
  );
}
