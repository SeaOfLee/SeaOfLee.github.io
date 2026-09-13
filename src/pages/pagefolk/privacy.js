import React from 'react'

import Layout from '../../components/layout'

const PrivacyPage = () => (
  <Layout>
    <h1>Privacy Policy for Pagefolk</h1>

    <p>
      <strong>Effective date:</strong> September 12, 2026
    </p>

    <p>
      Pagefolk is an app for small, private reading groups. It is developed
      and operated by Lee Richardson, an individual rather than a company.
      This describes what that involves holding about you.
    </p>

    <h2>What Is Collected</h2>

    <p>
      <strong>To create your account.</strong> Your email address, used to
      sign you in — Pagefolk has no passwords, so a link sent to your email is
      how you prove it's you — and to send notifications you've opted into.
      Also your display name and time zone, shown to other members of your
      clubs and used to schedule reminders at a sensible local time.
    </p>

    <p>
      <strong>When you request a sign-in link.</strong> Your IP address,
      briefly, to detect abuse of the sign-in system. It is not used to track
      where you are.
    </p>

    <p>
      <strong>If you enable push notifications.</strong> A device token and
      which platform (iOS or Android) it belongs to, so Apple's or Google's
      notification service can identify your device. This does not identify
      you personally beyond that.
    </p>

    <p>
      <strong>What you post.</strong> The clubs you're in, the books you're
      reading, your responses, replies, reactions, ratings and reviews, and
      any meeting links you add. This is visible to the other members of the
      clubs you share it in, and never outside them.
    </p>

    <h2>What Is Not Collected</h2>

    <p>
      No analytics, no advertising, no crash reporting, and no third-party
      SDKs beyond what running the app requires. Nothing here is collected for
      advertising, and nothing is sold, rented, or shared for marketing.
    </p>

    <h2>Where It Lives</h2>

    <p>
      The application and its worker run on Fly.io. The database is Neon.
      Resend delivers sign-in and notification emails. Apple and Google
      deliver push notifications to your device. Those are the only
      processors, and none of them may use your data for their own purposes.
    </p>

    <p>
      Other members of a club you're in can see the display name, responses,
      replies, reactions, and ratings you post in that club. They cannot see
      your email address, your IP address, or which other clubs you belong
      to.
    </p>

    <h2>Retention and Deletion</h2>

    <p>
      Your content and account details are kept for as long as your account
      exists. You can delete your account at any time from{' '}
      <strong>Profile → Delete my account</strong>. This removes your
      account, your responses, replies, reactions, reveals, and push tokens
      immediately and permanently. There is no recovery.
    </p>

    <p>
      If you own a club with other members in it, you'll need to transfer or
      empty it first, so the club is not left without an owner — see the{' '}
      <a href="/pagefolk/terms/">Terms of Use</a> for detail.
    </p>

    <p>
      Sign-in links and sessions expire automatically and are stored only as
      a hash, never in plain text.
    </p>

    <h2>Your Rights</h2>

    <p>
      Deleting your account from within the app covers erasure. For access,
      correction, or a copy of your data, email{' '}
      <a href="mailto:lee@leerichardson.net">lee@leerichardson.net</a>.
      Depending on where you live you may have further rights under the
      CCPA/CPRA, the GDPR, or similar law; that address is how to exercise
      them.
    </p>

    <p>
      Pagefolk does not sell or share personal information as those terms are
      defined under the CCPA, and has no mechanism to do so.
    </p>

    <h2>Children</h2>

    <p>
      Pagefolk is not directed at children under 13 and does not knowingly
      collect information from them.
    </p>

    <h2>Changes to This Policy</h2>

    <p>
      If this policy changes, an updated version will be posted at this same
      URL with a revised effective date.
    </p>

    <h2>Contact</h2>

    <p>
      Questions about this policy can be sent to{' '}
      <a href="mailto:lee@leerichardson.net">lee@leerichardson.net</a>. See
      also the <a href="/pagefolk/terms/">Terms of Use</a>.
    </p>
  </Layout>
)

export default PrivacyPage
