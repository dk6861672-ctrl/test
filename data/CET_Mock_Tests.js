/* ============================================================
   CET MOCK TESTS — card list (auto-loaded)
   ============================================================
   This file defines the CARDS shown in the CET exam hall. It does
   NOT contain the actual questions — those live in a separate file
   per test, added later. This keeps the card visible now, showing
   an error until its matching data file is added.

   FOLDER SETUP ON GITHUB
   -----------------------
   Put this file at:  data/CET_Mock_Tests.js
   (relative to wherever index.html lives in your repo)

   index.html already loads this file automatically, and then tries
   to load each test's data file (see cetTestData below) right
   after it — no copy-pasting into index.html needed.

   HOW TO ADD REAL QUESTIONS LATER
   ---------------------------------
   1. Create a new file at the path shown in `dataFile` below for
      the card you want to fill in (e.g. data/cet/mock-test-for-science.js).
   2. In that new file, fill in cetTestData['<id>'] with the test's
      real sections and questions — for example:

        cetTestData['cet-mock-science'] = {
          durationMinutes: 90,
          marksCorrect: 1,
          marksWrong: 0,
          sections: [
            { key:'A', name:'Physics', count: 2 },
          ],
          questions: [
            {num:1, section:'A', stem:'...', options:{A:'...',B:'...',C:'...',D:'...'}, code: 1},
          ],
        };

   3. Commit that new file. The card in index.html will pick it up
      automatically — no further edits needed. `code` on every
      question is the obfuscated answer key (not a plain letter) —
      see the notes above CATALOG in index.html for how to generate
      it from a plain answer letter.
   ============================================================ */

// Shared holder that a test's own data file (once added) fills in.
// Declared here, before that file loads, so it never breaks if the
// file doesn't exist yet.
var cetTestData = (typeof cetTestData !== 'undefined') ? cetTestData : {};

const cetTests = [
  {
    id: 'cet-mock-science',
    title: 'Mock Test for Science',
    subtitle: '',
    dataFile: 'data/cet/mock-test-for-science.js',
  },
];
