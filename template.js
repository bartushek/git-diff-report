const post = `
</div>
</body>
</html>
`;

const pre = `
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Diff to HTML by rtfpessoa</title>

    <!--
        Diff to HTML (template.html)
        Author: rtfpessoa
    -->

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.9.0/styles/github.min.css">

    <style>
        .d2h-wrapper{text-align:left}.d2h-file-header{padding:5px 10px;border-bottom:1px solid #d8d8d8;background-color:#f7f7f7}.d2h-file-stats{display:-webkit-box;display:-ms-flexbox;display:flex;margin-left:auto;font-size:14px}.d2h-lines-added{text-align:right;border:1px solid #b4e2b4;border-radius:5px 0 0 5px;color:#399839;padding:2px;vertical-align:middle}.d2h-lines-deleted{text-align:left;border:1px solid #e9aeae;border-radius:0 5px 5px 0;color:#c33;padding:2px;vertical-align:middle;margin-left:1px}.d2h-file-name-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;font-family:"Source Sans Pro","Helvetica Neue",Helvetica,Arial,sans-serif;font-size:15px}.d2h-file-name{white-space:nowrap;text-overflow:ellipsis;overflow-x:hidden;line-height:21px}.d2h-file-wrapper{border:1px solid #ddd;border-radius:3px;margin-bottom:1em}.d2h-diff-table{width:100%;border-collapse:collapse;font-family:Menlo,Consolas,monospace;font-size:13px}.d2h-diff-tbody>tr>td{height:20px;line-height:20px}.d2h-files-diff{display:block;width:100%;height:100%}.d2h-file-diff{overflow-x:scroll;overflow-y:hidden}.d2h-file-side-diff{display:inline-block;overflow-x:scroll;overflow-y:hidden;width:50%;margin-right:-4px;margin-bottom:-8px}.d2h-code-line{display:inline-block;white-space:nowrap;padding:0 10px;margin-left:80px}.d2h-code-side-line{display:inline-block;white-space:nowrap;padding:0 10px;margin-left:50px}.d2h-code-line del,.d2h-code-side-line del{display:inline-block;margin-top:-1px;text-decoration:none;background-color:#ffb6ba;border-radius:.2em}.d2h-code-line ins,.d2h-code-side-line ins{display:inline-block;margin-top:-1px;text-decoration:none;background-color:#97f295;border-radius:.2em;text-align:left}.d2h-code-line-prefix{display:inline;background:0 0;padding:0;word-wrap:normal;white-space:pre}.d2h-code-line-ctn{display:inline;background:0 0;padding:0;word-wrap:normal;white-space:pre}.line-num1{-webkit-box-sizing:border-box;box-sizing:border-box;float:left;width:40px;overflow:hidden;text-overflow:ellipsis;padding-left:3px}.line-num2{-webkit-box-sizing:border-box;box-sizing:border-box;float:right;width:40px;overflow:hidden;text-overflow:ellipsis;padding-left:3px}.d2h-code-linenumber{-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;width:86px;padding-left:2px;padding-right:2px;background-color:#fff;color:rgba(0,0,0,.3);text-align:right;border:solid #eee;border-width:0 1px 0 1px;cursor:pointer}.d2h-code-side-linenumber{-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;width:56px;padding-left:5px;padding-right:5px;background-color:#fff;color:rgba(0,0,0,.3);text-align:right;border:solid #eee;border-width:0 1px 0 1px;cursor:pointer;overflow:hidden;text-overflow:ellipsis}.d2h-del{background-color:#fee8e9;border-color:#e9aeae}.d2h-ins{background-color:#dfd;border-color:#b4e2b4}.d2h-info{background-color:#f8fafd;color:rgba(0,0,0,.3);border-color:#d5e4f2}.d2h-file-diff .d2h-del.d2h-change{background-color:#fdf2d0}.d2h-file-diff .d2h-ins.d2h-change{background-color:#ded}.d2h-file-list-wrapper{margin-bottom:10px}.d2h-file-list-wrapper a{text-decoration:none;color:#3572b0}.d2h-file-list-wrapper a:visited{color:#3572b0}.d2h-file-list-header{text-align:left}.d2h-file-list-title{font-weight:700}.d2h-file-list-line{display:-webkit-box;display:-ms-flexbox;display:flex;text-align:left}.d2h-file-list{display:block;list-style:none;padding:0;margin:0}.d2h-file-list>li{border-bottom:#ddd solid 1px;padding:5px 10px;margin:0}.d2h-file-list>li:last-child{border-bottom:none}.d2h-file-switch{display:none;font-size:10px;cursor:pointer}.d2h-icon-wrapper{line-height:31px}.d2h-icon{vertical-align:middle;margin-right:10px;fill:currentColor}.d2h-deleted{color:#c33}.d2h-added{color:#399839}.d2h-changed{color:#d0b44c}.d2h-moved{color:#3572b0}.d2h-tag{display:-webkit-box;display:-ms-flexbox;display:flex;font-size:10px;margin-left:5px;padding:0 2px;background-color:#fff}.d2h-deleted-tag{border:#c33 1px solid}.d2h-added-tag{border:#399839 1px solid}.d2h-changed-tag{border:#d0b44c 1px solid}.d2h-moved-tag{border:#3572b0 1px solid}.selecting-left .d2h-code-line,.selecting-left .d2h-code-line *,.selecting-left .d2h-code-side-line,.selecting-left .d2h-code-side-line *,.selecting-right td.d2h-code-linenumber,.selecting-right td.d2h-code-linenumber *,.selecting-right td.d2h-code-side-linenumber,.selecting-right td.d2h-code-side-linenumber *{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.selecting-left .d2h-code-line ::-moz-selection,.selecting-left .d2h-code-line::-moz-selection,.selecting-left .d2h-code-side-line ::-moz-selection,.selecting-left .d2h-code-side-line::-moz-selection,.selecting-right td.d2h-code-linenumber::-moz-selection,.selecting-right td.d2h-code-side-linenumber ::-moz-selection,.selecting-right td.d2h-code-side-linenumber::-moz-selection{background:0 0}.selecting-left .d2h-code-line ::selection,.selecting-left .d2h-code-line::selection,.selecting-left .d2h-code-side-line ::selection,.selecting-left .d2h-code-side-line::selection,.selecting-right td.d2h-code-linenumber::selection,.selecting-right td.d2h-code-side-linenumber ::selection,.selecting-right td.d2h-code-side-linenumber::selection{background:0 0}
    </style>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.3/jquery.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.9.0/highlight.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.9.0/languages/scala.min.js"></script>

    <script>
        !function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a="function"==typeof require&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n||e)},l,l.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require,module,exports){(function(global){!function(){function Diff2HtmlUI(config){var cfg=config||{};cfg.diff?diffJson=Diff2Html.getJsonFromDiff(cfg.diff):cfg.json&&(diffJson=cfg.json),this._initSelection()}var highlightJS=require("./highlight.js-internals.js").HighlightJS,diffJson=null,currentSelectionColumnId=-1;Diff2HtmlUI.prototype.draw=function(targetId,config){var cfg=config||{};cfg.inputFormat="json";var $target=this._getTarget(targetId);$target.html(Diff2Html.getPrettyHtml(diffJson,cfg)),cfg.synchronisedScroll&&this.synchronisedScroll($target,cfg)},Diff2HtmlUI.prototype.synchronisedScroll=function(targetId){this._getTarget(targetId).find(".d2h-file-side-diff").scroll(function(){var $this=$(this);$this.closest(".d2h-file-wrapper").find(".d2h-file-side-diff").scrollLeft($this.scrollLeft())})},Diff2HtmlUI.prototype.fileListCloseable=function(targetId,startVisible){function show(){$showBtn.hide(),$hideBtn.show(),$fileList.show()}function hide(){$hideBtn.hide(),$showBtn.show(),$fileList.hide()}var $target=this._getTarget(targetId),hashTag=this._getHashTag(),$showBtn=$target.find(".d2h-show"),$hideBtn=$target.find(".d2h-hide"),$fileList=$target.find(".d2h-file-list");"files-summary-show"===hashTag?show():"files-summary-hide"===hashTag?hide():startVisible?show():hide(),$showBtn.click(show),$hideBtn.click(hide)},Diff2HtmlUI.prototype.highlightCode=function(targetId){this._getTarget(targetId).find(".d2h-file-wrapper").map(function(_i,file){var oldLinesState,newLinesState,$file=$(file),language=$file.data("lang");$file.find(".d2h-code-line-ctn").map(function(_j,line){var lineState,$line=$(line),text=line.textContent,lineParent=line.parentNode;lineState=-1!==lineParent.className.indexOf("d2h-del")?oldLinesState:newLinesState;var result=hljs.getLanguage(language)?hljs.highlight(language,text,!0,lineState):hljs.highlightAuto(text);-1!==lineParent.className.indexOf("d2h-del")?oldLinesState=result.top:-1!==lineParent.className.indexOf("d2h-ins")?newLinesState=result.top:(oldLinesState=result.top,newLinesState=result.top);var originalStream=highlightJS.nodeStream(line);if(originalStream.length){var resultNode=document.createElementNS("http://www.w3.org/1999/xhtml","div");resultNode.innerHTML=result.value,result.value=highlightJS.mergeStreams(originalStream,highlightJS.nodeStream(resultNode),text)}$line.addClass("hljs"),$line.addClass(result.language),$line.html(result.value)})})},Diff2HtmlUI.prototype._getTarget=function(targetId){var $target;return"object"==typeof targetId&&targetId instanceof jQuery?$target=targetId:"string"==typeof targetId?$target=$(targetId):(console.error("Wrong target provided! Falling back to default value 'body'."),console.log("Please provide a jQuery object or a valid DOM query string."),$target=$("body")),$target},Diff2HtmlUI.prototype._getHashTag=function(){var docUrl=document.URL,hashTagIndex=docUrl.indexOf("#"),hashTag=null;return-1!==hashTagIndex&&(hashTag=docUrl.substr(hashTagIndex+1)),hashTag},Diff2HtmlUI.prototype._distinct=function(collection){return collection.filter(function(v,i){return collection.indexOf(v)===i})},Diff2HtmlUI.prototype._initSelection=function(){var body=$("body"),that=this;body.on("mousedown",".d2h-diff-table",function(event){var target=$(event.target),table=target.closest(".d2h-diff-table");target.closest(".d2h-code-line,.d2h-code-side-line").length?(table.removeClass("selecting-left"),table.addClass("selecting-right"),currentSelectionColumnId=1):target.closest(".d2h-code-linenumber,.d2h-code-side-linenumber").length&&(table.removeClass("selecting-right"),table.addClass("selecting-left"),currentSelectionColumnId=0)}),body.on("copy",".d2h-diff-table",function(event){var clipboardData=event.originalEvent.clipboardData,text=that._getSelectedText();clipboardData.setData("text",text),event.preventDefault()})},Diff2HtmlUI.prototype._getSelectedText=function(){var doc=window.getSelection().getRangeAt(0).cloneContents(),nodes=doc.querySelectorAll("tr"),text="",idx=currentSelectionColumnId;return 0===nodes.length?text=doc.textContent:[].forEach.call(nodes,function(tr,i){var td=tr.cells[1===tr.cells.length?0:idx];text+=(i?"\\n":"")+td.textContent.replace(/(?:\\r\\n|\\r|\\n)/g,"")}),text},module.exports.Diff2HtmlUI=Diff2HtmlUI,global.Diff2HtmlUI=Diff2HtmlUI}()}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./highlight.js-internals.js":2}],2:[function(require,module,exports){!function(){function HighlightJS(){}function escape(value){return value.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;")}function tag(node){return node.nodeName.toLowerCase()}var ArrayProto=[];HighlightJS.prototype.nodeStream=function(node){var result=[];return function _nodeStream(node,offset){for(var child=node.firstChild;child;child=child.nextSibling)3===child.nodeType?offset+=child.nodeValue.length:1===child.nodeType&&(result.push({event:"start",offset:offset,node:child}),offset=_nodeStream(child,offset),tag(child).match(/br|hr|img|input/)||result.push({event:"stop",offset:offset,node:child}));return offset}(node,0),result},HighlightJS.prototype.mergeStreams=function(original,highlighted,value){function selectStream(){return original.length&&highlighted.length?original[0].offset!==highlighted[0].offset?original[0].offset<highlighted[0].offset?original:highlighted:"start"===highlighted[0].event?original:highlighted:original.length?original:highlighted}function open(node){result+="<"+tag(node)+ArrayProto.map.call(node.attributes,function(a){return" "+a.nodeName+'="'+escape(a.value)+'"'}).join("")+">"}function close(node){result+="</"+tag(node)+">"}function render(event){("start"===event.event?open:close)(event.node)}for(var processed=0,result="",nodeStack=[];original.length||highlighted.length;){var stream=selectStream();if(result+=escape(value.substring(processed,stream[0].offset)),processed=stream[0].offset,stream===original){nodeStack.reverse().forEach(close);do{render(stream.splice(0,1)[0]),stream=selectStream()}while(stream===original&&stream.length&&stream[0].offset===processed);nodeStack.reverse().forEach(open)}else"start"===stream[0].event?nodeStack.push(stream[0].node):nodeStack.pop(),render(stream.splice(0,1)[0])}return result+escape(value.substr(processed))},module.exports.HighlightJS=new HighlightJS}()},{}]},{},[1]);
    </script>

    <script>
        $(document).ready(function() {
            var diff2htmlUi = new Diff2HtmlUI();
            diff2htmlUi.fileListCloseable("#diff", false);
            diff2htmlUi.synchronisedScroll("#diff", false);
            diff2htmlUi.highlightCode('#diff');
        });
    </script>
</head>
<body style="text-align: center; font-family: 'Source Sans Pro',sans-serif;">
<h1>Diff to HTML by <a href="https://github.com/rtfpessoa">rtfpessoa</a></h1>

<div id="diff">
`;

module.exports = {
    pre,
    post
};