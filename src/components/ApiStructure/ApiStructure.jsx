import React, { useState } from "react";
import { Flex, Radio } from "antd";
import Layout from "../../layout/Layout";

const ApiStructure = () => {
  const [selectedDataType, setSelectedDataType] = useState("file");

  // body data
  const bodyData = {
    file: "file required",
    token: "string required",
  };
  //json data
  const fileData = {
    status: "Number/Integer",
    message: "string",
    path: "string",
  };
  // JSON schema for audio and video data
  const videoData = {
    status: "Number/Integer",
    message: "string",
    path: "string",
  };
  const audioData = {
    status: "Number/Integer",
    message: "string",
    path: "string",
  };


  let selectedData;
  if (selectedDataType === "file") {
    selectedData = { jsonData: fileData, bodyData };
  } else if (selectedDataType === "video") {
    selectedData = { jsonData: audioData, bodyData: videoData };
  }

  return (
    <Layout>
      <div className="px-40 lg:px-8 xs:px-4">
        <div className="flex items-center justify-between mb-3 mt-12 md:mt-6 sm:flex-col">
          <h1 className="font-bold text-2xl text-mainDark md sm:text-lg sm:pb-3">
            {selectedDataType === "file"
              ? "Api Structure for Files"
              : "Api Structure for Media"}
          </h1>
          <div className="sm:pb-3">
            <Flex vertical gap="middle">
              <Radio.Group
                defaultValue="file"
                buttonStyle="solid"
                size="large"
                onChange={(e) => setSelectedDataType(e.target.value)}
              >
                <Radio.Button value="file">File</Radio.Button>
                <Radio.Button value="video">Video</Radio.Button>
              </Radio.Group>
            </Flex>
          </div>
        </div>
        <div className="bg-mainDark text-mainBg p-4 rounded-md flex sm:text-xs">
          <p>POST http://127.0.0.1:8000/api/v1/send-file</p>
        </div>
        <div className="bg-mainDark text-mainBg p-4 rounded-md mt-4 sm:text-xs">
          <h2>JSON Data:</h2>
          <pre>{JSON.stringify(selectedData?.jsonData, null, 2)}</pre>
          <h2>Body Data:</h2>
          <pre>{JSON.stringify(selectedData?.bodyData, null, 2)}</pre>
        </div>
      </div>
    </Layout>
  );
};

export default ApiStructure;
