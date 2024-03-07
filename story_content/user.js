function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5eLMTg0oEBY":
        Script1();
        break;
      case "6h7E4z6Xcz2":
        Script2();
        break;
      case "5jX3ufsGmVm":
        Script3();
        break;
      case "6QBFEdwyfGD":
        Script4();
        break;
      case "6QrCOHErmUW":
        Script5();
        break;
      case "5fLDbv16aia":
        Script6();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  if(void 0===window.stencilsetanswers){GetPlayer();let e="https://cluelabs.com/ai/display/answers-init-sl";xhttp=new XMLHttpRequest,xhttp.onreadystatechange=function(){if(4==this.readyState&&200==this.status&&""!=this.responseText){let e=this.responseText,t=document.getElementsByTagName("head")[0],s=document.createElement("script");t.appendChild(s),s.appendChild(document.createTextNode(e)),window.stencilsetanswers=!0}},xhttp.open("GET",e,!0),xhttp.send()}
}

window.Script2 = function()
{
  clabsAnswersGetAnswer();
}

window.Script3 = function()
{
  clabsAnswersRecord();
}

window.Script4 = function()
{
  clabsAnswersSendRecording(false);
}

window.Script5 = function()
{
  clabsAnswersSendRecording(true);
}

window.Script6 = function()
{
  clabsAnswersSendRecording(false);
}

};
