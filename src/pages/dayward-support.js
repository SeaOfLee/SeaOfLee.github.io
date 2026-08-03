import React from 'react'

import Layout from '../components/layout'

const DaywardSupportPage = () => (
  <Layout>
    <h1>Dayward Support</h1>

    <p>
      Dayward is a simple app for tracking the number of days since or until
      dates that matter to you — like a sobriety date, a work anniversary, or
      an upcoming trip.
    </p>

    <h2>Getting Started</h2>

    <ul>
      <li>
        Tap <strong>+</strong> to add an event: give it a title, pick a date,
        and choose whether to count the days <strong>since</strong> that date
        or <strong>until</strong> it.
      </li>
      <li>Tap any event to edit or delete it.</li>
      <li>
        Tap the widget icon in the top-right corner to choose which event
        appears in your Home Screen widget.
      </li>
    </ul>

    <h2>Adding the Widget</h2>

    <ol>
      <li>Long-press an empty area of your Home Screen.</li>
      <li>
        Tap the <strong>+</strong> button in the top corner.
      </li>
      <li>Search for "Dayward" and choose a widget size.</li>
      <li>
        Tap <strong>Add Widget</strong>.
      </li>
    </ol>

    <p>
      The widget updates automatically once a day and refreshes right away
      whenever you edit the featured event in the app.
    </p>

    <h2>Frequently Asked Questions</h2>

    <p>
      <strong>Does Dayward sync across my devices?</strong>
      <br />
      No. Dayward stores everything locally on your device only — there's no
      account and no cloud sync.
    </p>

    <p>
      <strong>Is my data private?</strong>
      <br />
      Yes. Dayward collects no data of any kind. See the full{' '}
      <a href="https://leerichardson.net/dayward-privacy/">Privacy Policy</a>{' '}
      for details.
    </p>

    <p>
      <strong>The widget isn't updating — what should I do?</strong>
      <br />
      Try removing the widget from your Home Screen and adding it again. If
      that doesn't help, make sure the app itself opens normally first.
    </p>

    <p>
      <strong>Can I track more than one event in the widget?</strong>
      <br />
      Not yet — Dayward currently supports one featured event per widget.
    </p>

    <h2>Contact</h2>

    <p>
      Questions, feedback, or something not working right? Email{' '}
      <a href="mailto:l.richardson1@gmail.com">l.richardson1@gmail.com</a>.
    </p>
  </Layout>
)

export default DaywardSupportPage
