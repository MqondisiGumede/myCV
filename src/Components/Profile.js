import React, { Component } from 'react';
import ImgProfile from './profile.jpg';
import { HashLink as Link } from 'react-router-hash-link';

class Profile extends Component {
    render() {
        return (
          <div>
            <div className="card">
              <div className="card-image">
                <img
                  className="activator"
                  src={ImgProfile}
                  alt="Mqondisi Gumede"
                />
                <Link className="btn-floating halfway-fab waves-effect wave-light red">
                  <i className="material-icons activator">more_vert</i>
                </Link>
              </div>
              <div className="card-content">
                <span className="catd-title activator grey-text text-darken-4">
                  <strong>MQONDISI GUMEDE</strong>
                </span>
                <p>
                  <strong>Information Technology</strong>
                </p>
              </div>

              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  Follow me
                  <i className="material-icons right">close</i>
                </span>
                <p className="flex-container">
                  <i className="fab fa-google-plus-g grey-text text-darken-4 social-style"></i>
                  <i className="fab fa-instagram grey-text text-darken-4 social-style"></i>
                </p>
              </div>
            </div>
          </div>
        );
    }
}
export default Profile;