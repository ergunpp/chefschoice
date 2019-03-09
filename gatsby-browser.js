/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

exports.onServiceWorkerUpdateFound = () => {
  const answer = window.confirm(
    `Bu uygulama güncellendi. ` +
      `En yeni versiyon yüklensin mi?`
  )

  if (answer === true) {
    window.location.reload()
  }
}

exports.shouldUpdateScroll = () => {
  if (window.__navigatingToLink === true) {
    return [0, 0];
  }
  return true;
};

exports.onRouteUpdate = () => {
  window.__navigatingToLink = false;
};