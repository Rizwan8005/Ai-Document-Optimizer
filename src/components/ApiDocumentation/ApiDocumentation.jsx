import React from "react";
import Layout from "../../layout/Layout";

const ApiDocumentation = () => {
  return (
    <Layout>
      <div className="px-40 lg:px-8 xs:px-4 mt-8">
        <div className="shadow-navbar-button p-4 rounded-md bg-apiDoc">
          <h1 className="font-bold text-xl text-mainDark sm:text-lg sm:pb-3">
            Api Documentation
          </h1>
          <p className="sm:text-xs">
            Welcome to the API documentation for file and video related operations. Here
            you will find information about how to upload files to the server
            using the API.
          </p>

          {/* File Upload Endpoint */}
          <h2 className="font-bold text-xl sm:text-lg text-mainDark mt-4 sm:mt-2">
            File Upload Endpoint
          </h2>
          <ul className="list-disc ml-6 sm:text-xs">
            <li>
              <strong>Endpoint:</strong>{" "}
              <code>POST http://127.0.0.1:8000/api/v1/send-file</code>
            </li>
            <li>
              <strong>Description:</strong> Uploads a file to the server.
            </li>
            <li>
              <strong>Request:</strong> Use <code>multipart/form-data</code>{" "}
              content type for the request body. Include the file to upload as
              the <code>file</code> parameter.
            </li>
            <li>
              <strong>Response:</strong> Receives a JSON response with status,
              message, and path of the uploaded file.
            </li>
          </ul>

          {/* Get File Metadata Endpoint */}
          <h2 className="font-bold text-xl text-mainDark mt-4 sm:mt-2 sm:text-lg">
            Get File Metadata Endpoint
          </h2>
          <ul className="list-disc ml-6 sm:text-xs">
            <li>
              <strong>Endpoint:</strong>{" "}
              <code>GET http://127.0.0.1:8000/api/v1/get-file-metadata</code>
            </li>
            <li>
              <strong>Description:</strong> Retrieves metadata for a file.
            </li>
            <li>
              <strong>Request:</strong> Include the file ID as a query
              parameter.
            </li>
            <li>
              <strong>Response:</strong> Returns a JSON response with file
              metadata.
            </li>
          </ul>

          {/* Send Video File Endpoint */}
          <h2 className="font-bold text-xl text-mainDark mt-4 sm:mt-2 sm:text-lg">
            Send Video File Endpoint
          </h2>
          <ul className="list-disc ml-6 sm:text-xs">
            <li>
              <strong>Endpoint:</strong>{" "}
              <code>POST http://127.0.0.1:8000/api/v1/send-video-file</code>
            </li>
            <li>
              <strong>Description:</strong> Uploads a video file to the server.
            </li>
            <li>
              <strong>Request:</strong> Use <code>multipart/form-data</code>{" "}
              content type for the request body. Include the video file to
              upload as the <code>file</code> parameter.
            </li>
            <li>
              <strong>Response:</strong> Receives a JSON response with status,
              message, and path of the uploaded video file.
            </li>
          </ul>

          {/* Formatting and Authentication sections remain the same */}
        </div>
      </div>
    </Layout>
  );
};

export default ApiDocumentation;
