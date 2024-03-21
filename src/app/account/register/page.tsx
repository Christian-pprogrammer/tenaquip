import React from 'react'

const Register = () => {
  return (
    <div className='px-32 mt-4 mb-11'>
      <div className=''>
        <h2 className='font-semibold text-2xl text-Gray my-2'>Register</h2>
        <p className='my-2 text-Gray text-sm'>Already registered? Sign in for fast checkout, shopping lists, order history, and more!</p>
      </div>
      <div>
        <hr className="my-[15px] w-[100%] border-t-[#ddd]" />
      </div>
      <div>
        <h3 className="font-semibold text-xl text-Gray my-2">
          Your Information
        </h3>

        <div className="grid md:grid-cols-2 max-w-[700px]">
          <div className="firstName">
            <label htmlFor="firstName" className='custom-label'>First Name</label>
            <input type="text" className='custom-input' />
          </div>
          <div className="lastName">
            <label htmlFor="firstName" className='custom-label'>Last Name</label>
            <input type="text" className='custom-input' />
          </div>
          <div className="jobTitle">
            <label htmlFor="jobTitle" className='custom-label'>Job Title</label>
            <input type="text" className='custom-input' />
          </div>
          <div className="email">
            <label htmlFor="email" className='custom-label'>Email</label>
            <input type="text" className='custom-input' />
          </div>
          <div className="password">
            <label htmlFor="password" className='custom-label'>Password</label>
            <input type="text" className='custom-input' />

            <p className='font-semibold text-[12px] text-Gray'>Password Requirements</p>
            <ul className='list-none'>
              <li className='text-[12px] text-[#777]'>Must be at least 8 characters</li>
              <li className='text-[12px] text-[#777]'>Must containt at least 1 number</li>
              <li className='text-[12px] text-[#777]'>Must contain at least 1 letter</li>
              <li className='text-[12px] text-[#777]'>Must contain at least 1 special character [~!@#$%^&*()_+]</li>
            </ul>
            {/**password requirements */}
          </div>
          <div className="repeatPassword">
            <label htmlFor="repeatPassword" className='custom-label'>Repeat Password</label>
            <input type="text" className='custom-input' />
          </div>
          <div className="passwordResetQuestion">
            <label htmlFor="passwordResetQuestion" className='custom-label'>Password Reset Question</label>
            <select className='custom-input'>
              <option value="">Select a Password Reset Question</option>
              <option value="What is your mother's maiden name">What is your mother's maiden name</option>
            </select>
          </div>
          <div className="passwordResetQuestion">
            <label htmlFor="passwordResetQuestion" className='custom-label'>Password Reset Question Answer</label>
            <input className='custom-input'>

            </input>
          </div>
        </div>
      </div>
      <div>
        <hr className="my-[15px] w-[100%] border-t-[#ddd]" />
      </div>
        <h3 className="font-semibold text-xl text-Gray my-2">
          Your Company Information
        </h3>
        <div className="grid md:grid-cols-2 max-w-[700px]">
          <div className="firstName">
            <label htmlFor="companyName" className='custom-label'>Company Name</label>
            <input type="text" className='custom-input' />
          </div>

          <div></div>

          <div className="address1 col-span-2">
            <label htmlFor="address1" className='custom-label'>Address</label>
            <input type="text" className='custom-input' />
          </div>
          <div className="address2 col-span-2">
            <label htmlFor="jobTitle" className='custom-label'>Address 2</label>
            <input type="text" className='custom-input' />
          </div>
          <div className="city">
            <label htmlFor="city" className='custom-label'>City</label>
            <input type="text" className='custom-input' />
          </div>

          <div></div>

          <div className="country">
            <label htmlFor="country" className='custom-label'>Country</label>
            <select name="country" id="country" className="custom-input">
              <option value="Canada">Canada</option>
              <option value="United States">United States</option>
            </select>
          </div>

          <div className="province">
            <label htmlFor="province" className='custom-label'>Province/State</label>
            <select name="province" id="province" className="custom-input">
              <option value="">Alaska</option>
            </select>
          </div>
          <div className="zipCode">
            <label htmlFor="zipCode" className='custom-label'>Postal/ZIP Code</label>
            <input type="text" className="custom-input" />
          </div>
          <div></div>
          <div className="phone">
            <label htmlFor="phone" className='custom-label'>Phone</label>
            <input type="text" className="custom-input" />
          </div>
          <div className="extension">
            <label htmlFor="extension" className='custom-label'>Extension</label>
            <input type="text" className="custom-input" style={{
              maxWidth: '100px !important'
            }} />
          </div>
          <div className='col-span-2'>
            <hr className="my-[15px] w-[100%] border-t-[#ddd]" />
          </div>
          <div>
          <label htmlFor="correspondance" className="custom-label">
            Correspondance
          </label>

          <div className='english flex items-center gap-1 my-1'>
            <input type="radio" value="English" /> <label htmlFor="English" className='english custom-label' style={{
              marginTop: '0px !important'
            }}>English</label>
          </div>

          <div className='english flex items-center gap-1 my-1'>
            <input type="radio" value="English" /> <label htmlFor="English" className='english custom-label' style={{
              marginTop: '0px !important'
            }}>French</label>
          </div>
          
          <div className="campaigns flex gap-1 my-4">
            <input type="checkbox" value="campaigns" /> <label htmlFor="campaigns" className='custom-label' style={{
              marginTop: "0px !important"
            }}>
              I Want to Receive TENAQUIP Email Campaigns
            </label>
          </div>
        </div>
        <div></div>
        <div className='col-span-2'>
          <button className="inline-block bg-mainColor text-white text-center w-[100%] rounded-sm text-sm p-4">
            Register
          </button>
        </div>
      </div>
    </div>
  )
}

export default Register