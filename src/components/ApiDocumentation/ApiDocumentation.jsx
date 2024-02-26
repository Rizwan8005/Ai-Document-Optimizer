import React from 'react'
import Layout from '../../layout/Layout'

const ApiDocumentation = () => {
  return (
    <Layout>
      <div className="px-40 lg:px-8 xs:px-4 mt-8">
        <div className="shadow-navbar-button p-4 rounded-md bg-apiDoc">
          <h1 className="font-bold text-xl text-mainDark sm:text-lg sm:pb-3">
            Api Documentation
          </h1>
          <p className="sm:text-xs">
            Welcome to the API documentation for file-related operations. Here
            you will find information about how to upload files to the server
            using the API.
          </p>
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
          <h2 className="font-bold text-xl text-mainDark mt-4 sm:mt-2 sm:text-lg">
            Formatting Requests
          </h2>
          <p className="sm:text-sm">
            To format your requests, follow these guidelines:
          </p>
          <ul className="list-disc ml-6 sm:text-xs">
            <li>
              Use the API endpoint{" "}
              <code>http://127.0.0.1:8000/api/v1/send-file</code> for file
              uploads.
            </li>
            <li>
              Use <code>multipart/form-data</code> as the content type for the
              request body.
            </li>
            <li>
              Include the file to upload as the <code>file</code> parameter.
            </li>
          </ul>
          <h2 className="font-bold text-xl text-mainDark mt-4 sm:mt-2 sm:text-lg">
            Authenticating Requests
          </h2>
          <p className="sm:text-sm">
            To authenticate your requests, include an authentication token in
            the request headers.
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default ApiDocumentation
