import { Link } from 'react-router-dom';
import '../index.css';
import { useNavigate } from "react-router-dom";

const Terms = () => {
    let navigate = useNavigate();

    const routeChange1 = () =>{ 
        const params = new URLSearchParams(window.location.search);
        const instructorId = params.get('id');
        let path = `/InstructorCoursePage/?id=${instructorId}`; 
        navigate(path);
    }
    const routeChange2 = () =>{ 
        const params = new URLSearchParams(window.location.search);
        const instructorId = params.get('id');
        let path =`/InstructorAddANewCoursePage/?id=${instructorId}`; 
        navigate(path);
    }
return (
    <header>
    <div className="container11">

  
   <h1> Instructor Terms</h1>
   These Instructor Terms were last updated May 3, 2021.
When you sign up to become an instructor on the Learned platform, you agree to abide by these Instructor Terms ("Terms"). These Terms cover details about the aspects of the Learned platform relevant to instructors and are incorporated by reference into our Terms of Use, the general terms that govern your use of our Services. Any capitalized terms that aren't defined in these Terms are defined as specified in the Terms of Use.

As an instructor, you are contracting directly with Learned, Inc. (a Delaware corporation in the United States), regardless of whether another Learned subsidiary facilitates payments to you.



<ol>
<h2><li>Instructor Obligations </li></h2>


As an instructor, you are responsible for all content that you post, including lectures, quizzes, coding exercises, practice tests, assignments, resources, answers, course landing page content, labs, assessments, and announcements ("Submitted Content").

You represent and warrant that:

<ul  >
<li >you will provide and maintain accurate account information;</li>
<li>you own or have the necessary licenses, rights, consents, permissions, and authority to authorize Learned to use your Submitted Content as specified in these Terms and the Terms of Use;</li>
<li>your Submitted Content will not infringe or misappropriate any third party's intellectual property rights;</li>
<li>you have the required qualifications, credentials, and expertise (including education, training, knowledge, and skill sets) to teach and offer the services that you offer through your Submitted Content and use of the Services;</li> and
<li>you will ensure a quality of service that corresponds with the standards of your industry and instruction services in general.</li>
<li>You warrant that you will not:</li>
</ul>

post or provide any inappropriate, offensive, racist, hateful, sexist, pornographic, false, misleading, incorrect, infringing, defamatory or libelous content or information;
post or transmit any unsolicited or unauthorized advertising, promotional materials, junk mail, spam, or any other form of solicitation (commercial or otherwise) through the Services or to any user;
use the Services for business other than providing tutoring, teaching, and instructional services to students; 
engage in any activity that would require us to obtain licenses from or pay royalties to any third party, including the need to pay royalties for the public performance of a musical work or sound recording;
frame or embed the Services (such as to embed a free version of a course) or otherwise circumvent the Services;
impersonate another person or gain unauthorized access to another person's account;
interfere with or otherwise prevent other instructors from providing their services or content; or
abuse Learned resources, including support services.


<h2><li>License to Learned </li></h2>
You grant Learned the rights detailed in the Terms of Use to offer, market, and otherwise exploit your Submitted Content. This includes the right to add captions or otherwise modify Submitted Content to ensure accessibility. You also authorize Learned to sublicense these rights to your Submitted Content to third parties, including to students directly and through third parties such as resellers, distributors, affiliate sites, deal sites, and paid advertising on third-party platforms.

Unless otherwise agreed (including within our Promotions Policy), you have the right to remove all or any portion of your Submitted Content from the Services at any time. Except as otherwise agreed, Learned's right to sublicense the rights in this section will terminate with respect to new users 60 days after the Submitted Content's removal. However, (1) rights given to students before the Submitted Content's removal will continue in accordance with the terms of those licenses (including any grants of lifetime access) and (2) Learned's right to use such Submitted Content for marketing purposes shall survive termination.

We may record and use all or any part of your Submitted Content for quality control and for delivering, marketing, promoting, demonstrating, or operating the Services. You grant Learned permission to use your name, likeness, voice, and image in connection with offering, delivering, marketing, promoting, demonstrating, and selling the Services, your Submitted Content, or Learned's content, and you waive any rights of privacy, publicity, or other rights of a similar nature, to the extent permissible under applicable law.

<h2><li>Trust & Safety</li></h2>
<ol>
    <h3><li>Trust & Safety Policies</li></h3>
You agree to abide by Learned's Trust & Safety policies, Restricted Topics policy, and other content quality standards or policies prescribed by Learned from time to time. You should check these policies periodically to ensure that you comply with any updates to them. You understand that your use of the Services is subject to Learned's approval, which we may grant or deny at our sole discretion.

We reserve the right to remove content, suspend payouts, and/or ban instructors for any reason at any time, without prior notice, including in cases where:

an instructor or content does not comply with our policies or legal terms (including the Terms of Use);
content falls below our quality standards or has a negative impact on the student experience;
an instructor engages in behavior that might reflect unfavorably on Learned or bring Learned into public disrepute, contempt, scandal, or ridicule;
an instructor engages the services of a marketer or other business partner who violates Learned's policies;
an instructor uses the Services in a way that constitutes unfair competition, such as promotion of their off-site business in a way that violates Learned's policies; or
as determined by Learned in its sole discretion.

<h3><li> Co-Instructors and Teaching Assistants</li></h3>
The Learned platform allows you to add other users as co-instructors or teaching assistants for Submitted Content that you manage, and you are required to comply with our Co-Instructor Relationship Rules and Guidelines when taking such actions. By adding a co-instructor or teaching assistant, you understand that you are authorizing them to take certain actions that affect your Learned account and Submitted Content. Violations of Learned's terms and policies by your co-instructor or teaching assistant may also impact your Learned account and Submitted Content. Learned is not able to advise on any questions or mediate any disputes between you and such users. If your co-instructors have an assigned revenue share, their share will be paid out of your earned revenue share based on the ratios you have specified in your Course Management settings as of the date of the purchase.

<h3><li> Relationship to Other Users</li></h3>
Instructors don't have a direct contractual relationship with students, so the only information you'll receive about students is what is provided to you through the Services. You agree that you will not use the data you receive for any purpose other than providing your services to those students on the Learned platform, and that you won't solicit additional personal data or store students' personal data outside the Learned platform. You agree to indemnify Learned against any claims arising from your use of students' personal data.

<h3><li> Anti-Piracy Efforts</li></h3>
We partner with anti-piracy vendors to help protect your content from unauthorized use. To enable this protection, you hereby appoint Learned and our anti-piracy vendors as your agents for the purpose of enforcing copyrights for each of your content, through notice and takedown processes (under applicable copyright laws like the Digital Millennium Copyright Act) and for other efforts to enforce those rights. You grant Learned and our anti-piracy vendors primary authority to file notices on your behalf to enforce your copyright interests.

You agree that Learned and our anti-piracy vendors will retain the above rights unless you revoke them by sending an email to piracy@Learned.com with the subject line: "Revoke Anti-Piracy Protection Rights" from the email address associated with your account. Any revocation of rights will be effective 48 hours after we receive it.
</ol>

<h3><li> Pricing</li></h3>
<ol>
    <h3><li>Price Setting</li></h3>
When creating Submitted Content available for purchase on Learned, you will be prompted to select a base price ("Base Price") for your Submitted Content from a list of available price tiers. Alternatively, you may choose to offer your Submitted Content for free. As a premium instructor, you will also be given the opportunity to participate in certain promotional programs under the terms of our Promotions Policy ("Promotional Programs").

If you do not opt to participate in any Promotional Programs, we will list your Submitted Content for the Base Price or the closest local or mobile app equivalent (as detailed below). If you opt to participate in a Promotional Program, we may set a different discounted price or list price for your Submitted Content as described in the Promotions Policy.

When a student purchases using a foreign currency, we will convert the relevant Base Price or Promotional Program price into the student's applicable currency using a system-wide foreign currency conversion rate set by Learned and fixed periodically into a table of corresponding price tiers by currency ("Price Tier Matrix"). Since the Price Tier Matrix is fixed, those conversion rates may not be identical to the applicable market rate in effect when a transaction is processed. We reserve the right to update the Price Tier Matrix at any time. The Price Tier Matrix and additional information on Learned's pricing tiers are available here.

When a student purchases through a mobile application, the mobile platform provider's pricing matrix will control, and we will choose the price tier closest to the applicable Base Price or Promotional Program price. Because mobile platforms impose their own currency conversion rates, conversions for mobile app prices may not match the conversions in the Price Tier Matrix.

You give us permission to share your Submitted Content for free with our employees, with selected partners, and in cases where we need to restore access to accounts who have previously purchased your Submitted Content. You understand that you will not receive compensation in these cases.

<h3><li> Transaction Taxes</li></h3>
If a student purchases a product or service in a country that requires Learned to remit national, state, or local sales or use taxes, value added taxes (VAT), or other similar transaction taxes ("Transaction Taxes"), under applicable law, we will collect and remit those Transaction Taxes to the competent tax authorities for those sales. We may increase the sale price at our discretion where we determine that such taxes may be due. For purchases through mobile applications, applicable Transaction Taxes are collected by the mobile platform (such as Apple's App Store or Google Play).

<h3><li> Promotional Programs</li></h3>
Learned offers several optional marketing programs (Promotional Programs) in which you can choose to participate, as detailed in our Promotions Policy. These programs can help increase your revenue potential on Learned by finding the optimal price point for your Submitted Content and offering them through subscriptions collections.

There is no up-front cost to participate in these programs, and you can modify your participation status at any time, though changes you make will not apply to currently active campaigns and certain programs may have additional requirements on termination.
</ol> 
<h3><li>Payments</li></h3>
<ol>
<h3><li>Revenue Share</li></h3>
When a student purchases your Submitted Content, we calculate the gross amount of the sale as the amount actually received by Learned from the student ("Gross Amount"). From this, we subtract any Transaction Taxes, any mobile platform fees applied to mobile provider checkout sales, a 3% service and processing fee (except in Japan, where we subtract a 4% fee) for any non-mobile provider checkout sales, and any amounts paid to third parties in connection with the Promotional Programs to calculate the net amount of the sale ("Net Amount").

If you have not opted into any of Learned's optional Promotional Programs, and except for sales through instructor-generated coupon codes or course referral links as described below, your revenue share will be 37% of the Net Amount less any applicable deductions, such as student refunds. If we change this payment rate, we will provide you 30 days notice using prominent means, such as via email or by posting a notice through our Services.

If you opt into any of the Promotional Programs, the relevant revenue share may be different and will be as specified in the Promotions Policy.

Learned makes all instructor payments in U.S. dollars (USD) regardless of the currency with which the sale was made. Learned is not responsible for your foreign currency conversion fees, wiring fees, or any other processing fees that you may incur. Your revenue report will show the sales price (in local currency) and your converted revenue amount (in USD).

<h3><li>Instructor Coupons and Course Referral Links</li></h3>
The Learned platform allows you to generate coupon codes and referral links to offer certain items of your Submitted Content to students at a discount, at Learned's current price, or for free, as permitted within the Services. These coupon codes and referral links are subject to limits, and you may not sell them on third-party websites or otherwise offer them in exchange for compensation. Additional information and restrictions on these coupon codes and referral links are outlined in our Trust & Safety policies.

Where a student applies your coupon code or referral link at checkout, your revenue share will be 97% of the Net Amount less any applicable deductions, such as student refunds.

<h3><li>Receiving Payments</li></h3>
For us to pay you in a timely manner, you must own a PayPal, Payoneer, or U.S. bank account (for U.S. residents only) in good standing and must keep us informed of the correct email associated with your account. You must also provide any identifying information or tax documentation (such as a W-9 or W-8) necessary for payment of amounts due, and you agree that we have the right to withhold appropriate taxes from your payments. We reserve the right to withhold payments or impose other penalties if we do not receive proper identifying information or tax documentation from you. You understand and agree that you are ultimately responsible for any taxes on your income.

Depending on the applicable revenue share model, payment will be made within 45 days of the end of the month in which (a) we receive the fee for a course or (b) the relevant course consumption occurred.

As an instructor, you are responsible for determining whether you are eligible to be paid by a U.S. company. We reserve the right not to pay out funds in the event of identified fraud, violations of intellectual property rights, or other violations of the law.

If we cannot settle funds into your payment account after the period of time set forth by your state, country, or other government authority in its unclaimed property laws, we may process the funds due to you in accordance with our legal obligations, including by submitting those funds to the appropriate government authority as required by law.

<h3><li>Refunds</li></h3>
You acknowledge and agree that students have the right to receive a refund, as detailed in the Terms of Use. Instructors will not receive any revenue from transactions for which a refund has been granted under the Terms of Use.

If a student asks for a refund after we have paid the relevant instructor payment, we reserve the right to either (1) deduct the amount of the refund from the next payment sent to the instructor or (2) where no further payments are due to the instructor or the payments are insufficient to cover the refunded amounts, require the instructor to refund any amounts refunded to students for the instructor's Submitted Content.
</ol>
<h3><li>Trademarks</li></h3> 
While you are a published instructor and subject to the requirements below, you may use our trademarks where we authorize you to do so.

<h4>You must:</h4>
<ul>
<li>only use the images of our trademarks that we make available to you, as detailed in any guidelines we may publish;</li>
<li>only use our trademarks in connection with the promotion and sale of your Submitted Content available on Learned or your participation on Learned;</li> and
<li>immediately comply if we request that you discontinue use.</li>
</ul>
<h4>You must not:</h4>
<ul>
<li>use our trademarks in a misleading or disparaging way;</li>
<li>use our trademarks in a way that implies that we endorse, sponsor, or approve of your Submitted Content or services; or</li>
<li>use our trademarks in a way that violates applicable law or in connection with an obscene, indecent, or unlawful topic or material.</li>

</ul>
<h3><li>Deleting Your Account</li></h3>Deleting Your Account
Instructions on how to delete your instructor account are available here. We'll use commercially reasonable efforts to make any remaining scheduled payments that are owed to you before deleting your account. You understand that if students have previously enrolled in your Submitted Content, your name and that Submitted Content may remain accessible to those students after your account is deleted. If you need help or encounter difficulty deleting your account, you can contact us via our Support Center.

<h3><li>Miscellaneous Legal Terms</li></h3>
<ol>
<h3><li>Updating These Terms</li></h3> 
From time to time, we may update these Terms to clarify our practices or to reflect new or different practices (such as when we add new features), and Learned reserves the right in its sole discretion to modify and/or make changes to these Terms at any time. If we make any material change, we will notify you using prominent means such as by email notice sent to the email address specified in your account or by posting a notice through our Services. Modifications will become effective on the day they are posted unless stated otherwise.

Your continued use of our Services after changes become effective shall mean that you accept those changes. Any revised Terms shall supersede all previous Terms.

<h3><li>Translations</li></h3>
Any version of these Terms in a language other than English is provided for convenience and you understand and agree that the English language will control if there is any conflict.

<h3><li>Relationship Between Us</li></h3> 
You and we agree that no joint venture, partnership, employment, contractor, or agency relationship exists between us.

<h3><li>Survival</li></h3>
The following sections shall survive the expiration or termination of these Terms: Sections 2 (License to Learned), 3.3 (Relationship to Other Users), 5.3 (Receiving Payments), 5.4 (Refunds), 7 (Deleting Your Account), and 8 (Miscellaneous Legal Terms).
</ol>
<h3><li>How to Contact Us</li></h3>
The best way to get in touch with us is to contact our Support Team. We'd love to hear your questions, concerns, and feedback about our Services.
</ol>

    </div>
    <div >
        <div>
        <button  onClick={routeChange1} className='course-details'> Reject</button>
        </div>
        <div>
        <button onClick={routeChange2} className='course-details'> Accept</button>
    </div>
    </div>
    </header>
)
}

export default Terms