import React from 'react';

const ExampleGravityForms = () => (
  <div className="container p-content">
    <h1>Gravity Forms</h1>
    <p>
      Bootstrap form styles are extended to the Gravity Forms CSS classes,
      and a simple flex-based grid is applied to complex containers.
    </p>
    <div className="gform_wrapper">
      <form method="post" encType="multipart/form-data">
        <div className="gform_body">
          <ul className="gform_fields">
            <li className="gfield">
              <label className="gfield_label" htmlFor="name">Name</label>
              <div className="ginput_complex ginput_container" id="name">
                <span className="name_first">
                  <input
                    type="text"
                    name="name_first"
                    id="name_first"
                    aria-label="First name"
                    aria-invalid="false"
                  />
                  <label htmlFor="name_first">First</label>
                </span>
                <span className="name_last">
                  <input
                    type="text"
                    name="name_last"
                    id="name_last"
                    aria-label="Last name"
                    aria-invalid="false"
                  />
                  <label htmlFor="name_last">Last</label>
                </span>
              </div>
            </li>
            <li className="gfield">
              <label className="gfield_label" htmlFor="name_email">
                Email<span className="gfield_required">*</span>
              </label>
              <div className="ginput_container">
                <input
                  type="text"
                  className="medium"
                  name="name_email"
                  id="name_email"
                  aria-required="true"
                  aria-invalid="false"
                />
              </div>
            </li>
          </ul>
        </div>
        <div className="gform_footer top_label">
          <input type="submit" className="gform_button button" value="Submit" />
        </div>
      </form>
    </div>

  </div>
);

export default ExampleGravityForms;
