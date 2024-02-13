"use client";
import { formApiData, postApiDataToForm } from "@/store/api";
import { useState, useEffect } from "react";
import PreloaderForm from "../PreloaderForm/PreloaderForm";
const ContactForm = () => {
  const [formFields, setFormFields] = useState([]);
  const [formData, setFormData] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [response, setResponse] = useState({});

  useEffect(() => {
    async function awaitRenderFormData() {
      const resp = await formApiData();
      setFormFields(resp);
    }
    awaitRenderFormData().catch(console.error);
    setIsLoading(false);
  }, []);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await postApiDataToForm(formData);
    setResponse(resp);
    if (resp.is_valid !== false) {
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <p style={{ color: "green" }}>
        {formFields.confirmations["65ba1d0bd9ebf"].message}
      </p>
    );
  }
  return isLoading ? (
    <PreloaderForm />
  ) : (
    <>
      {!formFields?.fields ? (
        <p className="error">{formFields?.message}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          {formFields?.fields?.map((field) => {
            const errorClass =
              response !== undefined &&
              response.validation_messages?.[field.id]?.length > 0
                ? "error"
                : "";
            return (
              <div key={field.id}>
                {response !== undefined && (
                  <p className="error">
                    {response?.validation_messages?.[field.id]}
                  </p>
                )}

                {field.type === "text" && (
                  <input
                    className={errorClass}
                    type={field.inputType}
                    id={field.id}
                    name={`input_${field.id}`}
                    placeholder={field.label}
                    value={formData[`input_${field.id}`] || ""}
                    onChange={handleInputChange}
                  />
                )}
                {field.type === "email" && (
                  <input
                    className={errorClass}
                    type={field.inputType}
                    name={`input_${field.id}`}
                    placeholder={field.label}
                    value={formData[`input_${field.id}`] || ""}
                    onChange={handleInputChange}
                  />
                )}
                {field.type === "post_excerpt" && (
                  <textarea
                    className={errorClass}
                    type={field.inputType}
                    name={`input_${field.id}`}
                    placeholder={field.label}
                    value={formData[`input_${field.id}`] || ""}
                    onChange={handleInputChange}
                  />
                )}
              </div>
            );
          })}
          <button className="primary" type="submit">
            {formFields?.button?.text}
          </button>
        </form>
      )}
    </>
  );
};

export default ContactForm;
