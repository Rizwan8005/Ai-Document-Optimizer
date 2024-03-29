import React, { useEffect, useState } from "react";
import { useRegisterAuthorMutation } from "../../../store/services/services";
import { Form, Input } from "antd";
import { toast } from "react-toastify";
import Paragraph from "antd/es/typography/Paragraph";
import { LoadingOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import {setCounterUpdate} from '../../../store/slices/counterSlice'

const GenerateKeyPopup = ({ shouldResetForm, setShouldResetForm }) => {
  const [form] = Form.useForm();
  const [apiToken, setApiToken] = useState(null);
  const [isSuccessPopup, setIsSuccessPopup] = useState(false);
  const [registerAuthor, { isSuccess, isError, error, isLoading }] =
   useRegisterAuthorMutation();
  const dispatch = useDispatch()

  // handle submit
  const handleSubmit = async () => {
    try {
      await form.validateFields();
      const values = form.getFieldsValue();
      const res = await registerAuthor(values);
      setApiToken(res?.data?.data?.token);
      dispatch(setCounterUpdate(true));
      // Store user id in localStorage
      localStorage.setItem("userId", res?.data?.data?.user?.id);
      setIsSuccessPopup(true);
    } catch (errorInfo) {
      console.log("Failed:", errorInfo);
    }
  };

  // handle toast message
  useEffect(() => {
    if (isSuccess) {
      toast.success("token generated successful!");
    } else if (isError) {
      console.log(error.data.message, "this is error");
      toast.error(error.data.message);
    }
  }, [isSuccess, isError]);

  // Clear form fields if required
  useEffect(() => {
    if (shouldResetForm) {
      form.resetFields();
      setShouldResetForm(false);
      setIsSuccessPopup(false); // Reset isSuccess state
    }
  }, [form, shouldResetForm]);

  return (
    <div className="p-6 sm:p-3 xs:p-1">
      {isSuccess && isSuccessPopup ? (
        <>
          <div className="flex justify-between items-center pb-3 border-b border-border">
            <p className="text-sm font-medium">Copy your API Key:</p>
            <Paragraph copyable>{apiToken}</Paragraph>
          </div>
          <p className="text-sm font-medium mt-2">
            Please visit to your Gmail inbox for the API token.
          </p>
        </>
      ) : (
        <>
          <Form form={form} onFinish={handleSubmit}>
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please enter your name" }]}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
            >
              <Input placeholder="enter your name" />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please enter your email" }]}
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
            >
              <Input placeholder="enter your email" />
            </Form.Item>
            <Form.Item
              label="Website (optional)"
              name="website"
              labelCol={{ span: 24 }}
              wrapperCol={{ span: 24 }}
            >
              <Input placeholder="https://example.com" />
            </Form.Item>
          </Form>
          <div
            className="bg-primary text-center text-grey py-2 cursor-pointer disabled:bg-disabledButton"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? (
              <LoadingOutlined className="text-2xl" spin />
            ) : (
              "Submit"
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default GenerateKeyPopup;
