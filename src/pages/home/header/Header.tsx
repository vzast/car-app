const Header = () => {
  return (
    <div className="container-fluid" style={{ marginTop: "100px" }}>
      <div
        className="row"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className="col-lg-7 col-md-6 col-sm-12">
          <p
            style={{
              fontSize: "23px",
              textAlign: "center",
              border: "2px solid black",
            }}
          >
            At Georgian Tours, we pride ourselves on offering customized and
            comprehensive tour packages that showcase the best of what Georgia
            has to offer. Our team of experienced guides and travel experts are
            passionate about sharing their in-depth knowledge and love for
            Georgia with you.
          </p>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <img
            className="img-fluid"
            style={{ borderRadius: "20px" }}
            src="https://www.shutterstock.com/image-photo/group-sporty-people-walks-mountains-600nw-2049380855.jpg"
            alt="about-header-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
