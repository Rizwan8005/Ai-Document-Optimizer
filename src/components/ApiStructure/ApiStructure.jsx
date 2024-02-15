import React from 'react'
import {json_data} from '../../Data/ApiStructureJsonData'

const ApiStructure = () => {
  return (
    <div className="px-40 lg:px-8 xs:px-4">
      <h1 className="font-bold text-2xl text-center text-mainDark mt-12 pb-6 md:mt-5 sm:text-lg">
        Api Structure
      </h1>
      <div className="bg-primary p-4 rounded-md flex sm:text-xs">
        <p>POST https://sync.api.cloudconvert.com/v2/jobs</p>
      </div>
      <div className="bg-primary p-4 rounded-md mt-4 sm:text-xs">
        <pre>{JSON.stringify(json_data, null, 2)}</pre>
      </div>
    </div>
  );
}

export default ApiStructure