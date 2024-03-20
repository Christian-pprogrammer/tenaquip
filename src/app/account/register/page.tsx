import React from 'react'

const Register = () => {
  return (
    <div className='px-32 my-3'>
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
        

    </div>
  )
}

export default Register