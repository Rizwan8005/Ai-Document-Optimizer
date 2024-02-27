import React from "react";
import Layout from "../../layout/Layout";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <div className="px-40 lg:px-8 xs:px-4 mt-5">
        <div className="rounded-[28px] shadow-navbar-button py-8 px-12 lg:px-8 xs:px-4 sm:py-4">
          <h1 className="text-2xl sm:text-xl font-bold mb-6 sm:mb-3">
            Privacy Policy
          </h1>
          <p className="mb-4 sm:mb-2 sm:text-xs">
            Your privacy is important to us. It is AI Document Optimizer's
            policy to respect your privacy regarding any information we may
            collect from you across our website, www.aidocumentoptimizer.com,
            and other sites we own and operate.
          </p>
          <p className="mb-4 sm:mb-2 sm:text-xs">
            We only ask for personal information when we truly need it to
            provide a service to you. We collect it by fair and lawful means,
            with your knowledge and consent. We also let you know why we’re
            collecting it and how it will be used.
          </p>
          <p className="mb-4 sm:mb-2 sm:text-xs">
            We only retain collected information for as long as necessary to
            provide you with your requested service. What data we store, we’ll
            protect within commercially acceptable means to prevent loss and
            theft, as well as unauthorized access, disclosure, copying, use or
            modification.
          </p>
          <p className="mb-4 sm:mb-2 sm:text-xs">
            We don’t share any personally identifying information publicly or
            with third-parties, except when required to by law.
          </p>
          <p className="mb-4 sm:mb-2 sm:text-xs">
            Our website may link to external sites that are not operated by us.
            Please be aware that we have no control over the content and
            practices of these sites, and cannot accept responsibility or
            liability for their respective privacy policies.
          </p>
          <p className="mb-4 sm:mb-2 sm:text-xs">
            You are free to refuse our request for your personal information,
            with the understanding that we may be unable to provide you with
            some of your desired services.
          </p>
          <p className="mb-4 sm:mb-2 sm:text-xs">
            Your continued use of our website will be regarded as acceptance of
            our practices around privacy and personal information. If you have
            any questions about how we handle user data and personal
            information, feel free to contact us.
          </p>
          <p className="mb-4 sm:mb-2 sm:text-xs">
            This policy is effective as of 1 January 2024.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
