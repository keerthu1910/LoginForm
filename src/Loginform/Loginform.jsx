import './style.scss';
export const Loginform = () => {
    return(
        <div className='login-form-container'>
            <p>Contact Us</p>
            <div className='name-container'>
                <div className='firstname-container'>
                    <label htmlFor='firstname'>First Name <sup>*</sup></label>
                    <input type='text' id='firstname' className='firstname'/>
                </div>
                <div className='lastname-container'>
                    <label htmlFor='lastname'>Last Name <sup>*</sup></label>
                    <input type='text' id='lastname' className='lastname'/>
                </div>
            </div>
            <div className='email-container'>
                <label htmlFor='email'>Email Address <sup>*</sup></label>
                <input type='email' id='email' className='email'/>
            </div>
            <div className='query-type-container'>
                <label>Query Type <sup>*</sup></label>
                <div className='option-container'>
                    <div>
                    <input style={{backgroundColor:'red'}} type='radio' name='query' id='general-enquiry' /><span>General enquiry</span>
                    </div>
                    <div>
                    <input type='radio' name='query' id='support-request' /><span>Support request</span>
                    </div>
                </div>
            </div>
            <div className='message-container'>
                <label>Message <sup>*</sup></label>
                <input type='text' className='message' id='message' />
            </div>
            <div className='consent-container'>
                <input type='checkbox' id='consent' /><span>I consent to being contacted by the team <sup>*</sup></span>
            </div>
            <button>Submit</button>
        </div>
    )
}