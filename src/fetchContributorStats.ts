/*
 * This file is part of the Github Contributor Stats.
 *
 * (c) TaehyunHwang <eeht1717@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import axios from 'axios';

/**
 * The Fetch Contributor Stats Function.
 *
 * This function holds the request for the github graphql APIs, which includes
 * recent commit contributions.
 *
 * @param {String} username The target github username for contribution stats.
 *
 * @return {*}
 */
const fetchContributorStats = async (username) => {
  const token = process.env.GITHUB_PERSONAL_ACCESS_TOKEN;

  if (!token) {
    throw new Error('GITHUB_PERSONAL_ACCESS_TOKEN is not set');
  }

  const response = await axios({
    url: 'https://api.github.com/graphql',
    method: 'POST',
    headers: {
      Authorization: `token ${token}`,
    },
    validateStatus: (status) => status >= 200 && status < 500,
    data: {
      query: `query {
        user(login: ${JSON.stringify(username)}) {
          id
          name
          repositoriesContributedTo(first: 100, contributionTypes: [COMMIT]) {
            totalCount
            nodes {
              owner {
                id
                avatarUrl
              }
              isInOrganization
              url
              homepageUrl
              name
              nameWithOwner
              stargazerCount
              openGraphImageUrl
              defaultBranchRef {
                target {
                  ... on Commit {
                    history {
                      totalCount
                    }
                  }
                }
              }
            }
          }
        }
      }`,
    },
  });

  if (response.status !== 200) {
    throw new Error(`GitHub API error: ${response.status}`);
  }

  if (response.data.errors) {
    throw new Error(response.data.errors[0]?.message || 'GitHub API error');
  }

  const user = response.data.data?.user;

  if (!user) {
    throw new Error(`User "${username}" not found`);
  }

  return user;
};

export { fetchContributorStats };
