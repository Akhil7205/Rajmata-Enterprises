import React from 'react';
import './Career.css';

const Career = () => {
  return (
    <div className="career-container">
      <div className="career-intro">
        <h2>CAREER</h2>
        <p>Welcome message and company information...</p>
        <p>Instructions for job applicants...</p>
      </div>

      <form className="job-application-form">
        <h3>Job Application</h3>
        <div className="form-group">
          <label>Candidate Name</label>
          <input type="text" name="candidateName" />
        </div>
        <div className="form-group">
          <label>Mobile Number</label>
          <input type="text" name="mobileNumber" />
        </div>
        <div className="form-group">
          <label>Email ID</label>
          <input type="email" name="email" />
        </div>
        <div className="form-group">
          <label>Post Applied For</label>
          <input type="text" name="postAppliedFor" />
        </div>
        <div className="form-group">
          <label>Present Address</label>
          <input type="text" name="presentAddress" />
        </div>
        <div className="form-group">
          <label>Height</label>
          <input type="text" name="height" />
        </div>
        <div className="form-group">
          <label>Weight</label>
          <input type="text" name="weight" />
        </div>
        <div className="form-group">
          <label>Present Salary</label>
          <input type="text" name="presentSalary" />
        </div>
        <div className="form-group">
          <label>Upload CV</label>
          <input type="file" name="cvUpload" />
        </div>
        <button type="submit">Submit</button>
      </form>

      <div className="vacancies-section">
        <h3>Current Vacancies</h3>
        <ul>
          <li><a href="#area-officer">Area Officer</a></li>
          <li><a href="#accounts-executive">Accounts Executive</a></li>
          <li><a href="#sales-executive">Sales Executive</a></li>
          <li><a href="#security-guard">Security Guard</a></li>
          <li><a href="#housekeeping">Housekeeping, Pantry Boy and Office Boy</a></li>
          <li><a href="#technician">Technician</a></li>
        </ul>
      </div>

      <div className="vacancy-details">
        <div className="vacancy" id="area-officer">
          <h4>Area Officer</h4>
          <table>
            <tbody>
              <tr>
                <td>Scope and Responsibilities</td>
                <td>Handling day-to-day site operations...</td>
              </tr>
              <tr>
                <td>Competencies</td>
                <td>Must be well-versed with the local business environment...</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="vacancy" id="area-officer">
          <h4>Area Officer</h4>
          <table>
            <tbody>
              <tr>
                <td>Functional Job Title</td>
                <td>Area Officer</td>
              </tr>
              <tr>
                <td>Scope and Responsibilities</td>
                <td>
                  <ul>
                    <li>Handling day to day site operation</li>
                    <li>2 years of experience as Area Officer</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Competencies</td>
                <td>
                  <ul>
                    <li>Must be well versed with local business environment</li>
                    <li>Capable of providing classroom and onsite Training</li>
                    <li>Honest, hardworking and responsible</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Desired Personality Traits</td>
                <td>
                  <ul>
                    <li>The candidate should be enthusiastic and energetic</li>
                    <li>Capable of working in a dynamic environment</li>
                    <li>Must be a team player</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Years of Experience</td>
                <td>A minimum of 5 years of experience in the security industry</td>
              </tr>
              <tr>
                <td>Qualifications</td>
                <td>Preferably Graduate</td>
              </tr>
              <tr>
                <td>Age (range)</td>
                <td>27-45 years</td>
              </tr>
              <tr>
                <td>Location</td>
                <td>Mumbai, Pune</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="vacancy" id="accounts-executive">
          <h4>Accounts Executive</h4>
          <table>
            <tbody>
              <tr>
                <td>Function / Dept.</td>
                <td>Accounts</td>
              </tr>
              <tr>
                <td>Functional Job Title</td>
                <td>Accounts Executive</td>
              </tr>
              <tr>
                <td>Scope and Responsibilities</td>
                <td>
                  <ul>
                    <li>Maintaining transactions in Tally ERP 9</li>
                    <li>Timely preparation of payroll & invoice</li>
                    <li>Timely filing of returns such as PF, ESI, PT, PTax, GST, etc.</li>
                    <li>Job to be accomplished through a team</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Competencies</td>
                <td>
                  <ul>
                    <li>Working knowledge of Tally and advance Excel</li>
                    <li>Candidate with knowledge of PF, ESI, TDS, etc. will be preferred</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Years of Experience</td>
                <td>A minimum of 2 years of experience</td>
              </tr>
              <tr>
                <td>Qualifications</td>
                <td>Graduate</td>
              </tr>
              <tr>
                <td>Age (range)</td>
                <td>20-35 years</td>
              </tr>
              <tr>
                <td>Location</td>
                <td>Mumbai</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="vacancy" id="sales-executive">
          <h4>Sales Executive</h4>
          <table>
            <tbody>
              <tr>
                <td>Function / Dept.</td>
                <td>Sales & Marketing</td>
              </tr>
              <tr>
                <td>Functional Job Title</td>
                <td>Sales Executive</td>
              </tr>
              <tr>
                <td>Scope and Responsibilities</td>
                <td>
                  <ul>
                    <li>Business Development</li>
                    <li>Attending inquiry</li>
                    <li>Sending quotation and follow-up</li>
                    <li>Meeting prospective clients</li>
                    <li>Marketing</li>
                    <li>Understanding of Security Industry</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Competencies</td>
                <td>
                  <ul>
                    <li>Must be well versed with local business environment</li>
                    <li>Strong Analytical skills</li>
                    <li>Excellent written and verbal communication</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Desired Personality Traits</td>
                <td>
                  <ul>
                    <li>Strong presentation, communication and influencing skills</li>
                    <li>The candidate should be enthusiastic and energetic and capable of working in a dynamic environment</li>
                    <li>Must be a team player</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Years of Experience</td>
                <td>A minimum of 3 years of experience</td>
              </tr>
              <tr>
                <td>Qualifications</td>
                <td>Preferably Graduate</td>
              </tr>
              <tr>
                <td>Age (range)</td>
                <td>Open to all</td>
              </tr>
              <tr>
                <td>Location</td>
                <td>Mumbai</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="vacancy" id="security-guard">
          <h4>Security Guard</h4>
          <table>
            <tbody>
              <tr>
                <td>Physical Requirement</td>
                <td>
                  <ul>
                    <li>Height 5.7 feet and above</li>
                    <li>Body Mass Index (BMI) under 25</li>
                    <li>Candidate should be physically fit</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Qualification</td>
                <td>Minimum 12th pass</td>
              </tr>
              <tr>
                <td>Competencies</td>
                <td>
                  <ul>
                    <li>Capable of reading and writing English and the local language</li>
                    <li>Capable of understanding Hindi</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Years of Experience</td>
                <td>A minimum of 2 years of experience</td>
              </tr>
              <tr>
                <td>Age (range)</td>
                <td>25-45 years</td>
              </tr>
              <tr>
                <td>Location</td>
                <td>Mumbai,Satara,Pune</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="vacancy" id="housekeeping">
          <h4>Housekeeping, Pantry Boy and Office Boy</h4>
          <table>
            <tbody>
              <tr>
                <td>Function / Dept.</td>
                <td>Operations</td>
              </tr>
              <tr>
                <td>Functional Job Title</td>
                <td>Housekeeping, Pantry Boy and Office Boy</td>
              </tr>
              <tr>
                <td>Scope and Responsibilities</td>
                <td>
                  <ul>
                    <li>Taking care of overall housekeeping activities of the premises</li>
                    <li>Serving tea, coffee and snacks</li>
                    <li>Handling indoor and outdoor office duties</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Competencies</td>
                <td>
                  <ul>
                    <li>Must be well versed with local business environment</li>
                    <li>Should have excellent communication skills</li>
                    <li>Good command over the English language</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Years of Experience</td>
                <td>A minimum of 2 years of experience</td>
              </tr>
              <tr>
                <td>Age (range)</td>
                <td>Open to all</td>
              </tr>
              <tr>
                <td>Location</td>
                <td>Mumbai</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="vacancy" id="technician">
          <h4>Technician</h4>
          <table>
            <tbody>
              <tr>
                <td>Function / Dept.</td>
                <td>Technical</td>
              </tr>
              <tr>
                <td>Functional Job Title</td>
                <td>Technician</td>
              </tr>
              <tr>
                <td>Scope and Responsibilities</td>
                <td>
                  <ul>
                    <li>Overseeing the overall installation of electrical and electronics systems</li>
                    <li>Maintenance and operations of the system</li>
                    <li>Conducting routine tests on electrical and electronic systems</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Competencies</td>
                <td>
                  <ul>
                    <li>Must be well versed with local business environment</li>
                    <li>Should have excellent communication skills</li>
                    <li>Good command over the English language</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Years of Experience</td>
                <td>A minimum of 3 years of experience in the relevant field</td>
              </tr>
              <tr>
                <td>Age (range)</td>
                <td>25-40 years</td>
              </tr>
              <tr>
                <td>Location</td>
                <td>Mumbai</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Career;
