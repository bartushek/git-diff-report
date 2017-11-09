const GraphQLClient = require('graphql-request').GraphQLClient

const client = new GraphQLClient('https://api.github.com/graphql', {
    headers: {
        Authorization: 'token ' + process.env.GITHUB_TOKEN,
    },
});


function getItem() {
    return client.request(`
    {
        organization(login: "syzygypl") {
          repositories(first: 100) {
          totalCount
          pageInfo {
            endCursor
            startCursor
          }
            edges {
              node {
                id
                name
                resourcePath
                url
              }
            }
          }
        }
      
    }
    
  `)
}

class GithubInterface {
    async getRepoList() {
        const repoList = await getItem();
        return repoList.organization.repositories.edges.map((edge) => {
            return { ...edge.node, clonePath: edge.node.url };
        })
    }
}

module.exports = GithubInterface;