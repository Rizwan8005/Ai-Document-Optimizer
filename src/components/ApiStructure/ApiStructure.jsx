import React, { useState } from "react";
import { Flex, Radio } from "antd";
import Layout from "../../layout/Layout";

const ApiStructure = () => {
  const [selectedDataType, setSelectedDataType] = useState("file");

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
          <p>
            <span className="bg-yellowColor px-2 py-1 rounded-md mr-1">
              POST
            </span>{" "}
            {selectedDataType === "file"
              ? "http://127.0.0.1:8000/api/v1/send-file"
              : "http://127.0.0.1:8000/api/v1/get-file-metadata"}
          </p>
        </div>
        {selectedDataType === "file" ? (
          <div className="bg-mainDark text-mainBg p-4 rounded-md mt-4 sm:text-xs">
            <h2>Body Data:</h2>
            <pre>
              {`{\n`} <span className="text-success">"apiToken"</span>:{" "}
              <span className="text-decrease">"string"</span>,{"\n"}{" "}
              <span className="text-success">"file"</span>:{" "}
              <span className="text-decrease">"string"</span>
              {`\n}`}
            </pre>
            <h2>JSON Response:</h2>
            <pre>
              {`{\n`} <span className="text-success">"status"</span>:{" "}
              <span className="text-decrease">"integer"</span>,{"\n"}{" "}
              <span className="text-success">"message"</span>:{" "}
              <span className="text-decrease">"string"</span>,{"\n"}{" "}
              <span className="text-success">"data"</span>:{" "}
              <span className="text-decrease">"string"</span>
              {`\n}`}
            </pre>
          </div>
        ) : (
          <div className="bg-mainDark text-mainBg p-4 rounded-md mt-4 sm:text-xs">
            <h2>Body Data:</h2>
            <pre>
              {`{\n`} <span className="text-success">"apiToken"</span>:{" "}
              <span className="text-decrease">"string"</span>,{"\n"}{" "}
              <span className="text-success">"videoFile"</span>:{" "}
              <span className="text-decrease">"string"</span>
              {`\n}`}
            </pre>
            <h2>JSON Response:</h2>
            <pre>
              {`{\n`} <span className="text-success">"status"</span>:{" "}
              <span className="text-decrease">"integer"</span>,{"\n"}{" "}
              <span className="text-success">"message"</span>:{" "}
              <span className="text-decrease">"string"</span>,{"\n"}{" "}
              <span className="text-success">"data"</span>:{" "}
              <span className="text-decrease">"string"</span>
              {`\n}`}
            </pre>
          </div>
        )}

        {selectedDataType === "video" && (
          <div className="mt-5">
            <div className="bg-mainDark text-mainBg p-4 rounded-md flex sm:text-xs">
              <p>
                <span className="bg-yellowColor px-2 py-1 rounded-md mr-1">
                  POST
                </span>{" "}
                http://127.0.0.1:8000/api/v1/send-video-file
              </p>
            </div>
            <div className="bg-mainDark text-mainBg p-4 rounded-md mt-4 sm:text-xs">
              <h2>Body Data:</h2>
              <pre>
                {`{\n`} <span className="text-success">"apiToken"</span>:{" "}
                <span className="text-decrease">"string"</span>,{"\n"}{" "}
                <span className="text-success">"videoFile"</span>:{" "}
                <span className="text-decrease">"string"</span>,{"\n"}{" "}
                <span className="text-success">"quality"</span>:{" "}
                <span className="text-decrease">"integer"</span>
                {"\n"}
              </pre>
              <h2>JSON Response:</h2>
              <pre>
                {`{\n`} <span className="text-success">"status"</span>:{" "}
                <span className="text-decrease">"integer"</span>,{"\n"}{" "}
                <span className="text-success">"message"</span>:{" "}
                <span className="text-decrease">"string"</span>,{"\n"}{" "}
                <span className="text-success">"data"</span>:{" "}
                <span className="text-decrease">"string"</span>
                {`\n}`}
              </pre>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ApiStructure;
