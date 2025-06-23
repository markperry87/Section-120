// decision-tree.js
// Store all branching logic & text here. As long as this file lives
// beside index.html, the relative import in index.html works.

export const tree = {
  start: {
    question: 'Does your organization have more than $10 million CAD in annual revenue?',
    options: [
      { text: 'Yes', next: 'node1' },
      { text: 'No',  next: 'node2' }
    ]
  },

  node1: {
    question: 'Do you collect personal information from Canadian residents?',
    options: [
      { text: 'Yes', next: 'answer_complies' },
      { text: 'No',  next: 'answer_noobligation' }
    ]
  },

  node2: {
    question: 'Is your organization a federal work, undertaking or business (FWUB)?',
    options: [
      { text: 'Yes', next: 'answer_complies' },
      { text: 'No',  next: 'answer_noobligation' }
    ]
  },

  /* ---- final leaves ---- */
  answer_complies: {
    answer:
      'The Personal Information Protection and Electronic Documents Act (PIPEDA) applies. ' +
      'You must implement a privacy management program and meet consent, access, and safeguarding requirements.'
  },

  answer_noobligation: {
    answer:
      'PIPEDA does not apply. You may still need to comply with relevant provincial privacy laws.'
  }
};
