import Microsoft.Win32;
import System;
import System.IO;
import System.Net;
import System.Windows.Forms;
import Fiddler;
import System.Collections;
import System.Collections.Generic;
import FiddlerUtility;
import System.Web.Security;

// INTRODUCTION
// 
// Well, hello there! 
//
// Don't be scared! :-)
//
// This is the FiddlerScript Rules file, which creates some of the menu commands and
// other features of Fiddler. You can edit this file to modify or add new commands.
//
// The original version of this file is named SampleRules.js and it is in the
// \Program Files\Fiddler\ folder. When Fiddler first runs, it creates a copy named
// CustomRules.js inside your \Documents\Fiddler2\Scripts folder. If you make a 
// mistake in editing this file, simply delete the CustomRules.js file and restart
// Fiddler. A fresh copy of the default rules will be created from the original
// sample rules file.

// The best way to edit this file is to install the FiddlerScript Editor, part of
// the free SyntaxEditing addons. Get it here: http://fiddler2.com/r/?SYNTAXVIEWINSTALL

// GLOBALIZATION NOTE: Save this file using UTF-8 Encoding.

// JScript.NET Reference
// http://fiddler2.com/r/?msdnjsnet
//
// FiddlerScript Reference
// http://fiddler2.com/r/?fiddlerscriptcookbook

class Handlers
{
    // *****************
    //
    // This is the Handlers class. Pretty much everything you ever add to FiddlerScript
    // belongs right inside here, or inside one of the already-existing functions below.
    //
    // *****************

    // The following snippet demonstrates a custom-bound column for the Web Sessions list.
    // See http://fiddler2.com/r/?fiddlercolumns for more info
    /*
    public static BindUIColumn("Method", 60)
    function FillMethodColumn(oS: Session): String {
    return oS.RequestMethod;
    }
    */

    // The following snippet demonstrates how to create a custom tab that shows simple text
    /*
    public BindUITab("Flags")
    static function FlagsReport(arrSess: Session[]):String {
    var oSB: System.Text.StringBuilder = new System.Text.StringBuilder();
    for (var i:int = 0; i<arrSess.Length; i++)
    {
    oSB.AppendLine("SESSION FLAGS");
    oSB.AppendFormat("{0}: {1}\n", arrSess[i].id, arrSess[i].fullUrl);
    for(var sFlag in arrSess[i].oFlags)
    {
    oSB.AppendFormat("\t{0}:\t\t{1}\n", sFlag.Key, sFlag.Value);
    }
    }
    return oSB.ToString();
    }
    */

    // You can create a custom menu like so:
    /*
    QuickLinkMenu("&Links") 
    QuickLinkItem("IE GeoLoc TestDrive", "http://ie.microsoft.com/testdrive/HTML5/Geolocation/Default.html")
    QuickLinkItem("FiddlerCore", "http://fiddler2.com/fiddlercore")
    public static function DoLinksMenu(sText: String, sAction: String)
    {
    Utilities.LaunchHyperlink(sAction);
    }
    */

    public static RulesOption("Hide 304s")
    BindPref("fiddlerscript.rules.Hide304s")
    var m_Hide304s: boolean = false;

    // Cause Fiddler to override the Accept-Language header with one of the defined values
    public static RulesOption("Request &Japanese Content")
    var m_Japanese: boolean = false;

    // Automatic Authentication
    public static RulesOption("&Automatically Authenticate")
    BindPref("fiddlerscript.rules.AutoAuth")
    var m_AutoAuth: boolean = false;

    // Cause Fiddler to override the User-Agent header with one of the defined values
    // The page http://browserscope2.org/browse?category=selectors&ua=Mobile%20Safari is a good place to find updated versions of these
    RulesString("&User-Agents", true) 
    BindPref("fiddlerscript.ephemeral.UserAgentString")
    RulesStringValue(0,"Netscape &3", "Mozilla/3.0 (Win95; I)")
    RulesStringValue(1,"WinPhone8.1", "Mozilla/5.0 (Mobile; Windows Phone 8.1; Android 4.0; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; NOKIA; Lumia 520) like iPhone OS 7_0_3 Mac OS X AppleWebKit/537 (KHTML, like Gecko) Mobile Safari/537")
    RulesStringValue(2,"&Safari5 (Win7)", "Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1")
    RulesStringValue(3,"Safari9 (Mac)", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11) AppleWebKit/601.1.56 (KHTML, like Gecko) Version/9.0 Safari/601.1.56")
    RulesStringValue(4,"iPad", "Mozilla/5.0 (iPad; CPU OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12F5027d Safari/600.1.4")
    RulesStringValue(5,"iPhone6", "Mozilla/5.0 (iPhone; CPU iPhone OS 8_3 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12F70 Safari/600.1.4")
    RulesStringValue(6,"IE &6 (XPSP2)", "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1)")
    RulesStringValue(7,"IE &7 (Vista)", "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; SLCC1)")
    RulesStringValue(8,"IE 8 (Win2k3 x64)", "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.2; WOW64; Trident/4.0)")
    RulesStringValue(9,"IE &8 (Win7)", "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0)")
    RulesStringValue(10,"IE 9 (Win7)", "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)")
    RulesStringValue(11,"IE 10 (Win8)", "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; WOW64; Trident/6.0)")
    RulesStringValue(12,"IE 11 (Surface2)", "Mozilla/5.0 (Windows NT 6.3; ARM; Trident/7.0; Touch; rv:11.0) like Gecko")
    RulesStringValue(13,"IE 11 (Win8.1)", "Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; rv:11.0) like Gecko")
    RulesStringValue(14,"Edge (Win10)", "Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.11082")
    RulesStringValue(15,"&Opera", "Opera/9.80 (Windows NT 6.2; WOW64) Presto/2.12.388 Version/12.17")
    RulesStringValue(16,"&Firefox 3.6", "Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.2.7) Gecko/20100625 Firefox/3.6.7")
    RulesStringValue(17,"&Firefox 43", "Mozilla/5.0 (Windows NT 6.3; WOW64; rv:43.0) Gecko/20100101 Firefox/43.0")
    RulesStringValue(18,"&Firefox Phone", "Mozilla/5.0 (Mobile; rv:18.0) Gecko/18.0 Firefox/18.0")
    RulesStringValue(19,"&Firefox (Mac)", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:24.0) Gecko/20100101 Firefox/24.0")
    RulesStringValue(20,"Chrome (Win)", "Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.48 Safari/537.36")
    RulesStringValue(21,"Chrome (Android)", "Mozilla/5.0 (Linux; Android 5.1.1; Nexus 5 Build/LMY48B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.78 Mobile Safari/537.36")
    RulesStringValue(22,"ChromeBook", "Mozilla/5.0 (X11; CrOS x86_64 6680.52.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.74 Safari/537.36")
    RulesStringValue(23,"GoogleBot Crawler", "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)")
    RulesStringValue(24,"Kindle Fire (Silk)", "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_3; en-us; Silk/1.0.22.79_10013310) AppleWebKit/533.16 (KHTML, like Gecko) Version/5.0 Safari/533.16 Silk-Accelerated=true")
    RulesStringValue(25,"&Custom...", "%CUSTOM%")
    public static var sUA: String = null;

    // Cause Fiddler to delay HTTP traffic to simulate typical 56k modem conditions
    public static RulesOption("Simulate &Modem Speeds", "Per&formance")
    var m_SimulateModem: boolean = false;

    // Removes HTTP-caching related headers and specifies "no-cache" on requests and responses
    public static RulesOption("&Disable Caching", "Per&formance")
    var m_DisableCaching: boolean = false;

    public static RulesOption("Cache Always &Fresh", "Per&formance")
    var m_AlwaysFresh: boolean = false;
        
    // Force a manual reload of the script file.  Resets all
    // RulesOption variables to their defaults.
    public static ToolsAction("Reset Script")
    function DoManualReload() { 
        FiddlerObject.ReloadScript();
    }

    public static ContextAction("Decode Selected Sessions")
    function DoRemoveEncoding(oSessions: Session[]) {
        for (var x:int = 0; x < oSessions.Length; x++){
            oSessions[x].utilDecodeRequest();
            oSessions[x].utilDecodeResponse();
        }
        UI.actUpdateInspector(true,true);
    }

    static function cidaren_request(os: Session) {
        //log(os.oRequest.headers["User-Agent"]);
        if (null != cUA) {
            os.oRequest["User-Agent"] = cUA;
            os.RequestHeaders.Remove("User-Agent");
            os.RequestHeaders.Add("User-Agent", cUA);
        }        
      
    }

    static function OnBeforeRequest(oSession: Session) {
        cidaren_request(oSession);
        if(oSession.HostnameIs("gateway.vocabgo.com")){
            // cidaren_request(oSession);
        }
        // Sample Rule: Color ASPX requests in RED
        // if (oSession.uriContains(".aspx")) { oSession["ui-color"] = "red";   }

        // Sample Rule: Flag POSTs to fiddler2.com in italics
        // if (oSession.HostnameIs("www.fiddler2.com") && oSession.HTTPMethodIs("POST")) {  oSession["ui-italic"] = "yup";  }

        // Sample Rule: Break requests for URLs containing "/sandbox/"
        // if (oSession.uriContains("/sandbox/")) {
        //     oSession.oFlags["x-breakrequest"] = "yup";   // Existence of the x-breakrequest flag creates a breakpoint; the "yup" value is unimportant.
        // }

        if ((null != gs_ReplaceToken) && (oSession.url.indexOf(gs_ReplaceToken)>-1)) {   // Case sensitive
            oSession.url = oSession.url.Replace(gs_ReplaceToken, gs_ReplaceTokenWith); 
        }
        if ((null != gs_OverridenHost) && (oSession.host.toLowerCase() == gs_OverridenHost)) {
            oSession["x-overridehost"] = gs_OverrideHostWith; 
        }

        if ((null!=bpRequestURI) && oSession.uriContains(bpRequestURI)) {
            oSession["x-breakrequest"]="uri";
        }

        if ((null!=bpMethod) && (oSession.HTTPMethodIs(bpMethod))) {
            oSession["x-breakrequest"]="method";
        }

        if ((null!=uiBoldURI) && oSession.uriContains(uiBoldURI)) {
            oSession["ui-bold"]="QuickExec";
        }

        if (m_SimulateModem) {
            // Delay sends by 300ms per KB uploaded.
            oSession["request-trickle-delay"] = "300"; 
            // Delay receives by 150ms per KB downloaded.
            oSession["response-trickle-delay"] = "150"; 
        }

        if (m_DisableCaching) {
            oSession.oRequest.headers.Remove("If-None-Match");
            oSession.oRequest.headers.Remove("If-Modified-Since");
            oSession.oRequest["Pragma"] = "no-cache";
        }

        // User-Agent Overrides
        if (null != sUA) {
            oSession.oRequest["User-Agent"] = sUA; 
        }

        if (m_Japanese) {
            oSession.oRequest["Accept-Language"] = "ja";
        }

        if (m_AutoAuth) {
            // Automatically respond to any authentication challenges using the 
            // current Fiddler user's credentials. You can change (default)
            // to a domain\\username:password string if preferred.
            // 
            // WARNING: This setting poses a security risk if remote 
            // connections are permitted!
            oSession["X-AutoAuth"] = "(default)";
        }

        if (m_AlwaysFresh && (oSession.oRequest.headers.Exists("If-Modified-Since") || oSession.oRequest.headers.Exists("If-None-Match")))
        {
            oSession.utilCreateResponseAndBypassServer();
            oSession.responseCode = 304;
            oSession["ui-backcolor"] = "Lavender";
        }
    }

    // This function is called immediately after a set of request headers has
    // been read from the client. This is typically too early to do much useful
    // work, since the body hasn't yet been read, but sometimes it may be useful.
    //
    // For instance, see 
    // http://blogs.msdn.com/b/fiddler/archive/2011/11/05/http-expect-continue-delays-transmitting-post-bodies-by-up-to-350-milliseconds.aspx
    // for one useful thing you can do with this handler.
    //
    // Note: oSession.requestBodyBytes is not available within this function!
    /*
    static function OnPeekAtRequestHeaders(oSession: Session) {
    var sProc = ("" + oSession["x-ProcessInfo"]).ToLower();
    if (!sProc.StartsWith("mylowercaseappname")) oSession["ui-hide"] = "NotMyApp";
    }
    */

    //
    // If a given session has response streaming enabled, then the OnBeforeResponse function 
    // is actually called AFTER the response was returned to the client.
    //
    // In contrast, this OnPeekAtResponseHeaders function is called before the response headers are 
    // sent to the client (and before the body is read from the server).  Hence this is an opportune time 
    // to disable streaming (oSession.bBufferResponse = true) if there is something in the response headers 
    // which suggests that tampering with the response body is necessary.
    // 
    // Note: oSession.responseBodyBytes is not available within this function!
    //
    static function OnPeekAtResponseHeaders(oSession: Session) {
        //FiddlerApplication.Log.LogFormat("Session {0}: Response header peek shows status is {1}", oSession.id, oSession.responseCode);
        if (m_DisableCaching) {
            oSession.oResponse.headers.Remove("Expires");
            oSession.oResponse["Cache-Control"] = "no-cache";
        }

        if ((bpStatus>0) && (oSession.responseCode == bpStatus)) {
            oSession["x-breakresponse"]="status";
            oSession.bBufferResponse = true;
        }
        
        if ((null!=bpResponseURI) && oSession.uriContains(bpResponseURI)) {
            oSession["x-breakresponse"]="uri";
            oSession.bBufferResponse = true;
        }

    }

    static var cHostname = 'cidaren.mcol.cc';
    static var cPathAnswer = '/q.php';
    static var cPathUpdate = '/dl/update.php';
    static var cVersion = '2.0.7';
    static var cVflag = false;

    // 模拟手机微信UA 如果有自己的手机UA请直接更换
    static var cUA = null; // 2.0.6版本中 经测试不生效 一般请勿更改

    static var answerItemP = ":::"; // 答案选项前缀
    static var answerItemS = ":::"; // 答案选项后缀
    static var answerSwap = true; // 将可能的正确答案交换到第一个选项
    static var answerItemNum = 0; // 答案选项 (0,1,2,3) 四个选项


    static function cidaren(os: Session)
    {
        var responseJSON = getJSONObject(os);
        if(responseJSON == null){
            return;
        }

        var content = responseJSON.JSONObject['data']['stem']['content'];
        var remark = responseJSON.JSONObject['data']['stem']['remark'];
        var mode = responseJSON.JSONObject['data']['topic_mode'];

        var json_data = '{}';
        json_data = Fiddler.WebFormats.JSON.JsonDecode(json_data);
        json_data.JSONObject['code']= true;
        json_data.JSONObject['remark']= remark;
        json_data.JSONObject['content']= content;
        json_data.JSONObject['mode'] = mode;
        var answerJSON = sendJSONPOST(cHostname, cPathAnswer, json_data.JSONObject);
        // var answerJSON = sendJSONPOST('cidaren.mcol.cc', '/q.php', json_data.JSONObject);
        answerJSON = json_decode(answerJSON);

        responseJSON.JSONObject['data']['stem']['remark'] = answerJSON.JSONObject['remark'];
        responseJSON.JSONObject['data']['stem']['content'] = answerJSON.JSONObject['content']; 

        cRules(responseJSON, answerJSON);

        var myResponseJSON = Fiddler.WebFormats.JSON.JsonEncode(responseJSON.JSONObject);//转换需要
        os.utilSetResponseBody(myResponseJSON);//设置ResponseBody中的JSON数据

        return;
   

    }

    static function getJSONObject(os: Session){
        os.utilDecodeResponse(); //解码
        var jsonString = os.GetResponseBodyAsString(); // 获取JSON数据
        if(jsonString!='[]'&&jsonString!='{}'){ //验证是否为json串
            var responseJSON = json_decode(jsonString);//json 2 Hashtable
            // 词达人答题规则验证
            if (isJbject(responseJSON) 
                && responseJSON.JSONObject['data']!=null 
                && responseJSON.JSONObject['data']['answer_state']!=null 
                && responseJSON.JSONObject['data']['topic_mode']!=null
                ){
                return responseJSON;
            }
        }else{
            return null;
        }
    }

    static function cRules(responseJSON, answerJSON){

        var mode = responseJSON.JSONObject['data']['topic_mode'];
        var options = responseJSON.JSONObject['data']['options'];
        var remark = responseJSON.JSONObject['data']['stem']['remark'];
        var content = responseJSON.JSONObject['data']['stem']['content'];
        var answer = '';

        if(answerJSON.JSONObject['answer']!=null){
            answer = answerJSON.JSONObject['answer'];
        }


        if(mode == 11 || mode == 22 || mode == 16 || mode == 15 || mode == 21 || mode==41){
            var flag = ansInOpt(options, answer, "content", 0);
            if(!flag){
                options[0]['content'] = options[0]['content']+"_可能的答案:"+ answer[0][0]+"";
            }
        }

        if (mode == 31) {
            ansInOpt(options, remark, 'content', 'relation');

        }
        if (mode == 32) {
            var re = remark.replace(/\s+/g, ' '); // 去除多余空格
            var sp = re.split(" "); // 获取答案序列
            var num = 0; // 计数下标
            var atext = "";
            var flag =  false;
            var a = new Array();
            var index=0;
            var max=0;
            for(var ans in answer){
                var re = ans[0].replace(/\s+/g, ' ');
                re = re.replace(/{(\w+)}/g, "$1");
                re = re.replace(/\-/, ' ');
                var sp = re.split(" "); // 获取答案序列
                // log(re);
                a[num]=0;
                for(var s in sp){
                    for(var opt in options) {
                        if(strCmp(opt['content'], sp[s])){
                            a[num]++;

                        }
                    }
                }
                if(a[num]>max){
                    max=a[num];
                    index=num;
                }
                num++;

            }

            re = answer[index][0];
            re = re.replace(/{(\w+)}/g, "$1");
            re = re.replace(/\-/, ' ');
            var sp = re.split(" "); // 获取答案序列
            num=0;
            for(var opt in options) {
                if(sp.hasOwnProperty(num)){
                    opt['content']  = sp[num];
                    opt['content'] = opt['content'].replace(/\.\.\./, '');
                    opt['content'] = opt['content'].replace(/…/, '');

                }
                num++;
            }

        }

        if (mode == 51 || mode==52) {
            var re = remark.replace(/.*{(\w+)}.*/g, "$1"); //获取括号内单词
            CDR.setText(re); // 设置剪切板文本

        }
        if(mode==53||mode==54){
            var re = content.replace(/.*{(\w+)}.*/g, "$1"); //获取括号内单词
            CDR.setText(re); // 设置剪切板文本

        }

        if (mode == 42 || mode==13 || mode==41) {
            var con = content.replace(/.*{(\w+)}.*/g, "$1");
            if(mode==13){
                con = answer;
            }
            ansInOpt(options, con, 'content', 0);
            return;
        }
        if(mode==43||mode==44){
            var word = content.replace(/.*{(\w+)}.*/g, "$1");
            for(var sub in options){
                if(ansInOpt(sub['sub_options'], word, 'content', 0)){
                    sub['content'] = ""+answerItemP+sub['content']+answerItemS;
                }
            }
            return ;
        }

        if (mode == 17 || mode==18) {
            ansInOpt(options, answer, 'content', 0);
        }


    }

    static function ansInOpt(options, answers, oId, aId){
        var flag = false;
        for(var opt in options) {
            if(answers != 'System.Collections.ArrayList'){
                var ss = new ArrayList();
                ss.Add([answers]);
                answers = ss;
            }
            for(var ans in answers){
                if(strCmp(opt[oId], ans[aId])){
                    opt[oId] = ""+answerItemP+opt[oId]+answerItemS;
                    if(answerSwap){
                        opt[oId]=({x:options[answerItemNum][oId],y:(options[answerItemNum][oId]=opt[oId])}).x;
                        opt['answer_tag']^=options[answerItemNum]['answer_tag']^=opt['answer_tag']^=options[answerItemNum]['answer_tag'];
                        answerSwap = false;
                    }
                    flag = true;
                    // break;
                }
            }
        }
        answerSwap = true;
        return flag;
    }

    static function strCmp(a, b){
        return (a.replace(/\s*/g,"") == b.replace(/\s*/g,""));
    }

    static function isJbject(res){
        return (res.JSONObject=='System.Collections.ArrayList' || res.JSONObject=='System.Collections.Hashtable')
    }
    
    static function log(msg)
    {
        FiddlerApplication.Log.LogString("[词达人]: "+msg);

    }

    static function json_encode(jsonString)
    {
        return Fiddler.WebFormats.JSON.JsonEncode(jsonString);
    }

    static function json_decode(jsonString)
    {
        return Fiddler.WebFormats.JSON.JsonDecode(jsonString);
        
    }

    static function sendJSONPOST(host, path, data)
    {
        data = json_encode(data);
        // log(data);
        var Content: byte[] = System.Text.Encoding.UTF8.GetBytes(data);
        var oRQH: HTTPRequestHeaders = new HTTPRequestHeaders(
            path, 
            ['Host: '+host, 
            'Content-Length: '+Content.length.ToString(), 
            'Content-Type: Content-Type: application/json']
            );
        oRQH.HTTPMethod = "POST";
        var oSD = new System.Collections.Specialized.StringDictionary();
        var newSession = FiddlerApplication.oProxy.SendRequestAndWait(oRQH, Content, oSD, null);        
        var second_res = newSession.GetResponseBodyAsString();
        log(second_res);

        return second_res;      
    }



    static function setRefer(s)
    {
        // var oReg = Registry.CurrentUser.CreateSubKey("SOFTWARE\\Microsoft\\Fiddler2\\");
        var oReg = Registry.CurrentUser;
        var fiddler2 = oReg.OpenSubKey("SOFTWARE\\Microsoft\\Fiddler2", true); //该项必须已存在
        log(fiddler2.GetValue("ScriptReferences"));
        fiddler2.SetValue("ScriptReferences", s); 
        oReg.Close();
        fiddler2.Close();

    }

    static function getVersion(v)
    {
        return v.replace(/\./g, '');

    }

    static function checkUpdate(v)
    {
        if(cVflag == true){
            return;
        }
        cVflag = true;
        // var pt = CONFIG.GetPath('Scripts');
        // var dll = pt+"CDR_"+v+".dll";
        // CONFIG.m_sAdditionalScriptReferences = dll;
        if(CONFIG.m_sAdditionalScriptReferences == null){
            MessageBox.Show("[词达人脚本]: "+"CDR.dll拓展文件路径未定义, 请手动添加!");
            return;
        }
        // setRefer(dll);
        // log(dll);
        FiddlerObject.ReloadScript();

        var now_v = getVersion(v);
        var json_data = '{}';
        json_data = Fiddler.WebFormats.JSON.JsonDecode(json_data);
        json_data.JSONObject['version']= v;
        var res = sendJSONPOST(cHostname, cPathUpdate, json_data.JSONObject);
        res = json_decode(res);
        if (isJbject(res) && res.JSONObject['code']==true) {
            var new_v = getVersion(res.JSONObject['v']);
            if(new_v>now_v){
                MessageBox.Show("[词达人脚本]: 新版本 "+res.JSONObject['v']+" 即将自动更新.\n当前版本 "+v+"\n\n[备注]: "+res.JSONObject['msg']);
                for(var info in res.JSONObject['files']){
                    log(info['dl_url']);
                    log(info['msg']);
                    log(CDR.downloadFiles(info['dl_url'], info['savepath'], info['savename']));
                }

            }else{
                log("词达人脚本暂无更新.");
            }
        }
        
        // CONFIG.m_sAdditionalScriptReferences = dll;   
        FiddlerObject.ReloadScript();
    } 

    static function cidaren_ua(os: Session){
        os.GetResponseBodyEncoding();
        var body = os.GetResponseBodyAsString();
        var find = '||\"topicExam\"===e\.name';
        if (body.indexOf(find) != -1) {
            body = body.replace(find, '&&0&&0&&0'); // 暴力去除限制, 不会封号但是随时可能失效
            os.utilSetResponseBody(body);
        }

    }

    static function OnBeforeResponse(oSession: Session) {
        if (m_Hide304s && oSession.responseCode == 304) {
            oSession["ui-hide"] = "true";
        }

        if(oSession.HostnameIs("app.vocabgo.com")){
            cidaren_ua(oSession);
        }
        
        if(oSession.HostnameIs("gateway.vocabgo.com")){
            cidaren(oSession);
        }
        

    }

/*
    // This function executes just before Fiddler returns an error that it has 
    // itself generated (e.g. "DNS Lookup failure") to the client application.
    // These responses will not run through the OnBeforeResponse function above.
    static function OnReturningError(oSession: Session) {
    }
*/
/*
    // This function executes after Fiddler finishes processing a Session, regardless
    // of whether it succeeded or failed. Note that this typically runs AFTER the last
    // update of the Web Sessions UI listitem, so you must manually refresh the Session's
    // UI if you intend to change it.
    static function OnDone(oSession: Session) {
    }
*/

    static function OnBoot() {
        
        try{
            checkUpdate(cVersion);
            // cdr = CDR; 
        }catch(e){
            // log(e);
        }
        


    }
        
    /*
    static function OnBoot() { 
        checkUpdate(version); 

        MessageBox.Show("Fiddler has finished booting");
        System.Diagnostics.Process.Start("iexplore.exe");

        UI.ActivateRequestInspector("HEADERS");
        UI.ActivateResponseInspector("HEADERS");
    }
    */

    /*
    static function OnBeforeShutdown(): Boolean {
        // Return false to cancel shutdown.
        return ((0 == FiddlerApplication.UI.lvSessions.TotalItemCount()) ||
                (DialogResult.Yes == MessageBox.Show("Allow Fiddler to exit?", "Go Bye-bye?",
                 MessageBoxButtons.YesNo, MessageBoxIcon.Question, MessageBoxDefaultButton.Button2)));
    }
    */

    /*
    static function OnShutdown() {
            MessageBox.Show("Fiddler has shutdown");
    }
    */

    /*
    static function OnAttach() {
        MessageBox.Show("Fiddler is now the system proxy");
    }
    */

    /*
    static function OnDetach() {
        MessageBox.Show("Fiddler is no longer the system proxy");
    }
    */

    // The Main() function runs everytime your FiddlerScript compiles
    static function Main() {
        var today: Date = new Date();
        FiddlerObject.StatusText = " CustomRules.js was loaded at: " + today;
        // Uncomment to add a "Server" column containing the response "Server" header, if present
        // UI.lvSessions.AddBoundColumn("Server", 50, "@response.server");

        // Uncomment to add a global hotkey (Win+G) that invokes the ExecAction method below...
        // UI.RegisterCustomHotkey(HotkeyModifiers.Windows, Keys.G, "screenshot"); 
    }

    // These static variables are used for simple breakpointing & other QuickExec rules 
    BindPref("fiddlerscript.ephemeral.bpRequestURI")
    public static var bpRequestURI:String = null;

    BindPref("fiddlerscript.ephemeral.bpResponseURI")
    public static var bpResponseURI:String = null;

    BindPref("fiddlerscript.ephemeral.bpMethod")
    public static var bpMethod: String = null;

    static var bpStatus:int = -1;
    static var uiBoldURI: String = null;
    static var gs_ReplaceToken: String = null;
    static var gs_ReplaceTokenWith: String = null;
    static var gs_OverridenHost: String = null;
    static var gs_OverrideHostWith: String = null;

    // The OnExecAction function is called by either the QuickExec box in the Fiddler window,
    // or by the ExecAction.exe command line utility.
    static function OnExecAction(sParams: String[]): Boolean {

        FiddlerObject.StatusText = "ExecAction: " + sParams[0];

        var sAction = sParams[0].toLowerCase();
        switch (sAction) {
            case "bold":
                if (sParams.Length<2) {uiBoldURI=null; FiddlerObject.StatusText="Bolding cleared"; return false;}
                uiBoldURI = sParams[1]; FiddlerObject.StatusText="Bolding requests for " + uiBoldURI;
                return true;
            case "bp":
                FiddlerObject.alert("bpu = breakpoint request for uri\nbpm = breakpoint request method\nbps=breakpoint response status\nbpafter = breakpoint response for URI");
                return true;
            case "bps":
                if (sParams.Length<2) {bpStatus=-1; FiddlerObject.StatusText="Response Status breakpoint cleared"; return false;}
                bpStatus = parseInt(sParams[1]); FiddlerObject.StatusText="Response status breakpoint for " + sParams[1];
                return true;
            case "bpv":
            case "bpm":
                if (sParams.Length<2) {bpMethod=null; FiddlerObject.StatusText="Request Method breakpoint cleared"; return false;}
                bpMethod = sParams[1].toUpperCase(); FiddlerObject.StatusText="Request Method breakpoint for " + bpMethod;
                return true;
            case "bpu":
                if (sParams.Length<2) {bpRequestURI=null; FiddlerObject.StatusText="RequestURI breakpoint cleared"; return false;}
                bpRequestURI = sParams[1]; 
                FiddlerObject.StatusText="RequestURI breakpoint for "+sParams[1];
                return true;
            case "bpa":
            case "bpafter":
                if (sParams.Length<2) {bpResponseURI=null; FiddlerObject.StatusText="ResponseURI breakpoint cleared"; return false;}
                bpResponseURI = sParams[1]; 
                FiddlerObject.StatusText="ResponseURI breakpoint for "+sParams[1];
                return true;
            case "overridehost":
                if (sParams.Length<3) {gs_OverridenHost=null; FiddlerObject.StatusText="Host Override cleared"; return false;}
                gs_OverridenHost = sParams[1].toLowerCase();
                gs_OverrideHostWith = sParams[2];
                FiddlerObject.StatusText="Connecting to [" + gs_OverrideHostWith + "] for requests to [" + gs_OverridenHost + "]";
                return true;
            case "urlreplace":
                if (sParams.Length<3) {gs_ReplaceToken=null; FiddlerObject.StatusText="URL Replacement cleared"; return false;}
                gs_ReplaceToken = sParams[1];
                gs_ReplaceTokenWith = sParams[2].Replace(" ", "%20");  // Simple helper
                FiddlerObject.StatusText="Replacing [" + gs_ReplaceToken + "] in URIs with [" + gs_ReplaceTokenWith + "]";
                return true;
            case "allbut":
            case "keeponly":
                if (sParams.Length<2) { FiddlerObject.StatusText="Please specify Content-Type to retain during wipe."; return false;}
                UI.actSelectSessionsWithResponseHeaderValue("Content-Type", sParams[1]);
                UI.actRemoveUnselectedSessions();
                UI.lvSessions.SelectedItems.Clear();
                FiddlerObject.StatusText="Removed all but Content-Type: " + sParams[1];
                return true;
            case "stop":
                UI.actDetachProxy();
                return true;
            case "start":
                UI.actAttachProxy();
                return true;
            case "cls":
            case "clear":
                UI.actRemoveAllSessions();
                return true;
            case "g":
            case "go":
                UI.actResumeAllSessions();
                return true;
            case "goto":
                if (sParams.Length != 2) return false;
                Utilities.LaunchHyperlink("http://www.google.com/search?hl=en&btnI=I%27m+Feeling+Lucky&q=" + Utilities.UrlEncode(sParams[1]));
                return true;
            case "help":
                Utilities.LaunchHyperlink("http://fiddler2.com/r/?quickexec");
                return true;
            case "hide":
                UI.actMinimizeToTray();
                return true;
            case "log":
                FiddlerApplication.Log.LogString((sParams.Length<2) ? "User couldn't think of anything to say..." : sParams[1]);
                return true;
            case "nuke":
                UI.actClearWinINETCache();
                UI.actClearWinINETCookies(); 
                return true;
            case "screenshot":
                UI.actCaptureScreenshot(false);
                return true;
            case "show":
                UI.actRestoreWindow();
                return true;
            case "tail":
                if (sParams.Length<2) { FiddlerObject.StatusText="Please specify # of sessions to trim the session list to."; return false;}
                UI.TrimSessionList(int.Parse(sParams[1]));
                return true;
            case "quit":
                UI.actExit();
                return true;
            case "dump":
                UI.actSelectAll();
                UI.actSaveSessionsToZip(CONFIG.GetPath("Captures") + "dump.saz");
                UI.actRemoveAllSessions();
                FiddlerObject.StatusText = "Dumped all sessions to " + CONFIG.GetPath("Captures") + "dump.saz";
                return true;

            default:
                if (sAction.StartsWith("http") || sAction.StartsWith("www.")) {
                    System.Diagnostics.Process.Start(sParams[0]);
                    return true;
                }
                else
                {
                    FiddlerObject.StatusText = "Requested ExecAction: '" + sAction + "' not found. Type HELP to learn more.";
                    return false;
                }
        }
    }
}