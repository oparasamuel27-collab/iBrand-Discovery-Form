import Head from 'next/head'
import { useRef } from 'react'

export default function Home() {
  const formRef = useRef(null)
  const phoneRef = useRef(null)
  const emailRef = useRef(null)
  const feedbackRef = useRef(null)

  const validateContactDetails = () => {
    const phoneInput = phoneRef.current
    const emailInput = emailRef.current

    const hasPhone = phoneInput.value.trim().length > 0
    const hasEmail = emailInput.value.trim().length > 0
    const phoneDigits = phoneInput.value.replace(/\D/g, "")

    phoneInput.setCustomValidity("")
    emailInput.setCustomValidity("")

    if (!hasPhone && !hasEmail) {
      const message = "Enter a phone number or email address."
      phoneInput.setCustomValidity(message)
      emailInput.setCustomValidity(message)
    } else if (hasPhone && phoneDigits.length < 7) {
      phoneInput.setCustomValidity("Enter a valid phone number with at least 7 digits.")
    }
  }

  const handleInput = () => {
    validateContactDetails()
    if (feedbackRef.current) {
      feedbackRef.current.textContent = ""
      feedbackRef.current.removeAttribute("data-state")
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = formRef.current
    const feedback = feedbackRef.current

    validateContactDetails()
    form.classList.add("is-validated")

    if (!form.reportValidity()) {
      feedback.textContent = "Please correct the highlighted fields."
      feedback.dataset.state = "error"
      return
    }

    feedback.textContent = "Validation passed. This form is not connected to a submission service."
    feedback.dataset.state = "success"
  }

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#17274f" />
        <title>Prospect Discovery Form | iBrand Africa</title>
      </Head>

      <main>
        <section className="page cover" aria-label="Prospect Discovery Form cover">
          <img className="brand-logo" src="/img/Ibrand Logo .png" alt="iBrand Africa" />
          <h1 className="cover-title"><span>Prospect</span><span>Discovery Form</span></h1>
        </section>

        <form id="prospect-form" ref={formRef} noValidate onSubmit={handleSubmit} onInput={handleInput}>
          <section className="page" aria-label="Business information and understanding the business">
            <div className="form-banner">
              <img src="/img/iBrand asset02.png" alt="" />
              <h2><span>PROSPECT</span><span>DISCOVERY FORM</span></h2>
            </div>
            <section className="form-section">
              <header className="section-heading"><span className="letter">A</span><h2 className="title">Business Information</h2></header>
              <div className="field-grid">
                <div className="line-field wide"><label htmlFor="business-name">Business Name:</label><input id="business-name" name="businessName" autoComplete="organization" required /></div>
                <div className="line-field wide"><label htmlFor="industry">Industry:</label><input id="industry" name="industry" /></div>
                <div className="line-field"><label htmlFor="contact-person">Contact Person:</label><input id="contact-person" name="contactPerson" autoComplete="name" required /></div>
                <div className="line-field"><label htmlFor="position">Position/Role:</label><input id="position" name="position" /></div>
                <div className="line-field wide"><label htmlFor="phone">Phone:</label><input id="phone" name="phone" type="tel" autoComplete="tel" ref={phoneRef} /></div>
                <div className="line-field wide"><label htmlFor="email">Email:</label><input id="email" name="email" type="email" autoComplete="email" ref={emailRef} /></div>
                <div className="line-field wide"><label htmlFor="location">Location:</label><input id="location" name="location" autoComplete="address-level2" /></div>
                <div className="line-field wide"><label htmlFor="website">Website:</label><input id="website" name="website" type="url" /></div>
                <div className="line-field wide"><label htmlFor="social-handles">Social Media Handles:</label><input id="social-handles" name="socialMediaHandles" /></div>
                <div className="line-field wide"><label htmlFor="years">Years in Business:</label><input id="years" name="yearsInBusiness" /></div>
              </div>
            </section>

            <section className="form-section">
              <header className="section-heading"><span className="letter">B</span><h2 className="title">Understanding the Business</h2></header>
              <div className="question"><label className="question-title" htmlFor="products">1. What are your main products/services?</label><div className="answer-lines"><textarea id="products" name="productsServices" rows="2"></textarea></div></div>
              <div className="question"><label className="question-title" htmlFor="target-customer">2. Who is your primary target customer?</label><div className="answer-lines"><textarea id="target-customer" name="targetCustomer" rows="2"></textarea></div></div>
              <div className="question"><label className="question-title" htmlFor="difference">3. What makes your business different from competitors?</label><div className="answer-lines"><textarea id="difference" name="businessDifference" rows="2"></textarea></div></div>
              <fieldset className="question">
                <legend>4. What are your main business goals for the next 6–12 months?</legend>
                <div className="choice-grid">
                  <label className="choice"><input type="checkbox" name="businessGoals" value="Increase sales" />Increase sales</label>
                  <label className="choice"><input type="checkbox" name="businessGoals" value="Launch a new product/service" />Launch a new product/service</label>
                  <label className="choice"><input type="checkbox" name="businessGoals" value="Increase brand awareness" />Increase brand awareness</label>
                  <label className="choice"><input type="checkbox" name="businessGoals" value="Improve online presence" />Improve online presence</label>
                  <label className="choice"><input type="checkbox" name="businessGoals" value="Attract new customers" />Attract new customers</label>
                  <label className="choice"><input type="checkbox" name="businessGoals" value="Other" />Other: <input className="other-line" name="businessGoalsOther" aria-label="Other business goal" /></label>
                  <label className="choice"><input type="checkbox" name="businessGoals" value="Improve customer retention" />Improve customer retention</label>
                  <label className="choice"><input type="checkbox" name="businessGoals" value="Expand to new markets" />Expand to new markets</label>
                </div>
              </fieldset>
            </section>
          </section>

          <section className="page" aria-label="Brand and marketing health check">
            <section className="form-section">
              <header className="section-heading"><span className="letter">C</span><h2 className="title">Brand &amp; Marketing Health Check</h2></header>
              <p className="question-title">Where do you currently have challenges?</p>
              <div className="challenge-grid">
                <fieldset className="challenge-group">
                  <legend>Branding</legend>
                  <div className="choice-list">
                    <label className="choice"><input type="checkbox" name="challenges" value="No clear brand identity" />No clear brand identity</label>
                    <label className="choice"><input type="checkbox" name="challenges" value="Outdated logo/visual identity" />Outdated logo/visual identity</label>
                    <label className="choice"><input type="checkbox" name="challenges" value="Inconsistent branding" />Inconsistent branding</label>
                    <label className="choice"><input type="checkbox" name="challenges" value="Brand doesn't reflect the quality of the business" />Brand doesn&apos;t reflect the quality of the business</label>
                    <label className="choice"><input type="checkbox" name="challenges" value="Unclear brand positioning" />Unclear brand positioning</label>
                    <label className="choice"><input type="checkbox" name="challenges" value="Need rebranding" />Need rebranding</label>
                  </div>
                </fieldset>
                <fieldset className="challenge-group">
                  <legend>Social Media</legend>
                  <div className="choice-list">
                    <label className="choice"><input type="checkbox" name="challenges" value="Inconsistent posting" />Inconsistent posting</label>
                    <label className="choice"><input type="checkbox" name="challenges" value="Low engagement" />Low engagement</label>
                    <label className="choice"><input type="checkbox" name="challenges" value="Poor-quality content" />Poor-quality content</label>
                    <label className="choice"><input type="checkbox" name="challenges" value="Low follower growth" />Low follower growth</label>
                    <label className="choice"><input type="checkbox" name="challenges" value="No clear content strategy" />No clear content strategy</label>
                    <label className="choice"><input type="checkbox" name="challenges" value="Social media isn't generating enquiries" />Social media isn&apos;t generating enquiries</label>
                    <label className="choice"><input type="checkbox" name="challenges" value="Pages need better management" />Pages need better management</label>
                  </div>
                </fieldset>
                <fieldset className="challenge-group">
                  <legend>Content</legend>
                  <div className="choice-list">
                    <label className="choice"><input type="checkbox" name="challenges" value="We struggle to create content" />We struggle to create content</label>
                    <label className="choice"><input type="checkbox" name="challenges" value="We don't have enough visual content" />We don&apos;t have enough visual content</label>
                    <label className="choice"><input type="checkbox" name="challenges" value="Need professional photography" />Need professional photography</label>
                    <label className="choice"><input type="checkbox" name="challenges" value="Need video content" />Need video content</label>
                    <label className="choice"><input type="checkbox" name="challenges" value="Need Reels/TikTok content" />Need Reels/TikTok content</label>
                    <label className="choice"><input type="checkbox" name="challenges" value="Need promotional content" />Need promotional content</label>
                  </div>
                </fieldset>
                <fieldset className="challenge-group">
                  <legend>Marketing</legend>
                  <div className="choice-list">
                    <label className="choice"><input type="checkbox" name="challenges" value="Low brand awareness" />Low brand awareness</label>
                    <label className="choice"><input type="checkbox" name="challenges" value="Not generating enough leads" />Not generating enough leads</label>
                    <label className="choice"><input type="checkbox" name="challenges" value="Low sales" />Low sales</label>
                    <label className="choice"><input type="checkbox" name="challenges" value="Ads aren't performing" />Ads aren&apos;t performing</label>
                    <label className="choice"><input type="checkbox" name="challenges" value="No clear marketing strategy" />No clear marketing strategy</label>
                    <label className="choice"><input type="checkbox" name="challenges" value="Difficulty reaching target customers" />Difficulty reaching target customers</label>
                    <label className="choice"><input type="checkbox" name="challenges" value="Need campaign support" />Need campaign support</label>
                  </div>
                </fieldset>
                <fieldset className="challenge-group">
                  <legend>Website / Digital</legend>
                  <div className="choice-list">
                    <label className="choice"><input type="checkbox" name="challenges" value="No website" />No website</label>
                    <label className="choice"><input type="checkbox" name="challenges" value="Outdated website" />Outdated website</label>
                    <label className="choice"><input type="checkbox" name="challenges" value="Poor website design" />Poor website design</label>
                    <label className="choice"><input type="checkbox" name="challenges" value="Poor user experience" />Poor user experience</label>
                    <label className="choice"><input type="checkbox" name="challenges" value="Website isn't mobile-friendly" />Website isn&apos;t mobile-friendly</label>
                    <label className="choice"><input type="checkbox" name="challenges" value="Website isn't generating enquiries" />Website isn&apos;t generating enquiries</label>
                    <label className="choice"><input type="checkbox" name="challenges" value="Need a landing page" />Need a landing page</label>
                    <label className="choice"><input type="checkbox" name="challenges" value="Need website maintenance" />Need website maintenance</label>
                  </div>
                </fieldset>
              </div>
              <div className="other-challenges"><label htmlFor="other-challenges">Other Challenges</label><textarea id="other-challenges" name="otherChallenges" rows="3"></textarea></div>
            </section>
          </section>

          <section className="page" aria-label="Current marketing, support needs and priority">
            <section className="form-section">
              <header className="section-heading"><span className="letter">D</span><h2 className="title">What Are You Currently Doing?</h2></header>
              <fieldset className="split-question">
                <legend className="question-title">Which marketing activities are you currently using?</legend>
                <div className="choice-grid">
                  <label className="choice"><input type="checkbox" name="currentActivities" value="Social Media" />Social Media</label>
                  <label className="choice"><input type="checkbox" name="currentActivities" value="Content Marketing" />Content Marketing</label>
                  <label className="choice"><input type="checkbox" name="currentActivities" value="Facebook/Instagram Ads" />Facebook/Instagram Ads</label>
                  <label className="choice"><input type="checkbox" name="currentActivities" value="Traditional Advertising" />Traditional Advertising</label>
                  <label className="choice"><input type="checkbox" name="currentActivities" value="Google Ads" />Google Ads</label>
                  <label className="choice"><input type="checkbox" name="currentActivities" value="None" />None</label>
                  <label className="choice"><input type="checkbox" name="currentActivities" value="Influencer Marketing" />Influencer Marketing</label>
                  <label className="choice"><input type="checkbox" name="currentActivities" value="Other" />Other: <input className="other-line" name="currentActivitiesOther" aria-label="Other marketing activity" /></label>
                  <label className="choice"><input type="checkbox" name="currentActivities" value="Email Marketing" />Email Marketing</label>
                  <label className="choice"><input type="checkbox" name="currentActivities" value="Events/Activations" />Events/Activations</label>
                </div>
              </fieldset>
              <fieldset className="split-question">
                <legend className="question-title">Who currently handles your marketing?</legend>
                <div className="choice-list">
                  <label className="choice"><input type="checkbox" name="marketingHandler" value="Internal team" />Internal team</label>
                  <label className="choice"><input type="checkbox" name="marketingHandler" value="Freelancer" />Freelancer</label>
                  <label className="choice"><input type="checkbox" name="marketingHandler" value="Agency" />Agency</label>
                  <label className="choice"><input type="checkbox" name="marketingHandler" value="Business owner/management" />Business owner/management</label>
                  <label className="choice"><input type="checkbox" name="marketingHandler" value="Email Marketing" />Email Marketing</label>
                  <label className="choice"><input type="checkbox" name="marketingHandler" value="No one currently" />No one currently</label>
                </div>
              </fieldset>
            </section>

            <section className="form-section">
              <header className="section-heading"><span className="letter">E</span><h2 className="title">What Do You Need Help With?</h2></header>
              <fieldset>
                <legend className="question-title">Based on your current challenges, which areas would you like support with?</legend>
                <div className="choice-grid">
                  <label className="choice"><input type="checkbox" name="supportNeeds" value="Brand Strategy & Identity" />Brand Strategy &amp; Identity</label>
                  <label className="choice"><input type="checkbox" name="supportNeeds" value="Website Redesign" />Website Redesign</label>
                  <label className="choice"><input type="checkbox" name="supportNeeds" value="Social Media Management" />Social Media Management</label>
                  <label className="choice"><input type="checkbox" name="supportNeeds" value="Marketing Strategy" />Marketing Strategy</label>
                  <label className="choice"><input type="checkbox" name="supportNeeds" value="Content Creation" />Content Creation</label>
                  <label className="choice"><input type="checkbox" name="supportNeeds" value="Campaign Management" />Campaign Management</label>
                  <label className="choice"><input type="checkbox" name="supportNeeds" value="Video Production & Editing" />Video Production &amp; Editing</label>
                  <label className="choice"><input type="checkbox" name="supportNeeds" value="Graphic Design" />Graphic Design</label>
                  <label className="choice"><input type="checkbox" name="supportNeeds" value="Digital Marketing" />Digital Marketing</label>
                  <label className="choice"><input type="checkbox" name="supportNeeds" value="Business Technology Solutions" />Business Technology Solutions</label>
                  <label className="choice"><input type="checkbox" name="supportNeeds" value="Paid Advertising" />Paid Advertising</label>
                  <label className="choice"><input type="checkbox" name="supportNeeds" value="BUUKUS FrontDesk / PMS" />BUUKUS FrontDesk / PMS</label>
                  <label className="choice"><input type="checkbox" name="supportNeeds" value="Website Development" />Website Development</label>
                  <label className="choice"><input type="checkbox" name="supportNeeds" value="Other" />Other: <input className="other-line" name="supportNeedsOther" aria-label="Other area for support" /></label>
                  <label className="choice"><input type="checkbox" name="supportNeeds" value="UI/UX Design" />UI/UX Design</label>
                </div>
              </fieldset>
            </section>

            <section className="form-section priority-section">
              <header className="section-heading"><span className="letter">F</span><h2 className="title">Priority</h2></header>
              <label className="question-title" htmlFor="biggest-challenge">What is the biggest challenge your business needs to solve right now?</label>
              <div className="answer-lines multi"><textarea id="biggest-challenge" name="biggestChallenge" rows="1"></textarea></div>
            </section>
          </section>

          <section className="page" aria-label="Priority outcome and budget and decision-making">
            <section className="form-section">
              <fieldset className="question">
                <legend>If this challenge were solved, what outcome would you most want?</legend>
                <div className="choice-list">
                  <label className="choice"><input type="checkbox" name="desiredOutcome" value="More customers" />More customers</label>
                  <label className="choice"><input type="checkbox" name="desiredOutcome" value="More enquiries" />More enquiries</label>
                  <label className="choice"><input type="checkbox" name="desiredOutcome" value="More sales" />More sales</label>
                  <label className="choice"><input type="checkbox" name="desiredOutcome" value="Better brand perception" />Better brand perception</label>
                  <label className="choice"><input type="checkbox" name="desiredOutcome" value="Stronger online presence" />Stronger online presence</label>
                  <label className="choice"><input type="checkbox" name="desiredOutcome" value="Better customer experience" />Better customer experience</label>
                  <label className="choice"><input type="checkbox" name="desiredOutcome" value="Better business operations" />Better business operations</label>
                  <label className="choice"><input type="checkbox" name="desiredOutcome" value="Other" />Other: <input className="other-line" name="desiredOutcomeOther" aria-label="Other desired outcome" /></label>
                </div>
              </fieldset>
              <fieldset className="question">
                <legend>How soon are you looking to address this?</legend>
                <div className="choice-list">
                  <label className="choice"><input type="checkbox" name="timeframe" value="Immediately" />Immediately</label>
                  <label className="choice"><input type="checkbox" name="timeframe" value="Within 1 month" />Within 1 month</label>
                  <label className="choice"><input type="checkbox" name="timeframe" value="Within 3 months" />Within 3 months</label>
                  <label className="choice"><input type="checkbox" name="timeframe" value="Within 6 months" />Within 6 months</label>
                  <label className="choice"><input type="checkbox" name="timeframe" value="Just exploring options" />Just exploring options</label>
                </div>
              </fieldset>
            </section>

            <section className="form-section">
              <header className="section-heading"><span className="letter">G</span><h2 className="title">Budget &amp; Decision-Making</h2></header>
              <fieldset className="question">
                <legend>Have you previously invested in branding/marketing/digital services?</legend>
                <div className="choice-list">
                  <label className="choice"><input type="checkbox" name="previousInvestment" value="Yes" />Yes</label>
                  <label className="choice"><input type="checkbox" name="previousInvestment" value="No" />No</label>
                </div>
              </fieldset>
              <fieldset className="question">
                <legend>Estimated monthly/project budget:</legend>
                <div className="choice-grid budget-grid">
                  <label className="choice"><input type="checkbox" name="budget" value="₦100k–₦250k" />₦100k–₦250k</label>
                  <label className="choice"><input type="checkbox" name="budget" value="₦500k–₦1m" />₦500k–₦1m</label>
                  <label className="choice"><input type="checkbox" name="budget" value="Not yet determined" />Not yet determined</label>
                  <label className="choice"><input type="checkbox" name="budget" value="₦250k–₦500k" />₦250k–₦500k</label>
                  <label className="choice"><input type="checkbox" name="budget" value="₦1m+" />₦1m+</label>
                </div>
              </fieldset>
              <div className="question"><label className="question-title" htmlFor="decision-makers">Who is involved in making the final decision?</label><div className="answer-lines"><textarea id="decision-makers" name="decisionMakers" rows="2"></textarea></div></div>
              <div className="question"><label className="question-title" htmlFor="follow-up-consultation">When would you be available for a follow-up consultation?</label><div className="answer-lines"><textarea id="follow-up-consultation" name="followUpAvailability" rows="2"></textarea></div></div>
            </section>
          </section>

          <section className="page" aria-label="iBrand Africa internal use">
            <section className="form-section">
              <header className="section-heading"><span className="letter">H</span><h2 className="title">iBrand Africa — Internal Use</h2></header>
              <p className="internal-note">This section should not necessarily be shown to the prospect</p>
              <h3 className="assessment-title">Prospect Assessment</h3>
              <div className="assessment-fields">
                <div className="line-field"><label htmlFor="primary-need">Primary Need:</label><input id="primary-need" name="primaryNeed" /></div>
                <div className="line-field"><label htmlFor="secondary-need">Secondary Need:</label><input id="secondary-need" name="secondaryNeed" /></div>
                <div className="line-field"><label htmlFor="recommended-service">Recommended Service:</label><input id="recommended-service" name="recommendedService" /></div>
                <div className="line-field"><label htmlFor="potential-upsell">Potential Upsell:</label><input id="potential-upsell" name="potentialUpsell" /></div>
                <div className="line-field"><label htmlFor="deal-value">Estimated Deal Value: ₦</label><input id="deal-value" name="estimatedDealValue" inputMode="decimal" /></div>
              </div>
              <fieldset className="question">
                <legend className="assessment-title">Lead Status:</legend>
                <div className="choice-grid status-grid">
                  <label className="choice"><input type="checkbox" name="leadStatus" value="New Prospect" />New Prospect</label>
                  <label className="choice"><input type="checkbox" name="leadStatus" value="Negotiation" />Negotiation</label>
                  <label className="choice"><input type="checkbox" name="leadStatus" value="Contacted" />Contacted</label>
                  <label className="choice"><input type="checkbox" name="leadStatus" value="Won" />Won</label>
                  <label className="choice"><input type="checkbox" name="leadStatus" value="Qualified" />Qualified</label>
                  <label className="choice"><input type="checkbox" name="leadStatus" value="Lost" />Lost</label>
                  <label className="choice"><input type="checkbox" name="leadStatus" value="Meeting Scheduled" />Meeting Scheduled</label>
                  <label className="choice"><input type="checkbox" name="leadStatus" value="Follow-up" />Follow-up</label>
                  <label className="choice"><input type="checkbox" name="leadStatus" value="Proposal Required" />Proposal Required</label>
                </div>
              </fieldset>
              <div className="assessment-fields">
                <div className="line-field"><label htmlFor="next-action">Next Action:</label><input id="next-action" name="nextAction" /></div>
                <div className="line-field"><label htmlFor="follow-up-date">Follow-up Date:</label><input id="follow-up-date" name="followUpDate" type="date" /></div>
                <div className="line-field"><label htmlFor="assigned-bd">Assigned BD:</label><input id="assigned-bd" name="assignedBD" /></div>
              </div>
            </section>
          </section>
          <div className="form-actions">
            <button type="submit">Submit Form</button>
            <p id="form-feedback" className="form-feedback" role="status" aria-live="polite" ref={feedbackRef}></p>
          </div>
        </form>

        <section className="page closing" aria-label="iBrand Africa closing page">
          <img className="brand-logo" src="/img/Ibrand%20Logo%20.png" alt="iBrand Africa" />
          <a href="https://www.ibrandafrica.com">www.ibrandafrica.com</a>
        </section>
      </main>
    </>
  )
}
