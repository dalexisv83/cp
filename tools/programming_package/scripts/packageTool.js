function xhrSuccess () { this.callback.apply(this, this.arguments); }

function xhrError () { console.error(this.statusText); }

function loadFile (sURL, fCallback /*, argumentToPass1, argumentToPass2, etc. */) {
  var oReq = new XMLHttpRequest();
  oReq.callback = fCallback;
  oReq.arguments = Array.prototype.slice.call(arguments, 2);
  oReq.onload = xhrSuccess;
  oReq.onerror = xhrError;
  oReq.open("get", sURL, true);
  oReq.send(null);
}

function importXML () {
	// console.log('importXML');
}

// JavaScript Document
// JavaScript Document
// code needed for floating layer //
//Joe's version
floatX=495;			//Defines the horizontal distance from the border
floatY=32;			//Defines the vertical distance from the border.
layerwidth=200;		//Defines the width of the menu layer.
layerheight=400;	//Defines the height of the menu layer.
halign="left";		//Defines which border floatX should be counted from. (left, center, right)
valign="top";		//Defines which border floatY should be counted from. (top, center, bottom)
delayspeed=1;		//Defines the time delay before the layer's position is updated. (0-3)
numLayers = 2;

// check for changed client width 1131 = full screen on 1152x864
function getTheWidth(){
	if((document.body.clientWidth == "1131") || (document.body.clientWidth == "1170")){
		document.styleSheets[1].disabled=true;
		document.styleSheets[0].disabled=false;
	}else{
		document.styleSheets[0].disabled=true;
		document.styleSheets[1].disabled=false;
	}
}



// Constants ////////////////////////////////////////////////////////////////////////////////////
var xmlDoc2;
var varBase = new Array();
var numDVR = new Array();		//DVR prices
var numARS = new Array();
var varProtect = new Array();	//0 because doesn't start 'til 2nd month
var varHDx = 0;					//HD ExtraPack doesn't start 'til 3rd month
var varMirrorFee = 0;
var varHBOadjust = 0;
var varPREM1 = 0;
var varPREM2 = 0;
var varPREM3 = 0;
var varPREM4 = 0;
var varPREM5 = 0;
var varHDACCESSmonthly = 10.00;
var varHDExtraPackMonthly = 0.00;
var varProtectionProtectionPlan = 0.00;
var varProtectionProtectionPlanMonthly = 0.00;

var addPrimaryCredit = false;
var numberOfTvSelected = false;

var addMonthlyArs = false;
var addMonthlyDvr = false;
var addMonthlyHdAccess = false;
var addMonthlyMRV = false;
var addMonthlyMRVExtra = false;

var isSelectClick = false;

var image_check_src = 'http://agentanswercenter.directv.com/en-us/res/system/img/greenBoxDown.gif';
var image_box_src = 'http://agentanswercenter.directv.com/en-us/res/system/img/greenBoxNorm.gif';


// GLOBALS ////////////////////////////////////////////////////////////////////////////////////

var varImageOn = 0;				//Base Package flag
var xImageOn = 0;
var spanishLayerVis = 0;		//Show the spanish layer? 0=no, 1=yes
var MDULayerVis = 0;			//Show the MDU layer? 0=no, 1=yes
var varImageOn_ds = 0;			//Number of tv's
var varImageOn_Protect = 0;		//Protection Plan flag
var varImageOn_DVR = 0;			//DVR service flag
var varImageOn_ARS = 0;
var varImageOn_HD_Access = 0;	//HD Access flag
var varImageOn_MRV = 0;	//MRV flag
var varImageOn_HDExtraPack = 0;	//HD Extra Pack flag
var varImageOn_TotChoicePlus = 0;	//For the $5 add on package for select
var varImageOn_Xtier = 0;		//For the xtra tier $5 add on package 
var varImageOn_familiar_mdu = 0;		//For the Familiar MDU Tier $5 add on package
var varImageOn_TC_plus_mdu = 0;  //For the TC PLus MDU Tier $5 add on package
var varImageOn_xtra_addon_mdu = 0;      // Xtra Add_On TMU $14.99 addition
var varImageOn_premier_addon_mdu = 0;  // Premier Add_On TMU $65.99 addition
var varImageOn_choice_addon_fdb = 0;
var varImageOn_choice_xtra_addon_fdb = 0;
var varImageOn_choice_ultimate_addon_cdb = 0;
var varImageOn_choice_ultimate_addon_fdb = 0;
var varImageOn_choice_premier_addon_cdb = 0;
var varImageOn_choice_xtra_digital_bulk = 0;
var varImageOn_choice_ultimate_addon = 0;
var varImageOn_premier_addon_fdb = 0;
var varImageOn_premier_addon_cdb = 0;
var varPremierClicked = false;	//Premier Package flag - true when premier base package is clicked
var varMainWindow;				//used to pop open a new window
var varMirrorFeeWaiver = 1;		// 1 for normal, 3 for TMW or JMW account selected
var varProtectTotal = 0.00;
var varHD_ExtraTotal = 0.00;
var varHD_AccessTotal = 0.00;
var siteBit = "";				//This is the bit that determines what site they're coming from

varImageOn_Premier = 0;
var varMRVMonthly = 0;

getSiteBit();
// start image rollovers ///////////////////////////////////////////////////////////////////////

var myTab = new Array();  			//<------this array is used in the function "img_click_Base".  it is used to distinguish what image to turn off
myTab[1] = "Family";
myTab[2] = "Choice";			
myTab[3] = "Xtra";
myTab[4] = "Ultimate";
myTab[5] = "Xtra Digital Bulk";
myTab[6] = "Premier";
myTab[7] = "Mas Latino";
myTab[8] = "Optimo_Mas";			
myTab[9] = "Xtra Add-On EDB";
myTab[10] = "Lo Maximo";
myTab[11] = "Preferred Choice";
myTab[12] = "Total Choice for TCD/JCD";
myTab[13] = "Choice Tier for TCD/JCD";
myTab[14] = "Xtra Add-On";
myTab[15] = "Premier Add-On EDB";
myTab[16] = "Total Choice Plus TMU";
myTab[17] = "Ultimate Add-On EDB";
myTab[18] = "Total Choice Plus";
myTab[19] = "Choice Xtra Classic MDU Tier";
myTab[20] = "Choice Add-On EDB";
myTab[21] = "Choice Add-On FDB";
myTab[22] = "Xtra Add-On FDB";
myTab[23] = "Premier Add-On FDB";
myTab[24] = "Mas Ultra";
myTab[25] = "Ultimate Add-On CDB";
myTab[26] = "Ultimate Add-On FDB";
myTab[27] = "Premier Add-On CDB";
myTab[28] = "Entertainment";
myTab[29] = "Student Choice Add-On";
myTab[30] = "Student Choice Xtra Classic Add-On";
myTab[31] = "Entertainment Add-On";
myTab[32] = "Select";
myTab[33] = "Preferred Extra";




var myTab_BaseNum = new Array(); 	//<------this array is used in the function "img_click_Base".  needed since images were not in order...
for (m=1;m<34;m++){
	myTab_BaseNum[m] = m;
}

var myTab_Prem = new Array();		//<------this array is used in the function "img_click_Prem".  it is used to distinguish what image to turn off
myTab_Prem[1] = "hbo";			
myTab_Prem[2] = "showtime";
myTab_Prem[3] = "starz";
myTab_Prem[4] = "cinemax";
myTab_Prem[5] = "sportspack";

var myFlag_Prem = new Array();
for (var a=1;a<=6;a++){
	myFlag_Prem[a] = false;
}

//<------this array is used in the function "img_click_ds".  it is used to distinguish what image to turn off
var myTab_ds = new Array();
for (var b=1;b<=7;b++){
	myTab_ds[b] = '' + b + 'receiver';
} 		


//=========start preloading images=========
var numRolImages = 33;
var rollover =true;

var dtvImages = new Array(numRolImages * 2)
for (i = 1; i <= numRolImages; i++){
	dtvImages[i] = new Image();
	dtvImages[i + numRolImages] = new Image();

	dtvImages[i].src = "http://agentanswercenter.directv.com/en-us/res/system/img/greenBoxNorm.gif";
	dtvImages[i + numRolImages].src = "http://agentanswercenter.directv.com/en-us/res/system/img/greenBoxDown.gif";
}

dtvImages[65] = new Image();
dtvImages[65].src = "http://agentanswercenter.directv.com/en-us/res/system/img/greenBoxOver.gif"; 
var numRolImages_ds = 6;								//direct sales preload (for number of tv's)
var dtvImages_ds = new Array(numRolImages_ds * 2)
for (i = 1; i <= numRolImages_ds; i++){
	dtvImages_ds[i] = new Image();
	dtvImages_ds[i + numRolImages_ds] = new Image();
	srcPath1PieceOne = "button" + i + "normal.jpg";
	srcPath2PieceOne = "button" + i + "down.jpg";
	dtvImages_ds[i].src = "http://agentanswercenter.directv.com/en-us/res/system/img/" + srcPath1PieceOne.replace("/","");
	dtvImages_ds[i + numRolImages_ds].src = "http://agentanswercenter.directv.com/en-us/res/system/img/" + srcPath2PieceOne.replace("/","");
	innerStuff = '\r\n Image:' + i + '.src =' + dtvImages_ds[i].src + '\r\n Image:' + (i + numRolImages_ds) + '.src =' + dtvImages_ds[i + numRolImages_ds].src +'';
}


//=========end preloading images=========

//============ PRE LOAD PRICING =================
if (window.ActiveXObject){
	
	xmlDoc2 = new ActiveXObject("Microsoft.XMLDOM");
	xmlDoc2.async=false;
	xmlDoc2.load('packagepricesx.xml');
	getPriceMatrix();
	
	
}else{
	function showMessage () {
		xmlDoc2 = this.responseXML;
		getPriceMatrix();
	}
	loadFile('packagepricesx.xml',showMessage);
}

window.onload = function() {
   document.getElementById('SUMMARY').innerHTML = varDefaultSummary;
};


function getPriceMatrix(){
	var AllPackages = xmlDoc2.getElementsByTagName('package');
	varBase[0] =  0.00;				//default value
	varBase[1] = dataProg.packages[10].price; // parseFloat(AllPackages[10].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));		//29.99;			//Family#
	varBase[2] = dataProg.packages[3].price; // parseFloat(AllPackages[3].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));		//52.99;			//Choice#
	varBase[3] = dataProg.packages[5].price; // parseFloat(AllPackages[135].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));		//57.99;			//Xtra#
		
	varBase[4] = dataProg.packages[6].price; // parseFloat(AllPackages[102].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));		//68.99;			//Ultimate#
	varBase[5] = 999; // parseFloat(AllPackages[104].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));		//19.99;			//Basic Choice#
	
	varBase[6] = dataProg.packages[7].price; // parseFloat(AllPackages[27].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));		//104.99;			//Premier#
	varBase[7] = dataProg.packages[27].price; // parseFloat(AllPackages[130].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));		//34.99;			//Mas Latino#
	varBase[8] = dataProg.packages[28].price; // parseFloat(AllPackages[90].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));		//36.99;			//Optimo Mas#
	varBase[9] = dataProg.packages[235].price; // parseFloat(AllPackages[143].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));		//Xtra Add-On EDB#
	varBase[10] = dataProg.packages[20].price; // parseFloat(AllPackages[11].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));		//104.99;			//Lo Maximo#
	varBase[11] = dataProg.packages[30].price; // parseFloat(AllPackages[26].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));		//32.99;			//Preferred Choice#
	varBase[12] = dataProg.packages[233].price; // parseFloat(AllPackages[38].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));		//10.99;			//Total Choice for TCD/JCD
	varBase[13] = dataProg.packages[169].price; // parseFloat(AllPackages[59].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));		//19.99;			//Choice Tier for TCD/JCD
	varBase[14] = dataProg.packages[62].price; // parseFloat(AllPackages[142].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));		//17.99->19.99;			//Xtra Add-On
	varBase[15] = dataProg.packages[244].price; // parseFloat(AllPackages[147].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));		//17.99;			//Prmeier Add On EDB
	varBase[16] = dataProg.packages[232].price; // parseFloat(AllPackages[121].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));		//5.00;			//TC Plus TMU
	varBase[17] = dataProg.packages[238].price; // parseFloat(AllPackages[146].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));;  //Ultimate Add-On EDB
	varBase[18] = 990; // parseFloat(AllPackages[36].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));		//19.99;			//total_choice_plus  Total Choice Plus
	varBase[19] = 0;
	varBase[20] = dataProg.packages[167].price; // parseFloat(AllPackages[145].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));		//Choice Add On EDB
	varBase[21] = dataProg.packages[175].price; // parseFloat(AllPackages[106].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));		//Choice Add On FDB
	varBase[22] = dataProg.packages[236].price; // parseFloat(AllPackages[144].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));		//27.99;			//Xtra Add-On FDB"
	varBase[23] = dataProg.packages[243].price; // parseFloat(AllPackages[107].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));		//80.99;			//Premier Add-On FDB
	varBase[24] = dataProg.packages[17].price; // parseFloat(AllPackages[98].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));	// mas ultra
	varBase[25] = dataProg.packages[62].price; // parseFloat(AllPackages[118].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));		//29.99 -> 31.99;			//cultimate add on choice digital bulk
	varBase[26] = dataProg.packages[239].price; // parseFloat(AllPackages[119].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));		//32.99;			//ultimate add on FDB
	varBase[27] = dataProg.packages[240].price; // parseFloat(AllPackages[120].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));		//70.99;			

        //Entertainment
	varBase[28] = dataProg.packages[2].price; // parseFloat(AllPackages[161].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));					
	varBase[29] = dataProg.packages[69].price; // parseFloat(AllPackages[128].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$","")); // Student Choice Add an	
	varBase[30] = dataProg.packages[68].price; // parseFloat(AllPackages[129].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$","")); // Student Xtra Add on
	varBase[31] = dataProg.packages[39].price; // parseFloat(AllPackages[141].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$","")); // FDB Entertainment Add On
	varBase[32] = dataProg.packages[1].price; // parseFloat(AllPackages[125].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$","")); // Select
	
	varBase[33] = dataProg.packages[4].price; // parseFloat(AllPackages[179].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$","")); // Preferred Extra
	
	varBase[34] = dataProg.packages[28].price; // parseFloat(AllPackages[90].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$","")); // Optimo Mas
	
	varBase[35] = dataProg.packages[241].price; // Choice Xtra Classic MDU Tier
	
	
	varHBOadjust = dataProg.fees[157].price; // parseFloat(AllPackages[65].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));	//2.00;			//HBO adjustment value
	
	varPREM1 = dataProg.fees[186].price; // parseFloat(AllPackages[66].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));	//12.99;
	varPREM2 = dataProg.fees[220].price; // parseFloat(AllPackages[67].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));	//11.01;
	varPREM3 = dataProg.fees[228].price; // parseFloat(AllPackages[68].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));	//10.00;
	varPREM4 = dataProg.fees[187].price; // parseFloat(AllPackages[69].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));	//8.00;
	varPREM5 = dataProg.fees[184].price; // parseFloat(AllPackages[70].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));	//7.00;
	
	numARS[0] = 0.00;
	numARS[1] = dataProg.fees[158].price; // parseFloat(AllPackages[134].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));	//ARS Monthly Fee 25
	numARS[2] = 0.00;
	//numARS[2] = parseFloat(AllPackages[133].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$","")); //ARS DVR Service

	
	numDVR[0] = 0.00;				//default value
	numDVR[1] = dataProg.fees[160].price; // parseFloat(AllPackages[138].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));	//ARS receiver = DVR Monthly Fee
	numDVR[2] = 0.00;				//advanced products
	
	varMirrorFee = dataProg.fees[156].price; // parseFloat(AllPackages[75].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));	//4.99;			//mirroring fee per extra receiver
	varHDACCESSmonthly = dataProg.fees[161].price; // parseFloat(AllPackages[139].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));
	varMRVMonthly = dataProg.fees[208].price; // parseFloat(AllPackages[115].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));//3.00
	
	varHDExtraPackMonthly = dataProg.fees[201].price; // parseFloat(AllPackages[78].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));		//4.99/mo  		//HD Extra Pack Plan (monthly)first 3 months free
	
	varProtect[0] = dataProg.fees[202].price; // parseFloat(AllPackages[79].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));			//5.99/mo Protection Plan (monthly)
	varProtect[1] = 0.00;																											//  Protection Plan (1-pay - expired)
	varProtect[2] = 0.00;																											//  "None" selected 
	
	
	varProtectionProtectionPlanMonthly = dataProg.fees[205].price; //parseFloat(AllPackages[163].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));
}

function importPricingXML(){
	importXML();
}
//=========start mouseover=========
function img_on(loc, img){
	if (rollover){
		img+=numRolImages;	//img=img+numRolImages
		document.images[loc].src = dtvImages[img].src;
	}
	importPricingXML();
}

function img_on_Base(loc, img){ //loc is image name, img is image number
	
	if (rollover){		
		document.images[loc].src = dtvImages[myTab_BaseNum[img]+numRolImages].src;
                if (img == 22) {
		 if (document.images['Select']) 
		   document.images['Select'].src = image_check_src;	
		}
	}
	importPricingXML();
}

////////////////////////////////start primary credit update/////////////////////////////////////////

function img_on_primaryCredit(){
	if (rollover){
		document.images['PrimaryCredit'].src = image_check_src;
	}
	importPricingXML();
}


function img_off_primaryCredit(){
	if (rollover && !addPrimaryCredit){
		document.images['PrimaryCredit'].src = image_box_src;
	}	
}

function img_click_primaryCredit(){    
   
	if (!addPrimaryCredit) {
		document.images['PrimaryCredit'].src = image_check_src;
		addPrimaryCredit = true;	
	}
	else{
		addPrimaryCredit = false;
		document.images['PrimaryCredit'].src = image_box_src;
	}
	
	motherCalc();    
   
}

////////////////////////////////end primary credit update/////////////////////////////////////////



function img_on_ds(loc, img){
	if (rollover){
		img+=numRolImages_ds;	//img=img+numRolImages_ds
		document.images[loc].src = dtvImages_ds[img].src;
	}
	importPricingXML();
}
//=========end mouseover=========
	
	
//=========start mouseout=========
function img_off_Base(loc, img){
	changed = 0;
	
	if (rollover){
		if (varImageOn != img){
			if ((img == 18) && (varImageOn_TotChoicePlus == 1)){
				//nothing
				changed = 0;
			}else if ((img == 9) && (varImageOn_choice_ultimate_addon == 1)){
				// again, nothing
				changed = 0;
			}else if ((img == 13) && (varImageOn_Xtier == 1)){
				// again, nothing
				changed = 0;
			}else if ((img == 14) && (varImageOn_xtra_addon_mdu == 1)){
				// again, nothing
				changed = 0;
			}else if ((img == 15) && (varImageOn_premier_addon_mdu == 1)){
				// again, nothing
				changed = 0;
			}else if ((img == 16) && (varImageOn_TC_plus_mdu == 1)){
				// again, nothing
				changed = 0;
			}else if ((img == 21) && (varImageOn_choice_addon_fdb == 1)){
				// again, nothing
				changed = 0;
			}else if ((img == 22) && (varImageOn_choice_xtra_addon_fdb == 1)){
				// again, nothing
				changed = 0;
			}else if ((img == 23) && (varImageOn_premier_addon_fdb == 1)){
				// again, nothing
				changed = 0;
			}else if ((img == 24) && (varImageOn_choice_xtra_digital_bulk == 1)){
				// again, nothing
				changed = 0;
			}else if ((img == 25) && (varImageOn_choice_ultimate_addon_cdb == 1)){
				// again, nothing
				changed = 0;
			}else if ((img == 26) && (varImageOn_choice_ultimate_addon_fdb == 1)){
				// again, nothing
				changed = 0;
			}else if ((img == 27) && (varImageOn_premier_addon_cdb == 1)){
				// again, nothing
				changed = 0;
			}
			else if (document.images[loc].src != dtvImages[65].src){
				changed =1;
				document.images[loc].src = dtvImages[myTab_BaseNum[img]].src;
			}
		}
              
               if (img == 22 && !isSelectClick) {
		  if (document.images['Select']) 
		     document.images['Select'].src = image_box_src;		
		}
	}
}

function img_off_Prem(loc, img){
	if (rollover){
		for (var n=1 ; n<= 5 ; ++n){ 
			if (myTab_Prem[n] == loc){
				if(myFlag_Prem[n] == false){
					document.images[loc].src = dtvImages[img].src;
				}
			}
		}
	}
}


function img_off_Protect(loc, img){
	if (rollover){
		if (varImageOn_Protect != img){		//<-----this checks which tab is on and disables "onmouseout" state
			document.images[loc].src = dtvImages[img].src;
		}
	}
}

function img_off_hdextra(loc, img){
	if (rollover){
		if (varImageOn_HDExtraPack != img){		//<-----this checks which tab is on and disables "onmouseout" state			
			document.images[loc].src = dtvImages[img].src;
		}
	}
}


function img_off_premier(loc, img){
	if (rollover){
		if (varImageOn_Premier != img){		//<-----this checks which tab is on and disables "onmouseout" state			
			document.images[loc].src = dtvImages[img].src;
		}
	}
}




function img_off_ds(loc, img){
	if (rollover){
		if (varImageOn_ds != img){		//<-----this checks which tab is on and disables "onmouseout" state
			document.images[loc].src = dtvImages_ds[img].src;
		}
	}
}

function img_off_MRV(loc, img){
	if (rollover){
		if (varImageOn_MRV == 1){		//<-----this checks which tab is on and disables "onmouseout" state
			document.images["MRV1"].src = dtvImages[42].src;			//on
			document.images["MRV2"].src = dtvImages[10].src;			//off
		}else if (varImageOn_MRV == 2){
			document.images["MRV1"].src = dtvImages[10].src;			//off
			document.images["MRV2"].src = dtvImages[42].src;			//on
		}else{
			document.images["MRV1"].src = dtvImages[10].src;			//off
			document.images["MRV2"].src = dtvImages[12].src;			//off
		}
	}
}

function img_off_HD_Access(loc, img){
	if (rollover){
		if (varImageOn_HD_Access == 1){		//<-----this checks which tab is on and disables "onmouseout" state
			document.images["HD_Access1"].src = dtvImages[42].src;			//on
			document.images["HD_Access2"].src = dtvImages[10].src;			//off
		}else if (varImageOn_HD_Access == 2){
			document.images["HD_Access1"].src = dtvImages[10].src;			//off
			document.images["HD_Access2"].src = dtvImages[42].src;			//on
		}else{
			document.images["HD_Access1"].src = dtvImages[10].src;			//off
			document.images["HD_Access2"].src = dtvImages[12].src;			//off
		}
	}
}



//=========end mouseout=========

function total_choice_plus_off(){
	total_choice_plus_anchor.onMouseOver='return false;';
	total_choice_plus_anchor.href='#';
	total_choice_plus_anchor.onMouseOut='return false;';
};

function total_choice_plus_on(){
	total_choice_plus_anchor.onMouseOver='SUMMARY.innerHTML = arrayBaseSummary[10]; img_on_Base(\'Total Choice Plus\',18);';
	total_choice_plus_anchor.onMouseOut='SUMMARY.innerHTML = varDefaultSummary; img_off_Base(\'Total Choice Plus\',18);';/**/
	total_choice_plus_anchor.href='javascript:img_click_Base(\'Total Choice Plus\',18);';
};

function xtra_tier_off(){
	xtra_tier_anchor.onMouseOver='return false;';
	xtra_tier_anchor.href='#';
	xtra_tier_anchor.onMouseOut='return false;';
};

function xtra_tier_on(){
	xtra_tier_anchor.onMouseOver='SUMMARY.innerHTML = arrayBaseSummary[11]; img_on_Base(\'Choice Xtra Classic MDU Tier\',19);';
	xtra_tier_anchor.onMouseOut='SUMMARY.innerHTML = varDefaultSummary; img_off_Base(\'Choice Xtra Classic MDU Tier\',19);';/**/
	xtra_tier_anchor.href='javascript:img_click_Base(\'Choice Xtra Classic MDU Tier\',19);';
};



function layerSwap(){
	//if(without.innerHTML== 'without HBO'){
	if(document.images.hbo.src.indexOf('greenBoxDown.gif')>0){
			without.innerHTML= 'with HBO';
			firstPrem.innerHTML= '<font color=red>$17.99</font>';
			secondPrem.innerHTML = '$13';
			fifthPrem.innerHTML= '<font color=red>$8</font>';
	}else{
		//if(!myFlag_Prem[1] && !myFlag_Prem[2] && !myFlag_Prem[3] && !myFlag_Prem[4] && !myFlag_Prem[5]){
			without.innerHTML= 'without HBO';
			firstPrem.innerHTML= '$13.99';
			secondPrem.innerHTML = '$12';
			fifthPrem.innerHTML= 'n/a';
		//}
	}
}

//=========start mouseclick=========
function img_click_Base(loc, img){
	if (rollover){
		
		if((img == 6) || (img == 10)){			//<-- if premier is selected, this turns on all premium services
			varPremierClicked = true;
			//console.log(document.images);
			document.images["hbo"].src = image_check_src; //dtvImages[25].src;
			document.images["showtime"].src = image_check_src; //dtvImages[26].src;		
			document.images["starz"].src = image_check_src; //dtvImages[26].src;		
			document.images["cinemax"].src = image_check_src; //dtvImages[26].src;		
			document.images["sportspack"].src = image_check_src; //dtvImages[27].src;
			layerSwap();	
			
			myFlag_Prem[1] = myFlag_Prem[2] = myFlag_Prem[3] = myFlag_Prem[4] = myFlag_Prem[5] = true;			//<-- variables are set to "true" to disable "rollout" 

		}else if((img != 6) && (img != 10)){	//<-- if Plus is selected, this turns off all premium services
			//myFlag_Prem[1] = myFlag_Prem[2] = myFlag_Prem[3] = myFlag_Prem[4] = myFlag_Prem[5] = false;

			if (img == 12){					// /Total Choice Was selected, activate total_choice_plus_anchor for Total Choice Plus
				xtra_tier_off();
				varImageOn_TotChoicePlus = 0;
				varImageOn_Xtier = 0;
				document.images['Choice Xtra Classic MDU Tier'].src = dtvImages[65].src;
				total_choice_plus_on();
				document.images['Total Choice Plus'].src = dtvImages[14].src;
			}else if (img == 13){ 						// Choice Tier was selected, activate xtra_tier_anchor for Xtra Tier
				total_choice_plus_off();
				varImageOn_TotChoicePlus = 0;
				varImageOn_Xtier = 0;
				document.images['Total Choice Plus'].src = dtvImages[65].src;
			 	xtra_tier_on();
				document.images['Choice Xtra Classic MDU Tier'].src =  dtvImages[15].src;			
			}else if (img == 14){ 						//Xtra Tier $5 base package add on was clicked
				img_Click_5_Buck_Base_Upgrade(loc, img);
			}else if (img == 15){ 						//Familiar MDU $5 base package add on was clicked
				img_Click_5_Buck_Base_Upgrade(loc, img);
			}else if (img == 16){ 						//
				img_Click_5_Buck_Base_Upgrade(loc, img);
			}else if (img == 18){ 						//
				img_Click_5_Buck_Base_Upgrade(loc, img);
			}else if (img == 19){ 						//
				img_Click_5_Buck_Base_Upgrade(loc, img);
			}else if (img == 20){ 						//
				img_Click_5_Buck_Base_Upgrade(loc, img);
			}else if (img == 21){ 						//
				img_Click_5_Buck_Base_Upgrade(loc, img);
			}else if (img == 22){ 						//
				img_Click_5_Buck_Base_Upgrade(loc, img);
			}else if (img == 23){ 						//
				img_Click_5_Buck_Base_Upgrade(loc, img);
			}else if (img == 25){ 						//
				img_Click_5_Buck_Base_Upgrade(loc, img);
			}else if (img == 26){ 						//
				img_Click_5_Buck_Base_Upgrade(loc, img);
			}else if (img == 9){ 						//
				img_Click_5_Buck_Base_Upgrade(loc, img);
			}else if (img == 27){ 						//
				img_Click_5_Buck_Base_Upgrade(loc, img);
			}else if (img == 31){ 						//
				img_Click_5_Buck_Base_Upgrade(loc, img);
			
			//}else{						// niether Total Choice or Choice Tier was selected, de-activate imgs					
				//total_choice_plus_anchor.onMouseOver='return false;';
			 	//total_choice_plus_anchor.href='#';
				//total_choice_plus_anchor.onMouseOut='return false;';
				//xtra_tier_anchor.onMouseOver='return false;';
				//xtra_tier_anchor.href='#';
				//xtra_tier_anchor.onMouseOut='return false;';
			}
			else if (img == 33){
				//img_Click_5_Buck_Base_Upgrade(loc, img);
			}
			
			varPremierClicked = false;
			
			document.images["hbo"].src = dtvImages[7].src;
			document.images["showtime"].src = dtvImages[8].src;		
			document.images["starz"].src = dtvImages[8].src;		
			document.images["cinemax"].src = dtvImages[8].src;		
			document.images["sportspack"].src = dtvImages[9].src;		
			
			myFlag_Prem[1] = false;			//<-- variables are set to "true" to disable "rollout" 
			myFlag_Prem[2] = false;
			myFlag_Prem[3] = false;
			myFlag_Prem[4] = false;
			myFlag_Prem[5] = false;

			layerSwap();
		}
		
		
		if (img < 32 || img != 18 || img != 19 || img != 31){
			for (var m=1 ; m<18 ; ++m){    //<-----this loop checks what image is at its "on" state and turns "off" the rest
			        if (myTab[m] != loc){
					document.images[myTab[m]].src = dtvImages[myTab_BaseNum[m]].src;   //<-- turns everything "off"
				}else{
					document.images[loc].src = dtvImages[myTab_BaseNum[img]+numRolImages].src;	//<-- turns selected item "on"
					varImageOn = img;
				}
			}
			
			for (var m=20 ; m<34 ; ++m){    //<-----this loop checks what image is at its "on" state and turns "off" the rest
				if (myTab[m] != loc){
				   if(document.images[myTab[m]])	
					document.images[myTab[m]].src = dtvImages[myTab_BaseNum[m]].src;   //<-- turns everything "off"
				}else{
					document.images[loc].src = dtvImages[myTab_BaseNum[img]+numRolImages].src;	//<-- turns selected item "on"
					varImageOn = img;
				}
			}
		}

        if (img == 32) {
		 if (document.images['Select']) 
		   document.images['Select'].src = image_check_src;
		   isSelectClick = true;
		}
		else{
		  if(document.images['Select'])
			document.images['Select'].src = image_box_src;
			isSelectClick = false;
		}
	}
	
	
	resetLayer(lyrSuggestion);
	motherCalc();
}

function resetLayer(lyr){
	
	lyr.innerHTML = "&nbsp;";
}


function img_click_Prem(loc, img){
	if (rollover){
		if(varPremierClicked == false){
			img+=numRolImages;    //img=img+numRolImages
			for (var n=1 ; n<= 5 ; ++n){ 
				if (myTab_Prem[n] == loc){
					if(myFlag_Prem[n] == false){		//<!-- checks if image is "on"
						document.images[loc].src = dtvImages[img].src;
						myFlag_Prem[n] = true;
					}else{
						document.images[myTab_Prem[n]].src = dtvImages[img-numRolImages].src; 
						myFlag_Prem[n] = false;
					}
				}
			}
		}	
	}
	motherCalc();
	layerSwap();	
}


function img_click_Protect(loc, img){
	if (rollover){
		if(img == 10){

			document.images["protect_1"].src = "http://agentanswercenter.directv.com/en-us/res/system/img/greenBoxDown.gif";				//on
			document.images["protect_3"].src = "http://agentanswercenter.directv.com/en-us/res/system/img/greenBoxNorm.gif";		  		//off			
			varImageOn_Protect = 10;			
		}else if (img == 11){
			document.images["protect_1"].src = "http://agentanswercenter.directv.com/en-us/res/system/img/greenBoxNorm.gif";		  		//off	
			document.images["protect_3"].src = "http://agentanswercenter.directv.com/en-us/res/system/img/greenBoxDown.gif";		  		//on					
			varImageOn_Protect = 11;
		}
	}
	motherCalc();
}

function img_click_hdextra(loc, img){
	if (rollover){
		if(img == 10){
			document.images["hdextra_1"].src = "http://agentanswercenter.directv.com/en-us/res/system/img/greenBoxDown.gif";				//on
			document.images["hdextra_2"].src = "http://agentanswercenter.directv.com/en-us/res/system/img/greenBoxNorm.gif";				//off			

			varImageOn_HDExtraPack = 10;			
		}else if (img == 11){
			document.images["hdextra_1"].src = "http://agentanswercenter.directv.com/en-us/res/system/img/greenBoxNorm.gif";		  		//off	
			document.images["hdextra_2"].src = "http://agentanswercenter.directv.com/en-us/res/system/img/greenBoxDown.gif";				//on
			varImageOn_HDExtraPack = 11;
		}else{
			varImageOn_HDExtraPack = 0;
		}
	}
	motherCalc();
}

/** Newly Added Function **/
function img_click_premier(loc, img){
	if (rollover){
		if(img == 12){
			document.images["premier_1"].src = "http://agentanswercenter.directv.com/en-us/res/system/img/greenBoxDown.gif";				//on
			document.images["premier_2"].src = "http://agentanswercenter.directv.com/en-us/res/system/img/greenBoxNorm.gif";				//off			
                        varImageOn_Premier = 12;			
		}else if (img == 13){
			document.images["premier_1"].src = "http://agentanswercenter.directv.com/en-us/res/system/img/greenBoxNorm.gif";		  		//off	
			document.images["premier_2"].src = "http://agentanswercenter.directv.com/en-us/res/system/img/greenBoxDown.gif";				//on
			varImageOn_Premier = 13;
		}else{
			varImageOn_Premier = 0;
		}
	}
	motherCalc();
}

function img_click_ds(loc, img){
	if (rollover){
		numberOfTvSelected = true;
		img+=numRolImages_ds;												//img=img+numRolImages
		
		for (var m=1 ; m<= 6 ; ++m){										//<-----this loop checks what image is at its "on" state and turns "off" the rest
			if (myTab_ds[m] != loc){
				document.images[myTab_ds[m]].src = dtvImages_ds[m].src;		//<-- turns everything "off"
			}else{
				document.images[loc].src = dtvImages_ds[img].src;			//<-- turns selected item "on"
				varImageOn_ds = (img-numRolImages_ds);
			}
		}
	}
	
	motherCalc();	
}

function img_Click_ARS(loc, img){
	if(img == 1){
		document.images["ARS1"].src = dtvImages[42].src;				//on
		document.images["ARS2"].src = dtvImages[30].src;				//off
		varImageOn_ARS = 1;			
	}else if (img == 2){
		document.images["ARS1"].src = dtvImages[30].src;				//on
		document.images["ARS2"].src = dtvImages[42].src;
		document.images["MRV3"].src = image_box_src;//on
		varImageOn_ARS = 2;
		addMonthlyMRVExtra = false;		
	}
	motherCalc();  																					
}

///////Start of New ARS functions///////////////
function img_Click_ARS_New(){
	if(!addMonthlyArs){
		document.images["ARS1"].src = image_check_src;				
		varImageOn_ARS = 1;
		addMonthlyArs = true;
	}else{
		if(addMonthlyMRVExtra)
		   img_Click_ARS_Extra();
		document.images["ARS1"].src = image_box_src;
		varImageOn_ARS = 2;
		addMonthlyArs = false;
		
	}
	motherCalc();  																					
}


function img_Click_DVR_New(){
	
	if(!addMonthlyDvr){
		
		document.images["DVR1"].src = image_check_src;				
		varImageOn_DVR = 1;
		addMonthlyDvr = true;
	}else{
		
		document.images["DVR1"].src = image_box_src;			
		varImageOn_DVR = 2;		
		addMonthlyDvr = false;	
	}
	motherCalc();  																					
}


function img_Click_HD_Access_New(){
	if (rollover){
		if(!addMonthlyHdAccess){
			document.images["HD_Access1"].src = image_check_src;	
			varImageOn_HD_Access = 1;
			addMonthlyHdAccess = true;
		}else{
			document.images["HD_Access1"].src = image_box_src;	
			varImageOn_HD_Access = 2;
			addMonthlyHdAccess = false;
		}
	}
	motherCalc();
}


function img_Click_MRV_New(){
	if (rollover){
		if(!addMonthlyMRV){
			document.images["MRV1"].src = image_check_src;		
			varImageOn_MRV = 1;
			addMonthlyMRV = true;
		}else{
			document.images["MRV1"].src = image_box_src;
			varImageOn_MRV = 2;
			addMonthlyMRV = false;
		}
	}
	motherCalc();
}

function img_Click_ARS_Extra(){
	
	if (rollover){
		if(!addMonthlyMRVExtra){
			document.images["MRV3"].src = image_check_src;
			document.images["ARS2"].src = image_box_src;
			addMonthlyMRVExtra = true;			
		}
	}
	motherCalc();
		
}


function img_mouseover_ars_extra(){
        if (rollover){
		if(!addMonthlyMRVExtra){
			document.images["MRV3"].src = image_check_src;	
		}
	}
}


function img_mouseout_ars_extra(){
        if (rollover){
		if(!addMonthlyMRVExtra){			
			document.images["MRV3"].src = image_box_src;
			
		}
	}
}
///////End of New ARS functions///////////////



function img_off_ARS(loc, img){
	if (rollover){
		if (varImageOn_ARS == 1){		//<-----this checks which tab is on and disables "onmouseout" state
			document.images["ARS1"].src = dtvImages[42].src;			//on
			document.images["ARS2"].src = dtvImages[30].src;			//off
		}else if (varImageOn_ARS == 2){
			document.images["ARS1"].src = dtvImages[30].src;			//off
			document.images["ARS2"].src = dtvImages[42].src;			//on
		}else{
			document.images["ARS1"].src = dtvImages[10].src;			//off
			document.images["ARS2"].src = dtvImages[12].src;			//off
		}
	}
}



function img_Click_DVR(loc, img){
	if(img == 1){
		document.images["DVR1"].src = dtvImages[42].src;				//on
		document.images["DVR2"].src = dtvImages[30].src;				//off
		varImageOn_DVR = 1;			
	}else if (img == 2){
		document.images["DVR1"].src = dtvImages[30].src;				//on
		document.images["DVR2"].src = dtvImages[42].src;				//on
		varImageOn_DVR = 2;
	}
	motherCalc();  																					
}

function img_off_DVR(loc, img){
	if (rollover){
		if (varImageOn_DVR == 1){		//<-----this checks which tab is on and disables "onmouseout" state
			document.images["DVR1"].src = dtvImages[42].src;			//on
			document.images["DVR2"].src = dtvImages[30].src;			//off
		}else if (varImageOn_DVR == 2){
			document.images["DVR1"].src = dtvImages[30].src;			//off
			document.images["DVR2"].src = dtvImages[42].src;			//on
		}else{
			document.images["DVR1"].src = dtvImages[10].src;			//off
			document.images["DVR2"].src = dtvImages[12].src;			//off
		}
	}
}

function img_Click_HD_Access(loc, img){
	if (rollover){
		if(img == 1){
			document.images["HD_Access1"].src = dtvImages[42].src;		//on
			document.images["HD_Access2"].src = dtvImages[12].src;		//off
			varImageOn_HD_Access = 1;			
		}else if (img == 2){
			document.images["HD_Access1"].src = dtvImages[10].src;		//on
			document.images["HD_Access2"].src = dtvImages[42].src;		//on
			varImageOn_HD_Access = 2;
		}
	}
	motherCalc();
}

function img_Click_MRV(loc, img){
	if (rollover){
		if(img == 1){
			document.images["MRV1"].src = dtvImages[42].src;		//on
			document.images["MRV2"].src = dtvImages[12].src;		//off
			varImageOn_MRV = 1;			
		}else if (img == 2){
			document.images["MRV1"].src = dtvImages[10].src;		//on
			document.images["MRV2"].src = dtvImages[42].src;		//on
			varImageOn_MRV = 2;
		}
	}
	motherCalc();
}

function img_Click_5_Buck_Base_Upgrade(loc, img){
	if (img == 19){												// 14, Total Choice Plus, was clicked
		if (document.images["Choice Xtra Classic MDU Tier"].src != dtvImages[65].src) { // if pic not purple, turn pic off
			document.images["Choice Xtra Classic MDU Tier"].src = dtvImages[15].src;	// turn 15, Xtra Tier, off
		}
		varImageOn_TotChoicePlus = 0;
		if (varImageOn_Xtier == 1){										//clicked 15 and it's on -- now turn it off
			varImageOn_Xtier = 0;
		}else{															//clicked 15, turn it on
			varImageOn_Xtier = 1;
			img += numRolImages;
		}
	}
	if (img == 18){
		if (document.images['Total Choice Plus'].src != dtvImages[65].src){// if pic not purple, turn pic off
			document.images['Total Choice Plus'].src = dtvImages[14].src;	// turn 14, Total Choice Plus, off
		}
		varImageOn_Xtier = 0;
		if (varImageOn_TotChoicePlus == 1){						//clicked 14 and it's on -- now turn it off
			varImageOn_TotChoicePlus = 0;
		}else{													//clicked 14, turn it on
			varImageOn_TotChoicePlus = 1;
			img += numRolImages;
		}
	}
	
	/*if (img == 9){
		if (varImageOn_choice_ultimate_addon == 1){	
			varImageOn_choice_ultimate_addon = 0;    //clicked 9 and it's on -- now turn it off
			varImageOn_premier_addon_mdu = 0;
			varImageOn_xtra_addon_mdu = 0;
			varImageOn_familiar_mdu = 0;
			varImageOn_TC_plus_mdu = 0
			varImageOn_choice_addon_fdb = 0;
			varImageOn_choice_xtra_addon_fdb = 0;
			varImageOn_premier_addon_fdb = 0;
			varImageOn_premier_addon_cdb = 0;
			varImageOn_choice_ultimate_addon_cdb = 0;
			varImageOn_choice_ultimate_addon_fdb = 0;
		}else{		
			varImageOn_choice_ultimate_addon = 1;				//clicked 9, turn it on
			varImageOn_premier_addon_mdu = 0;
			varImageOn_xtra_addon_mdu = 0;
			varImageOn_familiar_mdu = 0;
			varImageOn_TC_plus_mdu = 0
			varImageOn_choice_addon_fdb = 0;
			varImageOn_choice_xtra_addon_fdb = 0;
			varImageOn_premier_addon_fdb = 0;
			varImageOn_premier_addon_cdb = 0;
			varImageOn_choice_ultimate_addon_cdb = 0;
			varImageOn_choice_ultimate_addon_fdb = 0;
			img += numRolImages;
		}
	}*/
	if (img == 14){
		if (varImageOn_xtra_addon_mdu == 1){										//clicked 14 and it's on -- now turn it off
			varImageOn_xtra_addon_mdu = 0;
			varImageOn_premier_addon_mdu = 0;
			varImageOn_familiar_mdu = 0;
			varImageOn_TC_plus_mdu = 0
			varImageOn_choice_addon_fdb = 0;
			varImageOn_choice_xtra_addon_fdb = 0;
			varImageOn_premier_addon_fdb = 0;
			varImageOn_choice_ultimate_addon = 0;
			varImageOn_choice_ultimate_addon_cdb = 0;
			varImageOn_choice_ultimate_addon_fdb = 0;
			varImageOn_premier_addon_cdb = 0;
		}else{															//clicked 14, turn it on
			varImageOn_xtra_addon_mdu = 1;
			varImageOn_premier_addon_mdu = 0;
			varImageOn_familiar_mdu = 0;
			varImageOn_TC_plus_mdu = 0
			varImageOn_choice_addon_fdb = 0;
			varImageOn_choice_xtra_addon_fdb = 0;
			varImageOn_premier_addon_fdb = 0;
			varImageOn_choice_ultimate_addon = 0;
			varImageOn_choice_ultimate_addon_cdb = 0;
			varImageOn_choice_ultimate_addon_fdb = 0;
			varImageOn_premier_addon_cdb = 0;
			img += numRolImages;
		}
	}/*
	if (img == 15){
		if (varImageOn_premier_addon_mdu == 1){										//clicked 15 and it's on -- now turn it off
			varImageOn_premier_addon_mdu = 0;
			varImageOn_xtra_addon_mdu = 0;
			varImageOn_familiar_mdu = 0;
			varImageOn_TC_plus_mdu = 0
			varImageOn_choice_addon_fdb = 0;
			varImageOn_choice_xtra_addon_fdb = 0;
			varImageOn_premier_addon_fdb = 0;
			varImageOn_premier_addon_cdb = 0;
			varImageOn_choice_ultimate_addon = 0;
			varImageOn_choice_ultimate_addon_cdb = 0;
			varImageOn_choice_ultimate_addon_fdb = 0;
		}else{															//clicked 15, turn it on
			varImageOn_premier_addon_mdu = 1;
			varImageOn_xtra_addon_mdu = 0;
			varImageOn_familiar_mdu = 0;
			varImageOn_TC_plus_mdu = 0
			varImageOn_choice_addon_fdb = 0;
			varImageOn_choice_xtra_addon_fdb = 0;
			varImageOn_premier_addon_fdb = 0;
			varImageOn_premier_addon_cdb = 0;
			varImageOn_choice_ultimate_addon = 0;
			varImageOn_choice_ultimate_addon_cdb = 0;
			varImageOn_choice_ultimate_addon_fdb = 0;
			img += numRolImages;
		}
	}*/
	if (img == 16){
		if (varImageOn_TC_plus_mdu == 1){
			varImageOn_TC_plus_mdu = 0					//clicked 16 and it's on -- now turn it off
			varImageOn_premier_addon_mdu = 0;
			varImageOn_xtra_addon_mdu = 0;
			varImageOn_familiar_mdu = 0;
			varImageOn_choice_addon_fdb = 0;
			varImageOn_choice_xtra_addon_fdb = 0;

			varImageOn_premier_addon_fdb = 0;
			varImageOn_premier_addon_cdb = 0;
			varImageOn_choice_ultimate_addon = 0;
			varImageOn_choice_ultimate_addon_cdb = 0;
			varImageOn_choice_ultimate_addon_fdb = 0;
		}else{															//clicked 16, turn it on
			varImageOn_TC_plus_mdu = 1;
			varImageOn_premier_addon_mdu = 0;
			varImageOn_xtra_addon_mdu = 0;
			varImageOn_familiar_mdu = 0;
			varImageOn_TC_plus_mdu = 0
			varImageOn_choice_addon_fdb = 0;
			varImageOn_choice_xtra_addon_fdb = 0;
			varImageOn_premier_addon_fdb = 0;
			varImageOn_premier_addon_cdb = 0;
			varImageOn_choice_ultimate_addon = 0;
			varImageOn_choice_ultimate_addon_cdb = 0;
			varImageOn_choice_ultimate_addon_fdb = 0;
			img += numRolImages;
		}
	}/*
	if (img == 21){
		if (varImageOn_choice_addon_fdb == 1){	
			varImageOn_choice_addon_fdb = 0;
			varImageOn_premier_addon_mdu = 0;
			varImageOn_xtra_addon_mdu = 0;
			varImageOn_familiar_mdu = 0;
			varImageOn_TC_plus_mdu = 0
			varImageOn_choice_xtra_addon_fdb = 0;
			varImageOn_premier_addon_fdb = 0;
			varImageOn_premier_addon_cdb = 0;
			varImageOn_choice_ultimate_addon = 0;
			varImageOn_choice_ultimate_addon_cdb = 0;
			varImageOn_choice_ultimate_addon_fdb = 0;
		}else{															
			varImageOn_choice_addon_fdb = 1;
			varImageOn_premier_addon_mdu = 0;
			varImageOn_xtra_addon_mdu = 0;
			varImageOn_familiar_mdu = 0;
			varImageOn_TC_plus_mdu = 0
			varImageOn_choice_xtra_addon_fdb = 0;
			varImageOn_premier_addon_fdb = 0;
			varImageOn_premier_addon_cdb = 0;
			varImageOn_choice_ultimate_addon = 0;
			varImageOn_choice_ultimate_addon_cdb = 0;
			varImageOn_choice_ultimate_addon_fdb = 0;
			img += numRolImages;
		}
	}*/
	if (img == 22){
		if (varImageOn_choice_xtra_addon_fdb == 1){	
			varImageOn_choice_xtra_addon_fdb == 0;
			varImageOn_premier_addon_mdu = 0;
			varImageOn_xtra_addon_mdu = 0;
			varImageOn_familiar_mdu = 0;
			varImageOn_TC_plus_mdu = 0
			varImageOn_choice_addon_fdb = 0;
			varImageOn_premier_addon_fdb = 0;
			varImageOn_premier_addon_cdb = 0;
			varImageOn_choice_ultimate_addon = 0;
			varImageOn_choice_ultimate_addon_cdb = 0;
			varImageOn_choice_ultimate_addon_fdb = 0;
		}else{															
			varImageOn_choice_xtra_addon_fdb = 1;
			varImageOn_choice_xtra_addon_fdb == 0;
			varImageOn_premier_addon_mdu = 0;
			varImageOn_xtra_addon_mdu = 0;
			varImageOn_familiar_mdu = 0;
			varImageOn_TC_plus_mdu = 0
			varImageOn_choice_addon_fdb = 0;
			varImageOn_premier_addon_fdb = 0;
			varImageOn_premier_addon_cdb = 0;
			varImageOn_choice_ultimate_addon = 0;
			varImageOn_choice_ultimate_addon_cdb = 0;
			varImageOn_choice_ultimate_addon_fdb = 0;
			img += numRolImages;
		}
	}
	if (img == 23){
		if (varImageOn_premier_addon_fdb == 1){	
			varImageOn_premier_addon_fdb = 0;
			varImageOn_choice_xtra_addon_fdb == 0;
			varImageOn_premier_addon_mdu = 0;
			varImageOn_xtra_addon_mdu = 0;
			varImageOn_familiar_mdu = 0;
			varImageOn_TC_plus_mdu = 0
			varImageOn_choice_addon_fdb = 0;
			varImageOn_premier_addon_cdb = 0;
			varImageOn_choice_ultimate_addon = 0;
			varImageOn_choice_ultimate_addon_cdb = 0;
			varImageOn_choice_ultimate_addon_fdb = 0;
		}else{															//clicked 18, turn it on
			varImageOn_premier_addon_fdb = 1;
			varImageOn_choice_xtra_addon_fdb == 0;
			varImageOn_premier_addon_mdu = 0;
			varImageOn_xtra_addon_mdu = 0;
			varImageOn_familiar_mdu = 0;
			varImageOn_TC_plus_mdu = 0
			varImageOn_choice_addon_fdb = 0;
			varImageOn_premier_addon_cdb = 0;
			varImageOn_choice_ultimate_addon = 0;
			varImageOn_choice_ultimate_addon_cdb = 0;
			varImageOn_choice_ultimate_addon_fdb = 0;
			img += numRolImages;
		}
	}
	if (img == 25){
		if (varImageOn_choice_ultimate_addon_cdb = 1){	
			varImageOn_choice_ultimate_addon_cdb = 0;
			varImageOn_premier_addon_fdb = 0;
			varImageOn_choice_xtra_addon_fdb == 0;
			varImageOn_premier_addon_mdu = 0;
			varImageOn_xtra_addon_mdu = 0;
			varImageOn_familiar_mdu = 0;
			varImageOn_TC_plus_mdu = 0
			varImageOn_choice_addon_fdb = 0;
			varImageOn_premier_addon_cdb = 0;
			varImageOn_choice_ultimate_addon = 0;
			varImageOn_choice_ultimate_addon_fdb = 0;
		}else{	
			varImageOn_choice_ultimate_addon_cdb = 1;   //clicked 18, turn it on
			varImageOn_premier_addon_fdb = 0;
			varImageOn_choice_xtra_addon_fdb == 0;
			varImageOn_premier_addon_mdu = 0;
			varImageOn_xtra_addon_mdu = 0;
			varImageOn_familiar_mdu = 0;
			varImageOn_TC_plus_mdu = 0
			varImageOn_choice_addon_fdb = 0;
			varImageOn_premier_addon_cdb = 0;
			varImageOn_choice_ultimate_addon = 0;
			varImageOn_choice_ultimate_addon_fdb = 0;
			img += numRolImages;
		}
	}
	if (img == 26){
		if (varImageOn_choice_ultimate_addon_fdb  == 1){	
			varImageOn_choice_ultimate_addon_fdb = 0;
			varImageOn_premier_addon_fdb = 0;
			varImageOn_choice_xtra_addon_fdb == 0;
			varImageOn_premier_addon_mdu = 0;
			varImageOn_xtra_addon_mdu = 0;
			varImageOn_familiar_mdu = 0;
			varImageOn_TC_plus_mdu = 0
			varImageOn_choice_addon_fdb = 0;
			varImageOn_premier_addon_cdb = 0;
			varImageOn_choice_ultimate_addon = 0;
			varImageOn_choice_ultimate_addon_cdb = 0;
		}else{		
			varImageOn_choice_ultimate_addon_fdb = 1;     //clicked 18, turn it on
			varImageOn_premier_addon_fdb = 0;
			varImageOn_choice_xtra_addon_fdb == 0;
			varImageOn_premier_addon_mdu = 0;
			varImageOn_xtra_addon_mdu = 0;
			varImageOn_familiar_mdu = 0;
			varImageOn_TC_plus_mdu = 0
			varImageOn_choice_addon_fdb = 0;
			varImageOn_premier_addon_cdb = 0;
			varImageOn_choice_ultimate_addon = 0;
			varImageOn_choice_ultimate_addon_cdb = 0;
			img += numRolImages;
		}
	}
	if (img == 27){
		if (varImageOn_premier_addon_cdb == 1){	
			varImageOn_premier_addon_cdb = 0;
			varImageOn_choice_xtra_addon_fdb == 0;
			varImageOn_premier_addon_mdu = 0;
			varImageOn_xtra_addon_mdu = 0;
			varImageOn_familiar_mdu = 0;
			varImageOn_TC_plus_mdu = 0
			varImageOn_choice_addon_fdb = 0;
			varImageOn_premier_addon_fdb = 0;
			varImageOn_choice_ultimate_addon = 0;
			varImageOn_choice_ultimate_addon_cdb = 0;
			varImageOn_choice_ultimate_addon_fdb = 0;
		}else{															//clicked 18, turn it on
			varImageOn_premier_addon_cdb = 1;
			varImageOn_choice_xtra_addon_fdb == 0;
			varImageOn_premier_addon_mdu = 0;
			varImageOn_xtra_addon_mdu = 0;
			varImageOn_familiar_mdu = 0;
			varImageOn_TC_plus_mdu = 0
			varImageOn_choice_addon_fdb = 0;
			varImageOn_premier_addon_fdb = 0;
			varImageOn_choice_ultimate_addon = 0;
			varImageOn_choice_ultimate_addon_cdb = 0;
			varImageOn_choice_ultimate_addon_fdb = 0;
			img += numRolImages;
		}
	}
	document.images[loc].src = dtvImages[img].src;	
}

//=========end mouseoutclick=========

// Calculations //////////////////////////////////////////////////////////////////////////////////

function motherCalc() {				// this is the mother brain of the calcuations...
	var theform = document.frmNewPackage;
	var varPremPackTotal = 0;
	addPrimaryCreditValue = 0;
	
	addMonthlyArsExtraValue = 0;
	//varNumTvs = varImageOn_ds;
	varExtraReceiverTotal = getExtraReceiver();
	
	varBasePackTotal = getBasePack();
	varPremPackTotal = getPremPack();
       
	var round = Math.round(getPremPack() * 100) / 100;
	//offset for premium pack by adding $1
	if (round === 29.99 || round === 40.99 || round === 49.99) {
		varPremPackTotal += 1;
	}
	
	varProtectTotal = getProtectPack();
	
	
	varHD_AccessTotal = getHD_Access();
	varHD_ExtraTotal = getHDExtraPack();
	varDVR = getDVR();
	varARS = getARS();
	
	varProtectionProtectionPlan = getPremierProtection();
	varProtectTotal = varProtectTotal + varProtectionProtectionPlan;
	
	varMRVTotal = getMRV();
	
	if (addPrimaryCredit) {
		//code
		addPrimaryCredit = 7;	
	}
	
	if (addMonthlyMRVExtra) {
		addMonthlyArsExtraValue = 15;
	}
	
	varStateTax = getStateTax();
	varExtraTotal = varExtraReceiverTotal + varDVR + varARS + varHD_AccessTotal + varMRVTotal + varHD_ExtraTotal + addPrimaryCredit + addMonthlyArsExtraValue;
	varGrandTotal = varBasePackTotal + varPremPackTotal + varStateTax + varExtraTotal;
		
	theform.txtBase.value = formatCurrency(varBasePackTotal);
	theform.txtPrem.value = formatCurrency(varPremPackTotal);
	theform.txtExtra.value = formatCurrency(varExtraTotal);
	//theform.txtTax.value = formatCurrency(varStateTax);
	theform.txtGrandTotal.value = formatCurrency(varGrandTotal);
	
	get2ndMonthText();
	
	
	
	//rightSizing();
	importPricingXML();
}

function removeTax(){
document.frmNewPackage.dropdown.value = "none";
motherCalc();
}

function getStateTax(){
	 // Connecticut Plus DVR additional .0525 ***************
	 /*
	 varTax = document.frmNewPackage.dropdown.value;
	 if(varTax != "none"){
	 varTemp = document.frmNewPackage.dropdown.selectedIndex;
	 varState = document.frmNewPackage.dropdown.options[varTemp].text;
	 varBasePackTotal = getBasePack();
	 varPremPackTotal = getPremPack();
	 varSubTotal = varBasePackTotal + varPremPackTotal;
	 varTaxTemp = formatCurrency(varTax * 100);

	 if(varState != "Connecticut"){
			 taxLayer.innerHTML = varState + "'\s State programming<br>tax is " + varTaxTemp + "%. &nbsp;&nbsp;<a class=\"aBlue2\" href=javascript:removeTax();>(remove tax)</a>";
			 return varSubTotal*varTax;
		}else{
			//varState equals to "Connecticut"
			 taxLayer.innerHTML = varState + "'\s State programming<br>tax is " + varTaxTemp + "% + 5.25%. &nbsp;&nbsp;<a class=\"aBlue2\" href=javascript:removeTax();>(remove tax)</a>";
			 var varTax1 = varSubTotal*varTax;
			 var varTax2 =  (varTax1 + varSubTotal)*.0525;
			 return varTax1 + varTax2;
		}
	 }else{
	 		//varTax equals to "none"
	  	taxLayer.innerHTML ="";
	 		return 0;
	 }
	 */
	 /**************  temp till function is restored  ************/
	 	//taxLayer.innerHTML ="";
	 		return 0;
	/**************  temp till function is restored  ************/
}

function getExtraReceiver(){
	if ((varImageOn_ds - varMirrorFeeWaiver) > 0){
		MirrorFee = ((varImageOn_ds - varMirrorFeeWaiver)*varMirrorFee);
		return MirrorFee;
	}else{
		return 0;
	}
}

function getBasePack(){
	var returnBase = 0;
	for (var i=0 ; i<= 35 ; i++){			//<--checks which images are on and sums the base package price
		xImageOn = varImageOn;		
		if(xImageOn == i){
			returnBase += varBase[i];
		}
	}
	if (varImageOn_TotChoicePlus == 1){
		returnBase += varBase[16];
	}
	if (varImageOn_Xtier == 1){
		returnBase += varBase[35];
	}
	if (varImageOn_familiar_mdu == 1){
		returnBase += 5.00;
	}
	if (varImageOn_TC_plus_mdu == 1){
		returnBase += 5.00;
	}
	if (varImageOn_premier_addon_mdu == 1){
		returnBase += 51.00;
	}
	if (varImageOn_choice_addon_fdb == 1){
		returnBase += 24.99;
	}
	if (varImageOn_choice_ultimate_addon == 1){
		returnBase += 6.00;
	}
	return returnBase;
}

function getPremPack(){
	premCount = 0;
	HBOadjust = 0.00;
	if(myFlag_Prem[1] == true){
		HBOadjust = varHBOadjust;
	}
	if (varPremierClicked == true){			//<-- if premier package is chosen, premium services are included
		return 0.00;
	}else{
		for (var h=1 ; h<= 5 ; ++h){   		//<-- checks which image is on and adds up the premiums accordingly
			if (myFlag_Prem[h] == true){
				premCount = premCount + 1;
			}
		}
				
		if(premCount == 0){
			return 0.00;
		}			
		if(premCount == 1){	
			return varPREM1 + HBOadjust;
		}
		if(premCount == 2){
			return varPREM1 + varPREM2 + HBOadjust;
		}
		if(premCount == 3){
			if (HBOadjust == 4) {
				return varPREM1 + varPREM2 + varPREM3 + HBOadjust + 1;
			} else {
				return varPREM1 + varPREM2 + varPREM3 + HBOadjust;
			}
		}		
		if(premCount == 4){
			if (HBOadjust == 4) {
				return varPREM1 + varPREM2 + varPREM3 + varPREM4 + HBOadjust + 1;
			} else {
				return varPREM1 + varPREM2 + varPREM3 + varPREM4 + HBOadjust;
			}
		}		
		if(premCount == 5){
			if(varImageOn == '3'){img_click_Base('Premier','6'); lyrSuggestion.innerHTML = arrayLyrSuggestion[1]; return 0.00;}
			if(varImageOn == '4'){img_click_Base('Premier','6'); lyrSuggestion.innerHTML = arrayLyrSuggestion[2]; return 0.00;}
			if(varImageOn == '24'){img_click_Base('Lo Maximo','10'); lyrSuggestion.innerHTML = arrayLyrSuggestion[8]; return 0.00;}
			if(varImageOn == '5'){img_click_Base('Premier','6'); img_Click_HD_Access('HD_Access1',1); lyrSuggestion.innerHTML = arrayLyrSuggestion[3]; return 0.00;}
		
				return varPREM1 + varPREM2 + varPREM3 + varPREM4 + varPREM5 + HBOadjust + 1;
			
		}
	}	
}


function getProtectPack(){
	if (varImageOn_Protect == 10){
		return varProtect[0];
	}else if (varImageOn_Protect == 11){
		return varProtect[1];
	}else if(varImageOn_Protect == 12){
		return varProtect[2];
	}else{
		return 0.00;	
	}
}

/**calculation for premier plan**/
function getPremierProtection(){
	if (varImageOn_Premier == 12){	  
	   return varProtectionProtectionPlanMonthly;
	}else{
	   return 0.00;	
	}
}

function getHDExtraPack(){
	if (varImageOn_HDExtraPack == 10){
		return varHDExtraPackMonthly;
	}else{
		return 0.00;	
	}
}

function getHD_Access(){

	if (varImageOn_HD_Access == 1 && varImageOn != 5){
		return varHDACCESSmonthly;		//was set to 0.00 because it's free for first 3 months for new and existing customers.
										//setting to 10.00 for HD access
	}else{
		return 0.00;	
	}
}

function getMRV(){
	if (varImageOn_MRV == 1){
		return varMRVMonthly;		//was set to 0.00 because it's free for first 3 months for new and existing customers.
										//setting to 3.00 
	}else{
		return 0.00;	
	}
}


function getDVR(){
//	if ( varImageOn == 4 || varImageOn == 5 || varImageOn == 7){
//		return numDVR[0];				// dvr is free with plus DVR and plus HD DVR and Optimo Mas Plus DVR.
//	}else{
		return numDVR[varImageOn_DVR];
//	}	
}

function getARS(){
		return numARS[varImageOn_ARS];	
}


function get2ndMonthText(){
	var strText = '';
	var numProtect = 0;
	if (varImageOn_Protect == 10 || varImageOn_Premier == 12){
		numProtect = formatCurrency(parseFloat(document.frmNewPackage.txtGrandTotal.value) + varProtectTotal);
		strText = 'Customers are not charged for Protection Plan until the 2nd month.  The total with <b>DIRECTV Protection Plan</b> is $' +  numProtect + '.';
		if (varImageOn_Protect == 10 && varImageOn_Premier == 12) {
		    strText = 'Customers are not charged for Protection Plan until the 2nd month.  The total with <b>DIRECTV Protection Plan</b> and <b>Protection Plan Premier</b> is $' +  numProtect + '.';	
		}
		else if (varImageOn_Protect != 10 && varImageOn_Premier == 12) {
			strText = 'Customers are not charged for Protection Plan until the 2nd month.  The total with <b>Protection Plan Premier</b> is $' +  numProtect + '.';
		}
	}
	document.getElementById("lyr2ndMonth").innerHTML = strText;
}


// Utilities ///////////////////////////////////////////////////////////////////////////////////////////////////

//formats textbox prices to enable addition functions
function formatCurrency(num) {
	num = num.toString().replace(/\$|\,/g,'');
	if(isNaN(num)) num = "0";
	cents = Math.floor((num*100+0.5)%100);
	num = Math.floor((num*100+0.5)/100).toString();
	if(cents < 10) cents = "0" + cents;
	for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
		num = num.substring(0,num.length-(4*i+3))+','+num.substring(num.length-(4*i+3));
	return (num + "." + cents);
}

//opens a new 800x300 window
function newWindow(content) {
	if (siteBit != ""){
		if (content.match('/' + siteBit + '/') == null){
				content = '/' + siteBit + content;
				newMatchVar4 = 'yes, siteBit Added';
		}
	}
	if(varMainWindow == null || varMainWindow.closed) {
		varMainWindow = window.open(content,'popup','width=800,height=300,status=no,toolbar=no,menubar=no,scrollbars=yes,resizable=yes');
	}else{
		varMainWindow.location.href = content;
		varMainWindow.focus();
	}
}	

function swapBasePackageLanguage(){
	MDULayerVis =0;
	document.getElementById("lyrEnglish2").innerHTML = arrayMDUInnerHTML[7];
	document.getElementById("MDUdefault").innerHTML = '';
	if (spanishLayerVis == 0){
		document.getElementById("lyrEnglish1").style.display = 'none';
		document.getElementById("lyrEnglish2").style.display = 'none';
		document.getElementById("lyrSpanish1").style.display = 'block';
		document.getElementById("lyrSpanish2").style.display = 'block';
		document.getElementById("lyrMDU1").style.display = 'none';
		document.getElementById("MDUdiv").style.display = 'none';
		spanishLayerVis =1;
	}else{
		document.getElementById("lyrEnglish1").style.display = 'block';
		document.getElementById("lyrEnglish2").style.display = 'block';
		document.getElementById("lyrSpanish1").style.display = 'none';
		document.getElementById("lyrSpanish2").style.display = 'none';
		document.getElementById("lyrMDU1").style.display = 'none';
		document.getElementById("MDUdiv").style.display = 'none';
		spanishLayerVis =0;
	}
	resetAllNoRefresh();
};

function swapBasePackageMDU(){
	if (MDULayerVis == 0){
		document.getElementById("lyrMDU1").style.display = 'block';
		document.getElementById("MDUdiv").style.display = 'block';
		//document.getElementById("MDUdiv").innerHTML = '';
		document.getElementById("MDUdefault").style.display = 'block';
		document.getElementById("MDUselectionInfo").style.display = 'block';
		document.getElementById("MDUselectionInfo").innerHTML = '';
		if (spanishLayerVis == 0){
			document.getElementById("lyrEnglish1").style.display = 'block';
			document.getElementById("lyrEnglish2").style.display = 'none';
			document.getElementById("lyrSpanish1").style.display = 'none';
			document.getElementById("lyrSpanish2").style.display = 'none';
		}else{
			document.getElementById("lyrEnglish1").style.display = 'none';
			document.getElementById("lyrEnglish2").style.display = 'none';
			document.getElementById("lyrSpanish1").style.display = 'block';
			document.getElementById("lyrSpanish2").style.display = 'none';
		}
		MDULayerVis =1;
	}else{
		document.getElementById("MDUdefault").style.display = 'none';
		document.getElementById("MDUselectionInfo").style.display = 'none';
		document.getElementById("lyrMDU1").style.display = 'none';
		document.getElementById("MDUdiv").style.display = 'none';
		if (spanishLayerVis == 0){
			document.getElementById("lyrEnglish1").style.display = 'block';
			document.getElementById("lyrEnglish2").style.display = 'block';
			document.getElementById("lyrSpanish1").style.display = 'none';
			document.getElementById("lyrSpanish2").style.display = 'none';
		}else{
			document.getElementById("lyrEnglish1").style.display = 'none';
			document.getElementById("lyrEnglish2").style.display = 'none';
			document.getElementById("lyrSpanish1").style.display = 'block';
			document.getElementById("lyrSpanish2").style.display = 'block';
		}
		MDULayerVis =0;
	}
	resetAllNoRefresh();
};

function fillMDUdiv (value, textEntry) {
	ddVal = value;
	varMirrorFeeWaiver = 1;
	if (textEntry == 'TMW/JMW'){
		document.getElementById("MDUselectionInfo").innerHTML = (textEntry + ' : <span style="color:red;">Mirroring fee begins after 3rd receiver</span><br>Mouseover a package for Quick Summary instructions.') ;
	}else if(textEntry == 'TCD/JCD'){
		document.getElementById("MDUselectionInfo").innerHTML = (textEntry + ': Verify Customer\'s current programming<br>(Mouseover a package for Quick Summary instructions.)') ;
	}else{
		document.getElementById("MDUselectionInfo").innerHTML = ('You selected: ' + textEntry + '<br>Mouseover a package for Quick Summary instructions.') ;
	}
	
	if (ddVal == 0) {					//default  
		MDUdiv.innerHTML = arrayMDUInnerHTML[1];
		document.getElementById("lyrEnglish2").style.display = 'none';
		document.getElementById("MDUdefault").style.display = 'none';
	}
	if (ddVal == 1) {					//MDU / JDU / MDD / MDL
		MDUdiv.innerHTML = arrayMDUInnerHTML[2];
		document.getElementById("lyrEnglish2").innerHTML = "&nbsp;";
		document.getElementById("MDUdefault").style.display = 'none';
	}
	if (ddVal == 2) {					//TCD / JCD
		MDUdiv.innerHTML = arrayMDUInnerHTML[3];
		document.getElementById("lyrEnglish2").innerHTML = "&nbsp;";
		document.getElementById("MDUdefault").style.display = 'none';
	}
	if (ddVal == 3) {					//TMW / JMW
		MDUdiv.innerHTML = arrayMDUInnerHTML[4];
		document.getElementById("lyrEnglish2").innerHTML = "&nbsp;";
		document.getElementById("MDUdefault").style.display = 'none';
		varMirrorFeeWaiver = 3;
		varImageOn_TotChoicePlus = 0;
		varImageOn_Xtier = 0;
		varImageOn_familiar_mdu = 0;
		varImageOn_TC_plus_mdu = 0;
		varImageOn_xtra_addon_mdu = 0;
		varImageOn_premier_addon_mdu = 0;
		varImageOn_choice_addon_fdb = 0;
		varImageOn_choice_xtra_addon_fdb = 0;
		varImageOn_premier_addon_fdb = 0;
		//setTimeout(xtra_tier_on, 5000);
	}	
	if (ddVal == 4) {					// TMU / JMU
		MDUdiv.innerHTML = arrayMDUInnerHTML[6];
		document.getElementById("lyrEnglish2").innerHTML = "&nbsp;";
		document.getElementById("MDUdefault").style.display = 'none';
		varImageOn_TotChoicePlus = 0;
		varImageOn_Xtier = 0;
		varImageOn_familiar_mdu = 0;
		varImageOn_TC_plus_mdu = 0;
		varImageOn_xtra_addon_mdu = 0;
		varImageOn_premier_addon_mdu = 0;
		varImageOn_choice_addon_fdb = 0;
		varImageOn_choice_xtra_addon_fdb = 0;
		varImageOn_premier_addon_fdb = 0;
		//setTimeout(xtra_tier_on, 5000);
	}
	resetAllNoRefresh();
	motherCalc();
}

//resets all forms in all frames

function resetAll(){
	var arrElements=document.getElementsByTagName('form');
	var numLen=arrElements.length;
	for(var j=0; j<numLen; j++){
		var myObj=arrElements[j];
		if(myObj!=null){
			myObj.reset();
		}
	}		
	document.location.reload();
};
function resetAllNoRefresh(){
	var arrElements=document.getElementsByTagName('form');
	var numLen=arrElements.length;
	for(var j=0; j<numLen; j++){
		var myObj=arrElements[j];
		if(myObj!=null){
			myObj.reset();
		}
	}	
	varImageOn_TotChoicePlus = 0;
	varImageOn_Xtier = 0;
	resetLayer(lyrSuggestion);
	varImageOn = 0;				//Base Package flag
	importPricingXML();
};

function getSiteBit(){
	var isTeamsiteServer = location.href.lastIndexOf('iw-mount');
  	if (isTeamsiteServer >= 0)
	{
		return;
	}
	
  sURL = new String;
  bits = new Object;

  var x = 0;
  var stop = 0;

  sURL = location.href;
  sURL = sURL.slice(8,sURL.length);

  chunkStart = sURL.indexOf("/");
  sURL = sURL.slice(chunkStart+1,sURL.length)

  while(!stop)
    {
    chunkStart = sURL.indexOf("/");

    if (chunkStart != -1)
      {
      bits[x] = sURL.slice(0,chunkStart)
      sURL = sURL.slice(chunkStart+1,sURL.length);
      }
    else
      {
      stop = 1;
      }

    x++;
    }

  //This strips off any initial folders which we don't want to show on the breadcrumbs

  if(bits[0] == 'res' || bits[0] == 'ret' || bits[0] == 'com' || bits[0] == 'srvc' || bits[0] == 'telco' || bits[0] == 'telco2' || bits[0] == 'comext')
    { 
		siteBit = bits[0];
    }
};