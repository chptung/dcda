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
                      <a className="navbar-brand page-scroll" href="#page-top">
                          <i className="fa fa-play-circle"></i> Davis College Democrats <span className="light">Alumni Club</span>
                      </a>
                      <div className="navbar-items">
                          <ul className="nav navbar-nav">
                              {/*  Hidden li included to remove active class from about link when scrolled up past about section */}
                              <li className="nav-item">
                                  <a className="page-scroll" href="#about">About</a>
                              </li>
                              <li className="nav-item">
                                  <a className="page-scroll" href="#join">Join</a>
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
                              <div className="brand-heading">Join The Davis College Democrats Alumni Club</div>
                              <div className="intro-text">Contribute to the success of fellow democrats.<br />
                              Help shape our political landscape<br />
                              Make a difference
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
                      <h2>About Grayscale</h2>
                      <p>Grayscale is a free Bootstrap 3 theme created by Start Bootstrap. It can be yours right now, simply download the template on <a href="http://startbootstrap.com/template-overviews/grayscale/">the preview page</a>. The theme is open source, and you can use it for any purpose, personal or commercial.</p>
                      <p>This theme features stock photos by <a href="http://gratisography.com/">Gratisography</a> along with a custom Google Maps skin courtesy of <a href="http://snazzymaps.com/">Snazzy Maps</a>.</p>
                      <p>Grayscale includes full HTML, CSS, and custom JavaScript files along with LESS files for easy customization.</p>
                  </div>
              </div>
          </section>

          {/* Download Section */}
          <section id="download" className="content-section text-center">
              <div className="download-section">
                  <div className="container">
                      <div className="col-lg-8 col-lg-offset-2">
                          <h2>Download Grayscale</h2>
                          <p>You can download Grayscale for free on the preview page at Start Bootstrap.</p>
                          <a href="http://startbootstrap.com/template-overviews/grayscale/" className="btn btn-default btn-lg">Visit Download Page</a>
                      </div>
                  </div>
              </div>
          </section>

          {/* Contact Section */}
          <section id="join" className="container content-section text-center">
              <div className="row">
                  <div className="col-lg-8 col-lg-offset-2">
                      <h2>Contact Start Bootstrap</h2>
                      <p>Feel free to email us to provide some feedback on our templates, give us suggestions for new templates and themes, or to just say hello!</p>
                      <p><a href="mailto:feedback@startbootstrap.com">feedback@startbootstrap.com</a>
                      </p>
                      <ul className="list-inline banner-social-buttons">
                          <li>
                              <a href="https://twitter.com/SBootstrap" className="btn btn-default btn-lg"><i className="fa fa-twitter fa-fw"></i> <span className="network-name">Twitter</span></a>
                          </li>
                          <li>
                              <a href="https://github.com/IronSummitMedia/startbootstrap" className="btn btn-default btn-lg"><i className="fa fa-github fa-fw"></i> <span className="network-name">Github</span></a>
                          </li>
                          <li>
                              <a href="https://plus.google.com/+Startbootstrap/posts" className="btn btn-default btn-lg"><i className="fa fa-google-plus fa-fw"></i> <span className="network-name">Google+</span></a>
                          </li>
                      </ul>
                  </div>
              </div>
          </section>

          {/*  Footer */}
          <footer>
              <div className="container text-center">
                  <p>Copyright &copy; Your Website 2016</p>
              </div>
          </footer>
      </div>
    );
  }
}

export default App;
