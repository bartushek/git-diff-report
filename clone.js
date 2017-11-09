const path = require("path");
const NodeGit = require("nodegit");
const GithubInterface = require('./interfaces/githubInterface');
const gti = new GithubInterface();
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const cloneOptions = {};

cloneOptions.fetchOpts = {
    callbacks: {
        certificateCheck: function() { return 1; },
        credentials: function() {
            return NodeGit.Cred.userpassPlaintextNew(GITHUB_TOKEN, "x-oauth-basic");
        }
    }
};

async function run() {
    const list = await gti.getRepoList();
    await Promise.all(list.map(await ((l) => {
        return NodeGit.Clone(l.clonePath, path.join(__dirname, "tmp", l.name), cloneOptions);
    })))
}

run().then(console.log).catch(err => console.log(err));