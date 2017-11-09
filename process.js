const testFolder = './tmp/';
const fs = require('fs');
const path = require("path");
const NodeGit = require("nodegit");
let Diff2Html = require("diff2html").Diff2Html;
var mkdirp = require('mkdirp');
var template  = require("./template");
const moemnt = require("moment");
var sanitize = require("sanitize-filename");
const getRepoPaths = async () => {
    return await new Promise(res => {
        fs.readdir(testFolder, (err, files) => {
            res(files.filter(f => f !== '.DS_Store').map(f => ({ name: f, path: path.join(__dirname, testFolder, f) })));
        })
    })
};

const run = async () => {
    const paths = await getRepoPaths();
    await Promise.all(paths.map(async file => {
        const repo = await NodeGit.Repository.open(file.path);
        const walker = NodeGit.Revwalk.create(repo);
        walker.pushGlob('refs/remotes/origin/*');
        const commits = await walker.getCommitsUntil(c => true);
        await Promise.all(commits.map(async commit => {
            const diffs = await commit.getDiff(() => {});
            await Promise.all(diffs.map(async diff => {
                const buf = await diff.toBuf(1);
                let outputHtml = Diff2Html.getPrettyHtml(buf, {inputFormat: 'diff', showFiles: true, matching: 'lines'});
                await new Promise(res => {
                    const date = moemnt(commit.date());
                    const filepath = path.join(__dirname, 'result', commit.author().name(), date.format("YYYY"), date.format("MM.YYYY"), file.name);
                    const filename = sanitize(date.format("DD-MM-YYYY") + ' - ' + commit.message() + commit.sha() + '.html', { replacement: "+" });
                    const html = template.pre + outputHtml + template.post;
                    mkdirp(path.join(filepath), () => {
                        fs.writeFile(path.join(filepath, filename), html, (err) => {
                            if(err) {
                                return console.log(err);
                            }
                            res();
                            console.log(filename, 'saved');
                        });
                    });
                });
            }))

        }));
    }));
};

run().then(() => { }).catch(e => { console.log(e); process.exit()});