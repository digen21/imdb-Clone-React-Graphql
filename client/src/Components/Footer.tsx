const Footer = () => {
  return (
    <div className="bg-dark p-3">
      <p
        className="text-center text-white text-justify"
        style={{ fontSize: "1.2rem", letterSpacing: "1px" }}
      >
        Copyright &copy; Movie Maker {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
