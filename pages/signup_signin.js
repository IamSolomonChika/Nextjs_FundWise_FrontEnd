import Layout from '../components/general/Layout'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faUser, faLock,faLockOpen, faUserFriends, faUnlockKeyhole } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';


const Signup_Signin = () => {

    // Toggle page from Signin to signup
    const [toggle, setToggle] = useState('false');
    const toggleSwitch = () => {toggle ? setToggle(false) : setToggle(true);};

    //Form Validation
    const initialSignupValues = {email: "", password: "", confirmPassword: "", referrer: ""};
    const [formSignupValue, setFormSignupValue] = useState(initialSignupValues);
    const [formSignupErrors, setFormSignupErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleSignupChange = (e) => {
        const {name, value} = e.target;
        setFormSignupValue({...formSignupValue, [name]: value});
        console.log(formSignupValue);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSignupErrors(validate(formSignupValue));
        setIsSubmit(true);
    }

    useEffect(() => {
        console.log(formSignupErrors);
        if (Object.keys(formSignupErrors).length === 0 && isSubmit) {
            console.log(formSignupValue);
        }
    })

    const validate = (values) => {
        const errors = {};
        const regex = /^\S+@\S+\.\S+$/;
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.email(values.email)) {
            errors.email = "Enter a valid email!";
        }
        if (!values.password) {
            errors.password = "Password is required!"
        }
        if (!values.confirmPassword) {
            errors.confirmPassword = "Password does not match!"
        }
        return errors;
    }
    

    return (
        <div className="main">
            <Layout>
                <div className="susi_container">
                    <div className={toggle ? "s_container" : "s_container sign_up_mode"}>
                        <div className="form_container">
                            <div className="signin_signup">
                                <form action="" className="sign_in_form">
                                    <h2 className="title">Sign In</h2>
                                    <div className="socials">
                                        <a href="" className="s_social_icon">
                                            <FontAwesomeIcon icon={faFacebookF} />
                                        </a>
                                        <a href="" className="s_social_icon">
                                            <FontAwesomeIcon icon={faGoogle} />
                                        </a>
                                        <a href="" className="s_social_icon">
                                            <FontAwesomeIcon icon={faLinkedinIn} />
                                        </a>
                                    </div>
                                    <p className="social_text">Or Sign in with Email</p>
                                    <div className="input_field"><div className='faicons'><FontAwesomeIcon icon={faUser} /></div>
                                        <input type="email" placeholder="Email" name="email" />
                                    </div>
                                    <div className="input_field"><div className='faicons'><FontAwesomeIcon icon={faLockOpen} /></div>
                                        <input type="password" placeholder="Password" name="password" />
                                    </div>
                                    <input type="submit" value="login" className="s_btn solid" />
                                    <p><a href="">Forgot Password?</a></p>
                                </form>

                                <form action="" className="sign_up_form" onSubmit={handleSubmit}>
                                    <h2 className="title">Sign Up</h2>
                                    <div className="socials">
                                        <a href="" className="s_social_icon">
                                            <FontAwesomeIcon icon={faFacebookF} />
                                        </a>
                                        <a href="" className="s_social_icon">
                                            <FontAwesomeIcon icon={faGoogle} />
                                        </a>
                                        <a href="" className="s_social_icon">
                                            <FontAwesomeIcon icon={faLinkedinIn} />
                                        </a>
                                    </div>
                                    <p className="social_text">Or Sign up with Email</p>
                                    <p>{formSignupErrors.email}</p>
                                    <div className="input_field"><div className='faicons'><FontAwesomeIcon icon={faUser} /></div>
                                        <input type="email" placeholder="Email" name="email" value={formSignupValue.email} onChange={handleSignupChange} />
                                    </div>
                                    <p>{formSignupErrors.password}</p>
                                    <div className="input_field"><div className='faicons'><FontAwesomeIcon icon={faUnlockKeyhole} /></div>
                                        <input type="password" placeholder="Password" name="password" value={formSignupValue.password} onChange={handleSignupChange} />
                                    </div>
                                    <p>{formSignupErrors.confirmPassword}</p>
                                    <div className="input_field"><div className='faicons'><FontAwesomeIcon icon={faLock} /></div>
                                        <input type="confirmPassword" placeholder="Confirm Password" name="confirmPassword" value={formSignupValue.confirmPassword} onChange={handleSignupChange} />
                                    </div>
                                    <div className="input_field"><div className='faicons'><FontAwesomeIcon icon={faUserFriends} /></div>
                                        <input type="referrer" placeholder="Referral Code (Optional)" name="referrer" value={formSignupValue.referrer} onChange={handleSignupChange} />
                                    </div>
                                    {/* onChange={activateButton(this)}  */}
                                    <p><input className="on change was in this Line" type="checkbox" name="terms" id="terms" />&nbsp; I have
                                        read the<a href="">Terms</a> and <a href="">Privacy Policy</a>.</p>
                                    <input type="submit" value="SignUp" id="signup_submit" className="s_btn solid" />
                                </form>
                            </div>
                        </div>

                        <div className="panels_container">
                            <div className="panel left_panel">
                                <div className="content">
                                    <h3> Don't Have An Account?</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem magni fugit labore.</p>
                                    <button className="s_btn transparent" id="sign_up_btn" onClick={toggleSwitch}>Sign Up</button>
                                </div>
                                {/* <!-- <img src="/images/logins.svg" className="sp_images" alt="" /> --> */}
                            </div>

                            <div className="panel right_panel">
                                <div className="content">
                                    <h3>Already a Member?</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem magni fugit labore.</p>
                                    <button className="s_btn transparent" id="sign_in_btn" onClick={toggleSwitch}>Sign In</button>
                                </div>
                                {/* <!-- <img src="/images/signups.svg" className="sp_images" alt="" /> --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
}

export default Signup_Signin;