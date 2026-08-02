import React from 'react'

import Layout from '../components/layout'

const DaywardPrivacyPage = () => (
  <Layout>
    <h1>Privacy Policy for Dayward</h1>

    <p>
      <strong>Effective date:</strong> August 2, 2026
    </p>

    <p>Dayward ("the app") is developed by Lee Richardson.</p>

    <h2>Data Collection</h2>

    <p>
      Dayward does not collect, transmit, or store any personal data on any
      server. The app does not use analytics, advertising networks, or any
      third-party SDKs.
    </p>

    <p>
      All information you enter into Dayward — event titles, dates, emoji,
      and your featured widget selection — is stored locally on your device
      only, using Apple's standard on-device storage and, for the Home
      Screen widget, an App Group container shared only between Dayward and
      its own widget extension. This data never leaves your device, is
      never transmitted over a network, and is never seen by the developer
      or anyone else.
    </p>

    <h2>Third Parties</h2>

    <p>
      Dayward does not integrate with any third-party services, analytics
      platforms, or advertising networks. No data is shared with any third
      party, because no data leaves your device in the first place.
    </p>

    <h2>Children's Privacy</h2>

    <p>
      Dayward does not knowingly collect any information from anyone,
      including children, because it does not collect information from
      anyone at all.
    </p>

    <h2>Data Deletion</h2>

    <p>
      Because all data is stored locally on your device, you can delete all
      of Dayward's data at any time by deleting the app from your device.
    </p>

    <h2>Changes to This Policy</h2>

    <p>
      If this policy changes, an updated version will be posted at this
      same URL with a revised effective date.
    </p>

    <h2>Contact</h2>

    <p>
      Questions about this policy can be sent to{' '}
      <a href="mailto:lee@leerichardson.net">lee@leerichardson.net</a>.
    </p>
  </Layout>
)

export default DaywardPrivacyPage
