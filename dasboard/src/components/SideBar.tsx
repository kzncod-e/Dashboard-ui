import home from "../img/Home.png";
import loan from "../img/image 8.png";
import contact from "../img/Contact.png";
import file from "../img/File.png";
import product from "../img/Shopping Bag.png";
import bank from "../img/Bank Building.png";
import scoring from "../img/Performance.png";
import vector from "../img/Vector (2).png";
import faq from "../img/Help.png";
import pipeline from "../img/Layers.png";
import marketing from "../img/Product Management.png";
import whatsapp from "../img/WhatsApp.png";
export default function SideBar() {
  return (
    <>
      <div className="h-screen px-2 w-fit items-center  bg-[#ffff]">
        <div className="pb-6 flex justify-center">
          <img src={loan} alt="" />
        </div>
        <nav className=" ">
          <ul className="flex gap-1 w-52 flex-col">
            <li>
              <div className="flex items-center justify-start px-3 py-2 rounded-[10px] bg-[#17A9E2] gap-2">
                <img src={home} className="h-7  " alt="" />
                <span className="font-medium text-white">Dashboard</span>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-start px-3 py-2 rounded-[10px] bg-[#fff] gap-2">
                <img src={contact} className="h-7  " alt="" />
                <span className="font-medium">Dashboard</span>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-start px-3 py-2 rounded-[10px] bg-[#fff] gap-2">
                <img src={file} className="h-7  " alt="" />
                <span className="font-medium">Loan</span>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-start px-3 py-2 rounded-[10px] bg-[#fff] gap-2">
                <img src={product} className="h-7  " alt="" />
                <span className="font-medium">Product</span>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-start px-3 py-2 rounded-[10px] bg-[#fff] gap-2">
                <img src={bank} className="h-7  " alt="" />
                <span className="font-medium">Bank</span>
              </div>
            </li>
            <li>
              <div className="flex items-center relative justify-start px-3 py-2 rounded-[10px] bg-[#fff] gap-2">
                <img src={scoring} className="h-7  " alt="" />
                <span className="font-medium">Credit Scoring</span>
                <img src={vector} className="h-2  absolute right-0  " alt="" />
              </div>
            </li>
            <li>
              <div className="flex items-center  justify-start px-3 py-2 rounded-[10px] bg-[#fff] gap-2">
                <img src={faq} className="h-7  " alt="" />
                <span className="font-medium">FAQ'S</span>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-start px-3 py-2 rounded-[10px] bg-[#fff] gap-2">
                <img src={pipeline} className="h-7  " alt="" />
                <span className="font-medium">Pipeline </span>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-start px-3 py-2 rounded-[10px] bg-[#fff] gap-2">
                <img src={pipeline} className="h-7  " alt="" />
                <span className="font-medium">Pipeline Developer </span>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-start px-3 py-2 rounded-[10px] bg-[#fff] gap-2">
                <img src={marketing} className="h-7  " alt="" />
                <span className="font-medium">Marketing Tools </span>
              </div>
            </li>
            <li>
              <div className="flex items-center relative justify-start px-3 py-2 rounded-[10px] bg-[#fff] gap-2">
                <img src={whatsapp} className="h-7  " alt="" />
                <span className="font-medium">Whatsapp </span>
                <img src={vector} className="h-2 absolute right-0" alt="" />
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
