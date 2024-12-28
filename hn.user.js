// ==UserScript==
// @name         HN Minimize Comments Without Links
// @version      1.0
// @description  Collapses all parent comments on HN that don't contain links
// @match        https://news.ycombinator.com/item?id=*
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    // Select all comment rows
    const commentRows = document.querySelectorAll('tr.athing.comtr');

    commentRows.forEach(row => {
        const commentText = row.querySelector('.commtext');
        if (commentText) {
            // Detect a link either by looking for <a> tags or http(s) patterns
            const hasLink = commentText.querySelector('a') || /https?:\/\/\S+/i.test(commentText.textContent);

            // If no link is found, simulate a click on the toggle ([-]) link to collapse
            if (!hasLink) {
                const toggleLink = row.querySelector('.togg');
                if (toggleLink) {
                    toggleLink.click();
                }
            }
        }
    });
})();
