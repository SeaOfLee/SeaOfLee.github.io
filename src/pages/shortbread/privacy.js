import React from 'react'

import Layout from '../../components/layout'

const PrivacyPage = () => (
  <Layout>
    <h1>Privacy Policy for Shortbread</h1>

    <p>
      <strong>Effective date:</strong> September 11, 2026
    </p>

    <p>
      Shortbread ("the app") saves recipes you point it at. It is developed and
      operated by Lee Richardson, an individual rather than a company. This
      describes what that involves holding about you, which is not much.
    </p>

    <h2>What Is Collected</h2>

    <p>
      <strong>When you sign in.</strong> Shortbread uses Sign in with Apple and
      stores two things from it: the subject identifier Apple issues for you, a
      string unique to this app, and the email address Apple relays — for most
      people a private <code>@privaterelay.appleid.com</code> forwarding address
      rather than their real one. Your name is not requested and not stored.
      Apple's own handling of the sign-in is covered by Apple's privacy policy,
      not this one.
    </p>

    <p>
      <strong>When you save a recipe.</strong> The URL you submitted, the
      canonical URL of the page, and the date you saved it. Separately, the
      recipe content fetched from that page: title, ingredients, instructions,
      timings, author and publication, and the structured data the page
      published.
    </p>

    <p>
      That recipe content is stored once and shared. If two people save the same
      URL there is one copy of it and two records of who saved it. Nobody can
      see anyone else's library, and there is no feature that would let them —
      that is a deliberate constraint on the design, not a limitation waiting to
      be lifted.
    </p>

    <p>
      <strong>While you are signed in.</strong> A session token, kept on your
      device in the iOS Keychain and held on the server only as a SHA-256 hash.
      Sessions expire after 90 days. Signing out deletes the session
      immediately, on both sides.
    </p>

    <p>
      <strong>Server logs.</strong> Each import writes one line recording the
      host of the recipe site — for example <code>example.com</code> — along
      with your user identifier, the outcome, and how long it took. The path is
      deliberately excluded: which particular recipe you read is not worth
      keeping. Separately, the web server writes ordinary request logs holding
      the HTTP method, the API path, the status code, and the IP address the
      request came from. Logs are not exported anywhere and roll off with the
      hosting provider's retention.
    </p>

    <h2>What Is Not Collected</h2>

    <p>
      No analytics, no advertising, no tracking, no crash reporting, and no
      third-party SDKs of any kind. Nothing is sold, rented, or shared for
      marketing, because there is no mechanism by which that could happen.
    </p>

    <h2>Where It Lives</h2>

    <p>
      The application runs on Fly.io in San Jose, California. The database is
      Neon, in AWS us-west-2 (Oregon). Both are in the United States. Sign in
      with Apple involves Apple. Those three are the only processors.
    </p>

    <h2>Retention and Deletion</h2>

    <p>
      You can delete your account from inside the app, using the account menu on
      the recipe list. It removes your account, your saved recipes, your sign-in
      identity and every active session, immediately and permanently. There is
      no recovery and no soft-delete.
    </p>

    <p>
      Recipe content fetched from publishers is not deleted along with your
      account. It is not personal data — it is a copy of a public web page,
      shared with anyone else who saved the same URL. What was personal, that
      you saved it and the URL you used, goes.
    </p>

    <p>
      Expired sessions are cleared automatically. Nothing else is deleted on a
      schedule, because nothing else accumulates.
    </p>

    <h2>Your Rights</h2>

    <p>
      Deleting your account from within the app covers erasure. For access,
      correction, or a copy of your data, email{' '}
      <a href="mailto:lee@leerichardson.net">lee@leerichardson.net</a>.
      Depending on where you live you may have further rights under the
      CCPA/CPRA, the GDPR, or similar law; that address is how to exercise them.
    </p>

    <p>
      Shortbread does not sell or share personal information as those terms are
      defined under the CCPA, and has no mechanism to do so.
    </p>

    <h2>Children</h2>

    <p>
      Shortbread is not directed at children under 13 and does not knowingly
      collect information from them.
    </p>

    <h2>Changes to This Policy</h2>

    <p>
      If this policy changes, an updated version will be posted at this same URL
      with a revised effective date.
    </p>

    <h2>Contact</h2>

    <p>
      Questions about this policy can be sent to{' '}
      <a href="mailto:lee@leerichardson.net">lee@leerichardson.net</a>. See also
      the <a href="/shortbread/terms/">Terms of Service</a> and{' '}
      <a href="/shortbread/dmca/">copyright and DMCA notices</a>.
    </p>
  </Layout>
)

export default PrivacyPage
