const About = (props) => {
  if (!props.data) return <p></p>;

  const profilePic = "images/" + props.data.image;
  const { street, city, state, zip } = props.data.address;
  const { phone, phonees, email, resumedownload, bio, completename } =
    props.data;

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img className="profile-pic" src={profilePic} alt="ire-profile-img" />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          {bio &&
            bio.map((row, irow) => (
              <p key={irow} className="bolder">
                {row}
              </p>
            ))}

          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{completename}</span>
                <br />
                <span>
                  {street}
                  <br />
                  {city} {state}, {zip}
                </span>
                <br />
                <span>{phone}</span>
                <br />
                <span>{phonees}</span>
                <br />
                <span>{email}</span>
              </p>
            </div>
            <div className="columns download">
              <p>
                <a href={resumedownload} className="button" target="_blank">
                  <i className="fa fa-download"></i>Download Resume PDF
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
