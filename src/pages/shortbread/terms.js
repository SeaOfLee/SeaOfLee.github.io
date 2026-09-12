import React from 'react'

import Layout from '../../components/layout'

const TermsPage = () => (
  <Layout>
    <h1>Terms of Service for Shortbread</h1>

    <p>
      <strong>Effective date:</strong> September 11, 2026
    </p>

    <h2>What Shortbread Is</h2>

    <p>
      You give Shortbread the address of a recipe page. It fetches that page,
      reads the structured recipe data the publisher embedded in it, and keeps a
      plain, readable copy in your library.
    </p>

    <p>
      It is operated by Lee Richardson, an individual rather than a company, as
      a personal project.
    </p>

    <h2>Your Account</h2>

    <p>
      You sign in with Apple. You are responsible for the Apple ID you use and
      for anything done through your account. One person, one account.
    </p>

    <p>
      You can delete your account at any time from the account menu. Deletion is
      immediate and permanent — see the{' '}
      <a href="/shortbread/privacy/">Privacy Policy</a>.
    </p>

    <h2>What You May Do</h2>

    <p>
      Save recipes for your own use. Your library is private: nobody else can
      see it, and there is no feature that would let them.
    </p>

    <h2>What You May Not Do</h2>

    <ul>
      <li>
        Use Shortbread to copy a site systematically, in bulk, or at a volume no
        person would read. Imports are rate limited, and circumventing that is a
        breach of these terms.
      </li>
      <li>
        Point it at anything other than an ordinary public web page — internal
        addresses, private networks, or anything requiring a login you are not
        entitled to use.
      </li>
      <li>
        Republish or redistribute recipe content saved through Shortbread. What
        you save is for you.
      </li>
      <li>Interfere with the service, or with the sites it fetches from.</li>
    </ul>

    <p>
      Shortbread respects <code>robots.txt</code> and will refuse a page a
      publisher has asked importers not to read. Please do not look for ways
      around that.
    </p>

    <h2>Content That Is Not Yours or Mine</h2>

    <p>
      Recipes belong to whoever published them. Shortbread reads structured data
      publishers embed deliberately for machines, keeps a link back to the
      source, and does not display source photography or publisher description
      text. It does not grant you any rights in that content, and saving
      something here is not a licence to do anything else with it.
    </p>

    <p>
      If you are a publisher and want something removed, the{' '}
      <a href="/shortbread/dmca/">copyright and DMCA notices</a> page explains
      how, and it will be acted on.
    </p>

    <h2>Availability</h2>

    <p>
      There is no uptime commitment. This is a personal project run on a small
      budget. It may be slow, unavailable, or discontinued. If it is
      discontinued you will be given reasonable notice to record anything you
      care about, but it is not a system of record — keep anything important
      elsewhere.
    </p>

    <p>
      Imports depend on other people's websites. Pages change, break, or publish
      no structured data at all, and Shortbread will fail to import them. That
      is expected, not a defect.
    </p>

    <h2>No Warranty, and Limits</h2>

    <p>
      Shortbread is provided "as is", without warranties of any kind, to the
      fullest extent the law allows. Recipe data is transformed by software —
      quantities and times are parsed and reformatted — and may be wrong.{' '}
      <strong>Do not rely on it for anything where being wrong matters</strong>,
      including allergens, food safety, or cooking temperatures. Check the
      original page, which is always linked.
    </p>

    <p>
      To the fullest extent permitted by law, the operator's total liability
      arising out of Shortbread is limited to the amount you have paid for it,
      which is nothing. Nothing here excludes liability that cannot lawfully be
      excluded.
    </p>

    <h2>Termination</h2>

    <p>
      Your account may be suspended or removed for breaching these terms, and in
      particular for repeated copyright infringement — a policy that is applied,
      not merely stated.
    </p>

    <h2>Governing Law</h2>

    <p>
      These terms are governed by the laws of the State of California, United
      States, without regard to conflict-of-law rules.
    </p>

    <h2>Changes to These Terms</h2>

    <p>
      If these terms change, an updated version will be posted at this same URL
      with a revised effective date. Continuing to use Shortbread after a change
      means accepting it.
    </p>

    <h2>Contact</h2>

    <p>
      Questions can be sent to{' '}
      <a href="mailto:lee@leerichardson.net">lee@leerichardson.net</a>.
    </p>
  </Layout>
)

export default TermsPage
