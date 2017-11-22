const GITHUB_UI_HOOKS = {
  'pull-request-compare': (meta) => {
    const title = document.getElementById('pull_request_title');
    title.value = 'Hello world';
  }
}
