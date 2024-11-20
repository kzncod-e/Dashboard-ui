import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const LoanTargetDashboard = () => {
  const loanApprovalPercentage = 40; // Set percentage for the first circle
  const targetPercentage = 280; // Set percentage for the second circle

  return (
    <div className="p-6 bg-white shadow-lg w-full rounded-lg  flex  justify-center md:flex-nowrap flex-wrap  mx-auto">
      {/* Loan Approval Section */}
      <div className="flex flex-col text-center items-center w-1/2">
        <h2 className="text-2xl font-semibold mb-2">PINJAMAN DISETUJUI</h2>
        <div className="w-36 h-36">
          <CircularProgressbar
            className="font-semibold"
            value={loanApprovalPercentage}
            text={`${loanApprovalPercentage}%`}
            styles={buildStyles({
              textColor: "#000",
              pathColor: "#17A9E2",
              trailColor: "#C1C1C1", // Tailwind Gray 300
            })}
          />
        </div>
        <p className="text-sm flex  text-gray-600 mt-2">
          2/5 Pinjaman telah disetujui
        </p>
      </div>

      {/* Divider */}
      <div className="w-px h-24 bg-gray-300"></div>

      {/* Target Section */}
      <div className="flex flex-col items-center w-1/2">
        <h2 className="text-2xl font-semibold mb-2">TARGET</h2>
        <div className="w-36 h-36">
          <CircularProgressbar
            className="font-semibold"
            value={targetPercentage}
            text={`${targetPercentage}%`}
            styles={buildStyles({
              textColor: "#000",
              pathColor: "#17A9E2",
              trailColor: "#C1C1C1", // Tailwind Gray 300
            })}
          />
        </div>
        <p className="text-sm text-center text-gray-600 mt-2">
          Rp14.000.000.000,00 / Rp5.000.000.000
        </p>
      </div>
    </div>
  );
};

export default LoanTargetDashboard;
