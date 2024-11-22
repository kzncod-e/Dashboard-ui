import profile from "../img/Ellipse 2.png";
import group from "../img/Group 222.png";
import phone from "../img/Phone.png";
import message from "../img/Secured Letter.png";

export default function Profile() {
  return (
    <>
      <section className="border-b-[1px] px-4 bg-[#fff] border-b-[#C1C1C1]">
        <div className="flex flex-col sm:flex-row  gap-6 pb-3 pt-9">
          <img src={profile} className="max-h-40 max-w-40" alt="Profile" />
          <div className="flex flex-col text-start">
            <h1 className="text-[#17A9E2] text-2xl">YOHANNES AFFANDY (JOJO)</h1>
            <div className="flex flex-wrap gap-7 mt-3">
              <div className="flex flex-col gap-4 border-r-[1px] pr-4 border-r-[#C1C1C1] ">
                <div className="flex   gap-2 items-center">
                  <img src={group} alt="Group Icon" />
                  <h4 className="font-medium">Loan Market Office Dev</h4>
                </div>
                <div className="flex gap-4   ml-3 items-center">
                  <p className="text-[#17A9E2] text-xl leading-none">ID:</p>
                  <h4 className="font-medium  leading-none">LM9990001</h4>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex gap-2 items-center">
                  <img src={message} alt="Message Icon" />
                  <h4 className="font-medium">it@loanmarket.co.id</h4>
                </div>
                <div className="flex gap-2 items-center">
                  <img src={phone} alt="Phone Icon" />
                  <h4 className="font-medium">6281234567890</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
