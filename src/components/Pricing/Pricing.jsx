import React, { useState } from "react";
import { Slider } from "antd";
import { Flex, Radio } from "antd";

const Pricing = () => {
  const [disabled, setDisabled] = useState(false);
  return (
    <div className="px-40 lg:px-8 xs:px-4 mt-8 text-center">
      <div className="shadow-navbar-button py-7 rounded-md">
        <p className="text-darkGrey font-semibold pb-3 sm:text-md sm:text-sm">
          ON-DEMAND, TRANSPARENT PRICING
        </p>
        <h1 className="text-[2rem] font-semibold pb-3 lg:text-2xl sm:text-lg">
          Starting at <span className="text-primary">$0.007</span> per file
        </h1>
        <div className="flex justify-around items-center gap-2 sm:flex-col sm:gap-3">
          <div>
            <p className="text-converterColor sm:text-sm">
              When Converting <span className="text-primary">14,000</span> files
            </p>
          </div>
          <div className="w-[8rem]">
            <Slider range defaultValue={[20, 50]} disabled={disabled} />
          </div>
          <div>
            <Flex vertical gap="middle">
              <Radio.Group defaultValue="a" buttonStyle="solid">
                <Radio.Button value="a">Monthly</Radio.Button>
                <Radio.Button value="b">One-Time</Radio.Button>
              </Radio.Group>
            </Flex>
          </div>
        </div>
        <p className="text-converterColor mt-3 sm:text-sm sm:px-1">
          Corresponds to a one-time payment of{" "}
          <span className="font-bold">$176.00.</span> Checkout the full{" "}
          <span className="text-primary">pricing</span> information.
        </p>
      </div>
    </div>
  );
};

export default Pricing;
