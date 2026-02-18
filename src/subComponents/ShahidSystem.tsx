import profilePhoto from "../assets/profile.jpg";
import reactIcon from "../assets/react-icon.png";
import nodeJsIcon from "../assets/icons8-node-js-96.png";
import postgreSQLIcon from "../assets/postgresql-icon.png";

function ShahidSystem() {
  return (
    <div className="flex justify-center overflow-hidden">
      <div className="relative">
        <div className="relative flex h-120 w-120 items-center justify-center rounded-full border-2 border-dashed border-blue-200">
          <div className="relative flex h-92 w-92 items-center justify-center rounded-full border-2 border-dashed border-blue-200">
            <div className="relative flex h-64 w-64 items-center justify-center rounded-full border-2 border-dashed border-blue-200">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-30"></div>
              <img
                src={profilePhoto}
                alt="shahid"
                className="relative rounded-full w-40 h-40 object-cover border-4 border-white shadow-md"
              />
              <div className="absolute inset-0 animate-[spin_10s_linear_infinite]">
                <div className="absolute top-0 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 animate-[spin_8s_linear_infinite_reverse] items-center justify-center rounded-xl ">
                  <img src="https://res.cloudinary.com/dhcvk2b2u/image/upload/v1771437528/portfolio-website-images/icons8-node-js-96_viihlj.png" alt="Logo" className="h-10 w-10" />
                </div>
              </div>
            </div>
            <div className="absolute inset-0 animate-[spin_15s_linear_infinite]">
              <div className="absolute top-0 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 animate-[spin_8s_linear_infinite_reverse] items-center justify-center rounded-xl  ">

                <img src="https://res.cloudinary.com/dhcvk2b2u/image/upload/v1771437531/portfolio-website-images/react-icon_srkpcf.png" alt="Logo" className="h-10 w-10" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
          <div className="absolute top-0 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 animate-[spin_8s_linear_infinite_reverse] items-center justify-center rounded-xl  bg-white shadow-md">
            <img src="https://res.cloudinary.com/dhcvk2b2u/image/upload/v1771437530/portfolio-website-images/postgresql-icon_xd04ez.png" alt="Logo" className="h-10 w-10" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShahidSystem;
