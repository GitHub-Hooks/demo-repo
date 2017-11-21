const GITHUB_UI_HOOKS = {
  'pull-request-compare': (meta) => {
    if (/^(feat|feature|fix|docs|style|refactor|perf|test|chore)(\(\w+\))?\//.test(meta.branch)) {
      const branchName = meta.branch.split('/')
      const pullRequestTitle = `${branchName[0]}: ${branchName[1].replace(/-/g, ' ')}`;
      const pullRequestTitleElement = document.getElementById('pull_request_title');
      pullRequestTitleElement.value = pullRequestTitle;
    } else {
      window.alert('Please use the proper branch naming schema');
    }
  }
}
