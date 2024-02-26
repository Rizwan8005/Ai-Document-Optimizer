import React, { useEffect } from 'react'
import SignedForms from "../../assets/icons/filled-forms.svg";
import SignedForm from "../../assets/icons/signed-forms.svg";
import FormsSend from "../../assets/icons/forms-send.svg";
import CountUp from "react-countup";
import {
  useGetCounterApiQuery,
  useCountApiHitsQuery,
} from "../../store/services/services";
import Layout from '../../layout/Layout';
import { useSelector } from 'react-redux';

const Counter = () => {
  const { data, refetch, isLoading, isError, error } = useGetCounterApiQuery();
  const {
    data: countHitApiData,
    isLoading: countHitIsLoadingData,
    isError: countHitIsError,
    error: countHitError,
  } = useCountApiHitsQuery();
// getting redux value
const isCounterUpdate = useSelector(
  (state) => state.updateCounter.isCounterUpdate
);
console.log(isCounterUpdate, "this is isCounterUpdate");
// current data
const currentDate = new Date();
 const formattedDate = currentDate.toLocaleDateString("en-US", {
   month: "short",
   day: "numeric",
   year: "numeric",
 });
// refetch api data
useEffect(() => {
  if (isCounterUpdate) {
    refetch();
  }
}, [isCounterUpdate]);
  return (
    <Layout>
      <div className="px-40 lg:px-8 xs:px-4">
        <div className="shadow-navbar-button py-7 rounded-md">
          <p className=" text-center font-semibold pb-4">{formattedDate}</p>
          <div className="flex justify-around flex-wrap sm:flex-col sm:gap-6 sm:px-3 sm:items-center">
            <div className="flex items-center gap-2">
              <div
                className={`flex justify-center px-2 py-2 rounded-md bg-blue`}
              >
                <img
                  src={SignedForms}
                  alt="signed-forms"
                  className="rounded-lg w-6"
                />
              </div>
              <div className="text-mainDark">
                {isLoading && <p>Loading...</p>}
                {isError && <p>{error.message}</p>}
                {!isLoading && !isError && (
                  <h1 className="text-xl font-black">
                    <CountUp
                      end={parseInt(data?.total_users)}
                      duration={2}
                      separator=","
                    />
                  </h1>
                )}
                <span className="text-xs">api token</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div
                className={`flex justify-center px-2 py-2 rounded-md bg-darkBlue`}
              >
                <img
                  src={SignedForm}
                  alt="signed-forms"
                  className="rounded-lg w-6"
                />
              </div>
              <div className="text-mainDark">
                {countHitIsLoadingData && <p>Loading...</p>}
                {countHitIsError && <p>{countHitError.message}</p>}
                {!countHitIsLoadingData && !countHitIsError && (
                  <h1 className="text-xl font-black">
                    <CountUp
                      end={parseInt(countHitApiData?.total_api_hits)}
                      duration={2}
                      separator=","
                    />
                  </h1>
                )}
                <span className="text-xs">api hits</span>
              </div>
            </div>
            {/* <div className="flex items-center gap-2">
            <div className={`flex justify-center px-2 py-2 rounded-md bg-pink`}>
              <img
                src={FormsSend}
                alt="signed-forms"
                className="rounded-lg w-6"
              />
            </div>
            <div className="text-mainDark">
              <h1 className="text-xl font-black">24</h1>
              <span className="text-xs">forms filled out</span>
            </div>
          </div> */}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Counter