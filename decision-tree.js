// decision-tree.js
// ---------------------------------------------------------------------------
// All EDMA-s.120 decision logic lives here. Each question / answer string is
// a template literal with inline HTML so we can keep real bullets & spacing.
// ---------------------------------------------------------------------------

export const tree = {
  /* ────────────────────  root  ──────────────────── */
  start: {
    question: `Are you a <strong>municipality</strong> or a <strong>regional district</strong>?`,
    options: [
      { text: 'Yes', next: 'node2' },
      { text: 'No',  next: 'answer_noobligation' }
    ]
  },

  /* ────────────────────  node 2  ──────────────────── */
  node2: {
    question: `
      Are you planning to do any of the following?
      <ul>
        <li>Make an emergency instrument or take any other action under the following provisions:
          <ul>
            <li>Sections 107 (1)(b) and 118 (1)(b) [recovery powers] &mdash; to the extent they authorize the local authority to do things the minister may do under s. 76 (1)(a)&ndash;(f) [land and other property];</li>
            <li>Section 107 (1)(c);</li>
            <li>Sections 107 (1)(d) and 118 (1)(c) &mdash; to the extent they authorize the local authority to do things the minister may do under s. 78 (1)(a) [general restrictions];</li>
            <li>Section 118 (2).</li>
          </ul>
        </li>
        <li>Issue a warning that an evacuation may be required.</li>
        <li>Permit evacuated persons to return to an evacuated area.</li>
      </ul>
    `,
    options: [
      { text: 'Yes', next: 'node3' },
      { text: 'No',  next: 'answer_noobligation' }
    ]
  },

  /* ────────────────────  node 3  ──────────────────── */
  node3: {
    question: `
      Will the emergency instrument/action, warning or permission affect an area, or the people in an area, that is:
      <ul>
        <li>within Nisg̱a'a Lands or treaty lands of a treaty first nation,</li>
        <li>described for the purposes of this section in one or more of the following:
          <ul>
            <li>your emergency management plan;</li>
            <li>an agreement made under this Act with an Indigenous governing body; or</li>
            <li>a provincial emergency management plan.</li>
          </ul>
        </li>
      </ul>
    `,
    options: [
      { text: 'Yes', next: 'node4' },
      { text: 'No',  next: 'answer_noobligation' }
    ]
  },

  /* ────────────────────  node 4  ──────────────────── */
  node4: {
    question: `
      Are you considering making an emergency instrument or taking any other action identified in a provision below?
      <ul>
        <li>Sections 107 (1)(b) and 118 (1)(b) [recovery powers] &mdash; to the extent they authorize the local authority to do things the minister may do under s. 76 (1)(a)&ndash;(f).</li>
        <li>Section 107 (1)(c).</li>
      </ul>
    `,
    options: [
      { text: 'Yes', next: 'node5' },
      { text: 'No',  next: 'answer_complies1' }
    ]
  },

  /* ────────────────────  node 5  ──────────────────── */
  node5: {
    question: `
      Is the following statement <strong>true</strong>?<br>
      <blockquote>
        In the opinion of the head of the local authority, it is <em>not practicable</em> to consult and cooperate
        or to seek to obtain consent because of an <strong>imminent risk</strong> of loss of life or injury to
        individuals/animals, or significant loss or damage to property.
      </blockquote>
    `,
    options: [
      { text: 'Yes', next: 'answer_complies2' },
      { text: 'No',  next: 'answer_complies1' }
    ]
  },

  /* ────────────────  leaves / results  ──────────────── */
  answer_noobligation: {
    answer: `
      There is <strong>no requirement</strong> under EDMA&nbsp;s.120 to undertake consultation and cooperation.
    `
  },

  answer_complies1: {
    answer: `
      <p>There <strong>is</strong> an obligation to undertake consultation and cooperation under EDMA&nbsp;s.120.</p>

      <p><u>Before</u> taking the action, the local authority must:</p>
      <ul>
        <li><strong>Consult and cooperate</strong> with the Nisg̱a'a Nation, treaty first nation or an Indigenous governing body for the affected area that is specified in:
          <ul>
            <li>your emergency management plan;</li>
            <li>an agreement under the Act; or</li>
            <li>a provincial emergency management plan.</li>
          </ul>
        </li>
        <li><strong>Give notice</strong> to the Indigenous body of:
          <ul>
            <li>the details of the intended action; and</li>
            <li>any arrangements you intend to make under s.&nbsp;107 (1)(c) with respect to evacuated individuals.</li>
          </ul>
        </li>
        <li><strong>Consider</strong>:
          <ul>
            <li>any comments received from the Indigenous body; and</li>
            <li>the rights of the Indigenous peoples on whose behalf it acts.</li>
          </ul>
        </li>
        <li>You <strong>must not</strong> take the action if it will affect Nisg̱a'a Lands or treaty lands <em>unless</em> the Nisg̱a'a Nation or treaty first nation consents.</li>
      </ul>
    `
  },

  answer_complies2: {
    answer: `
      As soon as reasonably practicable <u>after</u> taking the specified action, you must:
      <ul>
        <li><strong>Engage and cooperate</strong> with the Nisg̱a'a Nation, treaty first nation or Indigenous governing body for the relevant area that is specified in:
          <ul>
            <li>your emergency management plan;</li>
            <li>an agreement under the Act; or</li>
            <li>a provincial emergency management plan.</li>
          </ul>
        </li>
        <li><strong>Give notice</strong> to the Indigenous body of:
          <ul>
            <li>the details of the action taken; and</li>
            <li>any arrangements you made or intend to make under s.&nbsp;107 (1)(c) with respect to evacuated persons.</li>
          </ul>
        </li>
        <li><strong>Consider</strong>:
          <ul>
            <li>any comments received from the Indigenous body; and</li>
            <li>the rights of the Indigenous peoples on whose behalf it acts.</li>
          </ul>
        </li>
      </ul>
    `
  }
};
