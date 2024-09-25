NoneResponsiveNav
import NoneResponsiveNav from "./NoneeResponsiveNav";
import ResponsiveNav from "./ResponsiveNav";

const Nav = () => {
  return (
    <>
      <div className="none-responsive">
        <NoneResponsiveNav />
      </div>
      <div className="responsive">
        <ResponsiveNav />
      </div>
    </>
  );
};

export default Nav;
