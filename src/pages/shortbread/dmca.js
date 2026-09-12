import React from 'react'

import Layout from '../../components/layout'

const DmcaPage = () => (
  <Layout>
    <h1>Copyright and DMCA Notices for Shortbread</h1>

    <p>
      <strong>Effective date:</strong> September 11, 2026
    </p>

    <p>
      Shortbread fetches recipe pages at the direction of the person who saved
      them and keeps a copy of the structured recipe data those pages publish.
      If you own material reached that way and want it removed, this page is
      how. Requests are acted on — removal is a supported operation in the
      software, not an escalation.
    </p>

    <h2>Designated Agent</h2>

    <p>
      Registered with the U.S. Copyright Office, registration{' '}
      <strong>DMCA-1080304</strong>, and listed in the Office's public{' '}
      <a href="https://www.copyright.gov/dmca-directory/">
        DMCA Designated Agent Directory
      </a>
      .
    </p>

    <p>
      Service provider: <strong>Lee Richardson</strong>, an individual, also
      known as Shortbread.
      <br />
      Designated agent: <strong>Lee Richardson</strong>
      <br />
      Email: <a href="mailto:lee@leerichardson.net">lee@leerichardson.net</a>
      <br />
      Post: 2635 Grand Summit Rd., Torrance, CA 90505
      <br />
      Telephone: (808) 221-9677
    </p>

    <h2>Sending a Notice</h2>

    <p>
      Email the agent above. To be effective under 17 U.S.C. § 512(c)(3), a
      notice must include:
    </p>

    <ol>
      <li>
        A physical or electronic signature of the copyright owner or someone
        authorised to act for them.
      </li>
      <li>Identification of the copyrighted work claimed to be infringed.</li>
      <li>
        Identification of the material to be removed, and{' '}
        <strong>the URL of the recipe page</strong> — that is what Shortbread
        stores content against, and the fastest way to have it found and
        removed.
      </li>
      <li>Your contact details: address, telephone, email.</li>
      <li>
        A statement that you believe in good faith the use is not authorised by
        the copyright owner, its agent, or the law.
      </li>
      <li>
        A statement that the information in the notice is accurate, and — under
        penalty of perjury — that you are authorised to act for the owner.
      </li>
    </ol>

    <p>
      A URL alone, without the rest, will still be looked at. The list above is
      what makes a notice legally effective.
    </p>

    <h2>What Happens Next</h2>

    <p>On a valid notice:</p>

    <ul>
      <li>
        The recipe content is deleted, including the original structured data
        captured from the page — not just the visible fields.
      </li>
      <li>
        The URL is tombstoned, so it cannot be imported again by anyone. Removal
        is not something you should have to ask for twice.
      </li>
      <li>
        Anyone who had saved it keeps a placeholder in their library explaining
        that it was withdrawn at the publisher's request. Nothing vanishes
        silently from someone's account, but no content remains.
      </li>
    </ul>

    <h2>Counter-Notices</h2>

    <p>
      If your material was removed and you believe that was a mistake or
      misidentification, send a counter-notice to the agent above containing
      your signature, identification of the removed material and where it
      appeared, a statement under penalty of perjury that you believe it was
      removed by mistake, your contact details, and consent to the jurisdiction
      of the federal court for your district.
    </p>

    <h2>Repeat Infringement</h2>

    <p>
      Accounts that repeatedly infringe are terminated. This policy is applied,
      not merely published.
    </p>

    <h2>Preventing Imports in the First Place</h2>

    <p>
      Shortbread checks <code>robots.txt</code> before fetching, on every
      redirect hop, and will not read a page you have disallowed for its user
      agent, <code>shortbread-recipe-import</code>. Disallowing it stops future
      imports without anyone needing to send anything.
    </p>

    <p>
      A notice is still the way to remove what has already been saved. See also
      the <a href="/shortbread/privacy/">Privacy Policy</a> and{' '}
      <a href="/shortbread/terms/">Terms of Service</a>.
    </p>
  </Layout>
)

export default DmcaPage
