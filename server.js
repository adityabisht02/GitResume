require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const ejs = require("ejs");
const axios = require("axios");
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

const starred = [
  {
    id: 600316454,
    node_id: "R_kgDOI8gaJg",
    name: "Decentralised-Ticketing-Based-On-NFTs",
    full_name: "adityabisht02/Decentralised-Ticketing-Based-On-NFTs",
    private: false,
    owner: {
      login: "adityabisht02",
      id: 89146189,
      node_id: "MDQ6VXNlcjg5MTQ2MTg5",
      avatar_url: "https://avatars.githubusercontent.com/u/89146189?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/adityabisht02",
      html_url: "https://github.com/adityabisht02",
      followers_url: "https://api.github.com/users/adityabisht02/followers",
      following_url:
        "https://api.github.com/users/adityabisht02/following{/other_user}",
      gists_url: "https://api.github.com/users/adityabisht02/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/adityabisht02/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/adityabisht02/subscriptions",
      organizations_url: "https://api.github.com/users/adityabisht02/orgs",
      repos_url: "https://api.github.com/users/adityabisht02/repos",
      events_url: "https://api.github.com/users/adityabisht02/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/adityabisht02/received_events",
      type: "User",
      site_admin: false,
    },
    html_url:
      "https://github.com/adityabisht02/Decentralised-Ticketing-Based-On-NFTs",
    description:
      "This platform will enable event organisers to create ticket NFTs to prevent black market selling and fake ticket scams and provide future benefits for ticket holders.",
    fork: false,
    url: "https://api.github.com/repos/adityabisht02/Decentralised-Ticketing-Based-On-NFTs",
    forks_url:
      "https://api.github.com/repos/adityabisht02/Decentralised-Ticketing-Based-On-NFTs/forks",
    keys_url:
      "https://api.github.com/repos/adityabisht02/Decentralised-Ticketing-Based-On-NFTs/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/adityabisht02/Decentralised-Ticketing-Based-On-NFTs/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/adityabisht02/Decentralised-Ticketing-Based-On-NFTs/teams",
    hooks_url:
      "https://api.github.com/repos/adityabisht02/Decentralised-Ticketing-Based-On-NFTs/hooks",
    issue_events_url:
      "https://api.github.com/repos/adityabisht02/Decentralised-Ticketing-Based-On-NFTs/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/adityabisht02/Decentralised-Ticketing-Based-On-NFTs/events",
    assignees_url:
      "https://api.github.com/repos/adityabisht02/Decentralised-Ticketing-Based-On-NFTs/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/adityabisht02/Decentralised-Ticketing-Based-On-NFTs/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/adityabisht02/Decentralised-Ticketing-Based-On-NFTs/tags",
    blobs_url:
      "https://api.github.com/repos/adityabisht02/Decentralised-Ticketing-Based-On-NFTs/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/adityabisht02/Decentralised-Ticketing-Based-On-NFTs/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/adityabisht02/Decentralised-Ticketing-Based-On-NFTs/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/adityabisht02/Decentralised-Ticketing-Based-On-NFTs/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/adityabisht02/Decentralised-Ticketing-Based-On-NFTs/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/adityabisht02/Decentralised-Ticketing-Based-On-NFTs/languages",
    stargazers_url:
      "https://api.github.com/repos/adityabisht02/Decentralised-Ticketing-Based-On-NFTs/stargazers",
    contributors_url:
      "https://api.github.com/repos/adityabisht02/Decentralised-Ticketing-Based-On-NFTs/contributors",
    subscribers_url:
      "https://api.github.com/repos/adityabisht02/Decentralised-Ticketing-Based-On-NFTs/subscribers",
    subscription_url:
      "https://api.github.com/repos/adityabisht02/Decentralised-Ticketing-Based-On-NFTs/subscription",
    commits_url:
      "https://api.github.com/repos/adityabisht02/Decentralised-Ticketing-Based-On-NFTs/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/adityabisht02/Decentralised-Ticketing-Based-On-NFTs/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/adityabisht02/Decentralised-Ticketing-Based-On-NFTs/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/adityabisht02/Decentralised-Ticketing-Based-On-NFTs/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/adityabisht02/Decentralised-Ticketing-Based-On-NFTs/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/adityabisht02/Decentralised-Ticketing-Based-On-NFTs/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/adityabisht02/Decentralised-Ticketing-Based-On-NFTs/merges",
    archive_url:
      "https://api.github.com/repos/adityabisht02/Decentralised-Ticketing-Based-On-NFTs/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/adityabisht02/Decentralised-Ticketing-Based-On-NFTs/downloads",
    issues_url:
      "https://api.github.com/repos/adityabisht02/Decentralised-Ticketing-Based-On-NFTs/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/adityabisht02/Decentralised-Ticketing-Based-On-NFTs/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/adityabisht02/Decentralised-Ticketing-Based-On-NFTs/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/adityabisht02/Decentralised-Ticketing-Based-On-NFTs/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/adityabisht02/Decentralised-Ticketing-Based-On-NFTs/labels{/name}",
    releases_url:
      "https://api.github.com/repos/adityabisht02/Decentralised-Ticketing-Based-On-NFTs/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/adityabisht02/Decentralised-Ticketing-Based-On-NFTs/deployments",
    created_at: "2023-02-11T05:22:35Z",
    updated_at: "2023-03-22T19:59:56Z",
    pushed_at: "2023-03-22T14:55:26Z",
    git_url:
      "git://github.com/adityabisht02/Decentralised-Ticketing-Based-On-NFTs.git",
    ssh_url:
      "git@github.com:adityabisht02/Decentralised-Ticketing-Based-On-NFTs.git",
    clone_url:
      "https://github.com/adityabisht02/Decentralised-Ticketing-Based-On-NFTs.git",
    svn_url:
      "https://github.com/adityabisht02/Decentralised-Ticketing-Based-On-NFTs",
    homepage: "",
    size: 934,
    stargazers_count: 2,
    watchers_count: 2,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 3,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 4,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 3,
    open_issues: 4,
    watchers: 2,
    default_branch: "main",
  },
  {
    id: 544822036,
    node_id: "R_kgDOIHlTFA",
    name: "BetterPoll-Backend",
    full_name: "adityabisht02/BetterPoll-Backend",
    private: false,
    owner: {
      login: "adityabisht02",
      id: 89146189,
      node_id: "MDQ6VXNlcjg5MTQ2MTg5",
      avatar_url: "https://avatars.githubusercontent.com/u/89146189?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/adityabisht02",
      html_url: "https://github.com/adityabisht02",
      followers_url: "https://api.github.com/users/adityabisht02/followers",
      following_url:
        "https://api.github.com/users/adityabisht02/following{/other_user}",
      gists_url: "https://api.github.com/users/adityabisht02/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/adityabisht02/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/adityabisht02/subscriptions",
      organizations_url: "https://api.github.com/users/adityabisht02/orgs",
      repos_url: "https://api.github.com/users/adityabisht02/repos",
      events_url: "https://api.github.com/users/adityabisht02/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/adityabisht02/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/adityabisht02/BetterPoll-Backend",
    description:
      "Backend for the BetterPoll mobile app. Created using node js and mysql.",
    fork: false,
    url: "https://api.github.com/repos/adityabisht02/BetterPoll-Backend",
    forks_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Backend/forks",
    keys_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Backend/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Backend/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Backend/teams",
    hooks_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Backend/hooks",
    issue_events_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Backend/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Backend/events",
    assignees_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Backend/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Backend/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Backend/tags",
    blobs_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Backend/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Backend/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Backend/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Backend/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Backend/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Backend/languages",
    stargazers_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Backend/stargazers",
    contributors_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Backend/contributors",
    subscribers_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Backend/subscribers",
    subscription_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Backend/subscription",
    commits_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Backend/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Backend/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Backend/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Backend/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Backend/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Backend/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Backend/merges",
    archive_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Backend/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Backend/downloads",
    issues_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Backend/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Backend/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Backend/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Backend/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Backend/labels{/name}",
    releases_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Backend/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Backend/deployments",
    created_at: "2022-10-03T09:36:57Z",
    updated_at: "2023-02-24T04:54:10Z",
    pushed_at: "2023-02-09T18:26:25Z",
    git_url: "git://github.com/adityabisht02/BetterPoll-Backend.git",
    ssh_url: "git@github.com:adityabisht02/BetterPoll-Backend.git",
    clone_url: "https://github.com/adityabisht02/BetterPoll-Backend.git",
    svn_url: "https://github.com/adityabisht02/BetterPoll-Backend",
    homepage: "",
    size: 1360,
    stargazers_count: 13,
    watchers_count: 13,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: true,
    forks_count: 20,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 5,
    license: {
      key: "gpl-3.0",
      name: "GNU General Public License v3.0",
      spdx_id: "GPL-3.0",
      url: "https://api.github.com/licenses/gpl-3.0",
      node_id: "MDc6TGljZW5zZTk=",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ["apis", "backend", "expressjs", "mysql", "nodejs"],
    visibility: "public",
    forks: 20,
    open_issues: 5,
    watchers: 13,
    default_branch: "main",
  },
  {
    id: 551043111,
    node_id: "R_kgDOINhAJw",
    name: "BetterPoll-Android",
    full_name: "adityabisht02/BetterPoll-Android",
    private: false,
    owner: {
      login: "adityabisht02",
      id: 89146189,
      node_id: "MDQ6VXNlcjg5MTQ2MTg5",
      avatar_url: "https://avatars.githubusercontent.com/u/89146189?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/adityabisht02",
      html_url: "https://github.com/adityabisht02",
      followers_url: "https://api.github.com/users/adityabisht02/followers",
      following_url:
        "https://api.github.com/users/adityabisht02/following{/other_user}",
      gists_url: "https://api.github.com/users/adityabisht02/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/adityabisht02/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/adityabisht02/subscriptions",
      organizations_url: "https://api.github.com/users/adityabisht02/orgs",
      repos_url: "https://api.github.com/users/adityabisht02/repos",
      events_url: "https://api.github.com/users/adityabisht02/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/adityabisht02/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/adityabisht02/BetterPoll-Android",
    description: "The frontend for the betterpoll application",
    fork: false,
    url: "https://api.github.com/repos/adityabisht02/BetterPoll-Android",
    forks_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Android/forks",
    keys_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Android/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Android/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Android/teams",
    hooks_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Android/hooks",
    issue_events_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Android/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Android/events",
    assignees_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Android/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Android/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Android/tags",
    blobs_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Android/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Android/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Android/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Android/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Android/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Android/languages",
    stargazers_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Android/stargazers",
    contributors_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Android/contributors",
    subscribers_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Android/subscribers",
    subscription_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Android/subscription",
    commits_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Android/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Android/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Android/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Android/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Android/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Android/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Android/merges",
    archive_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Android/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Android/downloads",
    issues_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Android/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Android/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Android/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Android/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Android/labels{/name}",
    releases_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Android/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/adityabisht02/BetterPoll-Android/deployments",
    created_at: "2022-10-13T18:44:39Z",
    updated_at: "2023-03-22T21:26:44Z",
    pushed_at: "2023-03-22T21:02:00Z",
    git_url: "git://github.com/adityabisht02/BetterPoll-Android.git",
    ssh_url: "git@github.com:adityabisht02/BetterPoll-Android.git",
    clone_url: "https://github.com/adityabisht02/BetterPoll-Android.git",
    svn_url: "https://github.com/adityabisht02/BetterPoll-Android",
    homepage: "",
    size: 922,
    stargazers_count: 6,
    watchers_count: 6,
    language: "Java",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: false,
    forks_count: 8,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 2,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ["android", "java"],
    visibility: "public",
    forks: 8,
    open_issues: 2,
    watchers: 6,
    default_branch: "main",
  },
  {
    id: 482233897,
    node_id: "R_kgDOHL5OKQ",
    name: "cookie",
    full_name: "akhil-aggarwal/cookie",
    private: false,
    owner: {
      login: "akhil-aggarwal",
      id: 58690693,
      node_id: "MDQ6VXNlcjU4NjkwNjkz",
      avatar_url: "https://avatars.githubusercontent.com/u/58690693?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/akhil-aggarwal",
      html_url: "https://github.com/akhil-aggarwal",
      followers_url: "https://api.github.com/users/akhil-aggarwal/followers",
      following_url:
        "https://api.github.com/users/akhil-aggarwal/following{/other_user}",
      gists_url: "https://api.github.com/users/akhil-aggarwal/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/akhil-aggarwal/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/akhil-aggarwal/subscriptions",
      organizations_url: "https://api.github.com/users/akhil-aggarwal/orgs",
      repos_url: "https://api.github.com/users/akhil-aggarwal/repos",
      events_url:
        "https://api.github.com/users/akhil-aggarwal/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/akhil-aggarwal/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/akhil-aggarwal/cookie",
    description:
      "This is a demonstration website on how internet cookies work.",
    fork: false,
    url: "https://api.github.com/repos/akhil-aggarwal/cookie",
    forks_url: "https://api.github.com/repos/akhil-aggarwal/cookie/forks",
    keys_url:
      "https://api.github.com/repos/akhil-aggarwal/cookie/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/akhil-aggarwal/cookie/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/akhil-aggarwal/cookie/teams",
    hooks_url: "https://api.github.com/repos/akhil-aggarwal/cookie/hooks",
    issue_events_url:
      "https://api.github.com/repos/akhil-aggarwal/cookie/issues/events{/number}",
    events_url: "https://api.github.com/repos/akhil-aggarwal/cookie/events",
    assignees_url:
      "https://api.github.com/repos/akhil-aggarwal/cookie/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/akhil-aggarwal/cookie/branches{/branch}",
    tags_url: "https://api.github.com/repos/akhil-aggarwal/cookie/tags",
    blobs_url:
      "https://api.github.com/repos/akhil-aggarwal/cookie/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/akhil-aggarwal/cookie/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/akhil-aggarwal/cookie/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/akhil-aggarwal/cookie/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/akhil-aggarwal/cookie/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/akhil-aggarwal/cookie/languages",
    stargazers_url:
      "https://api.github.com/repos/akhil-aggarwal/cookie/stargazers",
    contributors_url:
      "https://api.github.com/repos/akhil-aggarwal/cookie/contributors",
    subscribers_url:
      "https://api.github.com/repos/akhil-aggarwal/cookie/subscribers",
    subscription_url:
      "https://api.github.com/repos/akhil-aggarwal/cookie/subscription",
    commits_url:
      "https://api.github.com/repos/akhil-aggarwal/cookie/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/akhil-aggarwal/cookie/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/akhil-aggarwal/cookie/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/akhil-aggarwal/cookie/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/akhil-aggarwal/cookie/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/akhil-aggarwal/cookie/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/akhil-aggarwal/cookie/merges",
    archive_url:
      "https://api.github.com/repos/akhil-aggarwal/cookie/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/akhil-aggarwal/cookie/downloads",
    issues_url:
      "https://api.github.com/repos/akhil-aggarwal/cookie/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/akhil-aggarwal/cookie/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/akhil-aggarwal/cookie/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/akhil-aggarwal/cookie/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/akhil-aggarwal/cookie/labels{/name}",
    releases_url:
      "https://api.github.com/repos/akhil-aggarwal/cookie/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/akhil-aggarwal/cookie/deployments",
    created_at: "2022-04-16T11:19:57Z",
    updated_at: "2022-10-18T14:28:06Z",
    pushed_at: "2022-10-18T14:20:31Z",
    git_url: "git://github.com/akhil-aggarwal/cookie.git",
    ssh_url: "git@github.com:akhil-aggarwal/cookie.git",
    clone_url: "https://github.com/akhil-aggarwal/cookie.git",
    svn_url: "https://github.com/akhil-aggarwal/cookie",
    homepage: "https://akhil-aggarwal.github.io/cookie/",
    size: 3529,
    stargazers_count: 11,
    watchers_count: 11,
    language: "SCSS",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    has_discussions: true,
    forks_count: 19,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 9,
    license: {
      key: "gpl-3.0",
      name: "GNU General Public License v3.0",
      spdx_id: "GPL-3.0",
      url: "https://api.github.com/licenses/gpl-3.0",
      node_id: "MDc6TGljZW5zZTk=",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "cookie",
      "css",
      "documentation",
      "hacktoberfest",
      "hacktoberfest-accepted",
      "hacktoberfest2022",
      "html",
      "javascript",
      "nocode",
      "scss",
      "state-management",
    ],
    visibility: "public",
    forks: 19,
    open_issues: 9,
    watchers: 11,
    default_branch: "main",
  },
  {
    id: 198065251,
    node_id: "MDEwOlJlcG9zaXRvcnkxOTgwNjUyNTE=",
    name: "opentogethertube",
    full_name: "dyc3/opentogethertube",
    private: false,
    owner: {
      login: "dyc3",
      id: 1808807,
      node_id: "MDQ6VXNlcjE4MDg4MDc=",
      avatar_url: "https://avatars.githubusercontent.com/u/1808807?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/dyc3",
      html_url: "https://github.com/dyc3",
      followers_url: "https://api.github.com/users/dyc3/followers",
      following_url: "https://api.github.com/users/dyc3/following{/other_user}",
      gists_url: "https://api.github.com/users/dyc3/gists{/gist_id}",
      starred_url: "https://api.github.com/users/dyc3/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/dyc3/subscriptions",
      organizations_url: "https://api.github.com/users/dyc3/orgs",
      repos_url: "https://api.github.com/users/dyc3/repos",
      events_url: "https://api.github.com/users/dyc3/events{/privacy}",
      received_events_url: "https://api.github.com/users/dyc3/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/dyc3/opentogethertube",
    description:
      "Watch videos with your friends. The spiritual successor to TogetherTube, preserving the spirit of it's simple to use interface, while improving it's look, feel, and reliability.",
    fork: false,
    url: "https://api.github.com/repos/dyc3/opentogethertube",
    forks_url: "https://api.github.com/repos/dyc3/opentogethertube/forks",
    keys_url:
      "https://api.github.com/repos/dyc3/opentogethertube/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/dyc3/opentogethertube/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/dyc3/opentogethertube/teams",
    hooks_url: "https://api.github.com/repos/dyc3/opentogethertube/hooks",
    issue_events_url:
      "https://api.github.com/repos/dyc3/opentogethertube/issues/events{/number}",
    events_url: "https://api.github.com/repos/dyc3/opentogethertube/events",
    assignees_url:
      "https://api.github.com/repos/dyc3/opentogethertube/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/dyc3/opentogethertube/branches{/branch}",
    tags_url: "https://api.github.com/repos/dyc3/opentogethertube/tags",
    blobs_url:
      "https://api.github.com/repos/dyc3/opentogethertube/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/dyc3/opentogethertube/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/dyc3/opentogethertube/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/dyc3/opentogethertube/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/dyc3/opentogethertube/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/dyc3/opentogethertube/languages",
    stargazers_url:
      "https://api.github.com/repos/dyc3/opentogethertube/stargazers",
    contributors_url:
      "https://api.github.com/repos/dyc3/opentogethertube/contributors",
    subscribers_url:
      "https://api.github.com/repos/dyc3/opentogethertube/subscribers",
    subscription_url:
      "https://api.github.com/repos/dyc3/opentogethertube/subscription",
    commits_url:
      "https://api.github.com/repos/dyc3/opentogethertube/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/dyc3/opentogethertube/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/dyc3/opentogethertube/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/dyc3/opentogethertube/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/dyc3/opentogethertube/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/dyc3/opentogethertube/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/dyc3/opentogethertube/merges",
    archive_url:
      "https://api.github.com/repos/dyc3/opentogethertube/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/dyc3/opentogethertube/downloads",
    issues_url:
      "https://api.github.com/repos/dyc3/opentogethertube/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/dyc3/opentogethertube/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/dyc3/opentogethertube/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/dyc3/opentogethertube/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/dyc3/opentogethertube/labels{/name}",
    releases_url:
      "https://api.github.com/repos/dyc3/opentogethertube/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/dyc3/opentogethertube/deployments",
    created_at: "2019-07-21T14:17:16Z",
    updated_at: "2023-03-20T20:24:32Z",
    pushed_at: "2023-03-28T15:22:39Z",
    git_url: "git://github.com/dyc3/opentogethertube.git",
    ssh_url: "git@github.com:dyc3/opentogethertube.git",
    clone_url: "https://github.com/dyc3/opentogethertube.git",
    svn_url: "https://github.com/dyc3/opentogethertube",
    homepage: "https://opentogethertube.com",
    size: 10758,
    stargazers_count: 287,
    watchers_count: 287,
    language: "TypeScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    has_discussions: true,
    forks_count: 41,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 71,
    license: {
      key: "agpl-3.0",
      name: "GNU Affero General Public License v3.0",
      spdx_id: "AGPL-3.0",
      url: "https://api.github.com/licenses/agpl-3.0",
      node_id: "MDc6TGljZW5zZTE=",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "entertainment",
      "hacktoberfest",
      "nodejs",
      "social",
      "video",
      "video-streaming",
      "video-synchronization",
      "vuejs",
    ],
    visibility: "public",
    forks: 41,
    open_issues: 71,
    watchers: 287,
    default_branch: "master",
  },
  {
    id: 450419429,
    node_id: "R_kgDOGtja5Q",
    name: "leetcode-the-hard-way",
    full_name: "wingkwong/leetcode-the-hard-way",
    private: false,
    owner: {
      login: "wingkwong",
      id: 35857179,
      node_id: "MDQ6VXNlcjM1ODU3MTc5",
      avatar_url: "https://avatars.githubusercontent.com/u/35857179?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/wingkwong",
      html_url: "https://github.com/wingkwong",
      followers_url: "https://api.github.com/users/wingkwong/followers",
      following_url:
        "https://api.github.com/users/wingkwong/following{/other_user}",
      gists_url: "https://api.github.com/users/wingkwong/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/wingkwong/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/wingkwong/subscriptions",
      organizations_url: "https://api.github.com/users/wingkwong/orgs",
      repos_url: "https://api.github.com/users/wingkwong/repos",
      events_url: "https://api.github.com/users/wingkwong/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/wingkwong/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/wingkwong/leetcode-the-hard-way",
    description:
      "LeetCode The Hard Way - From Absolute Beginner to Quitter. Join Discord: https://discord.com/invite/Nqm4jJcyBf",
    fork: false,
    url: "https://api.github.com/repos/wingkwong/leetcode-the-hard-way",
    forks_url:
      "https://api.github.com/repos/wingkwong/leetcode-the-hard-way/forks",
    keys_url:
      "https://api.github.com/repos/wingkwong/leetcode-the-hard-way/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/wingkwong/leetcode-the-hard-way/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/wingkwong/leetcode-the-hard-way/teams",
    hooks_url:
      "https://api.github.com/repos/wingkwong/leetcode-the-hard-way/hooks",
    issue_events_url:
      "https://api.github.com/repos/wingkwong/leetcode-the-hard-way/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/wingkwong/leetcode-the-hard-way/events",
    assignees_url:
      "https://api.github.com/repos/wingkwong/leetcode-the-hard-way/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/wingkwong/leetcode-the-hard-way/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/wingkwong/leetcode-the-hard-way/tags",
    blobs_url:
      "https://api.github.com/repos/wingkwong/leetcode-the-hard-way/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/wingkwong/leetcode-the-hard-way/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/wingkwong/leetcode-the-hard-way/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/wingkwong/leetcode-the-hard-way/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/wingkwong/leetcode-the-hard-way/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/wingkwong/leetcode-the-hard-way/languages",
    stargazers_url:
      "https://api.github.com/repos/wingkwong/leetcode-the-hard-way/stargazers",
    contributors_url:
      "https://api.github.com/repos/wingkwong/leetcode-the-hard-way/contributors",
    subscribers_url:
      "https://api.github.com/repos/wingkwong/leetcode-the-hard-way/subscribers",
    subscription_url:
      "https://api.github.com/repos/wingkwong/leetcode-the-hard-way/subscription",
    commits_url:
      "https://api.github.com/repos/wingkwong/leetcode-the-hard-way/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/wingkwong/leetcode-the-hard-way/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/wingkwong/leetcode-the-hard-way/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/wingkwong/leetcode-the-hard-way/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/wingkwong/leetcode-the-hard-way/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/wingkwong/leetcode-the-hard-way/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/wingkwong/leetcode-the-hard-way/merges",
    archive_url:
      "https://api.github.com/repos/wingkwong/leetcode-the-hard-way/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/wingkwong/leetcode-the-hard-way/downloads",
    issues_url:
      "https://api.github.com/repos/wingkwong/leetcode-the-hard-way/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/wingkwong/leetcode-the-hard-way/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/wingkwong/leetcode-the-hard-way/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/wingkwong/leetcode-the-hard-way/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/wingkwong/leetcode-the-hard-way/labels{/name}",
    releases_url:
      "https://api.github.com/repos/wingkwong/leetcode-the-hard-way/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/wingkwong/leetcode-the-hard-way/deployments",
    created_at: "2022-01-21T08:54:51Z",
    updated_at: "2023-03-28T19:09:11Z",
    pushed_at: "2023-03-31T12:14:28Z",
    git_url: "git://github.com/wingkwong/leetcode-the-hard-way.git",
    ssh_url: "git@github.com:wingkwong/leetcode-the-hard-way.git",
    clone_url: "https://github.com/wingkwong/leetcode-the-hard-way.git",
    svn_url: "https://github.com/wingkwong/leetcode-the-hard-way",
    homepage: "https://linktr.ee/leetcodethehardway",
    size: 585329,
    stargazers_count: 618,
    watchers_count: 618,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    has_discussions: true,
    forks_count: 174,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 22,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "algorithm",
      "algorithms",
      "cpp",
      "data-structures",
      "golang",
      "hacktoberfest",
      "hacktoberfest-2022",
      "javascript",
      "leetcode",
      "leetcode-solutions",
      "leetcode-tutorials",
      "python",
    ],
    visibility: "public",
    forks: 174,
    open_issues: 22,
    watchers: 618,
    default_branch: "main",
  },
  {
    id: 436876318,
    node_id: "R_kgDOGgo0Hg",
    name: "screenREC",
    full_name: "heysagnik/screenREC",
    private: false,
    owner: {
      login: "heysagnik",
      id: 70798495,
      node_id: "MDQ6VXNlcjcwNzk4NDk1",
      avatar_url: "https://avatars.githubusercontent.com/u/70798495?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/heysagnik",
      html_url: "https://github.com/heysagnik",
      followers_url: "https://api.github.com/users/heysagnik/followers",
      following_url:
        "https://api.github.com/users/heysagnik/following{/other_user}",
      gists_url: "https://api.github.com/users/heysagnik/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/heysagnik/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/heysagnik/subscriptions",
      organizations_url: "https://api.github.com/users/heysagnik/orgs",
      repos_url: "https://api.github.com/users/heysagnik/repos",
      events_url: "https://api.github.com/users/heysagnik/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/heysagnik/received_events",
      type: "User",
      site_admin: false,
    },
    html_url: "https://github.com/heysagnik/screenREC",
    description:
      "A really simple , ad-free & minimal web based screen recorder 📹",
    fork: false,
    url: "https://api.github.com/repos/heysagnik/screenREC",
    forks_url: "https://api.github.com/repos/heysagnik/screenREC/forks",
    keys_url: "https://api.github.com/repos/heysagnik/screenREC/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/heysagnik/screenREC/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/heysagnik/screenREC/teams",
    hooks_url: "https://api.github.com/repos/heysagnik/screenREC/hooks",
    issue_events_url:
      "https://api.github.com/repos/heysagnik/screenREC/issues/events{/number}",
    events_url: "https://api.github.com/repos/heysagnik/screenREC/events",
    assignees_url:
      "https://api.github.com/repos/heysagnik/screenREC/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/heysagnik/screenREC/branches{/branch}",
    tags_url: "https://api.github.com/repos/heysagnik/screenREC/tags",
    blobs_url:
      "https://api.github.com/repos/heysagnik/screenREC/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/heysagnik/screenREC/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/heysagnik/screenREC/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/heysagnik/screenREC/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/heysagnik/screenREC/statuses/{sha}",
    languages_url: "https://api.github.com/repos/heysagnik/screenREC/languages",
    stargazers_url:
      "https://api.github.com/repos/heysagnik/screenREC/stargazers",
    contributors_url:
      "https://api.github.com/repos/heysagnik/screenREC/contributors",
    subscribers_url:
      "https://api.github.com/repos/heysagnik/screenREC/subscribers",
    subscription_url:
      "https://api.github.com/repos/heysagnik/screenREC/subscription",
    commits_url:
      "https://api.github.com/repos/heysagnik/screenREC/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/heysagnik/screenREC/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/heysagnik/screenREC/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/heysagnik/screenREC/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/heysagnik/screenREC/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/heysagnik/screenREC/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/heysagnik/screenREC/merges",
    archive_url:
      "https://api.github.com/repos/heysagnik/screenREC/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/heysagnik/screenREC/downloads",
    issues_url:
      "https://api.github.com/repos/heysagnik/screenREC/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/heysagnik/screenREC/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/heysagnik/screenREC/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/heysagnik/screenREC/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/heysagnik/screenREC/labels{/name}",
    releases_url:
      "https://api.github.com/repos/heysagnik/screenREC/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/heysagnik/screenREC/deployments",
    created_at: "2021-12-10T06:35:14Z",
    updated_at: "2023-04-01T11:29:04Z",
    pushed_at: "2022-12-12T15:38:45Z",
    git_url: "git://github.com/heysagnik/screenREC.git",
    ssh_url: "git@github.com:heysagnik/screenREC.git",
    clone_url: "https://github.com/heysagnik/screenREC.git",
    svn_url: "https://github.com/heysagnik/screenREC",
    homepage: "https://screen-rec.vercel.app",
    size: 745,
    stargazers_count: 114,
    watchers_count: 114,
    language: "SCSS",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    has_discussions: true,
    forks_count: 39,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 8,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "collaborate",
      "design",
      "github",
      "good-first-issue",
      "hacktoberfest",
      "hacktoberfest-accepted",
      "hacktoberfest2022",
      "opensource",
      "parcel",
      "productivity",
      "reactjs",
      "screen-recorder",
      "scss",
      "vercel",
      "webapp",
    ],
    visibility: "public",
    forks: 39,
    open_issues: 8,
    watchers: 114,
    default_branch: "master",
  },
  {
    id: 40687563,
    node_id: "MDEwOlJlcG9zaXRvcnk0MDY4NzU2Mw==",
    name: "oppia",
    full_name: "oppia/oppia",
    private: false,
    owner: {
      login: "oppia",
      id: 11620230,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjExNjIwMjMw",
      avatar_url: "https://avatars.githubusercontent.com/u/11620230?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/oppia",
      html_url: "https://github.com/oppia",
      followers_url: "https://api.github.com/users/oppia/followers",
      following_url:
        "https://api.github.com/users/oppia/following{/other_user}",
      gists_url: "https://api.github.com/users/oppia/gists{/gist_id}",
      starred_url: "https://api.github.com/users/oppia/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/oppia/subscriptions",
      organizations_url: "https://api.github.com/users/oppia/orgs",
      repos_url: "https://api.github.com/users/oppia/repos",
      events_url: "https://api.github.com/users/oppia/events{/privacy}",
      received_events_url: "https://api.github.com/users/oppia/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/oppia/oppia",
    description:
      "A free, online learning platform to make quality education accessible for all.",
    fork: false,
    url: "https://api.github.com/repos/oppia/oppia",
    forks_url: "https://api.github.com/repos/oppia/oppia/forks",
    keys_url: "https://api.github.com/repos/oppia/oppia/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/oppia/oppia/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/oppia/oppia/teams",
    hooks_url: "https://api.github.com/repos/oppia/oppia/hooks",
    issue_events_url:
      "https://api.github.com/repos/oppia/oppia/issues/events{/number}",
    events_url: "https://api.github.com/repos/oppia/oppia/events",
    assignees_url: "https://api.github.com/repos/oppia/oppia/assignees{/user}",
    branches_url: "https://api.github.com/repos/oppia/oppia/branches{/branch}",
    tags_url: "https://api.github.com/repos/oppia/oppia/tags",
    blobs_url: "https://api.github.com/repos/oppia/oppia/git/blobs{/sha}",
    git_tags_url: "https://api.github.com/repos/oppia/oppia/git/tags{/sha}",
    git_refs_url: "https://api.github.com/repos/oppia/oppia/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/oppia/oppia/git/trees{/sha}",
    statuses_url: "https://api.github.com/repos/oppia/oppia/statuses/{sha}",
    languages_url: "https://api.github.com/repos/oppia/oppia/languages",
    stargazers_url: "https://api.github.com/repos/oppia/oppia/stargazers",
    contributors_url: "https://api.github.com/repos/oppia/oppia/contributors",
    subscribers_url: "https://api.github.com/repos/oppia/oppia/subscribers",
    subscription_url: "https://api.github.com/repos/oppia/oppia/subscription",
    commits_url: "https://api.github.com/repos/oppia/oppia/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/oppia/oppia/git/commits{/sha}",
    comments_url: "https://api.github.com/repos/oppia/oppia/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/oppia/oppia/issues/comments{/number}",
    contents_url: "https://api.github.com/repos/oppia/oppia/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/oppia/oppia/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/oppia/oppia/merges",
    archive_url:
      "https://api.github.com/repos/oppia/oppia/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/oppia/oppia/downloads",
    issues_url: "https://api.github.com/repos/oppia/oppia/issues{/number}",
    pulls_url: "https://api.github.com/repos/oppia/oppia/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/oppia/oppia/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/oppia/oppia/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/oppia/oppia/labels{/name}",
    releases_url: "https://api.github.com/repos/oppia/oppia/releases{/id}",
    deployments_url: "https://api.github.com/repos/oppia/oppia/deployments",
    created_at: "2015-08-14T00:16:14Z",
    updated_at: "2023-03-31T18:37:48Z",
    pushed_at: "2023-04-01T15:19:39Z",
    git_url: "git://github.com/oppia/oppia.git",
    ssh_url: "git@github.com:oppia/oppia.git",
    clone_url: "https://github.com/oppia/oppia.git",
    svn_url: "https://github.com/oppia/oppia",
    homepage: "https://www.oppia.org",
    size: 250518,
    stargazers_count: 4962,
    watchers_count: 4962,
    language: "Python",
    has_issues: true,
    has_projects: true,
    has_downloads: false,
    has_wiki: true,
    has_pages: false,
    has_discussions: true,
    forks_count: 2980,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 1192,
    license: {
      key: "apache-2.0",
      name: "Apache License 2.0",
      spdx_id: "Apache-2.0",
      url: "https://api.github.com/licenses/apache-2.0",
      node_id: "MDc6TGljZW5zZTI=",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [
      "angular",
      "angularjs",
      "appengine",
      "education",
      "hacktoberfest",
      "interactive",
      "javascript",
      "learning",
      "nonprofit",
      "python",
      "teaching",
      "tutor",
      "tutorials",
      "web",
    ],
    visibility: "public",
    forks: 2980,
    open_issues: 1192,
    watchers: 4962,
    default_branch: "develop",
  },
];

const profile = {
  login: "adityabisht02",
  id: 89146189,
  node_id: "MDQ6VXNlcjg5MTQ2MTg5",
  avatar_url: "https://avatars.githubusercontent.com/u/89146189?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/adityabisht02",
  html_url: "https://github.com/adityabisht02",
  followers_url: "https://api.github.com/users/adityabisht02/followers",
  following_url:
    "https://api.github.com/users/adityabisht02/following{/other_user}",
  gists_url: "https://api.github.com/users/adityabisht02/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/adityabisht02/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/adityabisht02/subscriptions",
  organizations_url: "https://api.github.com/users/adityabisht02/orgs",
  repos_url: "https://api.github.com/users/adityabisht02/repos",
  events_url: "https://api.github.com/users/adityabisht02/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/adityabisht02/received_events",
  type: "User",
  site_admin: false,
  name: "Aditya Bisht",
  company: "BML Munjal University",
  blog: "https://adityabisht.netlify.app/",
  location: "Gurugram,Haryana",
  email: null,
  hireable: null,
  bio: "I love building projects and collaborating with other people. I am skilled in fullstack and native android development. Am currently studying blockchain.",
  twitter_username: "AdityaB35550332",
  public_repos: 40,
  public_gists: 0,
  followers: 9,
  following: 8,
  created_at: "2021-08-18T14:17:58Z",
  updated_at: "2023-03-31T20:49:26Z",
};

var githubprofile = {};

function getProfile() {
  axios
    .get("https://api.github.com/users/adityabisht02/starred")
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
}

app.get("/", function (req, res) {
  res.render("index", profile);
});

app.post("/", function (req, res) {
  const username = req.body.username;
  const url = "https://api.github.com/users/" + username;
  // axios
  //   .get(url)
  //   .then(function (response) {
  //     // handle success
  //     githubprofile = response.data;
  //     console.log(githubprofile);

  //     res.render("resume1", githubprofile);
  //   })
  //   .catch(function (error) {
  //     // handle error
  //     console.log(error);
  //   })
  //   .finally(function () {
  //     // always executed
  //   });

  res.render("resume1", { profile: profile, starred: starred });
});

app.get("/resume", function (req, res) {
  res.render("resume2", { starred: starred });
});

app.listen(3000, function () {
  console.log("Server listening on port 3000");
});
