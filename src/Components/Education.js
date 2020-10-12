import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export default class Education extends Component {
    render() {
        return (
          <div>
            <div className="card">
              <div className="card-content">
                <h6>
                  <strong>EDUCATION</strong>
                </h6>
                <table className="stripped">
                  <thead>
                    <tr>
                      <th>Certificate</th>
                      <th>Date</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>VeldenVlei Primere Skool</td>
                      <td>Jan 2004- Dec 2011</td>
                      <td>
                        <Link to="#" className="btn blue lighten-2">
                          View
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>Birdswood Senior School</td>
                      <td>Jan 2012- Dec 2016</td>
                      <td>
                        <Link to="#" className="btn blue lighten-2">
                          View
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td>North-West University</td>
                      <td>Jan 2017</td>
                      <td>
                        <Link to="#" className="btn blue lighten-2">
                          View
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
    }
}

