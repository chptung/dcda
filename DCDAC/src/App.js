import React, { Component } from 'react';
import './0_grayscale.css';
import './js/grayscale.js';
import './App.css';
import jQuery from 'jquery';
import Bootstrap from 'react-bootstrap';
import Helmet from 'react-helmet';

class App extends Component {
  componentWillMount() {
    const jquery = document.createElement("jquery");
    const vendor = document.createElement("vendor");
    const javascript = document.createElement("javascript");
    const theme = document.createElement("theme");
    jquery.async=true;

    vendor.src="vendor/bootstrap/js/bootstrap.min.js";
    vendor.async=true;

    javascript.src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js";
    javascript.async=true;

    document.body.appendChild(jquery);
    document.body.appendChild(vendor);
    document.body.appendChild(javascript);

  }
  render() {
    return (
      <div className="App">
      <Helmet
              htmlAttributes={{"lang": "en", "amp": undefined}} // amp takes no value
              title="Davis College Democrats Alumni Club"
              titleTemplate="DCDAC.com - %s"
              defaultTitle="Davis College Democrats Alumni Club"
              meta={[
                  {"name": "description", "content": "Davis College Democrats Alumni Club"},
                  {"property": "og:type", "content": "article"}
              ]}
              link={[
                  {"rel": "canonical", "href": "http://mysite.com/example"},
                  {"rel": "apple-touch-icon", "href": "http://mysite.com/img/apple-touch-icon-57x57.png"},
                  {"rel": "apple-touch-icon", "sizes": "72x72", "href": "http://mysite.com/img/apple-touch-icon-72x72.png"}
              ]}
              script={[
                  {"src": "http://include.com/pathtojs.js", "type": "text/javascript"},
                  {"type": "application/ld+json", "innerHTML": `{ "@context": "http://schema.org" }`}
              ]}
          />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
              {/* Navigation */}
          <nav className="navbar navbar-custom navbar-fixed-top" role="navigation">
              <div className="container">
                  <div className="navbar-header">
                      <div>
                      <a className="navbar-brand page-scroll" href="#page-top">
                          Davis Alumni Democrats
                      </a>
                      </div>
                      <div className="navbar-items">
                          <ul className="nav navbar-nav">
                              {/*  Hidden li included to remove active class from about link when scrolled up past about section */}
                              <li className="nav-item">
                                  <a className="page-scroll" href="#about">About</a>
                              </li>
                              <li className="nav-item">
                                  <a className="page-scroll" href="#join">Join</a>
                              </li>
                              <li className="nav-item">
                                  <a className="page-scroll" href="#contact">Contact</a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
              {/* /.container*/}
          </nav>

          {/* Intro Header */}
          <header className="intro">
              <div className="intro-body">
                  <div className="container">
                      <div className="row">
                          <div className="col-md-8 col-md-offset-2">
                              <div className="brand-heading">Join The Davis Alumni Democrats</div>
                              <div className="intro-text">Help fellow democrats succeed<br />
                              Shape our political landscape<br />
                              Make a REAL difference
                              </div>
                              <div className="arrow bounce">
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </header>

          {/* About Section */}
          <section id="about" className="container content-section text-center">
              <div className="row">
                  <div className="col-lg-8 col-lg-offset-2">
                      <h2>Why The World Needs Davis Alumni Democrats</h2>
                      Plans to privatize Medicare, roll back climate change deals, and restore the House Un-American Activities Committee announced by the Trump transition team and his enablers have made it even clearer that our future is in peril.<br /><br />
                      However, Davis Alumni Democrats is here to join the growing resistance of like-minded people who oppose the policies that will hollow out the middle class in favor of lining the pockets of the wealthiest Americans, undermine our national security, and roll back hard won civil rights gains.<br /><br />
                    </div>
              </div>
          </section>

          {/* Download Section */}
          <section id="join" className="content-section text-center">
              <div className="download-section">
                  <div className="container">
                      <div className="col-lg-8 col-lg-offset-2">
                          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeAocb_tY4XmOjazcvqsDTTSrCVT8N6a77mSiivznIXY2youQ/viewform?embedded=true" width="100%" height="2200" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
                      </div>
                  </div>
              </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="container content-section text-center">
              <div className="row">
                  <div className="col-lg-8 col-lg-offset-2">
                      <h2>Contact Us</h2>
                      <p>Feel free to email us!</p>
                      <p><a href="mailto:dcdalumniclub@yahoo.com">dcdalumniclub@yahoo.com</a>
                      </p>
                  </div>
              </div>
          </section>

          {/*  Footer */}
          <footer>
              <div className="container text-center copyright">
                  Copyright &copy; Davis Alumni Democrats 2016
              </div>
          </footer>
      </div>
    );
  }
}

export default App;
