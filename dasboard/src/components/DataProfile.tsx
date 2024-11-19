import contact from "../img/blueContact.png";
import file from "../img/bluefile.png";
import shopping from "../img/blueshopping.png";
import bank from "../img/bluebank.png";
import NotificationTimeline from "./Notification";
import LoanTargetDashboard from "./TargetLoanDashboard";
import DonutChart from "./DonutChart";
export default function DataProfile() {
  return (
    <>
      <section className="mt-7 ">
        <div className="flex ">
          {/* profile */}
          <div className="flex    gap-6 mr-5  flex-col">
            <div className="container flex   gap-5  ">
              <div className="flex gap-8 px-5 h-fit bg-[#fff] py-3 rounded-md shadow-lg border-2 border-[#D9D8D8]  items-center">
                <div>
                  <img src={contact} className="h-16" alt="" />
                </div>
                <div className="flex flex-col items-center justify-center ">
                  <h3 className="text-2xl font-semibold">Contact</h3>
                  <h1 className="text-[#17A9E2] text-3xl font-bold">51</h1>
                </div>
              </div>

              <div className="flex gap-8 px-5 h-fit bg-[#fff] py-3 rounded-md shadow-lg border-2 border-[#D9D8D8]  items-center">
                <div>
                  <img src={file} className="h-16" alt="" />
                </div>
                <div className="flex flex-col items-center justify-center ">
                  <h3 className="text-2xl font-semibold">Loan</h3>
                  <h1 className="text-[#17A9E2] text-3xl font-bold">56</h1>
                </div>
              </div>

              <div className="flex gap-8 px-5 h-fit bg-[#fff] py-3 rounded-md shadow-lg border-2 border-[#D9D8D8]  items-center">
                <div>
                  <img src={shopping} className="h-16" alt="" />
                </div>
                <div className="flex flex-col items-center justify-center ">
                  <h3 className="text-2xl font-semibold">Product</h3>
                  <h1 className="text-[#17A9E2] text-3xl font-bold">80</h1>
                </div>
              </div>

              <div className="flex gap-8 px-5 h-fit bg-[#fff] py-3 rounded-md shadow-lg border-2 border-[#D9D8D8]  items-center">
                <div>
                  <img src={bank} className="h-16" alt="" />
                </div>
                <div className="flex flex-col items-center justify-center ">
                  <h3 className="text-2xl font-semibold">Bank</h3>
                  <h1 className="text-[#17A9E2] text-3xl font-bold">30</h1>
                </div>
              </div>
            </div>
            <LoanTargetDashboard />
            <DonutChart />
          </div>
          {/* end profile */}
          <NotificationTimeline />
        </div>
      </section>
    </>
  );
}
