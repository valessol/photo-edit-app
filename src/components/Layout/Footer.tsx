import CloudinaryLogo from "../../assets/images/logo.svg";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center gap-x-2 font-semibold pt-10">
      Hecho con{" "}
      <a href="https://cloudinary.com" target="_blank" rel="noreferrer">
        {CloudinaryLogo}
      </a>
    </footer>
  );
};

export default Footer;
