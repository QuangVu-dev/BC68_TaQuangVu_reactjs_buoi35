import React from "react";
import SeatsGrid from "./SeatsGrid";
const Body = () => {
  return (
    <div className="container">
      <div className="body-content">
        <div className="inputForm">
          <h5 className="text-center font-bold">
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
              <div className="h-4 w-4 shrink-0 rounded-sm bg-white"></div>
              <span>Empty Seat</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <div className="h-4 w-4 shrink-0 rounded-sm border border-white bg-green-700"></div>
              <span>Selected Seat</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <div className="h-4 w-4 shrink-0 rounded-sm border border-white bg-red-600"></div>
              <span className="break-all">Reserved Seat</span>
            </div>
          </div>
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
        <div className="displayInfo" style={{ overflowX: "auto" }}>
          <table className="table-style">
            <tbody>
              <tr>
                <th>Name</th>
                <th>Number of Seats</th>
                <th>Seats</th>
              </tr>
              <tr>
                <td>
                  <textarea id="nameDisplay"></textarea>
                </td>
                <td>
                  <textarea id="numberDisplay"></textarea>
                </td>
                <td>
                  <textarea id="seatsDisplay"></textarea>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Body;
