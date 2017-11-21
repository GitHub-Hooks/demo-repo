const hooks = {
  'compare-&-pull-request': (meta) => {
    if (/^(feat|feature|fix|docs|style|refactor|perf|test|chore)(\(\w+\))?\//.test(meta.branch)) {
      const branchName = meta.branch.split('/')
      const pullRequestTitle = `${branchName[0]}: ${branchName[1].replace(/-/g, ' ')}`;
      const pullRequestTitleElement = document.getElementById('pull_request_title');
      pullRequestTitleElement.value = pullRequestTitle;
    } else {
      window.alert('Please use the proper branch naming schema');
    }

    chrome.storage.sync.get({
      token: null,
    }, function({ token }) {
      console.log(token);
      chrome.tabs.create({
        url: `https://example.com`
      })
    });
  }
}
