import Layout from '../components/general/Layout'
// import styles from '../styles/Home.module.css'
import Image from 'next/image';
import Link from 'next/link'
import Typewriter from 'typewriter-effect'
import { useStateContext } from '../context/UserContext'

export default function Home() {

    const { screenSize } = useStateContext()

    return (
        <div className="main">
            <Layout>
                <div className="main">
                    <div className="main_container flex-row">
                        <div className="main_content">
                            <h1>Wealth Creation:
                                <br />
                                <span className="typewriter"><Typewriter
                                    options={{
                                        autoStart: true,
                                        loop: true,
                                        delay: 40,
                                        strings: [
                                            "In Your Hands.",
                                            "On Your Phone.",
                                            "Anywhere You Are."
                                        ],
                                    }} /> </span>
                            </h1>
                            <p>Increase your side income with few simple steps
                                <br />while we build your money into a life long investment.
                            </p>
                            <a href="/signup_signin" className="main_btn">Get Started</a>
                            <div className="app-download align-center justify-center">
                                <h2 className="cmns">Coming Soon On</h2>
                                <div className="flex-wrap gap-1 inline-flex">
                                    <div class="flex mt-3 mx-auto w-40 h-14 bg-black text-white rounded-xl items-center justify-center">
                                        <div class="mr-3">
                                            <svg viewBox="0 0 384 512" width="25" >
                                                <path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div class="text-xs">SOON ON</div>
                                            <div class="text-xl font-semibold font-sans -mt-1">App Store</div>
                                        </div>
                                    </div>

                                    <div class="flex mt-3 mx-auto w-40 h-14 bg-black text-white rounded-lg items-center justify-center">
                                        <div class="mr-3">
                                            <svg viewBox="30 336.7 120.9 129.2" width="25">
                                                <path fill="#FFD400" d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z" />
                                                <path fill="#FF3333" d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z" />
                                                <path fill="#48FF48" d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z" />
                                                <path fill="#3BCCFF" d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div class="text-xs">SOON ON</div>
                                            <div class="text-lg font-semibold font-sans -mt-1">Google Play</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="top_images">
                            {/* <img src="/images/HiveInvest.png" className="shape" /> */}
                            <img src="/images/HiveInvestPhone.png" className="phone" />
                        </div>
                    </div>
                    <div className="services">
                        <div className="services_intro">
                            <h1>Our Services.</h1>
                            <p>Discover easy and fun ways to make money from anywhere you are. Discover Freedom!</p>
                        </div>
                        <div className="services_container">
                            <div className="services_card plane_cards">
                                <div className="box">
                                    <div>
                                        <img src="/images/betting_dice.jpg" className="services-images svc-img" alt="" srcSet="" />
                                    </div>
                                    <h4>Low Risk Betting</h4>
                                    <p>We have a specialised betting system that is done with an arbitrage gaming
                                        process.
                                        <br />We see to it that your investments are not placed on any odds above
                                        1.10 odd.
                                        <br /> This ensures that we stay committed to growing your investment.
                                    </p>
                                </div>
                            </div>
                            <div className="services_card rcorners">
                                <div className="box">
                                    <div>
                                        <img src="/images/investment.png" className="services-images svc-img" alt="" srcSet="" />
                                    </div>
                                    <h4>Profitable Trades</h4>
                                    <p>With our trading bot, a cumulative increase is guaranteed to grow your wealth with ease.
                                        <br />We only target an average of 1% daily growth of your investments.
                                        <br /> This ensures that we stay committed to growing your investment.
                                    </p>
                                </div>
                            </div>
                            <div className="services_card plane_cards">
                                <div className="box">
                                    <div>
                                        <img src="/images/icon_flash_loan.png" className="services-images" alt="" srcSet="" />
                                    </div>
                                    <h4>Flash Loans</h4>
                                    <p>Blockchain technology shows us more ways to increase profitability for our clients.
                                        <br />Flash loan allows us to borrow more cryptocurrency and trade it at higher rate in a split second without taking losses.
                                        <br />Blockchain is the future of investment, why wait?.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <a className="cta Get_Started" href="/signup_signin"><button className="get_started_button"> Get Started &nbsp;<img
                            src="/images/get-started-icon.png" className="get_started_image" alt="" srcSet="" /></button></a>
                    </div>
                    <div className="contact_us_div">
                        <div className="svgrect"></div>
                        <div id="contact-correct" className="container-fluid row">
                            <div className="contact_us_cta col-lg-6 col-md-6 col-sm-12"><img src="/images/Flash_loan_section.png"
                                className="floan-image" alt="" srcSet="" />
                            </div>
                            <div className="contact_us col-lg-6 col-md-6 col-sm-12">
                                <h1>Have Any Concerns?</h1>
                                <p>Let us know what your concerns are, we will do well to
                                    <br />address them and help you with your investment.
                                </p>
                                <a href="cta" className="learn_more_button">Learn More!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}
