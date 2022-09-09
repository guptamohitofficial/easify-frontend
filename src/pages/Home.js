import './styles.css';

function Home() {
  return (
    <div>
      <main className="">
        <header className="a g z aa _a b c">{/* Start Header */}
          <a href="/" className="zb bc hover:ub" style={{display: 'flex'}}>
            <img src="/check128.png" alt='easify logo' width="20px" />{'\u00A0'}
            <span className='pb'>easify</span>
          </a>
          <div className="g z">
            <div className="i ea pb md:yc">
              <a href="#services" className="zb bc hover:ub">Services</a>
              {/* <a href="#0" className="zb bc hover:ub">Prices</a>
              <a href="#0" className="zb bc hover:ub">About</a> */}
              <a href="#contact" className="zb bc hover:ub">Contact</a>
              {/* <button className="wa hover:xa zb cc ab.5 bb oa rb qb">Get Started</button> */}
            </div>
            <div className="md:i">
              <a href="#0" className="">
                <svg xmlns="http://www.w3.org/2000/svg" className="j o" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </a>
            </div>
          </div>
        </header>{/* End Header */}
        <section className="a _a cb b sm:wc md:bd xl:ld">{/* Start Hero */}
          <div className="h z ba lg:mc">
            <div className="ga lg:ja">
              <div className="ha">
                <h1 className="ib qb sm:xc">Easify your digital Works or Business</h1>
                <p className="u jb">Need a Website or e-Mailing api? Get all at Digital Service at one place.</p>
              </div>
              <div className="g y sm:nc ia.5 sm:oc">
                <input className="p db eb qa oa yb sm:kc sm:vc sm:qc sm:rc sm:sc focus:gc" type="text" placeholder="Your email address" />
                <button type="submit" className="db eb qb rb zb cc oa wa hover:xa sm:qc sm:tc sm:uc">Get in Touch</button>
              </div>
            </div>
            <div className="">
              <img src="assets/img/illustration.png" alt="Illustration" />
            </div>
          </div>
        </section>{/* End Hero */}
        <section className="ua" id="services">{/* Start Features */}
          <div className="a _a cb b sm:wc md:bd xl:ld">
            <div className="d ma gb lg:dd">
              <h2 className="ib qb md:cd">Our New Services</h2>
              <p className="b lb md:zc"><a rel="noreferrer" style={{color:'blue'}} href="https://docs.google.com/forms/d/e/1FAIpQLSedvvD_qoDclfQKD52R1GcbfZF7MlOlnbGyb_iDEOghx0oxaQ/viewform" target='_blank'>Click here</a> to get your free customized site now</p>
            </div>
            <div className="h da sm:mc xl:jd lg:ba">
              <div className="ya ha _b bc va oa xb hover:ic">
                <div className="g z _ r l rb pa bg-emerald-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="s m" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ma">
                  <h4 className="mb qb md:kb">Websites</h4>
                  <p>Get you websites managed or build from scratch.</p>
                </div>
              </div>
              <div className="ya ha _b bc va oa xb hover:ic">
                <div className="g z _ r l rb pa bg-emerald-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="s m" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ma">
                  <h4 className="mb qb md:kb">Forms</h4>
                  <p>Embedable forms, Create dynamic forms with permissions easily.</p>
                </div>
              </div>
              <div className="ya ha _b bc va oa xb hover:ic">
                <div className="g z _ r l rb pa bg-emerald-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="s m" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ma">
                  <h4 className="mb qb md:kb">PushN</h4>
                  <p>Integrate Push notificatinos to you App or Website from easify console.</p>
                </div>
              </div>
              <div className="ya ha _b bc va oa xb hover:ic">
                <div className="g z _ r l rb pa bg-emerald-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="s m" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ma">
                  <h4 className="mb qb md:kb">Mails</h4>
                  <p>Get e-Mailing API to keep your customer one api call away.</p>
                </div>
              </div>
            </div>
          </div>
        </section>{/* End Features */}
        <section className="a b sm:_a" id="contact">{/* Start Sing up */}
          <div className="_a cb rb wa sm:wc md:bd xl:ld sm:oa">
            <div className="f ma gb lg:ed">
              <h2 className="ib qb md:cd">Start your free trials</h2>
              <p className="b lb md:zc">Easify sites lauch offer is currently active, <a rel="noreferrer" style={{color:'black'}} href="https://docs.google.com/forms/d/e/1FAIpQLSedvvD_qoDclfQKD52R1GcbfZF7MlOlnbGyb_iDEOghx0oxaQ/viewform" target='_blank'>Click here</a> to get your free customized site now</p>
            </div>
            <div className="g y sm:nc ia.5 sm:oc _">
              <input className="p db eb qa ta ra oa yb sm:kc sm:vc sm:qc sm:rc sm:sc focus:jc" type="text" placeholder="Your email address" />
              <button type="submit" className="db eb qb rb zb cc oa xa hover:hc sm:qc sm:tc sm:uc">Get in Touch</button>
            </div>
          </div>
        </section>{/* End Sing up */}
        <footer className="a _a fb b c">
          <hr className="e" />
          {/* <div className="g y aa e ha md:nc md:oc">
            <div className="v">
              <a href="/" className=""><img src="/check32.png" alt="Logo" /> easify</a>
            </div>
            <div className="g v ea pb md:_">
              <a href="#0" className="zb bc hover:ub">Features</a>
              <a href="#0" className="zb bc hover:ub">Prices</a>
              <a href="#0" className="zb bc hover:ub">About</a>
              <a href="#0" className="zb bc hover:ub">Contacts</a>
            </div>
            <div className="g v na md:_c">
              <a href="#f">
                <i className="mb ac dc ec w hover:fc bx bxl-facebook-circle" />
              </a>
              <a href="#f">
                <i className="mb ac dc ec w hover:fc bx bxl-twitter" />
              </a>
            </div>
          </div> */}
          <div className="g y ia ob tb md:nc md:_ md:oc md:ad" style={{display: 'flex'}}>
            <p>Copyright © 2021 Easify. All rights reserved.</p>
            {/* <p>Made with Love by <a href="https://moohit.in" target="_blank" style={{color:'blue'}}>Mohit Gupta</a></p> */}
          </div>
        </footer>
      </main>
    </div>

  );
}

export default Home;
