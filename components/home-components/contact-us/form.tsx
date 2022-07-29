import { Card } from '@/components/data-components/card'
import { HomeButton } from '@/components/data-components/home-button'
import { HomePageType } from '@/lib/interface'
import { Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

export default function ContactUsForm({ data }: HomePageType) {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required(
      data?.common.contactUsFormErrorFirstNameMissing,
    ),
    lastName: Yup.string().required(
      data?.common.contactUsFormErrorLastNameMissing,
    ),
    message: Yup.string().required(
      data?.common.contactUsFormErrorMessageMissing,
    ),
    email: Yup.string()
      .email(data?.common.contactUsFormErrorEmailInvalid)
      .required(data?.common.contactUsFormErrorEmailMissing),
    phone: Yup.string()
      .matches(
        /^((\+|00)?972\-?|0)(([23489]|[57]\d)\-?\d{7})$/,
        data?.common.contactUsFormErrorPhoneInvalid,
      )
      .required(data?.common.contactUsFormErrorPhoneMissing),
  })
  return (
    <Card className="   gap-2 pt-[5px]   md:mt-[-30%]"><>
      <style jsx>{`
        .contactus-form .input input,
        .contactus-form .input textarea {
          height: 40px;
          margin-bottom: 10px;
          width: 100%;
          padding: 10px;
          border: 1px solid #ffffff;
          filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25));
          border-radius: 8px;
        }
        .contactus-form .input textarea {
          height: 120px;
        }
        .contactus-form .row {
          display: flex;
          column-gap: 20px;
          flex-wrap: wrap;
          margin-bottom: 25px;
        }

        .contactus-form .column {
          font-weight: 700;
          font-size: 22px;
          line-height: 29px;
          flex-shrink: 0;
          flex-grow: 1;
        }
      `}</style>
      <Formik
        initialValues={{
          email: '',
          firstName: '',
          lastName: '',
          phone: '',
          message: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values)
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form className="p-[50px] contactus-form">
            <div className="row">
              <div className="column">
                <div className="text">
                  {data?.common.contactUsFormFirstName}
                </div>
                <div className="input">
                  <input
                    type="text"
                    name="firstName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                  />
                  <div>
                    {' '}
                    {errors.firstName && touched.firstName && errors.firstName}
                  </div>
                </div>{' '}
              </div>
              <div className="column">
                <div>{data?.common.contactUsFormLastName}</div>
                <div className="input">
                  <input
                    type="text"
                    name="lastName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                  />
                  <div>
                    {' '}
                    {errors.lastName && touched.lastName && errors.lastName}
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="column">
                <div>{data?.common.contactUsFormEmail}</div>
                <div className="input">
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                </div>
                <div> {errors.email && touched.email && errors.email}</div>
              </div>
              <div className="column">
                <div>{data?.common.contactUsFormPhone}</div>
                <div className="input">
                  <input
                    type="text"
                    name="phone"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phone}
                  />

                  <div> {errors.phone && touched.phone && errors.phone}</div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="text">{data?.common.contactUsFormMessage}</div>
            </div>
            <div className="input">
              <textarea
                className=" w-full"
                name="message"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
              />
              <div>{errors.message && touched.message && errors.message}</div>
            </div>

            <HomeButton className="mt-2em mb-[5em]">
              {data?.common.contactUsFormSendButton||''}
            </HomeButton>
          </form>
        )}
      </Formik></>
    </Card>
  )
}
