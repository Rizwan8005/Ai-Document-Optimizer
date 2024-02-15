import React from 'react'
import {Counter_Data} from '../../Data/CounterData'

const Counter = () => {
  return (
    <div className="px-40 lg:px-8 xs:px-4">
      <div className="shadow-navbar-button py-7 rounded-md">
        <p className=" text-center pb-4">FEB 14TH, 2024</p>
        <div className="flex justify-around flex-wrap sm:flex-col sm:gap-6 sm:px-3 sm:items-center">
          {Counter_Data.map((count, i) => {
            return (
              <div className="flex items-center gap-2" key={i}>
                <div
                  className={`flex justify-center px-2 py-2 rounded-md`}
                  style={{ background: count.countBgColor }}
                >
                  <img
                    src={count.countImg}
                    alt="signed-forms"
                    className="rounded-lg w-6"
                  />
                </div>
                <div className="text-mainDark">
                  <h1 className="text-xl font-black">{count.count_number}</h1>
                  <span className="text-xs">{count.count_name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Counter