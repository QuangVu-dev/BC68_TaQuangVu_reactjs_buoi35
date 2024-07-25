import React from "react";
import SeatsGrid from "./SeatsGrid";
const Body = () => {
  return (
    <div className="container">
      <div className="body-content">
        <div className="inputForm">
          <h5 className="text-center">
            Fill The Required Details Below And Select Your Seats
          </h5>
          <div className="flex justify-between user-content">
            <div className="user_left">
              <label>
                Name <span>*</span>
              </label>
              <input type="text" id="userName" />
            </div>
            <div className="user_right">
              <label>
                Number of Seats <span>*</span>
              </label>
              <input type="number" min={1} id="numSeats" />
            </div>
          </div>
          <button>Start Selecting</button>
        </div>
        <div className="m-4 w-full px-4 text-base text-white">
          <div className="mx-auto grid w-fit grid-cols-3 gap-x-2 gap-y-2">
            <div className="flex items-center space-x-1.5">
              <div className="h-4 w-4 shrink-0 rounded-sm bg-gray-700"></div>
              <span>Đã đặt</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <div className="h-4 w-4 shrink-0 rounded-sm border border-white bg-green-700"></div>
              <span>Ghế bạn chọn</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <div className="h-4 w-4 shrink-0 rounded-sm bg-[#722ed1]"></div>
              <span className="break-all">Ghế thường</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <div className="w-4 h-4 shrink-0 rounded-sm bg-[#f5222d]"></div>
              <span className="break-all">Ghế VIP</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <div className="h-4 w-4 shrink-0 rounded-sm bg-[#eb2f96]"></div>
              <span className="break-all">Ghế đôi</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <div className="h-4 w-4 shrink-0 rounded-sm border border-green-300"></div>
              <span>Vùng trung tâm</span>
            </div>
          </div>
          <span className="mt-2 cursor-pointer text-center transition-all hover:opacity-70 block">
            <b>
              <u>Xem chi tiết</u> hình ảnh và thông tin ghế
            </b>
          </span>
        </div>

        <div
          className="seatStructure text-center"
          style={{ overflowX: "auto" }}
        >
          <SeatsGrid />
          <p id="notification"></p>
          <div className="screen">
            <h2 className="screen-content">Screen this way</h2>
          </div>
          <button>Confirm Selection</button>
        </div>
        <div className="displayInfo" style={{ overflowX: "auto" }}></div>
      </div>
    </div>
  );
};

export default Body;
