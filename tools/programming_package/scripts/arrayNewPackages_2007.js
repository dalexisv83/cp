var arrayBaseSummary = new Array();
var arrayParaSummary = new Array();
var arrayPremSummary = new Array();
var arrayExtraSummary = new Array();
var arrayTaxes = new Array();
var arrayLyrSuggestion = new Array();
var arrayMDUInnerHTML = new Array();
															
var varDefaultSummary =	"<font color='#000000'><center>Rollover package names<br> for a quick summary<br><br>or<br><br>Click on package links for<br> a detailed description.</center></font>",
	outputSummary = function(id) {
		var smmry = '<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" bgcolor="#e0e1e1">&nbsp;<strong>' + dataProg.packages[id].name + '<br><br></strong></td></tr>' +
					'<tr><td class="nlb">- ' + dataProg.packages[id].price + '/month</td></tr>';
		if (dataProg.packages[id].noLocal) {
			smmry += '<tr><td class="nlb">- No Locals/' + dataProg.packages[id].noLocal + '</td></tr>';
		}
			smmry += '<tr><td class="nlb">&nbsp;</td></tr>' +
					'<tr><td class="nlb">' + dataProg.packages[id].desc + '<td><tr>' +
					'</table>';
		return smmry;
	}


//base packages-------------family---------------------

//Family
arrayBaseSummary[1] =	outputSummary(10);
//Choice
arrayBaseSummary[2] =	outputSummary(3);
//Xtra
arrayBaseSummary[3] =	outputSummary(5);
//Ultimate
arrayBaseSummary[4] =	outputSummary(6);
//Entertainment
arrayBaseSummary[5] =	outputSummary(2);
//Premier
arrayBaseSummary[6] =	outputSummary(7);
//preferred_choice
arrayBaseSummary[7] =	outputSummary(30);
//total_choice  (Total Choice Tier @ 10.99)
arrayBaseSummary[8] =	'<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" bgcolor="#e0e1e1">&nbsp;<strong>Total Choice & TC_MDU Tier<br><br></strong></td></tr>' +
						'<tr><td class="nlb">- "Total Choice Limited" and "Total Choice_MDU Tier" are provided by the property.</td></tr>' +
						'<tr><td class="nlb">&nbsp;</td></tr>' +
					 	'<tr><td class="nlb">- Add "Total Choice Plus_MDU Tier" to give equivalent of Total Choice Plus programming.</td></tr></table>'
						
//Choice Tier for TCD/JCD
arrayBaseSummary[9] =	'<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" bgcolor="#e0e1e1">&nbsp;<strong>Choice_MDU Tier<br><br></strong></td></tr>' +
						'<tr><td class="nlb">-"Total Choice Limited" and "Choice_MDU Tier" are provided by the property.</td></tr>' +
						'<tr><td class="nlb">&nbsp;</td></tr>' +
						'<tr><td class="nlb">-Add "Choice Xtra Classic_MDU Tier" to give equivalent of Choice Xtra Classic programming.</td></tr></table>'
						
//Total Choice Plus MDU Tier
arrayBaseSummary[10] =	'<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" bgcolor="#e0e1e1">&nbsp;<strong>Total Choice Plus_MDU Tier<br><br></strong></td></tr>' +
						'<tr><td class="nlb">-"Total Choice Limited" and "Total Choice_MDU Tier" are provided by the property.</td></tr>' +
						'<tr><td class="nlb">&nbsp;</td></tr>' +
					 	'<tr><td class="nlb">-Add "Total Choice Plus_MDU Tier" to give equivalent of Total Choice Plus programming.</td></tr></table>'
						
//Xtra Tier
arrayBaseSummary[11] =	'<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" bgcolor="#e0e1e1">&nbsp;<strong>Choice Xtra Classic_MDU Tier<br><br></strong></td></tr>' +
						'<tr><td class="nlb">-"Total Choice Limited" and "Choice_MDU Tier" are provided by the property.</td></tr>' +
						'<tr><td class="nlb">&nbsp;</td></tr>' +
					 	'<tr><td class="nlb">-Add "Choice Xtra Classic_MDU Tier" to give equivalent of Choice Xtra Classic programming.</td></tr></table>'
//Customer has total_choice  (Total Choice Tier @ 5.00)
arrayBaseSummary[12] =	'<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" bgcolor="#e0e1e1">&nbsp;<strong>Total Choice_MDU Tier<br><br></strong></td></tr>' +
						'<tr><td class="nlb">- Customer Has Total Choice_MDU Tier</td></tr>' +
						'<tr><td class="nlb">- Upgrade to Plus for $5.00</td></tr>' +
					 	'<tr><td class="nlb">- To get over 185 channels.</td></tr>' +
					 	'<tr><td class="nlb">- Upgrade to Premium not available, instead:</td></tr>' +
					 	'<tr><td class="nlb">- Add Premium Services a la carte at pricing shown in Step 4</td></tr></table>'
						
//Customer has Choice_MDU Tier  --   

arrayBaseSummary[13] =	'<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" bgcolor="#e0e1e1">&nbsp;<strong>Choice_MDU Tier<br><br></strong></td></tr>' +
						'<tr><td class="nlb">-If "Total Choice Limited" is on the account, add "Familiar_MDU Tier" to give equivalent of Familiar programming.</td></tr></table>'

//Customer has total_choice  (Total Choice Tier @ 5.00)
arrayBaseSummary[14] =	'<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" bgcolor="#e0e1e1">&nbsp;<strong>Total Choice Bulk<br><br></strong></td></tr>' +
						'<tr><td class="nlb">- Total Choice Bulk is provided by the property.</td></tr>' +
						'<tr><td class="nlb">&nbsp;</td></tr>' +
						'<tr><td class="nlb">- Add "Total Choice Plus_MDU Tier" to give equivalent of Total Choice Plus programming.</td></tr>' +
						'<tr><td class="nlb">&nbsp;</td></tr>' +
					 	'<tr><td class="nlb">- Add Premium Services a la carte (step 4) and "TCPlus_MDU Tier" to give equivalent of Premier programming. (Premier upgrade package isn\'t available.)</td></tr></table>'
						

//Total Choice Plus_MDU Tier for TCD/JCD
arrayBaseSummary[15] =	'<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" bgcolor="#e0e1e1">&nbsp;<strong>Total Choice Plus_MDU Tier<br><br></strong></td></tr>' +
						'<tr><td class="nlb">-Total Choice Bulk is provided by the property.</td></tr>' +
						'<tr><td class="nlb">&nbsp;</td></tr>' +
						'<tr><td class="nlb">- Add "Total Choice Plus_MDU Tier" to give equivalent of Total Choice Plus programming.</td></tr>' +
						'<tr><td class="nlb">&nbsp;</td></tr>' +
						'<tr><td class="nlb">- Add Premium Services a la carte (step 4) and "TCPlus_MDU Tier" to give equivalent of Premier programming. (Premier upgrade package isn\'t available.)</td></tr></table>'
						
						
//Total Choice Bulk
arrayBaseSummary[16] =	'<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" bgcolor="#e0e1e1">&nbsp;<strong>Total Choice Bulk<br><br></strong></td></tr>' +
						'<tr><td class="nlb">-Total Choice Bulk is provided by the property.</td></tr>' +
						'<tr><td class="nlb">&nbsp;</td></tr>' +
						'<tr><td class="nlb">-Add "Total Choice Plus_MDU Tier" to give equivalent of Total Choice Plus programming.</td></tr>' +
						'<tr><td class="nlb">&nbsp;</td></tr>' +
						'<tr><td class="nlb">-Add Premium Services a la carte (step 4) and "TCPlus_MDU Tier" to give equivalent of Premier programming. (Premier upgrade package isn\'t available.)</td></tr></table>'
						

//Xtra Digital Bulk for TMU
arrayBaseSummary[17] =	'<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" bgcolor="#e0e1e1">&nbsp;<strong>Xtra Digital Bulk<br><br></strong></td></tr>' +
						'<tr><td class="nlb">-Xtra Digital Bulk is provided by the property.</td></tr>' +
						'<tr><td class="nlb">&nbsp;</td></tr>' +
						'<tr><td class="nlb">-Add "Ultimate Add-On_Base Xtra" to give equivalent of Ultimate programming.</td></tr>' +
						'<tr><td class="nlb">&nbsp;</td></tr>' +
						'<tr><td class="nlb">-Add "Premier Add-On_Base  Xtra" to give equivalent of Premier programming.</td></tr>' +
						'<tr><td class="nlb">&nbsp;</td></tr>' +
						'<tr><td class="nlb">-Tip: Premier Add-On isn\'t available if the property already provides a Premium Service, such as HBO. So, give them the Premier equivalent by adding the "Ultimate Add-On" and the remainder of the Premium Services.</td></tr></table>'


//Choice Digital Bulk for TMU
arrayBaseSummary[18] =	'<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" bgcolor="#e0e1e1">&nbsp;<strong>Choice Digital Bulk<br><br></strong></td></tr>' +
						'<tr><td class="nlb">-Choice Digital Bulk is provided by the property.</td></tr>' +
						'<tr><td class="nlb">&nbsp;</td></tr>' +
						'<tr><td class="nlb">-Add "Xtra Add-On_Base Choice" to give equivalent of Xtra programming.</td></tr>' +
						'<tr><td class="nlb">&nbsp;</td></tr>' +
						'<tr><td class="nlb">-Add "Ultimate Add-On_Base Choice" to give equivalent of Ultimate programming.</td></tr>' +
						'<tr><td class="nlb">&nbsp;</td></tr>' +
						'<tr><td class="nlb">-Add "Premier Add-On_Base Choice" to give equivalent of Premier programming.</td></tr>' +
						'<tr><td class="nlb">&nbsp;</td></tr>' +
						'<tr><td class="nlb">-Tip: Premier Add-On isn\'t available if the property already provides a Premium Service, such as HBO. So, give them the Premier equivalent by adding the "Ultimate Add-On" and the remainder of the Premium Services.</td></tr></table>'


//Family Digital Bulk for TMU
arrayBaseSummary[19] =	'<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" bgcolor="#e0e1e1">&nbsp;<strong>Family Digital Bulk<br><br></strong></td></tr>' +
						'<tr><td class="nlb">-Family Digital Bulk is provided by the property.</td></tr>' +
						'<tr><td class="nlb">-Add "Entertainment Add-On_Base Family" to give the equivalent of Entertainment.</td></tr>' +
						'<tr><td class="nlb">-Add "Choice Add-On_Base Family" to give equivalent of Choice.</td></tr>' +
						'<tr><td class="nlb">-Add "Xtra Add-On_Base Family" to give equivalent of Xtra.</td></tr>' +
						'<tr><td class="nlb">-Add "Ultimate Add-On_Base Family" to give equivalent of Ultimate.</td></tr>' +
						'<tr><td class="nlb">-Add "Premier Add-On_Base Family" to give equivalent of Premier.</td></tr>' +
						'<tr><td class="nlb">&nbsp;<strong>Tip:</strong> Premier Add-On isn\'t available if the property already provides a Premium Service, like HBO. So, give them the Premier equivalent by adding the "Ultimate Add-On" and the remainder of the Premium Services.</td></tr></table>'


// Premier Add On
arrayBaseSummary[20] =	'<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" bgcolor="#e0e1e1">&nbsp;<strong>Premier Add-On<br><br></strong></td></tr>' +
						'<tr><td class="nlb">-Choice Digital Bulk is provided by the property.</td></tr>' +
						'<tr><td class="nlb">&nbsp;</td></tr>' +
						'<tr><td class="nlb">-Add "Xtra Add-On_Base Choice" to give equivalent of Xtra programming.</td></tr>' +
						'<tr><td class="nlb">&nbsp;</td></tr>' +
						'<tr><td class="nlb">-Add "Premier Add-On_Base Choice" to give equivalent of Premier programming. </td></tr>' +
						'<tr><td class="nlb">&nbsp;</td></tr>' +
						'<tr><td class="nlb">-Tip: Premier Add-On isn\'t available if the property already provides a Premium Service, such as HBO. So, give them the Premier equivalent by adding the "Xtra Add-On" and the remainder of the Premiums. </td></tr></table>'
						

// Family Digital Bulk
arrayBaseSummary[21] =	'<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" bgcolor="#e0e1e1">&nbsp;<strong>Family Digital Bulk<br><br></strong></td></tr>' +
						'<tr><td class="nlb">-Family Digital Bulk is provided by the property.</td></tr>' +
						'<tr><td class="nlb">&nbsp;</td></tr>' +
						'<tr><td class="nlb">-Add "Xtra Add-On_Base Family" to give equivalent of Xtra programming.</td></tr>' +
						'<tr><td class="nlb">&nbsp;</td></tr>' +
						'<tr><td class="nlb">-Add "Premier Add-On_Base Family" to give equivalent of Premier programming.</td></tr>' +
						'<tr><td class="nlb">&nbsp;</td></tr>' +
						'<tr><td class="nlb">-Tip: Premier Add-On isn\'t available if the property already provides a Premium, such as HBO. So, give Premier equivalent by adding "Xtra Add-On" and remainder of Premiums.</td></tr></table>'
						
						
// Choice Add-On
arrayBaseSummary[22] =	'<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" bgcolor="#e0e1e1">&nbsp;<strong>Choice Add-On<br><br></strong></td></tr>' +
						'<tr><td class="nlb">-Family Digital Bulk is provided by the property.</td></tr>' +
						'<tr><td class="nlb">&nbsp;</td></tr>' +
						'<tr><td class="nlb">-Add "Choice Add-On_Base Family" to give equivalent of Choice programming.</td></tr>' +
						'<tr><td class="nlb">&nbsp;</td></tr>' +
						'<tr><td class="nlb">-Add "Xtra Add-On_Base Family" to give equivalent of Xtra programming.</td></tr>' +
						'<tr><td class="nlb">&nbsp;</td></tr>' +
						'<tr><td class="nlb">-Add "Premier Add-On_Base Family" to give equivalent of Premier programming.</td></tr>' +
						'<tr><td class="nlb">&nbsp;</td></tr>' +
						'<tr><td class="nlb">-Tip: Premier Add-On isn\'t available if the property already provides a Premium, such as HBO. So, give Premier equivalent by adding "Xtra Add-On" and remainder of Premiums.</td></tr></table>'
						
						
// Xtra Add-On FDB
arrayBaseSummary[23] =	'<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" bgcolor="#e0e1e1">&nbsp;<strong>Xtra Add-On<br><br></strong></td></tr>' +
						'<tr><td class="nlb">-Family Digital Bulk is provided by the property.</td></tr>' +
						'<tr><td class="nlb">&nbsp;</td></tr>' +
						'<tr><td class="nlb">-Add "Choice Add-On_Base Family" to give equivalent of Choice programming.</td></tr>' +
						'<tr><td class="nlb">&nbsp;</td></tr>' +
						'<tr><td class="nlb">-Add "Xtra Add-On_Base Family" to give equivalent of Xtra programming.</td></tr>' +
						'<tr><td class="nlb">&nbsp;</td></tr>' +
						'<tr><td class="nlb">-Add "Premier Add-On_Base Family" to give equivalent of Premier programming.</td></tr>' +
						'<tr><td class="nlb">&nbsp;</td></tr>' +
						'<tr><td class="nlb">-Tip: Premier Add-On isn\'t available if the property already provides a Premium, such as HBO. So, give Premier equivalent by adding "Xtra Add-On" and remainder of Premiums.</td></tr></table>'
						
						
// Premier Add On FDB
arrayBaseSummary[24] =	'<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" bgcolor="#e0e1e1">&nbsp;<strong>Premier Add-On<br><br></strong></td></tr>' +
						'<tr><td class="nlb">-Family Digital Bulk is provided by the property.</td></tr>' +
						'<tr><td class="nlb">&nbsp;</td></tr>' +
						'<tr><td class="nlb">-Add "Choice Add-On_Base Family" to give equivalent of Choice programming.</td></tr>' +
						'<tr><td class="nlb">&nbsp;</td></tr>' +
						'<tr><td class="nlb">-Add "Xtra Add-On_Base Family" to give equivalent of Xtra programming. </td></tr>' +
						'<tr><td class="nlb">&nbsp;</td></tr>' +
						'<tr><td class="nlb">-Add "Premier Add-On_Base Family" to give equivalent of Premier programming.</td></tr>' +
						'<tr><td class="nlb">&nbsp;</td></tr>' +
						'<tr><td class="nlb">-Tip: Premier Add-On isn\'t available if the property already provides a Premium, such as HBO. So, give Premier equivalent by adding "Xtra Add-On" and remainder of Premiums.</td></tr></table>'
						

//Student Preferred Bulk
arrayBaseSummary[25] =	'<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" bgcolor="#e0e1e1">&nbsp;<strong>Student Preferred Bulk<br><br></strong></td></tr>' +
						'<tr><td class="nlb">-Student Preferred Bulk is provided by the property.</td></tr>' +
						'<tr><td class="nlb">-Add "Choice Add-On_Base Student Preferred" to give the equivalent of Choice programming.</td></tr>' +
						'<tr><td class="nlb">-Add "Choice Xtra Classic Add-On_Base Student Preferred" to give the equivalent of Choice Xtra Classic programming.</td></tr>' +
						'<tr><td class="nlb">&nbsp;</td></tr></table>'
						
//Student Choice Add-On 
arrayBaseSummary[26] =	'<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" bgcolor="#e0e1e1">&nbsp;<strong>Student Choice Add-On<br><br></strong></td></tr>' +
						'<tr><td class="nlb">-Student Preferred Bulk is provided by the property.</td></tr>' +
						'<tr><td class="nlb">-Add "Choice Add-On_Base Student Preferred" to give the equivalent of Choice programming.</td></tr>' +
						'<tr><td class="nlb">-Add "Choice Xtra Classic Add-On_Base Student Preferred" to give the equivalent of Choice Xtra Classic programming.</td></tr>' +
						'<tr><td class="nlb">&nbsp;</td></tr></table>'
						
//Student Xtra Add-On
arrayBaseSummary[27] =	'<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" bgcolor="#e0e1e1">&nbsp;<strong>Student Choice Xtra Classic Add-On<br><br></strong></td></tr>' +
						'<tr><td class="nlb">-Student Preferred Bulk is provided by the property.</td></tr>' +
						'<tr><td class="nlb">-Add "Choice Add-On_Base Student Preferred" to give the equivalent of Choice programming.</td></tr>' +
						'<tr><td class="nlb">-Add "Choice Xtra Classic Add-On_Base Student Preferred" to give the equivalent of Choice Xtra Classic programming.</td></tr>' +
						'<tr><td class="nlb">&nbsp;</td></tr></table>'						

//Entertainment Digital Bulk
arrayBaseSummary[28] =	'<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" bgcolor="#e0e1e1">&nbsp;<strong>Entertainment Digital Bulk<br><br></strong></td></tr>' +
						'<tr><td class="nlb">-Entertainment Digital Bulk is provided by the property.</td></tr>' +
						'<tr><td class="nlb">-Add Choice Add-On_Base Entertainment to give equivalent of Choice.</td></tr>' +
						'<tr><td class="nlb">-Add Xtra Add-On_Base Entertainment to give the equivalent of Xtra.</td></tr>' +
						'<tr><td class="nlb">-Add Ultimate Add-On_Base Entertainment to give the equivalent of Ultimate.</td></tr>' +
						'<tr><td class="nlb">-Add Premier Add-On_Base Entertainment to give the equivalent of Premier.</td></tr>' +
						'<tr><td class="nlb"><br>-Tip: Premier Add-On isn\'t available if the property already provides a Premium Service, like HBO. So, give them the Premier equivalent by adding the "Ultimate Add-On" and the remainder of the Premium Services.</td></tr></table>'						


//Xtra Add-On TMW/JMW
arrayBaseSummary[29] =	'<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" bgcolor="#e0e1e1">&nbsp;<strong>Xtra Add-On<br><br></strong></td></tr>' +
						'<tr><td class="nlb">-Choice Digital Bulk is provided by the property.</td></tr>' +
						'<tr><td class="nlb">&nbsp;</td></tr>' +
						'<tr><td class="nlb">-Add "Xtra Add-On_Base Choice" to give equivalent of Xtra programming.</td></tr>' +
						'<tr><td class="nlb">&nbsp;</td></tr>' +
						'<tr><td class="nlb">-Add "Ultimate Add-On_Base Choice" to give equivalent of Ultimate programming.</td></tr>' +
						'<tr><td class="nlb">&nbsp;</td></tr>' +
						'<tr><td class="nlb">-Add "Premier Add-On_Base Choice" to give equivalent of Premier programming.</td></tr>' +
						'<tr><td class="nlb">&nbsp;</td></tr>' +
						'<tr><td class="nlb">-Tip: Premier Add-On isn\'t available if the property already provides a Premium Service, such as HBO. So, give them the Premier equivalent by adding the "Ultimate Add-On" and the remainder of the Premium Services.</td></tr></table>'


//Ultimate Add-On TMW/JMW
arrayBaseSummary[30] =	'<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" bgcolor="#e0e1e1">&nbsp;<strong>Ultimate Add-On<br><br></strong></td></tr>' +
						'<tr><td class="nlb">-Choice Digital Bulk is provided by the property.</td></tr>' +
						'<tr><td class="nlb">&nbsp;</td></tr>' +
						'<tr><td class="nlb">-Add "Xtra Add-On_Base Choice" to give equivalent of Xtra programming.</td></tr>' +
						'<tr><td class="nlb">&nbsp;</td></tr>' +
						'<tr><td class="nlb">-Add "Ultimate Add-On_Base Choice" to give equivalent of Ultimate programming.</td></tr>' +
						'<tr><td class="nlb">&nbsp;</td></tr>' +
						'<tr><td class="nlb">-Add "Premier Add-On_Base Choice" to give equivalent of Premier programming.</td></tr>' +
						'<tr><td class="nlb">&nbsp;</td></tr>' +
						'<tr><td class="nlb">-Tip: Premier Add-On isn\'t available if the property already provides a Premium Service, such as HBO. So, give them the Premier equivalent by adding the "Ultimate Add-On" and the remainder of the Premium Services.</td></tr></table>'


//Premier Add-On TMW/JMW
arrayBaseSummary[31] =	'<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" bgcolor="#e0e1e1">&nbsp;<strong>Premier Add-On<br><br></strong></td></tr>' +
						'<tr><td class="nlb">-Choice Digital Bulk is provided by the property.</td></tr>' +
						'<tr><td class="nlb">&nbsp;</td></tr>' +
						'<tr><td class="nlb">-Add "Xtra Add-On_Base Choice" to give equivalent of Xtra programming.</td></tr>' +
						'<tr><td class="nlb">&nbsp;</td></tr>' +
						'<tr><td class="nlb">-Add "Ultimate Add-On_Base Choice" to give equivalent of Ultimate programming.</td></tr>' +
						'<tr><td class="nlb">&nbsp;</td></tr>' +
						'<tr><td class="nlb">-Add "Premier Add-On_Base Choice" to give equivalent of Premier programming.</td></tr>' +
						'<tr><td class="nlb">&nbsp;</td></tr>' +
						'<tr><td class="nlb">-Tip: Premier Add-On isn\'t available if the property already provides a Premium Service, such as HBO. So, give them the Premier equivalent by adding the "Ultimate Add-On" and the remainder of the Premium Services.</td></tr></table>'


//Select
arrayBaseSummary[32] =	outputSummary(1);

//Preferred Extra
arrayBaseSummary[33] =	outputSummary(4);



// Opcion Especial??
//arrayParaSummary[0] =	'NOT USED';

// Optimo Mas
arrayParaSummary[1] =	outputSummary(28);

// Opcion Extra Especial
//arrayParaSummary[2] =	'NOT USED';

// Mas Ultra??
//arrayParaSummary[3] =	'NOT USED';//outputSummary(17);

// Opcion Ultra Especial
//arrayParaSummary[4] =	'NOT USED';

// Lo Maximo
arrayParaSummary[5] =	outputSummary(20);

// Opcion Premier?
//arrayParaSummary[6] =	'NOT USED';



//arrayParaSummary[8] =	'NOT USED';

// Mas Ultra
arrayParaSummary[9] =	outputSummary(17);


arrayParaSummary[10] =	outputSummary(27);



//premium services----------------------------------
arrayPremSummary[0] =	'<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" bgcolor="#e0e1e1">&nbsp;<strong>HBO</strong></td></tr>' +
						'<tr><td class="nlb">-10 channels (9 available in HD) with a different mix of shows on each channel.</td></tr>' +
					 	'<tr><td class="nlb">-Hit original programs.</td></tr>' +
				 		'<tr><td class="nlb">-Hollywood hit movies with a new movie premiering every Saturday.</td></tr>' +
				 		'<tr><td class="nlb">-World championship boxing.</td></tr>' +
				 		'<tr><td class="nlb">-Big concerts and events.</td></tr>' +
				 		'<tr><td class="nlb">-Family programming on HBO Family.</td></tr></table>'

arrayPremSummary[1] =	'<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" bgcolor="#e0e1e1">&nbsp;<strong>SHOWTIME UNLIMITED</strong></td></tr>' +
					 	'<tr><td class="nlb">-13 commercial-free networks featuring original series, Hollywood hits and championship boxing.</td></tr>' +
					 	'<tr><td class="nlb">-Original series (The L Word).</td></tr>' +
					 	'<tr><td class="nlb">-Hollywood hot movies.</td></tr>' +
					 	'<tr><td class="nlb">-More boxing matches than any other premium network.</td></tr>' +
					 	'<tr><td class="nlb">-Showtime Championship Boxing with exclusive title fights across all weight classes.</td></tr></table>'						
						
arrayPremSummary[2] =	'<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" bgcolor="#e0e1e1">&nbsp;<strong>STARZ SUPER PACK</strong></td></tr>' +
						'<tr><td class="nlb">-The best movie value from DIRECTV.</td></tr>' +
					 	'<tr><td class="nlb">-15 distinct movie channels and over 900 movies each month.</td></tr>' +
					 	'<tr><td class="nlb">-Programming for 8- to 16-year-olds on WAM.</td></tr>' +
					 	'<tr><td class="nlb">-Theme channels playing the best Westerns, Romance, Action movies and much more.</td></tr></table>'

arrayPremSummary[3] =	'<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" bgcolor="#e0e1e1">&nbsp;<strong>CINEMAX</strong></td></tr>' +
					 	'<tr><td class="nlb">-The best place for exclusive Hollywood premieres and the biggest variety of hit movies.</td></tr>' +
					 	'<tr><td class="nlb">-A new movie premieres every Saturday.</td></tr>' +						
					 	'<tr><td class="nlb">-Hard-to-find independent films and classics.</td></tr>' +
					 	'<tr><td class="nlb">-3 channels included.</td></tr>' +
					 	'<tr><td class="nlb">-A great complement to our HBO package.</td></tr></table>'
						
arrayPremSummary[4] =	'<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" bgcolor="#e0e1e1">&nbsp;<strong>SPORTS PACK</strong></td></tr>' +
					 	'<tr><td class="nlb">-Diverse sports coverage from the U.S. and around the world, including soccer, rugby, cycling, horse racing, surfing, volleyball and more.</td></tr>' +
					 	'<tr><td class="nlb">-Great college and amateur sports from around the country.</td></tr></table>'


//extras----------------------------------
arrayExtraSummary[0] =	'<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" bgcolor="#e0e1e1">&nbsp;<strong>ACCESS DIRECTV Magazine</strong></td></tr>' +
					 	'<tr><td class="nlb">-"Get ACCESS DIRECTV Magazine at a great price."</td></tr>' +
					 	'<tr><td class="nlb">-$2.99/month when ordered online at DIRECTV.com or by remote control on channel 111.</td></tr>' +
						'<tr><td class="nlb">-$3.99/month when ordered by IVR or CSR.</td></tr>' +
					 	'<tr><td class="nlb"><ul><li>Easy-to-use</li><li>24-hour grids with easy-to-find listings</li><li>Expert reviews and recommendations</li><li>Exclusive interviews, news, and stories from today\'s hottest celebrities</li></ul></td></tr></table>'

arrayExtraSummary[1] =	'<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" bgcolor="#e0e1e1">&nbsp;<strong>PROTECTION PLAN</strong></td></tr>' +
					 	'<tr><td class="nlb">-Provides complete technical support from DIRECTV</td></tr>' +
					 	'<tr><td class="nlb">-Gives customers a single contact for technical troubleshooting rather than being referred to manufacturers, dealers or installers for help.</td></tr>' +
					 	'<tr><td class="nlb">-One year commitment to plan required.</td></tr>' +
					 	'<tr><td class="nlb">-Customers are not charged until the 2nd month.</td></tr>' +
						'<tr><td class="nlb">-Cancellation fee applies.</td></tr></table>'
//ARS-HD Service		
arrayExtraSummary[2] =	'<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" bgcolor="#e0e1e1">&nbsp;<strong>ARS-HD Service</strong></td></tr>' +
					 	'<tr><td class="nlb">-Provides access to our superior HD technology.</td></tr>' +
					 	'<tr><td class="nlb">-Monthly: $10</td></tr>' +
					 	'<tr><td class="nlb">-access to all the HD programming available with your base package and other services.</td></tr></table>'
						
arrayExtraSummary[3] =	'<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" bgcolor="#e0e1e1">&nbsp;<strong>DIRECTV HD Extra Pack</strong></td></tr>' +
					 	'<tr><td class="nlb">-Requires HD equipment and service.</td></tr>' +
					 	'<tr><td class="nlb">-$4.99/month.</td></tr>' +
					 	'<tr><td class="nlb">-First 3 months free. (See HD Extra Pack page for details.)</td></tr>' +
					 	'<tr><td class="nlb">-Includes unique HD channels.</td></tr></table>'
						
//MRV		
arrayExtraSummary[4] =	'<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" bgcolor="#e0e1e1">&nbsp;<strong>Whole-Home DVR</strong></td></tr>' +
					 	'<tr><td class="nlb">-Provides access to our superior multi-room technology.</td></tr>' +
					 	'<tr><td class="nlb">-Monthly: $3</td></tr>' +
					 	'<tr><td class="nlb">-Allows shows recorded on a DIRECTV Plus HD DVR  in one room to be watched in another.</td></tr></table>'

//ARS
arrayExtraSummary[5] =	'<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" bgcolor="#e0e1e1">&nbsp;<strong>Advanced Receiver Service (ARS)</strong></td></tr>' +
					 	'<tr><td class="nlb">-Combines the DVR, HD, and Whole-Home services into one service.</td></tr>' +
					 	'<tr><td class="nlb">-Monthly: $20</td></tr>' +
					 	'<tr><td class="nlb">-Available only to accounts created on/after Feb 9, 2012.</td></tr></table>'

arrayExtraSummary[6] =	'<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" bgcolor="#e0e1e1">&nbsp;<strong>Protection Plan Premier</strong></td></tr>' +
					 	'<tr><td class="nlb">-Covers manufacturer defect and normal wear-and-tear.</td></tr>' +
					 	'<tr><td class="nlb">-$19.99/month.</td></tr>' +
					 	'<tr><td class="nlb">-Plan coverage and billing will begin in 1 month.(After the 30-day No Claim period.)</td></tr></table>';
					 	
						
//right sized suggestion ----------------------------------
arrayLyrSuggestion[1] =	'<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" bgcolor="#ff6600">&nbsp;<strong>SAVINGS ALERT!</strong></td></tr>' +
						'<tr><td class="nlb" bgcolor="#e0e1e1">-Premier has more for less money.</td></tr>' +
						'<tr><td class="nlb" bgcolor="#e0e1e1">-Add Premier instead of Xtra and 5 Premiums.</td></tr></table><br>'
			
arrayLyrSuggestion[2] =	'<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" bgcolor="#ff6600">&nbsp;<strong>SAVINGS ALERT!</strong></td></tr>' +
						'<tr><td class="nlb" bgcolor="#e0e1e1">-Premier has more for less money.</td></tr>' +
						'<tr><td class="nlb" bgcolor="#e0e1e1">-Add Premier instead of Plus and 5 Premiums.</td></tr></table><br>'

arrayLyrSuggestion[3] =	'<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" bgcolor="#ff6600">&nbsp;<strong>SAVINGS ALERT!</strong></td></tr>' +
						'<tr><td class="nlb" bgcolor="#e0e1e1">-Premier has more for less money.</td></tr>' +
						'<tr><td class="nlb" bgcolor="#e0e1e1">-Add Premier instead of Plus HD and 5 Premiums.</td></tr></table><br>'

arrayLyrSuggestion[4] =	'<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" bgcolor="#ff6600">&nbsp;<strong>SAVINGS ALERT!</strong></td></tr>' +
					 	'<tr><td class="nlb" bgcolor="#e0e1e1">-Plus includes DVR Service.  </td></tr>' +
						'<tr><td class="nlb" bgcolor="#e0e1e1">-Add Plus instead of Xtra.</td></tr></table><br>'

arrayLyrSuggestion[5] =	'<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" bgcolor="#ff6600">&nbsp;<strong>SAVINGS ALERT!</strong></td></tr>' +
					 	'<tr><td class="nlb" bgcolor="#e0e1e1">-Plus HD includes DVR Service and HD Access.</td></tr>' +
						'<tr><td class="nlb" bgcolor="#e0e1e1">-Add Plus HD instead of Xtra.</td></tr></table><br>'

arrayLyrSuggestion[6] =	'<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" bgcolor="#ff6600">&nbsp;</td></tr>' +
					 	'<tr><td class="nlb" bgcolor="#e0e1e1">-Plus HD includes DVR Service and HD Access.</td></tr>' +
						'<tr><td class="nlb" bgcolor="#e0e1e1">-Add Plus HD instead of Plus.</td></tr></table><br>'
						
						
arrayLyrSuggestion[8] =	'<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" bgcolor="#ff6600">&nbsp;<strong>SAVINGS ALERT!</strong></td></tr>' +
					 	'<tr><td class="nlb" bgcolor="#e0e1e1">-Lo M&aacute;ximo has more for less money.</td></tr>' +
						'<tr><td class="nlb" bgcolor="#e0e1e1">-Add Lo M&aacute;ximo instead of M&aacute;s Ultra Deportes and 5 Premiums.</td></tr></table><br>'


/*tax info---------------------------------
//Only states that charge tax on programming are listed.
function taxObj(varState,varTax) {
	this.state = varState;								//name of state
	this.tax = varTax;										//tax amount
}
counter = 0;
var myTaxObj = new Array();
myTaxObj[counter++] = new taxObj('Arkansas',.06);
myTaxObj[counter++] = new taxObj('Connecticut',.06);          //plus additional .0525 ***************
myTaxObj[counter++] = new taxObj('District of Columbia',.11);
myTaxObj[counter++] = new taxObj('Florida',.1317);
myTaxObj[counter++] = new taxObj('Hawaii',.0417);
myTaxObj[counter++] = new taxObj('Indiana',.06);
myTaxObj[counter++] = new taxObj('Iowa',.05);
myTaxObj[counter++] = new taxObj('Kansas',.053);
myTaxObj[counter++] = new taxObj('Kentucky',.03);
myTaxObj[counter++] = new taxObj('Maine',.05);
myTaxObj[counter++] = new taxObj('Minnesota',.065);
myTaxObj[counter++] = new taxObj('Mississippi',.07);
myTaxObj[counter++] = new taxObj('Nebraska',.055);
myTaxObj[counter++] = new taxObj('New Mexico',.05);
myTaxObj[counter++] = new taxObj('North Carolina',.07);
myTaxObj[counter++] = new taxObj('Ohio',.055);
myTaxObj[counter++] = new taxObj('Pennsylvania',.06);
myTaxObj[counter++] = new taxObj('Rhode Island',.07);
myTaxObj[counter++] = new taxObj('South Carolina',.05);
myTaxObj[counter++] = new taxObj('South Dakota',.04);
myTaxObj[counter++] = new taxObj('Tennessee',.0825);
myTaxObj[counter++] = new taxObj('Texas',.0625);
myTaxObj[counter++] = new taxObj('Utah',.0625);
myTaxObj[counter++] = new taxObj('Vermont',.06);
myTaxObj[counter++] = new taxObj('West Virginia',.06);
myTaxObj[counter++] = new taxObj('Wisconsin',.05);

*/
//MDU Selections Options----------------------------------

// Default no selections
arrayMDUInnerHTML[1] =	'<table cellspacing="0" cellpadding="0" border="0" width="100%">' +
						'	<tr>' +
						'		<td colspan="6"><img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Preferred Choice" name="Preferred Choice" border="0" style="display:none;"/></td>' +
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Total Choice" name="Total Choice for TCD/JCD" border="0" style="display:none;"/>' +
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Choice Tier" name="Choice Tier for TCD/JCD" border="0" style="display:none;"/>' +
						'		<a id="total_choice_plus_anchor"><img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxOver.gif" alt="Total Choice Plus" name="Total Choice Plus" border="0" style="display:none;"/></a><br />' +
						'		<a id="xtra_tier_anchor"><img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxOver.gif" alt="Xtra Tier" name="Xtra Tier" border="0" style="display:none;"/></a><br />' +
						'	</tr>' +
						'</table>' +
						'<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Xtra Add-On" name="Xtra Add-On" border="0" style="display:none;"/><br />' +
						'<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Xtra Tier" name="Xtra Add-On" border="0" style="display:none;"/><br />' +
                        '<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Premier Add-On" name="Premier Add-On" border="0" style="display:none;"/><br />' +
                        '<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Total Choice Plus TMU" name="Total Choice Plus TMU" border="0" style="display:none;"/><br />' +
						'<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Xtra Add-On FDB" name="Xtra Add-On FDB" border="0" style="display:none;"/><br />' +
                        '<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Choice Add-On FDB" name="Choice Add-On FDB" border="0" style="display:none;"/><br />' +
                        '<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Premier Add-On FDB" name="Premier Add-On FDB" border="0" style="display:none;"/><br />' +
						'<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Premier Add-On CDB" name="Premier Add-On CDB" border="0" style="display:none;"/><br />' +
						'<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Family Digital Bulk" name="Family Digital Bulk" border="0" style="display:none;"/><br />'
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Ultimate Add-On CDB" name="Ultimate Add-On CDB" style="display:none;"/><br />'+
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Ultimate Add-On FDB" name="Ultimate Add-On FDB" style="display:none;"/><br />'+
						'<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Student Choice Add-On" name="Student Choice Add-On" style="display:none;"/><br />'+
                               '<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Student Xtra Add-On" name="Student Xtra Add-On" style="display:none;"/>'+
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Premier Add-On CDB" name="Premier Add-On CDB" style="display:none;"/><br />';
						
						
//MDU / JDU
arrayMDUInnerHTML[2] =	'<table width="100%" cellspacing="0" cellpadding="2" border="0">' +
						'<tr>' +
						'				<td><a href="javascript:img_click_Base(\'Family\',1);" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[1]; img_on_Base(\'Family\',1); return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary; img_off_Base(\'Family\',1);"><img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Family" name="Family" border="0" /></a></td>' +
						'				<td class="innerboxHeadBig"><a class="step3" style="margin-left:5px;margin-right:50px;" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/family.html\');" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[1]; importXML(); return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary;">Family</a></td>' +
						'				<td><a href="javascript:img_click_Base(\'Xtra Add-On FDB\',32);" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[32]; img_on_Base(\'Xtra Add-On FDB\',22); return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary; img_off_Base(\'Xtra Add-On FDB\',22);"><img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Select" name="Select" border="0" /></a></td>' +
						'				<td class="innerboxHeadBig"><a class="step3" style="margin-left:5px;margin-right:40px;" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/select.html\');" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[32]; importXML(); return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary;">Select</a></td>' +
						'				<td><a href="javascript:img_click_Base(\'Preferred Choice\',11);" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[7]; img_on_Base(\'Preferred Choice\',11); return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary; img_off_Base(\'Preferred Choice\',11);"><img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Preferred Choice" name="Preferred Choice" border="0" /></a></td>' +
						'				<td class="innerboxHeadBig"><a class="step3" style="margin-left:5px;margin-right:40px;" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/preferred_choice.html\');" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[7]; importXML(); return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary;">Preferred Choice</a></td>' +
						'				<td><a href="javascript:img_click_Base(\'Choice\',2);" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[2]; img_on_Base(\'Choice\',2); return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary; img_off_Base(\'Choice\',2);" ><img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" border="0" alt="Choice" name="Choice"/></a></td>' +
						'				<td class="innerboxHeadBig"><a class="step3" style="margin-left:5px;margin-right:50px;" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/choice.html\');" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[2]; importXML(); return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary;" >Choice</a></td>' +
						'			</tr>' +
						'<tr>' +
						'	<td><a href="javascript:img_click_Base(\'Xtra\',3);" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[3]; img_on_Base(\'Xtra\',3); return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary; img_off_Base(\'Xtra\',3);"><img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" border="0" alt="Xtra" name="Xtra" /></a></td>' +
						'	<td class="innerboxHeadBig"><a class="step3" style="margin-left:5px;" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/choice_xtra.html\');"  onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[3]; importXML(); return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary;">Xtra</a></td>' +
						'	<td><a href="javascript:img_click_Base(\'Ultimate\',4);" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[4]; img_on_Base(\'Ultimate\',4); return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary; img_off_Base(\'Ultimate\',4);"><img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" border="0" alt="Ultimate" name="Ultimate" /></a></td>' +
						'	<td class="innerboxHeadBig"><a class="step3" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/choice_ultimate.html\');" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[4]; importXML(); return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary;" >Ultimate</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>' +
						'	<td><a href="javascript:img_click_Base(\'Premier\',6);" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[6]; img_on_Base(\'Premier\',6); return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary; img_off_Base(\'Premier\',6);"><img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Premier" name="Premier"  border="0" /></a></td>' +
						'	<td class="innerboxHeadBig" width="40%"><a class="step3" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/premier.html\');" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[6]; importXML(); return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary;" >Premier</a></td>' +
						'	<td><a href="javascript:img_click_Base(\'Entertainment\',28);" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[5]; img_on_Base(\'Entertainment\',28); return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary; img_off_Base(\'Entertainment\',28);"><img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Entertainment" name="Entertainment"  border="0" /></a></td>' +
						'	<td class="innerboxHeadBig" width="40%"><a class="step3" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/entertainment_2.html\');" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[5]; importXML(); return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary;" >Entertainment</a></td>' +

						'</tr>' +                                           
                                                '<tr>' +
                                                  '<td><a href="javascript:img_click_Base(\'Preferred Extra\',33);" onmouseout="SUMMARY.innerHTML = varDefaultSummary; img_off_Base(\'Preferred Extra\',33);"onmouseover="SUMMARY.innerHTML = arrayBaseSummary[33]; img_on_Base(\'Preferred Extra\',33);return true;"><img alt="Preferred Xtra" border="0" id="Preferred_extra" name="Preferred Extra" src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif"></a></td><td width="25%" class="innerboxHeadBig"><a class="step3" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/preferred_xtra.html\');" onmouseout="SUMMARY.innerHTML = varDefaultSummary;" onmouseover="SUMMARY.innerHTML = arrayBaseSummary[33]; importXML(); return true;">Preferred Xtra</a></td>' +
						  '<td colspan="7" height="12px"></td>' +
						'</tr>' +
                                                 '<tr>' +
						'	<td colspan="8" height="12px"></td>' +
						'</tr>' +
						'<tr>' +
						'	<td class="innerboxText" colspan="8">To add Preferred Choice in Rio: Add/Change Programming > "International" tab.' +
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Total Choice" name="Total Choice for TCD/JCD" border="0" style="display:none;"/>' +
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Choice Tier" name="Choice Tier for TCD/JCD" border="0" style="display:none;"/>' +
						'		<a id="total_choice_plus_anchor"><img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxOver.gif" alt="Total Choice Plus" name="Total Choice Plus" border="0" style="display:none;"/></a><br />' +
						'		<a id="xtra_tier_anchor"><img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxOver.gif" alt="Xtra Tier" name="Xtra Tier" border="0" style="display:none;"/></a><br />' +
						'	</td>' +
						'</tr>' +
						'</table>'+
						'<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Xtra Add-On" name="Xtra Add-On" border="0" style="display:none;"/><br />' +
						'<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Xtra Add-On" name="Xtra Add-On EDB" border="0" style="display:none;"/><br />' +
                        '<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Premier Add-On" name="Premier Add-On" border="0" style="display:none;"/><br />' +
                        '<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Total Choice Plus TMU" name="Total Choice Plus TMU" border="0" style="display:none;"/><br />' +
						'<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Ultimate Add-On" name="Ultimate Add-On" border="0" style="display:none;"/><br />' +
						'<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Xtra Add-On FDB" name="Xtra Add-On FDB" border="0" style="display:none;"/><br />' +
                        '<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Choice Add-On FDB" name="Choice Add-On FDB" border="0" style="display:none;"/><br />' +
                        '<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Premier Add-On FDB" name="Premier Add-On FDB" border="0" style="display:none;"/><br />' +
						'<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Xtra Digital Bulk" name="Xtra Digital Bulk" border="0" style="display:none;"/><br />' +
						 '<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Family Digital Bulk" name="Family Digital Bulk" border="0" style="display:none;"/><br />' +
						 '<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Basico" name="Basico" border="0" style="display:none;"/><br />' +
						'<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Optimo Mas" name="Optimo Mas" border="0" style="display:none;"/><br />' +
						'<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Ultimate Add-On EDB" name="Ultimate Add-On EDB" border="0" style="display:none;"/><br />' +
                        '<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Familiar Ultra" name="Familiar Ultra" border="0" style="display:none;"/><br />' +
                        '<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Lo Maximo" name="Lo Maximo" border="0" style="display:none;"/><br />' +
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Ultimate Add-On CDB" name="Ultimate Add-On CDB" style="display:none;"/><br />'+
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Ultimate Add-On FDB" name="Ultimate Add-On FDB" style="display:none;"/><br />'+
						'<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Student Choice Add-On" name="Student Choice Add-On" style="display:none;"/><br />'+
						'<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Premier Add-On EDB" name="Premier Add-On EDB" style="display:none;"/><br />'+
                               '<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Choice Add-On" name="Choice Add-On EDB" style="display:none;"/>'+
							   '<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Entertainment Add-On" name="Entertainment Add-On" style="display:none;"/>'+
							    '<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Student Choice Xtra Classic Add-On" name="Student Choice Xtra Classic Add-On" style="display:none;"/>'+
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Premier Add-On CDB" name="Premier Add-On CDB" style="display:none;"/><br />';
					
					
					
					
//TCD / JCD
arrayMDUInnerHTML[3] =	'<table cellspacing=2 width="680" style="position:relative; top:-2px;" cellpadding=0>' +
						'<tr>' +
						'	<td width="33%" class="innerboxHeadBig4" valign=top><strong>If TC Limited &amp;<br> TC_MDU Tier are on account:</strong>' +
						'	<br>' +
						'	<a href="javascript:img_click_Base(\'Total Choice for TCD/JCD\',12);" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[8]; img_on_Base(\'Total Choice for TCD/JCD\',12); return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary; img_off_Base(\'Total Choice for TCD/JCD\',12);"><img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" border="0" alt="Total Choice" name="Total Choice for TCD/JCD"></a>' +
						'	<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/total_choice_mdu_tier.html\');" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[8]; return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary;" >TC Limited & Total Choice MDU Tier</a>' +
						'	<br>' +
						'	<a id="total_choice_plus_anchor"><img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxOver.gif" border="0" alt="Total Choice Plus" name="Total Choice Plus"></a>' +
						'	<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/total_choice_plus_mdu_tier.html\');" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[10]; return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary;" >Total Choice Plus MDU Tier</a>' +
						'	</td>' +					
						'	<td width="34%" class="innerboxHeadBig4" valign=top bgcolor=#e0e1e1><strong>If TC Limited &amp;<br> Choice_MDU Tier are on account:</strong>' +
						'	<br>' +
						'	<a href="javascript:img_click_Base(\'Choice Tier for TCD/JCD\',13);" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[9]; img_on_Base(\'Choice Tier for TCD/JCD\',13); return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary; img_off_Base(\'Choice Tier for TCD/JCD\',13);"><img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" border="0" alt="Choice Tier" name="Choice Tier for TCD/JCD"></a>' +
						'	<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/choice_mdu_tier.html\');" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[9] ; return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary; img_off_Base(\'Choice Tier for TCD/JCD\',13);" >TC Limited & Choice MDU Tier</a>' +
						'	<br>' +
						'	<a id="xtra_tier_anchor"><img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxOver.gif" border="0" alt="Choice Xtra Classic MDU Tier" name="Choice Xtra Classic MDU Tier"></a>' +
						'	<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/choice_xtra_mdu_tier.html\');" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[11]; return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary;" >Choice Xtra Classic MDU Tier</a>' +
						'	</td>' +
						'	<td width="33%" class="innerboxHeadBig4" valign=top><strong>If Student Preferred Bulk is on account:</strong>' +
						'	<br>' +

						'	<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenDotOver.gif" border="0" alt="Student Preferred Bulk" name="total_choice_placeholder">' +
						'	 ' +
						'	<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/student_preferred_bulk.html\');" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[25]; return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary;" >Student Preferred Bulk</a>' +						
						' <br>'+
						'<a href="javascript:img_click_Base(\'Student Choice Add-On\',29);" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[26]; img_on_Base(\'Student Choice Add-On\',29); return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary; img_off_Base(\'Student Choice Add-On\',29);"><img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" border="0" alt="Student Choice Add-On" name="Student Choice Add-On"></a>' +
						'	 ' +
						'	<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/student_choice_add_on.html\');" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[26]; return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary;">Student Choice Add-On</a>' +
						' <br>'+
						'<a href="javascript:img_click_Base(\'Student Choice Xtra Classic Add-On\',30);" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[27]; img_on_Base(\'Student Choice Xtra Classic Add-On\',30); return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary; img_off_Base(\'Student Choice Xtra Classic Add-On\',30);"><img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" border="0" alt="Student Choice Xtra Classic Add-On" name="Student Choice Xtra Classic Add-On"></a>' +
						'	 ' +
						'	<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/student_choice_xtra_add_on.html\');" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[27]; return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary;" >Student Choice Xtra Classic Add-On</a><br>' +						
						'</td>' +
								
												
						'</tr>' +
						'<tr>' +
						'<td class="innerboxText" colspan="3" style="display:none;">' +
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Preferred Choice" name="Preferred Choice" border="0" style="display:none;"/><br>' +
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Family" name="Family" border="0" style="display:none;" /><br>' +
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Entertainment" name="Entertainment" border="0" style="display:none;" /><br>' +
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" border="0" alt="Choice" name="Choice" style="display:none;"/><br>' +
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" border="0" alt="Xtra" name="Xtra" style="display:none;" /><br>' +
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" border="0" alt="Ultimate" name="Ultimate"  style="display:none;"/><br>' +
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Premier" name="Premier" style="display:none;" /><br>' +
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Xtra Add-On" name="Xtra Add-On EDB" style="display:none;"/><br />'+
                        '		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Total Choice Plus TMU" name="Total Choice Plus TMU" style="display:none;"/><br />' +
						'<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Xtra Add-On" name="Xtra Add-On" style="display:none;"/><br />' +
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Xtra Add-On FDB" name="Xtra Add-On FDB" style="display:none;"/><br />' +
                        '		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Choice Add-On FDB" name="Choice Add-On FDB"  style="display:none;"/><br />' +
                        '		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Premier Add-On FDB" name="Premier Add-On FDB" style="display:none;"/><br />' +					
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Basico" name="Basico" style="display:none;"/><br />' +
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Optimo Mas" name="Optimo Mas" style="display:none;"/><br />' +
                        '		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Familiar Ultra" name="Familiar Ultra"  style="display:none;"/><br />' +
                        '		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Lo Maximo" name="Lo Maximo" style="display:none;"/><br />' +
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Ultimate Add-On CDB" name="Ultimate Add-On CDB" style="display:none;"/><br />'+
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Ultimate Add-On FDB" name="Ultimate Add-On FDB" style="display:none;"/><br />'+
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Ultimate Add-On EDB" name="Ultimate Add-On EDB" style="display:none;"/><br />'+
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Premier Add-On CDB" name="Premier Add-On CDB" style="display:none;"/><br />'+
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Premier Add-On EDB" name="Premier Add-On EDB" style="display:none;"/><br />'+
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Xtra Digital Bulk" name="Xtra Digital Bulk" style="display:none;"/><br />'+
					'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Entertainment Add-On" name="Entertainment Add-On" style="display:none;"/><br />'+
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Choice Add-On EDB" name="Choice Add-On EDB" style="display:none;"/><br />' +	
						'	</td>' +
						'</tr>' +
						'</table>'
						
//TMW / JMW
arrayMDUInnerHTML[4] =	'<table width="680" cellpadding=0 cellspacing=2 style="position:relative; top:0px;">' +
						'<tr>' +
												'<td nowrap><strong>If Choice Digital Bulk is on account:</strong></td>' +
						'<td nowrap bgcolor=#e0e1e1><strong>If Entertainment Digital Bulk is on account:</strong></td>' +
						'<td nowrap><strong>If Family Digital Bulk is on account:</strong></td>' +
						'</tr>' +
						'<tr>' +
											
						'	<td class="innerboxHeadBig4" valign=top><img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenDotOver.gif" border="0" alt="Choice Digital Bulk" name="total_choice_placeholder">' +
						'	 ' +
						'	<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/choice_digital_bulk.html\');" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[18] ; return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary;" >Choice Digital Bulk</a>' +
						' <br>'+
						'<a href="javascript:img_click_Base(\'Xtra Add-On\',14);" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[29]; img_on_Base(\'Xtra Add-On\',14); return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary; img_off_Base(\'Xtra Add-On\',14);"><img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" border="0" alt="Xtra Add-On" name="Xtra Add-On"></a>' +
						'	 ' +
						'	<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/choice_xtra_add_on_new.html\');" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[29]; return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary;" >Xtra Add-On</a>' +						
						' <br>'+
						'<a href="javascript:img_click_Base(\'Ultimate Add-On CDB\',25);" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[30]; img_on_Base(\'Ultimate Add-On CDB\',25); return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary; img_off_Base(\'Ultimate Add-On CDB\',25);"><img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" border="0" alt="Ultimate Add-On" name="Ultimate Add-On CDB"></a>' +
						'	 ' +
						'	<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/choice_ultimate_addon.html\');" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[30]; return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary;">Ultimate Add-On</a>' +
						' <br>'+
						'<a href="javascript:img_click_Base(\'Premier Add-On CDB\',27);" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[31]; img_on_Base(\'Premier Add-On CDB\',27); return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary; img_off_Base(\'Premier Add-On CDB\',27);"><img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" border="0" alt="Premier Add-On" name="Premier Add-On CDB"></a>' +
						'	 ' +
						'	<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/premier_add_on.html\');" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[31]; return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary;">Premier Add-On</a></td>' +
						
						
						'	<td bgcolor=#e0e1e1 class="innerboxHeadBig4" valign=top><img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenDotOver.gif" border="0" alt="Entertainment Digital Bulk" name="total_choice_placeholder">' +
						'	 ' +
						'	<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/entertainment_digital_bulk.html\');" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[28] ; return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary;" >Entertainment Digital Bulk</a>' +
						' <br>'+
						'<a href="javascript:img_click_Base(\'Choice Add-On EDB\',20);" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[28]; img_on_Base(\'Choice Add-On EDB\',20); return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary; img_off_Base(\'Choice Add-On EDB\',20);"><img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" border="0" alt="Choice Add-On EDB" name="Choice Add-On EDB"></a>' +
						'	 ' +
						'	<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/choice_add_on.html\')" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[28]; return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary;" >Choice Add-On</a>' +	
						' <br>'+
						'<a href="javascript:img_click_Base(\'Xtra Add-On EDB\',9);" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[28]; img_on_Base(\'Xtra Add-On EDB\',9); return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary; img_off_Base(\'Xtra Add-On EDB\',9);"><img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" border="0" alt="Xtra Add-On EDB" name="Xtra Add-On EDB"></a>' +
						'	 ' +
						'	<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/choice_xtra_add_on_new.html\');" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[28]; return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary;" >Xtra Add-On</a>' +						
						' <br>'+
						'<a href="javascript:img_click_Base(\'Ultimate Add-On EDB\',17);" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[28]; img_on_Base(\'Ultimate Add-On EDB\',17); return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary; img_off_Base(\'Ultimate Add-On EDB\',17);"><img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" border="0" alt="Ultimate Add-On" name="Ultimate Add-On EDB"></a>' +
						'	 ' +
						'	<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/choice_ultimate_addon.html\');" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[28]; return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary;">Ultimate Add-On</a>' +
						' <br>'+
						'<a href="javascript:img_click_Base(\'Premier Add-On EDB\',15);" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[28]; img_on_Base(\'Premier Add-On EDB\',15); return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary; img_off_Base(\'Premier Add-On EDB\',15);"><img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" border="0" alt="Premier Add-On" name="Premier Add-On EDB"></a>' +

						'	 ' +
						'	<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/premier_add_on.html\');" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[28]; return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary;">Premier Add-On</a></td>' +
						
						
						
						'<td class="innerboxHeadBig4" valign=top><img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenDotOver.gif" border="0" alt="Family Digital Bulk" name="total_choice_placeholder">' +
						'	 ' +
						'	<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/family_digi_bulk.html\');" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[19]; return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary;">Family Digital Bulk</a>' +						
						' <br>'+
						'<a href="javascript:img_click_Base(\'Entertainment Add-On\',31);" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[19]; img_on_Base(\'Entertainment Add-On\',31); return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary; img_off_Base(\'Entertainment Add-On\',31);"><img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" border="0" alt="Entertainment Add-On" name="Entertainment Add-On"></a>' +
						'	 ' +
						'	<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/entertainment_add_on.html\');" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[19]; return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary;" >Entertainment Add-On</a>' +						
						' <br>'+
						'<a href="javascript:img_click_Base(\'Choice Add-On FDB\',21);" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[19]; img_on_Base(\'Choice Add-On FDB\',21); return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary; img_off_Base(\'Choice Add-On FDB\',21);"><img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" border="0" alt="Choice Add-On" name="Choice Add-On FDB"></a>' +
						'	 ' +
						'	<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/choice_add_on.html\');" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[19]; return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary;">Choice Add-On</a>' +
						' <br>'+
						'<a href="javascript:img_click_Base(\'Xtra Add-On FDB\',22);" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[19]; img_on_Base(\'Xtra Add-On FDB\',22); return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary; img_off_Base(\'Xtra Add-On FDB\',22);"><img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" border="0" alt="Xtra Add-On" name="Xtra Add-On FDB"></a>' +
						'	 ' +
						'	<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/choice_xtra_add_on_new.html\');" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[19]; return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary;" >Xtra Add-On</a>' +						
						' <br>'+
						'<a href="javascript:img_click_Base(\'Ultimate Add-On FDB\',26);" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[19]; img_on_Base(\'Ultimate Add-On FDB\',26); return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary; img_off_Base(\'Ultimate Add-On FDB\',26);"><img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" border="0" alt="Ultimate Add-On" name="Ultimate Add-On FDB"></a>' +
						'	 ' +
						'	<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/choice_ultimate_addon.html\');" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[19]; return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary;">Ultimate Add-On</a>' +
						' <br>'+
						'<a href="javascript:img_click_Base(\'Premier Add-On FDB\',23);" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[19]; img_on_Base(\'Premier Add-On FDB\',23); return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary; img_off_Base(\'Premier Add-On FDB\',23);"><img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" border="0" alt="Premier Add-On" name="Premier Add-On FDB"></a>' +
						'	 ' +
						'	<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/premier_add_on.html\');" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[19]; return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary;">Premier Add-On</a></td>' +
						
						'</tr>' +
						'<tr>' +
						'<td colspan="3" height="15px">Note: Some properties may also provide <a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/en_espanol_bulk.html\');">En Espanol Bulk</a> at $0.<br>See <a class="step4" href="http://agentanswercenterstg.directv.com/en-us/res/programming/choice_xtra_digi_bulk.html" target="_blank">Choice Xtra Classic Digital Bulk</a> and <a class="step4" href="http://agentanswercenterstg.directv.com/en-us/res/programming/choice_xtra_add_on.html" target="_blank">Choice Xtra Classic Add-On</a>.</td>'+
						'</tr>' +
						'<tr>' +
						'	<td class="innerboxText" colspan="4" style="display:none;">' +
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" border="0" alt="Family" name="Family" style="display:none;"><br>' +
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Entertainment" name="Entertainment" border="0" style="display:none;" /><br>' +
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" border="0" alt="Choice" name="Choice" style="display:none;"></br>' +
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" border="0" alt="Xtra" name="Xtra" style="display:none;"><br>' +
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" border="0" alt="Ultimate" name="Ultimate" style="display:none;"><br>' +
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Total Choice Plus TMU" name="Total Choice Plus TMU" border="0" style="display:none;" /><br>' +
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxOver.gif" border="0" alt="Xtra Digital Bulk" name="Xtra Digital Bulk" style="display:none;"><br>' +
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Premier" name="Premier" border="0" style="display:none;" /><br>' +
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" border="0" alt="Mas Latino" name="Mas Latino" style="display:none;"/><br>' +
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" border="0" alt="Optimo Mas" name="Optimo Mas" style="display:none;" /><br>' +
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" border="0" alt="Lo Maximo" name="Lo Maximo" style="display:none;" /><br>' +
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Preferred Choice" name="Preferred Choice" style="display:none;" /><br>' +
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Total Choice for TCD/JCD" name="Total Choice for TCD/JCD" style="display:none;"><br />'+
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Choice Tier for TCD/JCD" name="Choice Tier for TCD/JCD" style="display:none;"/><br />' +
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" border="0" alt="Total Choice Plus" name="Total Choice Plus"  style="display:none;"/><br>' +
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Student Choice Xtra Classic Add-On" name="Student Choice Xtra Classic Add-On" border="0" style="display:none;"/><br />' +
						'<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Student Choice Add-On" name="Student Choice Add-On" style="display:none;"/><br />'+
                               '<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Student Xtra Add-On" name="Student Xtra Add-On" style="display:none;"/>'+
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Mas Ultra" name="Mas Ultra" style="display:none;"/><br />'+
						'	</td>' +
						'</tr>' +
						'</table>'
						

arrayMDUInnerHTML[5] =	'<table width="100px" cellspacing=0 cellpadding=0>' +
						'<tr><td colspan="3" nowrap bgcolor=#e0e1e1><strong>If Total Choice Bulk is on account:</strong></td>'+
							'<td colspan="3">&nbsp;</td></tr>'+
						'<tr>' +
						'	<td width="9%" bgcolor=#e0e1e1><img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenDotOver.gif" border="0" alt="Total Choice Bulk" name="total_choice_placeholder"></td>' +
						'	<td colspan=2 bgcolor=#e0e1e1 valign=left><a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/total_choice_bulk.html\');" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[14]; return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary;" >Total Choice Bulk</a></td>' +
						'	<td width="6%" class="innerboxHeadBig">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>' +
						'	<td width="6%" class="innerboxHeadBig">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>' +
						'	<td width="1%" class="innerboxHeadBig">&nbsp;</td>' +
						'</tr>' +
						'<tr>' +
						'	<td bgcolor=#e0e1e1><a href="javascript:img_click_Base(\'Total Choice Plus TMU\',16);" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[16]; img_on_Base(\'Total Choice Plus TMU\',16); return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary; img_off_Base(\'Total Choice Plus TMU\',16);"><img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" border="0" alt="Total Choice Plus MDU Tier" name="Total Choice Plus TMU"></a></td>' +
						'	<td colspan=2 bgcolor=#e0e1e1 valign=left><a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/total_choice_plus_mdu_tier.html\');" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[15]; return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary;" >Total Choice Plus_MDU Tier</a></td>' +
						'	<td class="innerboxHeadBig">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>' +
						'	<td class="innerboxHeadBig">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>' +
						'	<td class="innerboxHeadBig">&nbsp;</td>' +
						'</tr>' +
						'<tr>' +
						'	<td colspan="6" height="0px"></td>' +
						'</tr>' +
						'<tr>' +
						'	<td class="innerboxText" colspan="6">To add service in Rio: Add/Change Programming > "Other" tab.' +
						'	</td>' +
						'	<td width="19%" colspan="6" class="innerboxText" style="display:none;">To add service in Rio: Add/Change Programming > "Other" tab.</td>' +
						'</tr>' +
						'<tr>' +
						'	<td class="innerboxText" colspan="4" style="display:none;">' +
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" border="0" alt="Family" name="Family" style="display:none;"><br>' +
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Entertainment" name="Entertainment" border="0" style="display:none;" /><br>' +
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" border="0" alt="Choice" name="Choice" style="display:none;"></br>' +
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxOver.gif" border="0" alt="Xtra" name="Xtra" style="display:none;"><br>' +
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" border="0" alt="Ultimate" name="Ultimate" style="display:none;"><br>'+
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Premier" name="Premier" border="0" style="display:none;" /><br>' +
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" border="0" alt="Basico" name="Basico" style="display:none;"/><br>' +
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" border="0" alt="Optimo Mas" name="Optimo Mas" style="display:none;" /><br>' +
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" border="0" alt="Familiar Ultra" name="Familiar Ultra"  style="display:none;"/><br>' +
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" border="0" alt="Lo Maximo" name="Lo Maximo" style="display:none;" /><br>' +
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Preferred Choice" name="Preferred Choice" style="display:none;" /><br>' +
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Total Choice for TCD/JCD" name="Total Choice for TCD/JCD" style="display:none;"><br />'+
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Choice Tier for TCD/JCD" name="Choice Tier for TCD/JCD" style="display:none;"/><br />' +
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Ultimate Add-On CDB" name="Ultimate Add-On CDB" style="display:none;"/><br />'+
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Ultimate Add-On FDB" name="Ultimate Add-On FDB" style="display:none;"/><br />'+
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Premier Add-On CDB" name="Premier Add-On CDB" style="display:none;"/><br />'+		
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Premier Add-On EDB" name="Premier Add-On EDB" style="display:none;"/><br />'+		
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" border="0" alt="Ultimate Add-On" name="Ultimate Add-On" style="display:none;"><br>'+
						'<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Premier Add-On FDB" name="Premier Add-On FDB" style="display:none;"/><br />'+
						'<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Choice Add-On FDB" name="Choice Add-On FDB" style="display:none;"/><br />'+
						'<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Xtra Add-On FDB" name="Xtra Add-On FDB" style="display:none;"/><br />'+
						'<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Xtra Add-On" name="Xtra Add-On" style="display:none;"/><br />'+
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Total Choice Plus" name="Total Choice Plus" style="display:none;"/><br />'+					
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Xtra Tier" name="Xtra Tier" border="0" style="display:none;"/><br />' +
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Choice Add-On EDB" name="Choice Add-On EDB" style="display:none;"/><br />'+
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Xtra Digital Bulk" name="Xtra Digital Bulk" style="display:none;"/><br />'+
						'<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Student Choice Add-On" name="Student Choice Add-On" style="display:none;"/><br />'+
                               '<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Student Xtra Add-On" name="Student Xtra Add-On" style="display:none;"/>'+
							   '<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Entertainment Add-On" name="Entertainment Add-On" style="display:none;"/>'+
						'	</td>' +
						'</tr>' +
						'</table>'

//TMU / JMU
arrayMDUInnerHTML[6] =	'<table width="680" cellpadding=0 cellspacing=2 style="position:relative; top:0px;">' +
						'<tr>' +
												'<td nowrap><strong>If Choice Digital Bulk is on account:</strong></td>' +
						'<td nowrap bgcolor=#e0e1e1><strong>If Entertainment Digital Bulk is on account:</strong></td>' +
						'<td nowrap><strong>If Family Digital Bulk is on account:</strong></td>' +
						'</tr>' +
						'<tr>' +
											
						'	<td class="innerboxHeadBig4" valign=top><img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenDotOver.gif" border="0" alt="Choice Digital Bulk" name="total_choice_placeholder">' +
						'	 ' +
						'	<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/choice_digital_bulk.html\');" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[18] ; return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary;" >Choice Digital Bulk</a>' +
						' <br>'+
						'<a href="javascript:img_click_Base(\'Xtra Add-On\',14);" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[29]; img_on_Base(\'Xtra Add-On\',14); return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary; img_off_Base(\'Xtra Add-On\',14);"><img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" border="0" alt="Xtra Add-On" name="Xtra Add-On"></a>' +
						'	 ' +
						'	<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/choice_xtra_add_on_new.html\');" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[29]; return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary;" >Xtra Add-On</a>' +						
						' <br>'+
						'<a href="javascript:img_click_Base(\'Ultimate Add-On CDB\',25);" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[30]; img_on_Base(\'Ultimate Add-On CDB\',25); return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary; img_off_Base(\'Ultimate Add-On CDB\',25);"><img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" border="0" alt="Ultimate Add-On" name="Ultimate Add-On CDB"></a>' +
						'	 ' +
						'	<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/choice_ultimate_addon.html\');" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[30]; return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary;">Ultimate Add-On</a>' +
						' <br>'+
						'<a href="javascript:img_click_Base(\'Premier Add-On CDB\',27);" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[31]; img_on_Base(\'Premier Add-On CDB\',27); return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary; img_off_Base(\'Premier Add-On CDB\',27);"><img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" border="0" alt="Premier Add-On" name="Premier Add-On CDB"></a>' +
						'	 ' +
						'	<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/premier_add_on.html\');" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[31]; return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary;">Premier Add-On</a></td>' +
						
						
						'	<td bgcolor=#e0e1e1 class="innerboxHeadBig4" valign=top><img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenDotOver.gif" border="0" alt="Entertainment Digital Bulk" name="total_choice_placeholder">' +
						'	 ' +
						'	<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/entertainment_digital_bulk.html\');" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[28] ; return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary;" >Entertainment Digital Bulk</a>' +
						' <br>'+
						'<a href="javascript:img_click_Base(\'Choice Add-On EDB\',20);" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[28]; img_on_Base(\'Choice Add-On EDB\',20); return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary; img_off_Base(\'Choice Add-On EDB\',20);"><img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" border="0" alt="Choice Add-On EDB" name="Choice Add-On EDB"></a>' +
						'	 ' +
						'	<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/choice_add_on.html\')" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[28]; return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary;" >Choice Add-On</a>' +	
						' <br>'+

						'<a href="javascript:img_click_Base(\'Xtra Add-On EDB\',9);" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[28]; img_on_Base(\'Xtra Add-On EDB\',9); return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary; img_off_Base(\'Xtra Add-On EDB\',9);"><img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" border="0" alt="Xtra Add-On EDB" name="Xtra Add-On EDB"></a>' +
						'	 ' +
						'	<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/choice_xtra_add_on_new.html\');" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[28]; return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary;" >Xtra Add-On</a>' +						
						' <br>'+
						'<a href="javascript:img_click_Base(\'Ultimate Add-On EDB\',17);" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[28]; img_on_Base(\'Ultimate Add-On EDB\',17); return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary; img_off_Base(\'Ultimate Add-On EDB\',17);"><img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" border="0" alt="Ultimate Add-On" name="Ultimate Add-On EDB"></a>' +
						'	 ' +
						'	<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/choice_ultimate_addon.html\');" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[28]; return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary;">Ultimate Add-On</a>' +
						' <br>'+
						'<a href="javascript:img_click_Base(\'Premier Add-On EDB\',15);" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[28]; img_on_Base(\'Premier Add-On EDB\',15); return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary; img_off_Base(\'Premier Add-On EDB\',15);"><img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" border="0" alt="Premier Add-On" name="Premier Add-On EDB"></a>' +

						'	 ' +
						'	<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/premier_add_on.html\');" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[28]; return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary;">Premier Add-On</a></td>' +
						
						
						
						'<td class="innerboxHeadBig4" valign=top><img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenDotOver.gif" border="0" alt="Family Digital Bulk" name="total_choice_placeholder">' +
						'	 ' +
						'	<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/family_digi_bulk.html\');" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[19]; return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary;">Family Digital Bulk</a>' +						
						' <br>'+
						'<a href="javascript:img_click_Base(\'Entertainment Add-On\',31);" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[19]; img_on_Base(\'Entertainment Add-On\',31); return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary; img_off_Base(\'Entertainment Add-On\',31);"><img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" border="0" alt="Entertainment Add-On" name="Entertainment Add-On"></a>' +
						'	 ' +
						'	<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/entertainment_add_on.html\');" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[19]; return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary;" >Entertainment Add-On</a>' +						
						' <br>'+
						'<a href="javascript:img_click_Base(\'Choice Add-On FDB\',21);" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[19]; img_on_Base(\'Choice Add-On FDB\',21); return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary; img_off_Base(\'Choice Add-On FDB\',21);"><img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" border="0" alt="Choice Add-On" name="Choice Add-On FDB"></a>' +
						'	 ' +
						'	<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/choice_add_on.html\');" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[19]; return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary;">Choice Add-On</a>' +
						' <br>'+
						'<a href="javascript:img_click_Base(\'Xtra Add-On FDB\',22);" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[19]; img_on_Base(\'Xtra Add-On FDB\',22); return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary; img_off_Base(\'Xtra Add-On FDB\',22);"><img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" border="0" alt="Xtra Add-On" name="Xtra Add-On FDB"></a>' +
						'	 ' +
						'	<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/choice_xtra_add_on_new.html\');" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[19]; return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary;" >Xtra Add-On</a>' +						
						' <br>'+
						'<a href="javascript:img_click_Base(\'Ultimate Add-On FDB\',26);" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[19]; img_on_Base(\'Ultimate Add-On FDB\',26); return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary; img_off_Base(\'Ultimate Add-On FDB\',26);"><img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" border="0" alt="Ultimate Add-On" name="Ultimate Add-On FDB"></a>' +
						'	 ' +
						'	<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/choice_ultimate_addon.html\');" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[19]; return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary;">Ultimate Add-On</a>' +
						' <br>'+
						'<a href="javascript:img_click_Base(\'Premier Add-On FDB\',23);" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[19]; img_on_Base(\'Premier Add-On FDB\',23); return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary; img_off_Base(\'Premier Add-On FDB\',23);"><img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" border="0" alt="Premier Add-On" name="Premier Add-On FDB"></a>' +
						'	 ' +
						'	<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/premier_add_on.html\');" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[19]; return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary;">Premier Add-On</a></td>' +
						
						'</tr>' +
						'<tr>' +
						'<td colspan="3" height="15px">Note: Some properties may also provide <a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/en_espanol_bulk.html\');">En Espanol Bulk</a> at $0.<br>See <a class="step4" href="http://agentanswercenterstg.directv.com/en-us/res/programming/choice_xtra_digi_bulk.html" target="_blank">Choice Xtra Classic Digital Bulk</a> and <a class="step4" href="http://agentanswercenterstg.directv.com/en-us/res/programming/choice_xtra_add_on.html" target="_blank">Choice Xtra Classic Add-On</a>.</td>'+
						'</tr>' +
						'<tr>' +
						'	<td class="innerboxText" colspan="3" style="display:none;">' +
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" border="0" alt="Family" name="Family" style="display:none;"><br>' +
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Entertainment" name="Entertainment" border="0" style="display:none;" /><br>' +
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" border="0" alt="Choice" name="Choice" style="display:none;"></br>' +
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxOver.gif" border="0" alt="Xtra" name="Xtra" style="display:none;"><br>' +
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxOver.gif" border="0" alt="Ultimate" name="Ultimate" style="display:none;"><br>' +
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxOver.gif" border="0" alt="Xtra Digital Bulk" name="Xtra Digital Bulk" style="display:none;"><br>' +
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Premier" name="Premier" border="0" style="display:none;" /><br>' +
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" border="0" alt="Mas Latino" name="Mas Latino" style="display:none;"/><br>' +
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" border="0" alt="Optimo Mas" name="Optimo Mas" style="display:none;" /><br>' +
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" border="0" alt="Lo Maximo" name="Lo Maximo" style="display:none;" /><br>' +
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Preferred Choice" name="Preferred Choice" style="display:none;" /><br>' +
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Total Choice for TCD/JCD" name="Total Choice for TCD/JCD" style="display:none;"><br />'+
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Choice Tier for TCD/JCD" name="Choice Tier for TCD/JCD" style="display:none;"/><br />' +				
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" border="0" alt="Total Choice Plus" name="Total Choice Plus"  style="display:none;"/><br>' +
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Student Choice Xtra Classic Add-On" name="Student Choice Xtra Classic Add-On" border="0" style="display:none;"/><br />' +
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Total Choice Plus TMU" name="Total Choice Plus TMU" style="display:none;"/><br />'+
						'<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Student Choice Add-On" name="Student Choice Add-On" style="display:none;"/><br />'+
                               '<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Student Xtra Add-On" name="Student Xtra Add-On" style="display:none;"/>'+
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Mas Ultra" name="Mas Ultra" style="display:none;"/><br />'+
						'	</td>' +
						'</tr>' +
						'</table>'

//default english div
arrayMDUInnerHTML[7] = '<table width="100%">' +
						'<tr>' +
						'<td colspan="6" height="10px"></td>' +
						'</tr>' +
						'<tr>' +
						'<td><a href="javascript:img_click_Base(\'Family\',1);" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[1]; img_on_Base(\'Family\',1); return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary; img_off_Base(\'Family\',1);"><img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Family" name="Family" border="0" /></a></td>' +
						'<td class="innerboxHeadBig"><a class="step3" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/family.html\');" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[1]; importXML(); return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary;">Family</a></td>' +
						'<td><a href="javascript:img_click_Base(\'Entertainment\',28);" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[5]; img_on_Base(\'Entertainment\',28); return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary; img_off_Base(\'Entertainment\',28);" ><img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" border="0" alt="Entertainment" name="Entertainment"/></a></td>' +
						'<td class="innerboxHeadBig"><a class="step3" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/select.html\');" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[5]; importXML(); return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary;" >Entertainment</a></td>' +
						'<td><a href="javascript:img_click_Base(\'Choice\',2);" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[2]; img_on_Base(\'Choice\',2); return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary; img_off_Base(\'Choice\',2);" ><img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" border="0" alt="Choice" name="Choice"/></a></td>' +
						'<td class="innerboxHeadBig"><a class="step3" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/choice.html\');" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[2]; importXML(); return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary;" >Choice</a></td>' +
						'<td><a href="javascript:img_click_Base(\'Xtra\',3);" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[3]; img_on_Base(\'Xtra\',3); return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary; img_off_Base(\'Xtra\',3);"><img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" border="0" alt="Xtra" name="Xtra" /></a></td>' +
						'<td class="innerboxHeadBig"><a class="step3" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/choice_xtra.html\');"  onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[3]; importXML(); return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary;">Xtra</a></td>' +
						'</tr>' +
						'<tr>' +
						'<td colspan="6" height="10px"></td>' +
						'</tr>' +
						'<tr>' +
						'<td><a href="javascript:img_click_Base(\'Ultimate\',4);" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[4]; img_on_Base(\'Ultimate\',4); return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary; img_off_Base(\'Ultimate\',4);"><img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" border="0" alt="Ultimate" name="Ultimate" /></a></td>' +
						'<td class="innerboxHeadBig"><a class="step3" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/choice_ultimate.html\');" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[4]; importXML(); return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary;" >Ultimate</a></td>' +
						'<td><a href="javascript:img_click_Base(\'Premier\',6);" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[6]; img_on_Base(\'Premier\',6); return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary; img_off_Base(\'Premier\',6);"><img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Premier" name="Premier"  border="0" /></a></td>' +
						'<td class="innerboxHeadBig"><a class="step3" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/premier.html\');" onMouseOver="SUMMARY.innerHTML = arrayBaseSummary[6]; importXML(); return true;" onMouseOut="SUMMARY.innerHTML = varDefaultSummary;" >Premier</a></td>' +
						'<td></td>' +
						'<td class="innerboxHeadBig"></td>' +
						'</tr>' +
						'<tr>' +
						'<td></td>' +
						'<td class="innerboxText"></td>' +
						'<td></td>' +
						'<td class="innerboxText"></td>' +
						'<td></td>' +
						'<td></td>' +
						'</tr>' +
						'<tr>' +
						'<td colspan="6">&nbsp;</td>' +
						'</tr>' +
						'<tr>' +
						'<td class="innerboxText" colspan="6">Base package required for premiums/additional services. See <a class="step3" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/requirements.html\');">Package Requirements</a>.<br>' +
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Total Choice" name="Total Choice for TCD/JCD" border="0" style="display:none;"/>' +
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Choice Tier" name="Choice Tier for TCD/JCD" border="0" style="display:none;"/>' +
						'		<a id="total_choice_plus_anchor"><img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxOver.gif" alt="Total Choice Plus" name="Total Choice Plus" border="0" style="display:none;"/></a><br />' +
						'		<a id="xtra_tier_anchor"><img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxOver.gif" alt="Xtra Tier" name="Xtra Tier" border="0" style="display:none;"/></a><br />' +
						'<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Xtra Add-On" name="Xtra Add-On" border="0" style="display:none;"/><br />' +
                        '<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Premier Add-On" name="Premier Add-On" border="0" style="display:none;"/><br />' +
                        '<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Total Choice Plus TMU" name="Total Choice Plus TMU" border="0" style="display:none;"/><br />' +
						'<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Xtra Add-On FDB" name="Xtra Add-On FDB" border="0" style="display:none;"/><br />' +
						'<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Xtra Add-On EDB" name="Xtra Add-On EDB" border="0" style="display:none;"/><br />' +
						'<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Xtra Add-On" name="Xtra Add-On" style="display:none;"/><br />' +
                        '<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Choice Add-On FDB" name="Choice Add-On FDB" border="0" style="display:none;"/><br />' +
						'		<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Xtra Digital Bulk" name="Xtra Digital Bulk" style="display:none;"/><br />'+
                        '<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Premier Add-On FDB" name="Premier Add-On FDB" border="0" style="display:none;"/><br />'
						'<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Ultimate Add-On CDB" name="Ultimate Add-On CDB" border="0" style="display:none;"/><br />'+
							  '<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Ultimate Add-On FDB" name="Ultimate Add-On FDB" border="0" style="display:none;"/><br />'+
							  '<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Ultimate Add-On" name="Ultimate Add-On" border="0" style="display:none;"/><br />'+
							   '<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Entertainment Add-On" name="Entertainment Add-On" style="display:none;"/>'+
							  '<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Student Choice Add-On" name="Student Choice Add-On" style="display:none;"/><br />'+
                               '<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Student Xtra Add-On" name="Student Xtra Add-On" style="display:none;"/>'+
							'<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Preferred Choice" name="Preferred Choice" border="0" style="display:none;"/><br />'+
							
						'</td>' +
						'</tr>' +
						'</table>'
// MDUdiv default innerhtml

arrayMDUInnerHTML[8] = '&nbsp;<br />' +
						'<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Preferred Choice" name="Preferred Choice" border="0" style="display:none;"/><br />' +
						'<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Total Choice" name="Total Choice for TCD/JCD" border="0" style="display:none;"/><br />' +
						'<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Choice Tier" name="Choice Tier for TCD/JCD" border="0" style="display:none;"/><br />' +
						'<a id="total_choice_plus_anchor" onMouseOver=\'return false;\' onMouseOut=\'return false;\' href=\'#\'><img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Total Choice Plus" name="Total Choice Plus" border="0" style="display:none;"/></a><br />' +
						'<a id="xtra_tier_anchor" onMouseOver=\'return false;\' onMouseOut=\'return false;\' href=\'#\'><img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Xtra Tier" name="Xtra Tier" border="0" style="display:none;"/></a><br />' +
						'<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Xtra Add-On" name="Xtra Add-On" border="0" style="display:none;"/><br />' +
                        '<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Premier Add-On" name="Premier Add-On" border="0" style="display:none;"/><br />' +
                        '<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Total Choice Plus TMU" name="Total Choice Plus TMU" border="0" style="display:none;"/><br />' +
						'<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Xtra Add-On FDB" name="Xtra Add-On FDB" border="0" style="display:none;"/><br />' +
						'<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Xtra Add-On EDB" name="Xtra Add-On EDB" border="0" style="display:none;"/><br />' +
                        '<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Choice Add-On FDB" name="Choice Add-On FDB" border="0" style="display:none;"/><br />' +
						 '<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Entertainment Add-On" name="Entertainment Add-On" style="display:none;"/>'+
                        '<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Premier Add-On FDB" name="Premier Add-On FDB" border="0" style="display:none;"/><br />'+
						'<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Student Choice Add-On" name="Student Choice Add-On" style="display:none;"/><br />'+
                               '<img src="http://agentanswercenterstg.directv.com/en-us/res/system/img/greenBoxNorm.gif" alt="Student Xtra Add-On" name="Student Xtra Add-On" style="display:none;"/>';
