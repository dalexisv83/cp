app.controller('PP_Controller', ['$scope', '$compile',
    function($scope, $compile) {
        //"use strict";
        var arrayBaseSummary = new Array();
        var arrayParaSummary = new Array();
        var arrayPremSummary = new Array();
        var arrayExtraSummary = new Array();
        var arrayTaxes = new Array();
        var arrayLyrSuggestion = new Array();
        var arrayMDUInnerHTML = new Array();

        var varDefaultSummary = "<font color='#000000'><center>Rollover package names<br> for a quick summary<br><br>or<br><br>Click on package links for<br> a detailed description.</center></font>",
            outputSummary = function(id) {
                var smmry = '<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" >&nbsp;<strong>' + dataProg.packages[id].name + '<br><br></strong></td></tr>' +
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
        arrayBaseSummary[1] = outputSummary(10);
        //Choice
        arrayBaseSummary[2] = outputSummary(3);
        //Xtra
        arrayBaseSummary[3] = outputSummary(5);
        //Ultimate
        arrayBaseSummary[4] = outputSummary(6);
        //Entertainment
        arrayBaseSummary[5] = outputSummary(2);
        //Premier
        arrayBaseSummary[6] = outputSummary(7);
        //preferred_choice
        arrayBaseSummary[7] = outputSummary(30);
        //total_choice  (Total Choice Tier @ 10.99)
        arrayBaseSummary[8] = '<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" >&nbsp;<strong>Total Choice & TC_MDU Tier<br><br></strong></td></tr>' +
            '<tr><td class="nlb">- "Total Choice Limited" and "Total Choice_MDU Tier" are provided by the property.</td></tr>' +
            '<tr><td class="nlb">&nbsp;</td></tr>' +
            '<tr><td class="nlb">- Add "Total Choice Plus_MDU Tier" to give equivalent of Total Choice Plus programming.</td></tr></table>'

        //Choice Tier for TCD/JCD
        arrayBaseSummary[9] = '<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" >&nbsp;<strong>Choice_MDU Tier<br><br></strong></td></tr>' +
            '<tr><td class="nlb">-"Total Choice Limited" and "Choice_MDU Tier" are provided by the property.</td></tr>' +
            '<tr><td class="nlb">&nbsp;</td></tr>' +
            '<tr><td class="nlb">-Add "Choice Xtra Classic_MDU Tier" to give equivalent of Choice Xtra Classic programming.</td></tr></table>'

        //Total Choice Plus MDU Tier
        arrayBaseSummary[10] = '<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" >&nbsp;<strong>Total Choice Plus_MDU Tier<br><br></strong></td></tr>' +
            '<tr><td class="nlb">-"Total Choice Limited" and "Total Choice_MDU Tier" are provided by the property.</td></tr>' +
            '<tr><td class="nlb">&nbsp;</td></tr>' +
            '<tr><td class="nlb">-Add "Total Choice Plus_MDU Tier" to give equivalent of Total Choice Plus programming.</td></tr></table>'

        //Xtra Tier
        arrayBaseSummary[11] = '<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" >&nbsp;<strong>Choice Xtra Classic_MDU Tier<br><br></strong></td></tr>' +
            '<tr><td class="nlb">-"Total Choice Limited" and "Choice_MDU Tier" are provided by the property.</td></tr>' +
            '<tr><td class="nlb">&nbsp;</td></tr>' +
            '<tr><td class="nlb">-Add "Choice Xtra Classic_MDU Tier" to give equivalent of Choice Xtra Classic programming.</td></tr></table>'
            //Customer has total_choice  (Total Choice Tier @ 5.00)
        arrayBaseSummary[12] = '<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" >&nbsp;<strong>Total Choice_MDU Tier<br><br></strong></td></tr>' +
            '<tr><td class="nlb">- Customer Has Total Choice_MDU Tier</td></tr>' +
            '<tr><td class="nlb">- Upgrade to Plus for $5.00</td></tr>' +
            '<tr><td class="nlb">- To get over 185 channels.</td></tr>' +
            '<tr><td class="nlb">- Upgrade to Premium not available, instead:</td></tr>' +
            '<tr><td class="nlb">- Add Premium Services a la carte at pricing shown in Step 4</td></tr></table>'

        //Customer has Choice_MDU Tier  --   

        arrayBaseSummary[13] = '<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" >&nbsp;<strong>Choice_MDU Tier<br><br></strong></td></tr>' +
            '<tr><td class="nlb">-If "Total Choice Limited" is on the account, add "Familiar_MDU Tier" to give equivalent of Familiar programming.</td></tr></table>'

        //Customer has total_choice  (Total Choice Tier @ 5.00)
        arrayBaseSummary[14] = '<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" >&nbsp;<strong>Total Choice Bulk<br><br></strong></td></tr>' +
            '<tr><td class="nlb">- Total Choice Bulk is provided by the property.</td></tr>' +
            '<tr><td class="nlb">&nbsp;</td></tr>' +
            '<tr><td class="nlb">- Add "Total Choice Plus_MDU Tier" to give equivalent of Total Choice Plus programming.</td></tr>' +
            '<tr><td class="nlb">&nbsp;</td></tr>' +
            '<tr><td class="nlb">- Add Premium Services a la carte (step 4) and "TCPlus_MDU Tier" to give equivalent of Premier programming. (Premier upgrade package isn\'t available.)</td></tr></table>'


        //Total Choice Plus_MDU Tier for TCD/JCD
        arrayBaseSummary[15] = '<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" >&nbsp;<strong>Total Choice Plus_MDU Tier<br><br></strong></td></tr>' +
            '<tr><td class="nlb">-Total Choice Bulk is provided by the property.</td></tr>' +
            '<tr><td class="nlb">&nbsp;</td></tr>' +
            '<tr><td class="nlb">- Add "Total Choice Plus_MDU Tier" to give equivalent of Total Choice Plus programming.</td></tr>' +
            '<tr><td class="nlb">&nbsp;</td></tr>' +
            '<tr><td class="nlb">- Add Premium Services a la carte (step 4) and "TCPlus_MDU Tier" to give equivalent of Premier programming. (Premier upgrade package isn\'t available.)</td></tr></table>'


        //Total Choice Bulk
        arrayBaseSummary[16] = '<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" >&nbsp;<strong>Total Choice Bulk<br><br></strong></td></tr>' +
            '<tr><td class="nlb">-Total Choice Bulk is provided by the property.</td></tr>' +
            '<tr><td class="nlb">&nbsp;</td></tr>' +
            '<tr><td class="nlb">-Add "Total Choice Plus_MDU Tier" to give equivalent of Total Choice Plus programming.</td></tr>' +
            '<tr><td class="nlb">&nbsp;</td></tr>' +
            '<tr><td class="nlb">-Add Premium Services a la carte (step 4) and "TCPlus_MDU Tier" to give equivalent of Premier programming. (Premier upgrade package isn\'t available.)</td></tr></table>'


        //Xtra Digital Bulk for TMU
        arrayBaseSummary[17] = '<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" >&nbsp;<strong>Xtra Digital Bulk<br><br></strong></td></tr>' +
            '<tr><td class="nlb">-Xtra Digital Bulk is provided by the property.</td></tr>' +
            '<tr><td class="nlb">&nbsp;</td></tr>' +
            '<tr><td class="nlb">-Add "Ultimate Add-On_Base Xtra" to give equivalent of Ultimate programming.</td></tr>' +
            '<tr><td class="nlb">&nbsp;</td></tr>' +
            '<tr><td class="nlb">-Add "Premier Add-On_Base  Xtra" to give equivalent of Premier programming.</td></tr>' +
            '<tr><td class="nlb">&nbsp;</td></tr>' +
            '<tr><td class="nlb">-Tip: Premier Add-On isn\'t available if the property already provides a Premium Service, such as HBO. So, give them the Premier equivalent by adding the "Ultimate Add-On" and the remainder of the Premium Services.</td></tr></table>'


        //Choice Digital Bulk for TMU
        arrayBaseSummary[18] = '<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" >&nbsp;<strong>Choice Digital Bulk<br><br></strong></td></tr>' +
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
        arrayBaseSummary[19] = '<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" >&nbsp;<strong>Family Digital Bulk<br><br></strong></td></tr>' +
            '<tr><td class="nlb">-Family Digital Bulk is provided by the property.</td></tr>' +
            '<tr><td class="nlb">-Add "Entertainment Add-On_Base Family" to give the equivalent of Entertainment.</td></tr>' +
            '<tr><td class="nlb">-Add "Choice Add-On_Base Family" to give equivalent of Choice.</td></tr>' +
            '<tr><td class="nlb">-Add "Xtra Add-On_Base Family" to give equivalent of Xtra.</td></tr>' +
            '<tr><td class="nlb">-Add "Ultimate Add-On_Base Family" to give equivalent of Ultimate.</td></tr>' +
            '<tr><td class="nlb">-Add "Premier Add-On_Base Family" to give equivalent of Premier.</td></tr>' +
            '<tr><td class="nlb">&nbsp;<strong>Tip:</strong> Premier Add-On isn\'t available if the property already provides a Premium Service, like HBO. So, give them the Premier equivalent by adding the "Ultimate Add-On" and the remainder of the Premium Services.</td></tr></table>'


        // Premier Add On
        arrayBaseSummary[20] = '<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" >&nbsp;<strong>Premier Add-On<br><br></strong></td></tr>' +
            '<tr><td class="nlb">-Choice Digital Bulk is provided by the property.</td></tr>' +
            '<tr><td class="nlb">&nbsp;</td></tr>' +
            '<tr><td class="nlb">-Add "Xtra Add-On_Base Choice" to give equivalent of Xtra programming.</td></tr>' +
            '<tr><td class="nlb">&nbsp;</td></tr>' +
            '<tr><td class="nlb">-Add "Premier Add-On_Base Choice" to give equivalent of Premier programming. </td></tr>' +
            '<tr><td class="nlb">&nbsp;</td></tr>' +
            '<tr><td class="nlb">-Tip: Premier Add-On isn\'t available if the property already provides a Premium Service, such as HBO. So, give them the Premier equivalent by adding the "Xtra Add-On" and the remainder of the Premiums. </td></tr></table>'


        // Family Digital Bulk
        arrayBaseSummary[21] = '<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" >&nbsp;<strong>Family Digital Bulk<br><br></strong></td></tr>' +
            '<tr><td class="nlb">-Family Digital Bulk is provided by the property.</td></tr>' +
            '<tr><td class="nlb">&nbsp;</td></tr>' +
            '<tr><td class="nlb">-Add "Xtra Add-On_Base Family" to give equivalent of Xtra programming.</td></tr>' +
            '<tr><td class="nlb">&nbsp;</td></tr>' +
            '<tr><td class="nlb">-Add "Premier Add-On_Base Family" to give equivalent of Premier programming.</td></tr>' +
            '<tr><td class="nlb">&nbsp;</td></tr>' +
            '<tr><td class="nlb">-Tip: Premier Add-On isn\'t available if the property already provides a Premium, such as HBO. So, give Premier equivalent by adding "Xtra Add-On" and remainder of Premiums.</td></tr></table>'


        // Choice Add-On
        arrayBaseSummary[22] = '<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" >&nbsp;<strong>Choice Add-On<br><br></strong></td></tr>' +
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
        arrayBaseSummary[23] = '<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" >&nbsp;<strong>Xtra Add-On<br><br></strong></td></tr>' +
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
        arrayBaseSummary[24] = '<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" >&nbsp;<strong>Premier Add-On<br><br></strong></td></tr>' +
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
        arrayBaseSummary[25] = '<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" >&nbsp;<strong>Student Preferred Bulk<br><br></strong></td></tr>' +
            '<tr><td class="nlb">-Student Preferred Bulk is provided by the property.</td></tr>' +
            '<tr><td class="nlb">-Add "Choice Add-On_Base Student Preferred" to give the equivalent of Choice programming.</td></tr>' +
            '<tr><td class="nlb">-Add "Choice Xtra Classic Add-On_Base Student Preferred" to give the equivalent of Choice Xtra Classic programming.</td></tr>' +
            '<tr><td class="nlb">&nbsp;</td></tr></table>'

        //Student Choice Add-On 
        arrayBaseSummary[26] = '<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" >&nbsp;<strong>Student Choice Add-On<br><br></strong></td></tr>' +
            '<tr><td class="nlb">-Student Preferred Bulk is provided by the property.</td></tr>' +
            '<tr><td class="nlb">-Add "Choice Add-On_Base Student Preferred" to give the equivalent of Choice programming.</td></tr>' +
            '<tr><td class="nlb">-Add "Choice Xtra Classic Add-On_Base Student Preferred" to give the equivalent of Choice Xtra Classic programming.</td></tr>' +
            '<tr><td class="nlb">&nbsp;</td></tr></table>'

        //Student Xtra Add-On
        arrayBaseSummary[27] = '<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" >&nbsp;<strong>Student Choice Xtra Classic Add-On<br><br></strong></td></tr>' +
            '<tr><td class="nlb">-Student Preferred Bulk is provided by the property.</td></tr>' +
            '<tr><td class="nlb">-Add "Choice Add-On_Base Student Preferred" to give the equivalent of Choice programming.</td></tr>' +
            '<tr><td class="nlb">-Add "Choice Xtra Classic Add-On_Base Student Preferred" to give the equivalent of Choice Xtra Classic programming.</td></tr>' +
            '<tr><td class="nlb">&nbsp;</td></tr></table>'

        //Entertainment Digital Bulk
        arrayBaseSummary[28] = '<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" >&nbsp;<strong>Entertainment Digital Bulk<br><br></strong></td></tr>' +
            '<tr><td class="nlb">-Entertainment Digital Bulk is provided by the property.</td></tr>' +
            '<tr><td class="nlb">-Add Choice Add-On_Base Entertainment to give equivalent of Choice.</td></tr>' +
            '<tr><td class="nlb">-Add Xtra Add-On_Base Entertainment to give the equivalent of Xtra.</td></tr>' +
            '<tr><td class="nlb">-Add Ultimate Add-On_Base Entertainment to give the equivalent of Ultimate.</td></tr>' +
            '<tr><td class="nlb">-Add Premier Add-On_Base Entertainment to give the equivalent of Premier.</td></tr>' +
            '<tr><td class="nlb"><br>-Tip: Premier Add-On isn\'t available if the property already provides a Premium Service, like HBO. So, give them the Premier equivalent by adding the "Ultimate Add-On" and the remainder of the Premium Services.</td></tr></table>'


        //Xtra Add-On TMW/JMW
        arrayBaseSummary[29] = '<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" >&nbsp;<strong>Xtra Add-On<br><br></strong></td></tr>' +
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
        arrayBaseSummary[30] = '<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" >&nbsp;<strong>Ultimate Add-On<br><br></strong></td></tr>' +
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
        arrayBaseSummary[31] = '<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" >&nbsp;<strong>Premier Add-On<br><br></strong></td></tr>' +
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
        arrayBaseSummary[32] = outputSummary(1);

        //Preferred Extra
        arrayBaseSummary[33] = outputSummary(4);



        // Opcion Especial??
        //arrayParaSummary[0] = 'NOT USED';

        // Optimo Mas
        arrayParaSummary[1] = outputSummary(28);

        // Opcion Extra Especial
        //arrayParaSummary[2] = 'NOT USED';

        // Mas Ultra??
        //arrayParaSummary[3] = 'NOT USED';//outputSummary(17);

        // Opcion Ultra Especial
        //arrayParaSummary[4] = 'NOT USED';

        // Lo Maximo
        arrayParaSummary[5] = outputSummary(20);

        // Opcion Premier?
        //arrayParaSummary[6] = 'NOT USED';



        //arrayParaSummary[8] = 'NOT USED';

        // Mas Ultra
        arrayParaSummary[9] = outputSummary(17);


        arrayParaSummary[10] = outputSummary(27);



        //premium services----------------------------------
        arrayPremSummary[0] = '<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" >&nbsp;<strong>HBO</strong></td></tr>' +
            '<tr><td class="nlb">-10 channels (9 available in HD) with a different mix of shows on each channel.</td></tr>' +
            '<tr><td class="nlb">-Hit original programs.</td></tr>' +
            '<tr><td class="nlb">-Hollywood hit movies with a new movie premiering every Saturday.</td></tr>' +
            '<tr><td class="nlb">-World championship boxing.</td></tr>' +
            '<tr><td class="nlb">-Big concerts and events.</td></tr>' +
            '<tr><td class="nlb">-Family programming on HBO Family.</td></tr></table>'

        arrayPremSummary[1] = '<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" >&nbsp;<strong>SHOWTIME UNLIMITED</strong></td></tr>' +
            '<tr><td class="nlb">-13 commercial-free networks featuring original series, Hollywood hits and championship boxing.</td></tr>' +
            '<tr><td class="nlb">-Original series (The L Word).</td></tr>' +
            '<tr><td class="nlb">-Hollywood hot movies.</td></tr>' +
            '<tr><td class="nlb">-More boxing matches than any other premium network.</td></tr>' +
            '<tr><td class="nlb">-Showtime Championship Boxing with exclusive title fights across all weight classes.</td></tr></table>'

        arrayPremSummary[2] = '<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" >&nbsp;<strong>STARZ SUPER PACK</strong></td></tr>' +
            '<tr><td class="nlb">-The best movie value from DIRECTV.</td></tr>' +
            '<tr><td class="nlb">-15 distinct movie channels and over 900 movies each month.</td></tr>' +
            '<tr><td class="nlb">-Programming for 8- to 16-year-olds on WAM.</td></tr>' +
            '<tr><td class="nlb">-Theme channels playing the best Westerns, Romance, Action movies and much more.</td></tr></table>'

        arrayPremSummary[3] = '<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" >&nbsp;<strong>CINEMAX</strong></td></tr>' +
            '<tr><td class="nlb">-The best place for exclusive Hollywood premieres and the biggest variety of hit movies.</td></tr>' +
            '<tr><td class="nlb">-A new movie premieres every Saturday.</td></tr>' +
            '<tr><td class="nlb">-Hard-to-find independent films and classics.</td></tr>' +
            '<tr><td class="nlb">-3 channels included.</td></tr>' +
            '<tr><td class="nlb">-A great complement to our HBO package.</td></tr></table>'

        arrayPremSummary[4] = '<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" >&nbsp;<strong>SPORTS PACK</strong></td></tr>' +
            '<tr><td class="nlb">-Diverse sports coverage from the U.S. and around the world, including soccer, rugby, cycling, horse racing, surfing, volleyball and more.</td></tr>' +
            '<tr><td class="nlb">-Great college and amateur sports from around the country.</td></tr></table>'


        //extras----------------------------------
        arrayExtraSummary[0] = '<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" >&nbsp;<strong>ACCESS DIRECTV Magazine</strong></td></tr>' +
            '<tr><td class="nlb">-"Get ACCESS DIRECTV Magazine at a great price."</td></tr>' +
            '<tr><td class="nlb">-$2.99/month when ordered online at DIRECTV.com or by remote control on channel 111.</td></tr>' +
            '<tr><td class="nlb">-$3.99/month when ordered by IVR or CSR.</td></tr>' +
            '<tr><td class="nlb"><ul><li>Easy-to-use</li><li>24-hour grids with easy-to-find listings</li><li>Expert reviews and recommendations</li><li>Exclusive interviews, news, and stories from today\'s hottest celebrities</li></ul></td></tr></table>'

        arrayExtraSummary[1] = '<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" >&nbsp;<strong>PROTECTION PLAN</strong></td></tr>' +
            '<tr><td class="nlb">-Provides complete technical support from DIRECTV</td></tr>' +
            '<tr><td class="nlb">-Gives customers a single contact for technical troubleshooting rather than being referred to manufacturers, dealers or installers for help.</td></tr>' +
            '<tr><td class="nlb">-One year commitment to plan required.</td></tr>' +
            '<tr><td class="nlb">-Customers are not charged until the 2nd month.</td></tr>' +
            '<tr><td class="nlb">-Cancellation fee applies.</td></tr></table>'
            //ARS-HD Service        
        arrayExtraSummary[2] = '<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" >&nbsp;<strong>ARS-HD Service</strong></td></tr>' +
            '<tr><td class="nlb">-Provides access to our superior HD technology.</td></tr>' +
            '<tr><td class="nlb">-Monthly: $10</td></tr>' +
            '<tr><td class="nlb">-access to all the HD programming available with your base package and other services.</td></tr></table>'

        arrayExtraSummary[3] = '<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" >&nbsp;<strong>DIRECTV HD Extra Pack</strong></td></tr>' +
            '<tr><td class="nlb">-Requires HD equipment and service.</td></tr>' +
            '<tr><td class="nlb">-$4.99/month.</td></tr>' +
            '<tr><td class="nlb">-First 3 months free. (See HD Extra Pack page for details.)</td></tr>' +
            '<tr><td class="nlb">-Includes unique HD channels.</td></tr></table>'

        //MRV       
        arrayExtraSummary[4] = '<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" >&nbsp;<strong>Whole-Home DVR</strong></td></tr>' +
            '<tr><td class="nlb">-Provides access to our superior multi-room technology.</td></tr>' +
            '<tr><td class="nlb">-Monthly: $3</td></tr>' +
            '<tr><td class="nlb">-Allows shows recorded on a DIRECTV Plus HD DVR  in one room to be watched in another.</td></tr></table>'

        //ARS
        arrayExtraSummary[5] = '<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" >&nbsp;<strong>Advanced Receiver Service (ARS)</strong></td></tr>' +
            '<tr><td class="nlb">-Combines the DVR, HD, and Whole-Home services into one service.</td></tr>' +
            '<tr><td class="nlb">-Monthly: $20</td></tr>' +
            '<tr><td class="nlb">-Available only to accounts created on/after Feb 9, 2012.</td></tr></table>'

        arrayExtraSummary[6] = '<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" >&nbsp;<strong>Protection Plan Premier</strong></td></tr>' +
            '<tr><td class="nlb">-Covers manufacturer defect and normal wear-and-tear.</td></tr>' +
            '<tr><td class="nlb">-$19.99/month.</td></tr>' +
            '<tr><td class="nlb">-Plan coverage and billing will begin in 1 month.(After the 30-day No Claim period.)</td></tr></table>';


        //right sized suggestion ----------------------------------
        arrayLyrSuggestion[1] = '<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" bgcolor="#ff6600">&nbsp;<strong>SAVINGS ALERT!</strong></td></tr>' +
            '<tr><td class="nlb" >-Premier has more for less money.</td></tr>' +
            '<tr><td class="nlb" >-Add Premier instead of Xtra and 5 Premiums.</td></tr></table><br>'

        arrayLyrSuggestion[2] = '<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" bgcolor="#ff6600">&nbsp;<strong>SAVINGS ALERT!</strong></td></tr>' +
            '<tr><td class="nlb" >-Premier has more for less money.</td></tr>' +
            '<tr><td class="nlb" >-Add Premier instead of Plus and 5 Premiums.</td></tr></table><br>'

        arrayLyrSuggestion[3] = '<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" bgcolor="#ff6600">&nbsp;<strong>SAVINGS ALERT!</strong></td></tr>' +
            '<tr><td class="nlb" >-Premier has more for less money.</td></tr>' +
            '<tr><td class="nlb" >-Add Premier instead of Plus HD and 5 Premiums.</td></tr></table><br>'

        arrayLyrSuggestion[4] = '<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" bgcolor="#ff6600">&nbsp;<strong>SAVINGS ALERT!</strong></td></tr>' +
            '<tr><td class="nlb" >-Plus includes DVR Service.  </td></tr>' +
            '<tr><td class="nlb" >-Add Plus instead of Xtra.</td></tr></table><br>'

        arrayLyrSuggestion[5] = '<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" bgcolor="#ff6600">&nbsp;<strong>SAVINGS ALERT!</strong></td></tr>' +
            '<tr><td class="nlb" >-Plus HD includes DVR Service and HD Access.</td></tr>' +
            '<tr><td class="nlb" >-Add Plus HD instead of Xtra.</td></tr></table><br>'

        arrayLyrSuggestion[6] = '<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" bgcolor="#ff6600">&nbsp;</td></tr>' +
            '<tr><td class="nlb" >-Plus HD includes DVR Service and HD Access.</td></tr>' +
            '<tr><td class="nlb" >-Add Plus HD instead of Plus.</td></tr></table><br>'


        arrayLyrSuggestion[8] = '<table cellspacing="0" cellpadding="1" border="0" width="100%"><tr><td class="nlb2" bgcolor="#ff6600">&nbsp;<strong>SAVINGS ALERT!</strong></td></tr>' +
            '<tr><td class="nlb" >-Lo M&aacute;ximo has more for less money.</td></tr>' +
            '<tr><td class="nlb" >-Add Lo M&aacute;ximo instead of M&aacute;s Ultra Deportes and 5 Premiums.</td></tr></table><br>'


        /*tax info---------------------------------
        //Only states that charge tax on programming are listed.
        function taxObj(varState,varTax) {
            this.state = varState;                              //name of state
            this.tax = varTax;                                      //tax amount
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
        arrayMDUInnerHTML[1] = '<table cellspacing="0" cellpadding="0" border="0" width="100%">' +
            '<tr>' +
            '<td colspan="6"><img src="../common_assets/img/greenBoxNorm.gif" alt="Preferred Choice" name="Preferred Choice" border="0" style="display:none;"/></td>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Total Choice" name="Total Choice for TCD/JCD" border="0" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Choice Tier" name="Choice Tier for TCD/JCD" border="0" style="display:none;"/>' +
            '<a id="total_choice_plus_anchor"><img src="../common_assets/img/greenBoxOver.gif" alt="Total Choice Plus" name="Total Choice Plus" border="0" style="display:none;"/></a><br />' +
            '<a id="xtra_tier_anchor"><img src="../common_assets/img/greenBoxOver.gif" alt="Xtra Tier" name="Xtra Tier" border="0" style="display:none;"/></a><br />' +
            '</tr>' +
            '</table>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Xtra Add-On" name="Xtra Add-On" border="0" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Xtra Tier" name="Xtra Add-On" border="0" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Premier Add-On" name="Premier Add-On" border="0" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Total Choice Plus TMU" name="Total Choice Plus TMU" border="0" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Xtra Add-On FDB" name="Xtra Add-On FDB" border="0" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Choice Add-On FDB" name="Choice Add-On FDB" border="0" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Premier Add-On FDB" name="Premier Add-On FDB" border="0" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Premier Add-On CDB" name="Premier Add-On CDB" border="0" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Family Digital Bulk" name="Family Digital Bulk" border="0" style="display:none;"/>'
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Ultimate Add-On CDB" name="Ultimate Add-On CDB" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Ultimate Add-On FDB" name="Ultimate Add-On FDB" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Student Choice Add-On" name="Student Choice Add-On" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Student Xtra Add-On" name="Student Xtra Add-On" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Premier Add-On CDB" name="Premier Add-On CDB" style="display:none;"/>';


        //MDU / JDU
        arrayMDUInnerHTML[2] = '<div class="col-sm-12">' +
            '<div class="col-sm-3 innerboxHeadBig pdr0 pdl0" ><a href="" ng-click="img_click_Base(\'Family\',1);" ng-mouseover="ppSUMMARY = arrayBaseSummary[1]; img_on_Base(\'Family\',1);" ng-mouseleave="ppSUMMARY = varDefaultSummary; img_off_Base(\'Family\',1);"><img src="../common_assets/img/greenBoxNorm.gif" alt="Family" name="Family" border="0" /></a>' +
            '<a class="step3" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/family.html\');" ng-mouseover="ppSUMMARY = arrayBaseSummary[1]; importXML();" ng-mouseleave="ppSUMMARY = varDefaultSummary;"> Family</a><br>' +
            '<a href="" ng-click="img_click_Base(\'Xtra\',3);" ng-mouseover="ppSUMMARY = arrayBaseSummary[3]; img_on_Base(\'Xtra\',3);" ng-mouseleave="ppSUMMARY = varDefaultSummary; img_off_Base(\'Xtra\',3);"><img src="../common_assets/img/greenBoxNorm.gif" border="0" alt="Xtra" name="Xtra" /></a>' +
            '<a class="step3" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/choice_xtra.html\');"  ng-mouseover="ppSUMMARY = arrayBaseSummary[3]; importXML();" ng-mouseleave="ppSUMMARY = varDefaultSummary;"> Xtra</a><br>' +
            '<a href="" ng-click="img_click_Base(\'Preferred Extra\',33);" ng-mouseleave="ppSUMMARY = varDefaultSummary; img_off_Base(\'Preferred Extra\',33);" ng-mouseover="ppSUMMARY = arrayBaseSummary[33]; img_on_Base(\'Preferred Extra\',33);"><img alt="Preferred Xtra" border="0" id="Preferred_extra" name="Preferred Extra" src="../common_assets/img/greenBoxNorm.gif"></a>' +
            '<a class="step3" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/preferred_xtra.html\');" ng-mouseleave="ppSUMMARY = varDefaultSummary;" ng-mouseover="ppSUMMARY = arrayBaseSummary[33]; importXML();"> Preferred Xtra</a>' +
            '</div>' +

            '<div class="col-sm-3 innerboxHeadBig pdr0 pdl0" ><a href="" ng-click="img_click_Base(\'Xtra Add-On FDB\',32);" ng-mouseover="ppSUMMARY = arrayBaseSummary[32]; img_on_Base(\'Xtra Add-On FDB\',22);" ng-mouseleave="ppSUMMARY = varDefaultSummary; img_off_Base(\'Xtra Add-On FDB\',22);"><img src="../common_assets/img/greenBoxNorm.gif" alt="Select" name="Select" border="0" /></a>' +
            '<a class="step3" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/select.html\');" ng-mouseover="ppSUMMARY = arrayBaseSummary[32]; importXML();" ng-mouseleave="ppSUMMARY = varDefaultSummary;"> Select</a><br>' +
            '<a href="" ng-click="img_click_Base(\'Ultimate\',4);" ng-mouseover="ppSUMMARY = arrayBaseSummary[4]; img_on_Base(\'Ultimate\',4);" ng-mouseleave="ppSUMMARY = varDefaultSummary; img_off_Base(\'Ultimate\',4);"><img src="../common_assets/img/greenBoxNorm.gif" border="0" alt="Ultimate" name="Ultimate" /></a>' +
            '<a class="step3" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/choice_ultimate.html\');" ng-mouseover="ppSUMMARY = arrayBaseSummary[4]; importXML();" ng-mouseleave="ppSUMMARY = varDefaultSummary;" > Ultimate</a>' +
            '</div>' +

            '<div class="col-sm-3 innerboxHeadBig pdr0 pdl0" ><a href="" ng-click="img_click_Base(\'Preferred Choice\',11);" ng-mouseover="ppSUMMARY = arrayBaseSummary[7]; img_on_Base(\'Preferred Choice\',11);" ng-mouseleave="ppSUMMARY = varDefaultSummary; img_off_Base(\'Preferred Choice\',11);"><img src="../common_assets/img/greenBoxNorm.gif" alt="Preferred Choice" name="Preferred Choice" border="0" /></a>' +
            '<a class="step3" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/preferred_choice.html\');" ng-mouseover="ppSUMMARY = arrayBaseSummary[7]; importXML();" ng-mouseleave="ppSUMMARY = varDefaultSummary;"> Preferred Choice</a><br>' +
            '<a href="" ng-click="img_click_Base(\'Premier\',6);" ng-mouseover="ppSUMMARY = arrayBaseSummary[6]; img_on_Base(\'Premier\',6);" ng-mouseleave="ppSUMMARY = varDefaultSummary; img_off_Base(\'Premier\',6);"><img src="../common_assets/img/greenBoxNorm.gif" alt="Premier" name="Premier" border="0" /></a>' +
            '<a class="step3" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/premier.html\');" ng-mouseover="ppSUMMARY = arrayBaseSummary[6]; importXML();" ng-mouseleave="ppSUMMARY = varDefaultSummary;" > Premier</a>' +
            '</div>' +

            '<div class="col-sm-3 innerboxHeadBig pdr0 pdl0"><a href="" ng-click="img_click_Base(\'Choice\',2);" ng-mouseover="ppSUMMARY = arrayBaseSummary[2]; img_on_Base(\'Choice\',2);" ng-mouseleave="ppSUMMARY = varDefaultSummary; img_off_Base(\'Choice\',2);" ><img src="../common_assets/img/greenBoxNorm.gif" border="0" alt="Choice" name="Choice"/></a>' +
            '<a class="step3" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/choice.html\');" ng-mouseover="ppSUMMARY = arrayBaseSummary[2]; importXML();" ng-mouseleave="ppSUMMARY = varDefaultSummary;" > Choice</a><br>' +
            '<a href="" ng-click="img_click_Base(\'Entertainment\',28);" ng-mouseover="ppSUMMARY = arrayBaseSummary[5]; img_on_Base(\'Entertainment\',28);" ng-mouseleave="ppSUMMARY = varDefaultSummary; img_off_Base(\'Entertainment\',28);"><img src="../common_assets/img/greenBoxNorm.gif" alt="Entertainment" name="Entertainment"  border="0" /></a>' +
            '<a class="step3" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/entertainment_2.html\');" ng-mouseover="ppSUMMARY = arrayBaseSummary[5]; importXML();" ng-mouseleave="ppSUMMARY = varDefaultSummary;" > Entertainment</a>' +
            '</div>' +

            '<div class="col-sm-12 innerboxText" >To add Preferred Choice in Rio: Add/Change Programming > "International" tab.' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Total Choice" name="Total Choice for TCD/JCD" border="0" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Choice Tier" name="Choice Tier for TCD/JCD" border="0" style="display:none;"/>' +
            '<a id="total_choice_plus_anchor"><img src="../common_assets/img/greenBoxOver.gif" alt="Total Choice Plus" name="Total Choice Plus" border="0" style="display:none;"/></a>' +
            '<a id="xtra_tier_anchor"><img src="../common_assets/img/greenBoxOver.gif" alt="Xtra Tier" name="Xtra Tier" border="0" style="display:none;"/></a>' +
            '</div>' +

            '<div class="col-sm-12">' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Xtra Add-On" name="Xtra Add-On" border="0" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Xtra Add-On" name="Xtra Add-On EDB" border="0" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Premier Add-On" name="Premier Add-On" border="0" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Total Choice Plus TMU" name="Total Choice Plus TMU" border="0" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Ultimate Add-On" name="Ultimate Add-On" border="0" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Xtra Add-On FDB" name="Xtra Add-On FDB" border="0" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Choice Add-On FDB" name="Choice Add-On FDB" border="0" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Premier Add-On FDB" name="Premier Add-On FDB" border="0" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Xtra Digital Bulk" name="Xtra Digital Bulk" border="0" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Family Digital Bulk" name="Family Digital Bulk" border="0" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Basico" name="Basico" border="0" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Optimo Mas" name="Optimo Mas" border="0" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Ultimate Add-On EDB" name="Ultimate Add-On EDB" border="0" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Familiar Ultra" name="Familiar Ultra" border="0" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Lo Maximo" name="Lo Maximo" border="0" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Ultimate Add-On CDB" name="Ultimate Add-On CDB" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Ultimate Add-On FDB" name="Ultimate Add-On FDB" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Student Choice Add-On" name="Student Choice Add-On" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Premier Add-On EDB" name="Premier Add-On EDB" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Choice Add-On" name="Choice Add-On EDB" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Entertainment Add-On" name="Entertainment Add-On" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Student Choice Xtra Classic Add-On" name="Student Choice Xtra Classic Add-On" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Premier Add-On CDB" name="Premier Add-On CDB" style="display:none;"/></div>';


        //TCD / JCD
        arrayMDUInnerHTML[3] = '<div class="col-sm-12">' +
            '<div class="innerboxHeadBig4 col-sm-4 marb10"><strong>If TC Limited &amp;<br> TC_MDU Tier are on account:</strong><br>' +
            '<div class="col-sm-12 marb10"><a href="" ng-click="img_click_Base(\'Total Choice for TCD/JCD\',12);" ng-mouseover="ppSUMMARY = arrayBaseSummary[8]; img_on_Base(\'Total Choice for TCD/JCD\',12);" ng-mouseleave="ppSUMMARY = varDefaultSummary; img_off_Base(\'Total Choice for TCD/JCD\',12);"><img src="../common_assets/img/greenBoxNorm.gif" border="0" alt="Total Choice" name="Total Choice for TCD/JCD"></a>' +
            '<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/total_choice_mdu_tier.html\');" ng-mouseover="ppSUMMARY = arrayBaseSummary[8];" ng-mouseleave="ppSUMMARY = varDefaultSummary;" > TC Limited & Total Choice MDU Tier</a></div>' +
            '<div class="col-sm-12 marb10"><a id="total_choice_plus_anchor"><img src="../common_assets/img/greenBoxOver.gif" border="0" alt="Total Choice Plus" name="Total Choice Plus"></a>' +
            '<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/total_choice_plus_mdu_tier.html\');" ng-mouseover="ppSUMMARY = arrayBaseSummary[10];" ng-mouseleave="ppSUMMARY = varDefaultSummary;" > Total Choice Plus MDU Tier</a></div>' +
            '</div>' +

            '<div class="innerboxHeadBig4 col-sm-4 marb10" background-color:#e0e1e1"><strong>If TC Limited &amp;<br> Choice_MDU Tier are on account:</strong><br>' +
            '<div class="col-sm-12 marb10"><a href="" ng-click="img_click_Base(\'Choice Tier for TCD/JCD\',13);" ng-mouseover="ppSUMMARY = arrayBaseSummary[9]; img_on_Base(\'Choice Tier for TCD/JCD\',13);" ng-mouseleave="ppSUMMARY = varDefaultSummary; img_off_Base(\'Choice Tier for TCD/JCD\',13);"><img src="../common_assets/img/greenBoxNorm.gif" border="0" alt="Choice Tier" name="Choice Tier for TCD/JCD"></a>' +
            '<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/choice_mdu_tier.html\');" ng-mouseover="ppSUMMARY = arrayBaseSummary[9] ;" ng-mouseleave="ppSUMMARY = varDefaultSummary; img_off_Base(\'Choice Tier for TCD/JCD\',13);" > TC Limited & Choice MDU Tier</a></div>' +
            '<div class="col-sm-12 marb10"><a id="xtra_tier_anchor"><img src="../common_assets/img/greenBoxOver.gif" border="0" alt="Choice Xtra Classic MDU Tier" name="Choice Xtra Classic MDU Tier"></a>' +
            '<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/choice_xtra_mdu_tier.html\');" ng-mouseover="ppSUMMARY = arrayBaseSummary[11];" ng-mouseleave="ppSUMMARY = varDefaultSummary;" > Choice Xtra Classic MDU Tier</a></div>' +
            '</div>' +

            '<div class="innerboxHeadBig4 col-sm-4 marb10"><strong>If Student Preferred Bulk is on account:</strong><br>' +
            '<div class="col-sm-12 marb10"><img src="../common_assets/img/greenDotOver.gif" border="0" alt="Student Preferred Bulk" name="total_choice_placeholder">' +
            '<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/student_preferred_bulk.html\');" ng-mouseover="ppSUMMARY = arrayBaseSummary[25];" ng-mouseleave="ppSUMMARY = varDefaultSummary;" > Student Preferred Bulk</a></div>' +
            '<div class="col-sm-12 marb10"><a href="" ng-click="img_click_Base(\'Student Choice Add-On\',29);" ng-mouseover="ppSUMMARY = arrayBaseSummary[26]; img_on_Base(\'Student Choice Add-On\',29);" ng-mouseleave="ppSUMMARY = varDefaultSummary; img_off_Base(\'Student Choice Add-On\',29);"><img src="../common_assets/img/greenBoxNorm.gif" border="0" alt="Student Choice Add-On" name="Student Choice Add-On"></a>' +
            '<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/student_choice_add_on.html\');" ng-mouseover="ppSUMMARY = arrayBaseSummary[26];" ng-mouseleave="ppSUMMARY = varDefaultSummary;"> Student Choice Add-On</a></div>' +
            '<div class="col-sm-12 marb10"><a href="" ng-click="img_click_Base(\'Student Choice Xtra Classic Add-On\',30);" ng-mouseover="ppSUMMARY = arrayBaseSummary[27]; img_on_Base(\'Student Choice Xtra Classic Add-On\',30);" ng-mouseleave="ppSUMMARY = varDefaultSummary; img_off_Base(\'Student Choice Xtra Classic Add-On\',30);"><img src="../common_assets/img/greenBoxNorm.gif" border="0" alt="Student Choice Xtra Classic Add-On" name="Student Choice Xtra Classic Add-On"></a>' +
            '<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/student_choice_xtra_add_on.html\');" ng-mouseover="ppSUMMARY = arrayBaseSummary[27];" ng-mouseleave="ppSUMMARY = varDefaultSummary;" > Student Choice Xtra Classic Add-On</a></div>' +
            '</div>' +
            '<div class="innerboxText col-sm-12" style="display:none;">' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Preferred Choice" name="Preferred Choice" border="0" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Family" name="Family" border="0" style="display:none;" />' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Entertainment" name="Entertainment" border="0" style="display:none;" />' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Choice" name="Choice" border="0" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Xtra" name="Xtra" border="0" style="display:none;" />' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Ultimate" name="Ultimate" border="0" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Premier" name="Premier" style="display:none;" />' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Xtra Add-On" name="Xtra Add-On EDB" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Total Choice Plus TMU" name="Total Choice Plus TMU" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Xtra Add-On" name="Xtra Add-On" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Xtra Add-On FDB" name="Xtra Add-On FDB" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Choice Add-On FDB" name="Choice Add-On FDB"  style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Premier Add-On FDB" name="Premier Add-On FDB" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Basico" name="Basico" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Optimo Mas" name="Optimo Mas" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Familiar Ultra" name="Familiar Ultra"  style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Lo Maximo" name="Lo Maximo" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Ultimate Add-On CDB" name="Ultimate Add-On CDB" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Ultimate Add-On FDB" name="Ultimate Add-On FDB" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Ultimate Add-On EDB" name="Ultimate Add-On EDB" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Premier Add-On CDB" name="Premier Add-On CDB" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Premier Add-On EDB" name="Premier Add-On EDB" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Xtra Digital Bulk" name="Xtra Digital Bulk" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Entertainment Add-On" name="Entertainment Add-On" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Choice Add-On EDB" name="Choice Add-On EDB" style="display:none;"/>' +
            '</div></div>'

        //TMW / JMW
        arrayMDUInnerHTML[4] = '<div class="col-sm-12 pdr0 pdl0 marb10">' +
            '<div class="col-sm-4 pdr0 pdl0 marb10"><strong>If Choice Digital Bulk is on account:</strong><br><br>' +
            '<div class="col-sm-12 innerboxHeadBig4 pdr0 pdl0 marb10"><img src="../common_assets/img/greenDotOver.gif" border="0" alt="Choice Digital Bulk" name="total_choice_placeholder">' +
            '<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/choice_digital_bulk.html\');" ng-mouseover="ppSUMMARY = arrayBaseSummary[18] ;" ng-mouseleave="ppSUMMARY = varDefaultSummary;" > Choice Digital Bulk</a><br>' +
            '<div class="col-sm-12 marb10"><a href="" ng-click="img_click_Base(\'Xtra Add-On\',14);" ng-mouseover="ppSUMMARY = arrayBaseSummary[29]; img_on_Base(\'Xtra Add-On\',14);" ng-mouseleave="ppSUMMARY = varDefaultSummary; img_off_Base(\'Xtra Add-On\',14);"><img src="../common_assets/img/greenBoxNorm.gif" border="0" alt="Xtra Add-On" name="Xtra Add-On"></a>' +
            '<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/choice_xtra_add_on_new.html\');" ng-mouseover="ppSUMMARY = arrayBaseSummary[29];" ng-mouseleave="ppSUMMARY = varDefaultSummary;" > Xtra Add-On</a></div>' +
            '<div class="col-sm-12 marb10"><a href="" ng-click="img_click_Base(\'Ultimate Add-On CDB\',25);" ng-mouseover="ppSUMMARY = arrayBaseSummary[30]; img_on_Base(\'Ultimate Add-On CDB\',25);" ng-mouseleave="ppSUMMARY = varDefaultSummary; img_off_Base(\'Ultimate Add-On CDB\',25);"><img src="../common_assets/img/greenBoxNorm.gif" border="0" alt="Ultimate Add-On" name="Ultimate Add-On CDB"></a>' +
            '<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/choice_ultimate_addon.html\');" ng-mouseover="ppSUMMARY = arrayBaseSummary[30];" ng-mouseleave="ppSUMMARY = varDefaultSummary;"> Ultimate Add-On</a></div>' +
            '<div class="col-sm-12 marb10"><a href="" ng-click="img_click_Base(\'Premier Add-On CDB\',27);" ng-mouseover="ppSUMMARY = arrayBaseSummary[31]; img_on_Base(\'Premier Add-On CDB\',27);" ng-mouseleave="ppSUMMARY = varDefaultSummary; img_off_Base(\'Premier Add-On CDB\',27);"><img src="../common_assets/img/greenBoxNorm.gif" border="0" alt="Premier Add-On" name="Premier Add-On CDB"></a>' +
            '<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/premier_add_on.html\');" ng-mouseover="ppSUMMARY = arrayBaseSummary[31];" ng-mouseleave="ppSUMMARY = varDefaultSummary;"> Premier Add-On</a></div></div>' +
            '</div>' +

            '<div class="col-sm-4 pdr0 pdl0 marb10" style="background-color:#e0e1e1"><strong>If Entertainment Digital Bulk is on account:</strong><br><br>' +
            '<div class="innerboxHeadBig4 col-sm-12" style="background-color:#e0e1e1"><img src="../common_assets/img/greenDotOver.gif" border="0" alt="Entertainment Digital Bulk" name="total_choice_placeholder">' +
            '<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/entertainment_digital_bulk.html\');" ng-mouseover="ppSUMMARY = arrayBaseSummary[28] ;" ng-mouseleave="ppSUMMARY = varDefaultSummary;" > Entertainment Digital Bulk</a><br>' +
            '<div class="col-sm-12 marb10"><a href="" ng-click="img_click_Base(\'Choice Add-On EDB\',20);" ng-mouseover="ppSUMMARY = arrayBaseSummary[28]; img_on_Base(\'Choice Add-On EDB\',20);" ng-mouseleave="ppSUMMARY = varDefaultSummary; img_off_Base(\'Choice Add-On EDB\',20);"><img src="../common_assets/img/greenBoxNorm.gif" border="0" alt="Choice Add-On EDB" name="Choice Add-On EDB"></a>' +
            '<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/choice_add_on.html\')" ng-mouseover="ppSUMMARY = arrayBaseSummary[28];" ng-mouseleave="ppSUMMARY = varDefaultSummary;" > Choice Add-On</a></div>' +
            '<div class="col-sm-12 marb10"><a href="" ng-click="img_click_Base(\'Xtra Add-On EDB\',9);" ng-mouseover="ppSUMMARY = arrayBaseSummary[28]; img_on_Base(\'Xtra Add-On EDB\',9);" ng-mouseleave="ppSUMMARY = varDefaultSummary; img_off_Base(\'Xtra Add-On EDB\',9);"><img src="../common_assets/img/greenBoxNorm.gif" border="0" alt="Xtra Add-On EDB" name="Xtra Add-On EDB"></a>' +
            '<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/choice_xtra_add_on_new.html\');" ng-mouseover="ppSUMMARY = arrayBaseSummary[28];" ng-mouseleave="ppSUMMARY = varDefaultSummary;" > Xtra Add-On</a></div>' +
            '<div class="col-sm-12 marb10"><a href="" ng-click="img_click_Base(\'Ultimate Add-On EDB\',17);" ng-mouseover="ppSUMMARY = arrayBaseSummary[28]; img_on_Base(\'Ultimate Add-On EDB\',17);" ng-mouseleave="ppSUMMARY = varDefaultSummary; img_off_Base(\'Ultimate Add-On EDB\',17);"><img src="../common_assets/img/greenBoxNorm.gif" border="0" alt="Ultimate Add-On" name="Ultimate Add-On EDB"></a>' +
            '<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/choice_ultimate_addon.html\');" ng-mouseover="ppSUMMARY = arrayBaseSummary[28];" ng-mouseleave="ppSUMMARY = varDefaultSummary;"> Ultimate Add-On</a></div>' +
            '<div class="col-sm-12 marb10"><a href="" ng-click="img_click_Base(\'Premier Add-On EDB\',15);" ng-mouseover="ppSUMMARY = arrayBaseSummary[28]; img_on_Base(\'Premier Add-On EDB\',15);" ng-mouseleave="ppSUMMARY = varDefaultSummary; img_off_Base(\'Premier Add-On EDB\',15);"><img src="../common_assets/img/greenBoxNorm.gif" border="0" alt="Premier Add-On" name="Premier Add-On EDB"></a>' +
            '<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/premier_add_on.html\');" ng-mouseover="ppSUMMARY = arrayBaseSummary[28];" ng-mouseleave="ppSUMMARY = varDefaultSummary;"> Premier Add-On</a></div></div>' +
            '</div>' +

            '<div class="col-sm-4 pdr0 pdl0 marb10"><strong>If Family Digital Bulk is on account:</strong><br><br>' +
            '<div class="col-sm-12 innerboxHeadBig4"><img src="../common_assets/img/greenDotOver.gif" border="0" alt="Family Digital Bulk" name="total_choice_placeholder">' +
            '<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/family_digi_bulk.html\');" ng-mouseover="ppSUMMARY = arrayBaseSummary[19];" ng-mouseleave="ppSUMMARY = varDefaultSummary;"> Family Digital Bulk</a>' +
            '<div class="col-sm-12 marb10"><a href="" ng-click="img_click_Base(\'Entertainment Add-On\',31);" ng-mouseover="ppSUMMARY = arrayBaseSummary[19]; img_on_Base(\'Entertainment Add-On\',31);" ng-mouseleave="ppSUMMARY = varDefaultSummary; img_off_Base(\'Entertainment Add-On\',31);"><img src="../common_assets/img/greenBoxNorm.gif" border="0" alt="Entertainment Add-On" name="Entertainment Add-On"></a>' +
            '<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/entertainment_add_on.html\');" ng-mouseover="ppSUMMARY = arrayBaseSummary[19];" ng-mouseleave="ppSUMMARY = varDefaultSummary;" >Entertainment Add-On</a></div>' +
            '<div class="col-sm-12 marb10"><a href="" ng-click="img_click_Base(\'Choice Add-On FDB\',21);" ng-mouseover="ppSUMMARY = arrayBaseSummary[19]; img_on_Base(\'Choice Add-On FDB\',21);" ng-mouseleave="ppSUMMARY = varDefaultSummary; img_off_Base(\'Choice Add-On FDB\',21);"><img src="../common_assets/img/greenBoxNorm.gif" border="0" alt="Choice Add-On" name="Choice Add-On FDB"></a>' +
            '<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/choice_add_on.html\');" ng-mouseover="ppSUMMARY = arrayBaseSummary[19];" ng-mouseleave="ppSUMMARY = varDefaultSummary;"> Choice Add-On</a></div>' +
            '<div class="col-sm-12 marb10"><a href="" ng-click="img_click_Base(\'Xtra Add-On FDB\',22);" ng-mouseover="ppSUMMARY = arrayBaseSummary[19]; img_on_Base(\'Xtra Add-On FDB\',22);" ng-mouseleave="ppSUMMARY = varDefaultSummary; img_off_Base(\'Xtra Add-On FDB\',22);"><img src="../common_assets/img/greenBoxNorm.gif" border="0" alt="Xtra Add-On" name="Xtra Add-On FDB"></a>' +
            '<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/choice_xtra_add_on_new.html\');" ng-mouseover="ppSUMMARY = arrayBaseSummary[19];" ng-mouseleave="ppSUMMARY = varDefaultSummary;" > Xtra Add-On</a></div>' +
            '<div class="col-sm-12 marb10"><a href="" ng-click="img_click_Base(\'Ultimate Add-On FDB\',26);" ng-mouseover="ppSUMMARY = arrayBaseSummary[19]; img_on_Base(\'Ultimate Add-On FDB\',26);" ng-mouseleave="ppSUMMARY = varDefaultSummary; img_off_Base(\'Ultimate Add-On FDB\',26);"><img src="../common_assets/img/greenBoxNorm.gif" border="0" alt="Ultimate Add-On" name="Ultimate Add-On FDB"></a>' +
            '<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/choice_ultimate_addon.html\');" ng-mouseover="ppSUMMARY = arrayBaseSummary[19];" ng-mouseleave="ppSUMMARY = varDefaultSummary;"> Ultimate Add-On</a></div>' +
            '<div class="col-sm-12 marb10"><a href="" ng-click="img_click_Base(\'Premier Add-On FDB\',23);" ng-mouseover="ppSUMMARY = arrayBaseSummary[19]; img_on_Base(\'Premier Add-On FDB\',23);" ng-mouseleave="ppSUMMARY = varDefaultSummary; img_off_Base(\'Premier Add-On FDB\',23);"><img src="../common_assets/img/greenBoxNorm.gif" border="0" alt="Premier Add-On" name="Premier Add-On FDB"></a>' +
            '<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/premier_add_on.html\');" ng-mouseover="ppSUMMARY = arrayBaseSummary[19];" ng-mouseleave="ppSUMMARY = varDefaultSummary;"> Premier Add-On</a></div></div>' +
            '</div>' +
            '</div>' +

            '<div class="col-sm-12">Note: Some properties may also provide <a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/en_espanol_bulk.html\');">En Espanol Bulk</a> at $0.<br>See <a class="step4" href="http://agentanswercenterstg.directv.com/en-us/res/programming/choice_xtra_digi_bulk.html" target="_blank">Choice Xtra Classic Digital Bulk</a> and <a class="step4" href="http://agentanswercenterstg.directv.com/en-us/res/programming/choice_xtra_add_on.html" target="_blank">Choice Xtra Classic Add-On</a>.</div>' +
            '<div class="innerboxText col-sm-12" style="display:none;">' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Family" name="Family" border="0" style="display:none;">' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Entertainment" name="Entertainment" border="0" style="display:none;" />' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Choice" name="Choice" border="0" style="display:none;">' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Xtra" name="Xtra" border="0" style="display:none;">' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Ultimate" name="Ultimate" border="0" style="display:none;">' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Total Choice Plus TMU" name="Total Choice Plus TMU" border="0" style="display:none;" />' +
            '<img src="../common_assets/img/greenBoxOver.gif" alt="Xtra Digital Bulk" name="Xtra Digital Bulk" border="0" style="display:none;">' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Premier" name="Premier" border="0" style="display:none;" />' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Mas Latino" name="Mas Latino" border="0" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Optimo Mas" name="Optimo Mas" border="0" style="display:none;" />' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Lo Maximo" name="Lo Maximo" border="0" style="display:none;" />' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Preferred Choice" name="Preferred Choice" style="display:none;" />' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Total Choice for TCD/JCD" name="Total Choice for TCD/JCD" style="display:none;">' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Choice Tier for TCD/JCD" name="Choice Tier for TCD/JCD" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Total Choice Plus" name="Total Choice Plus" border="0" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Student Choice Xtra Classic Add-On" name="Student Choice Xtra Classic Add-On" border="0" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Student Choice Add-On" name="Student Choice Add-On" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Student Xtra Add-On" name="Student Xtra Add-On" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Mas Ultra" name="Mas Ultra" style="display:none;"/>' +
            '</div>';


        arrayMDUInnerHTML[5] = '<table width="100px" cellspacing=0 cellpadding=0>' +
            '<tr><td colspan="3" nowrap bgcolor=#e0e1e1><strong>If Total Choice Bulk is on account:</strong></td>' +
            '<td colspan="3">&nbsp;</td></tr>' +
            '<tr>' +
            '<td width="9%" bgcolor=#e0e1e1><img src="../common_assets/img/greenDotOver.gif" border="0" alt="Total Choice Bulk" name="total_choice_placeholder"></td>' +
            '<td colspan=2 bgcolor=#e0e1e1 valign=left><a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/total_choice_bulk.html\');" ng-mouseover="ppSUMMARY = arrayBaseSummary[14];" ng-mouseleave="ppSUMMARY = varDefaultSummary;" >Total Choice Bulk</a></td>' +
            '<td width="6%" class="innerboxHeadBig">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>' +
            '<td width="6%" class="innerboxHeadBig">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>' +
            '<td width="1%" class="innerboxHeadBig">&nbsp;</td>' +
            '</tr>' +
            '<tr>' +
            '<td bgcolor=#e0e1e1><a href="" ng-click="img_click_Base(\'Total Choice Plus TMU\',16);" ng-mouseover="ppSUMMARY = arrayBaseSummary[16]; img_on_Base(\'Total Choice Plus TMU\',16);" ng-mouseleave="ppSUMMARY = varDefaultSummary; img_off_Base(\'Total Choice Plus TMU\',16);"><img src="../common_assets/img/greenBoxNorm.gif" border="0" alt="Total Choice Plus MDU Tier" name="Total Choice Plus TMU"></a></td>' +
            '<td colspan=2 bgcolor=#e0e1e1 valign=left><a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/total_choice_plus_mdu_tier.html\');" ng-mouseover="ppSUMMARY = arrayBaseSummary[15];" ng-mouseleave="ppSUMMARY = varDefaultSummary;" >Total Choice Plus_MDU Tier</a></td>' +
            '<td class="innerboxHeadBig">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>' +
            '<td class="innerboxHeadBig">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>' +
            '<td class="innerboxHeadBig">&nbsp;</td>' +
            '</tr>' +
            '<tr>' +
            '<td colspan="6" height="0px"></td>' +
            '</tr>' +
            '<tr>' +
            '<td class="innerboxText" colspan="6">To add service in Rio: Add/Change Programming > "Other" tab.' +
            '</td>' +
            '<td width="19%" colspan="6" class="innerboxText" style="display:none;">To add service in Rio: Add/Change Programming > "Other" tab.</td>' +
            '</tr>' +
            '<tr>' +
            '<td class="innerboxText" colspan="4" style="display:none;">' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Family" name="Family" border="0" style="display:none;">' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Entertainment" name="Entertainment" border="0" style="display:none;" />' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Choice" name="Choice" border="0" style="display:none;">' +
            '<img src="../common_assets/img/greenBoxOver.gif" alt="Xtra" name="Xtra" border="0" style="display:none;">' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Ultimate" name="Ultimate" border="0"  style="display:none;">' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Premier" name="Premier" border="0" style="display:none;" />' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Basico" name="Basico" border="0" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Optimo Mas" name="Optimo Mas" border="0" style="display:none;" />' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Familiar Ultra" name="Familiar Ultra" border="0" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Lo Maximo" name="Lo Maximo" border="0" style="display:none;" />' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Preferred Choice" name="Preferred Choice" style="display:none;" />' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Total Choice for TCD/JCD" name="Total Choice for TCD/JCD" style="display:none;">' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Choice Tier for TCD/JCD" name="Choice Tier for TCD/JCD" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Ultimate Add-On CDB" name="Ultimate Add-On CDB" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Ultimate Add-On FDB" name="Ultimate Add-On FDB" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Premier Add-On CDB" name="Premier Add-On CDB" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Premier Add-On EDB" name="Premier Add-On EDB" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Ultimate Add-On" name="Ultimate Add-On" border="0" style="display:none;">' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Premier Add-On FDB" name="Premier Add-On FDB" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Choice Add-On FDB" name="Choice Add-On FDB" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Xtra Add-On FDB" name="Xtra Add-On FDB" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Xtra Add-On" name="Xtra Add-On" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Total Choice Plus" name="Total Choice Plus" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Xtra Tier" name="Xtra Tier" border="0" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Choice Add-On EDB" name="Choice Add-On EDB" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Xtra Digital Bulk" name="Xtra Digital Bulk" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Student Choice Add-On" name="Student Choice Add-On" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Student Xtra Add-On" name="Student Xtra Add-On" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Entertainment Add-On" name="Entertainment Add-On" style="display:none;"/>' +
            '</td>' +
            '</tr>' +
            '</table>'

        //TMU / JMU
        arrayMDUInnerHTML[6] = '<div class="col-sm-12">' +
            '<div class="col-sm-4"><strong>If Choice Digital Bulk is on account:</strong><br>' + 
            '<div class="col-sm-12 innerboxHeadBig4 pdr0 pdl0 marb10"><img src="../common_assets/img/greenDotOver.gif" border="0" alt="Choice Digital Bulk" name="total_choice_placeholder">' +
            '<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/choice_digital_bulk.html\');" ng-mouseover="ppSUMMARY = arrayBaseSummary[18] ;" ng-mouseleave="ppSUMMARY = varDefaultSummary;" > Choice Digital Bulk</a></div>' +
            '<div class="col-sm-12 innerboxHeadBig4 pdr0 pdl0 marb10"><a href="" ng-click="img_click_Base(\'Xtra Add-On\',14);" ng-mouseover="ppSUMMARY = arrayBaseSummary[29]; img_on_Base(\'Xtra Add-On\',14);" ng-mouseleave="ppSUMMARY = varDefaultSummary; img_off_Base(\'Xtra Add-On\',14);"><img src="../common_assets/img/greenBoxNorm.gif" border="0" alt="Xtra Add-On" name="Xtra Add-On"></a>' +
            '<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/choice_xtra_add_on_new.html\');" ng-mouseover="ppSUMMARY = arrayBaseSummary[29];" ng-mouseleave="ppSUMMARY = varDefaultSummary;" > Xtra Add-On</a></div>' +
            '<div class="col-sm-12 innerboxHeadBig4 pdr0 pdl0 marb10"><a href="" ng-click="img_click_Base(\'Ultimate Add-On CDB\',25);" ng-mouseover="ppSUMMARY = arrayBaseSummary[30]; img_on_Base(\'Ultimate Add-On CDB\',25);" ng-mouseleave="ppSUMMARY = varDefaultSummary; img_off_Base(\'Ultimate Add-On CDB\',25);"><img src="../common_assets/img/greenBoxNorm.gif" border="0" alt="Ultimate Add-On" name="Ultimate Add-On CDB"></a>' +
            '<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/choice_ultimate_addon.html\');" ng-mouseover="ppSUMMARY = arrayBaseSummary[30];" ng-mouseleave="ppSUMMARY = varDefaultSummary;"> Ultimate Add-On</a></div>' +
            '<div class="col-sm-12 innerboxHeadBig4 pdr0 pdl0 marb10"><a href="" ng-click="img_click_Base(\'Premier Add-On CDB\',27);" ng-mouseover="ppSUMMARY = arrayBaseSummary[31]; img_on_Base(\'Premier Add-On CDB\',27);" ng-mouseleave="ppSUMMARY = varDefaultSummary; img_off_Base(\'Premier Add-On CDB\',27);"><img src="../common_assets/img/greenBoxNorm.gif" border="0" alt="Premier Add-On" name="Premier Add-On CDB"></a>' +
            '<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/premier_add_on.html\');" ng-mouseover="ppSUMMARY = arrayBaseSummary[31];" ng-mouseleave="ppSUMMARY = varDefaultSummary;"> Premier Add-On</a></div>' +

            '</div>' +

            '<div class="col-sm-4" style="background-color:#e0e1e1"><strong>If Entertainment Digital Bulk is on account:</strong><br>'+ 
            '<div style="background-color:#e0e1e1" class="col-sm-12 innerboxHeadBig4 pdr0 pdl0"><img src="../common_assets/img/greenDotOver.gif" border="0" alt="Entertainment Digital Bulk" name="total_choice_placeholder">' +
            '<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/entertainment_digital_bulk.html\');" ng-mouseover="ppSUMMARY = arrayBaseSummary[28] ;" ng-mouseleave="ppSUMMARY = varDefaultSummary;" >Entertainment Digital Bulk</a></div>' +
            '<div class="col-sm-12 innerboxHeadBig4 pdr0 pdl0 marb10"><a href="" ng-click="img_click_Base(\'Choice Add-On EDB\',20);" ng-mouseover="ppSUMMARY = arrayBaseSummary[28]; img_on_Base(\'Choice Add-On EDB\',20);" ng-mouseleave="ppSUMMARY = varDefaultSummary; img_off_Base(\'Choice Add-On EDB\',20);"><img src="../common_assets/img/greenBoxNorm.gif" border="0" alt="Choice Add-On EDB" name="Choice Add-On EDB"></a>' +
            '<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/choice_add_on.html\')" ng-mouseover="ppSUMMARY = arrayBaseSummary[28];" ng-mouseleave="ppSUMMARY = varDefaultSummary;" > Choice Add-On</a></div>' +
            '<div class="col-sm-12 innerboxHeadBig4 pdr0 pdl0 marb10"><a href="" ng-click="img_click_Base(\'Xtra Add-On EDB\',9);" ng-mouseover="ppSUMMARY = arrayBaseSummary[28]; img_on_Base(\'Xtra Add-On EDB\',9);" ng-mouseleave="ppSUMMARY = varDefaultSummary; img_off_Base(\'Xtra Add-On EDB\',9);"><img src="../common_assets/img/greenBoxNorm.gif" border="0" alt="Xtra Add-On EDB" name="Xtra Add-On EDB"></a>' +
            '<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/choice_xtra_add_on_new.html\');" ng-mouseover="ppSUMMARY = arrayBaseSummary[28];" ng-mouseleave="ppSUMMARY = varDefaultSummary;" > Xtra Add-On</a></div>' +
            '<div class="col-sm-12 innerboxHeadBig4 pdr0 pdl0 marb10"><a href="" ng-click="img_click_Base(\'Ultimate Add-On EDB\',17);" ng-mouseover="ppSUMMARY = arrayBaseSummary[28]; img_on_Base(\'Ultimate Add-On EDB\',17);" ng-mouseleave="ppSUMMARY = varDefaultSummary; img_off_Base(\'Ultimate Add-On EDB\',17);"><img src="../common_assets/img/greenBoxNorm.gif" border="0" alt="Ultimate Add-On" name="Ultimate Add-On EDB"></a>' +
            '<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/choice_ultimate_addon.html\');" ng-mouseover="ppSUMMARY = arrayBaseSummary[28];" ng-mouseleave="ppSUMMARY = varDefaultSummary;"> Ultimate Add-On</a></div>' +
            '<div class="col-sm-12 innerboxHeadBig4 pdr0 pdl0 marb10"><a href="" ng-click="img_click_Base(\'Premier Add-On EDB\',15);" ng-mouseover="ppSUMMARY = arrayBaseSummary[28]; img_on_Base(\'Premier Add-On EDB\',15);" ng-mouseleave="ppSUMMARY = varDefaultSummary; img_off_Base(\'Premier Add-On EDB\',15);"><img src="../common_assets/img/greenBoxNorm.gif" border="0" alt="Premier Add-On" name="Premier Add-On EDB"></a>' +
            '<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/premier_add_on.html\');" ng-mouseover="ppSUMMARY = arrayBaseSummary[28];" ng-mouseleave="ppSUMMARY = varDefaultSummary;"> Premier Add-On</a></div>' +

            '</div>' +

            '<div class="col-sm-4"><strong>If Family Digital Bulk is on account:</strong><br>'+ 
            '<div class="col-sm-12 innerboxHeadBig4 pdr0 pdl0"><img src="../common_assets/img/greenDotOver.gif" border="0" alt="Family Digital Bulk" name="total_choice_placeholder">' +
            '<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/family_digi_bulk.html\');" ng-mouseover="ppSUMMARY = arrayBaseSummary[19];" ng-mouseleave="ppSUMMARY = varDefaultSummary;"> Family Digital Bulk</a></div>' +
            '<div class="col-sm-12 innerboxHeadBig4 pdr0 pdl0 marb10"><a href="" ng-click="img_click_Base(\'Entertainment Add-On\',31);" ng-mouseover="ppSUMMARY = arrayBaseSummary[19]; img_on_Base(\'Entertainment Add-On\',31);" ng-mouseleave="ppSUMMARY = varDefaultSummary; img_off_Base(\'Entertainment Add-On\',31);"><img src="../common_assets/img/greenBoxNorm.gif" border="0" alt="Entertainment Add-On" name="Entertainment Add-On"></a>' +
            '<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/entertainment_add_on.html\');" ng-mouseover="ppSUMMARY = arrayBaseSummary[19];" ng-mouseleave="ppSUMMARY = varDefaultSummary;" > Entertainment Add-On</a></div>' +
            '<div class="col-sm-12 innerboxHeadBig4 pdr0 pdl0 marb10"><a href="" ng-click="img_click_Base(\'Choice Add-On FDB\',21);" ng-mouseover="ppSUMMARY = arrayBaseSummary[19]; img_on_Base(\'Choice Add-On FDB\',21);" ng-mouseleave="ppSUMMARY = varDefaultSummary; img_off_Base(\'Choice Add-On FDB\',21);"><img src="../common_assets/img/greenBoxNorm.gif" border="0" alt="Choice Add-On" name="Choice Add-On FDB"></a>' +
            '<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/choice_add_on.html\');" ng-mouseover="ppSUMMARY = arrayBaseSummary[19];" ng-mouseleave="ppSUMMARY = varDefaultSummary;"> Choice Add-On</a></div>' +
            '<div class="col-sm-12 innerboxHeadBig4 pdr0 pdl0 marb10"><a href="" ng-click="img_click_Base(\'Xtra Add-On FDB\',22);" ng-mouseover="ppSUMMARY = arrayBaseSummary[19]; img_on_Base(\'Xtra Add-On FDB\',22);" ng-mouseleave="ppSUMMARY = varDefaultSummary; img_off_Base(\'Xtra Add-On FDB\',22);"><img src="../common_assets/img/greenBoxNorm.gif" border="0" alt="Xtra Add-On" name="Xtra Add-On FDB"></a>' +
            '<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/choice_xtra_add_on_new.html\');" ng-mouseover="ppSUMMARY = arrayBaseSummary[19];" ng-mouseleave="ppSUMMARY = varDefaultSummary;" > Xtra Add-On</a></div>' +
            '<div class="col-sm-12 innerboxHeadBig4 pdr0 pdl0 marb10"><a href="" ng-click="img_click_Base(\'Ultimate Add-On FDB\',26);" ng-mouseover="ppSUMMARY = arrayBaseSummary[19]; img_on_Base(\'Ultimate Add-On FDB\',26);" ng-mouseleave="ppSUMMARY = varDefaultSummary; img_off_Base(\'Ultimate Add-On FDB\',26);"><img src="../common_assets/img/greenBoxNorm.gif" border="0" alt="Ultimate Add-On" name="Ultimate Add-On FDB"></a>' +
            '<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/choice_ultimate_addon.html\');" ng-mouseover="ppSUMMARY = arrayBaseSummary[19];" ng-mouseleave="ppSUMMARY = varDefaultSummary;"> Ultimate Add-On</a></div>' +
            '<div class="col-sm-12 innerboxHeadBig4 pdr0 pdl0 marb10"><a href="" ng-click="img_click_Base(\'Premier Add-On FDB\',23);" ng-mouseover="ppSUMMARY = arrayBaseSummary[19]; img_on_Base(\'Premier Add-On FDB\',23);" ng-mouseleave="ppSUMMARY = varDefaultSummary; img_off_Base(\'Premier Add-On FDB\',23);"><img src="../common_assets/img/greenBoxNorm.gif" border="0" alt="Premier Add-On" name="Premier Add-On FDB"></a>' +
            '<a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/premier_add_on.html\');" ng-mouseover="ppSUMMARY = arrayBaseSummary[19];" ng-mouseleave="ppSUMMARY = varDefaultSummary;"> Premier Add-On</a></div>' +

            '</div>' +

            '<div class="col-sm-12">Note: Some properties may also provide <a class="step4" href="javascript:newWindow(\'http://agentanswercenterstg.directv.com/en-us/res/programming/en_espanol_bulk.html\');">En Espanol Bulk</a> at $0.<br>See <a class="step4" href="http://agentanswercenterstg.directv.com/en-us/res/programming/choice_xtra_digi_bulk.html" target="_blank">Choice Xtra Classic Digital Bulk</a> and <a class="step4" href="http://agentanswercenterstg.directv.com/en-us/res/programming/choice_xtra_add_on.html" target="_blank">Choice Xtra Classic Add-On</a>.</div>' +
            '<div class="col-sm-12 innerboxText" style="display:none;">' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Family" name="Family" border="0" style="display:none;" />' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Entertainment" name="Entertainment" border="0" style="display:none;" />' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Choice" name="Choice" border="0" style="display:none;" />' +
            '<img src="../common_assets/img/greenBoxOver.gif" alt="Xtra" name="Xtra" border="0" style="display:none;" />' +
            '<img src="../common_assets/img/greenBoxOver.gif" alt="Ultimate" name="Ultimate" border="0" style="display:none;" />' +
            '<img src="../common_assets/img/greenBoxOver.gif" alt="Xtra Digital Bulk" name="Xtra Digital Bulk" border="0" style="display:none;" />' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Premier" name="Premier" border="0" style="display:none;" />' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Mas Latino" name="Mas Latino" border="0" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Optimo Mas" name="Optimo Mas" border="0" style="display:none;" />' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Lo Maximo" name="Lo Maximo" border="0" style="display:none;" />' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Preferred Choice" name="Preferred Choice" style="display:none;" />' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Total Choice for TCD/JCD" name="Total Choice for TCD/JCD" style="display:none;" />' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Choice Tier for TCD/JCD" name="Choice Tier for TCD/JCD" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Total Choice Plus" name="Total Choice Plus" border="0" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Student Choice Xtra Classic Add-On" name="Student Choice Xtra Classic Add-On" border="0" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Total Choice Plus TMU" name="Total Choice Plus TMU" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Student Choice Add-On" name="Student Choice Add-On" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Student Xtra Add-On" name="Student Xtra Add-On" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Mas Ultra" name="Mas Ultra" style="display:none;"/>' +
            '</div>' +

            '</div>';

        //default english div
        arrayMDUInnerHTML[7] = '<div class="col-sm-12 innerboxHeadBig pdr0 pdl0 marb10">' +
            '<div class="col-sm-3 pdr0 pdl0">' +
            '<a href="" ng-click="img_click_Base(\'Family\',1);" ng-mouseleave="ppSUMMARY = varDefaultSummary; img_off_Base(\'Family\',1);" ng-mouseover="ppSUMMARY = arrayBaseSummary[1]; img_on_Base(\'Family\',1);">' +
            '<img alt="Family" border="0" id="Family" name="Family" src="../common_assets/img/greenBoxNorm.gif"></a>' +
            '<a class="step3" href="javascript:newWindow(\'http://agentanswercenter.directv.com/en-us/res/programming/family.html\');" ng-mouseleave="ppSUMMARY = varDefaultSummary;" ng-mouseover="ppSUMMARY = arrayBaseSummary[1]; importXML();"> Family</a>' +
            '</div>' +
            '<div class="col-sm-3 pdr0 pdl0">' +
            '<a href="" ng-click="img_click_Base(\'Xtra%20Add-On%20FDB\',32);" ng-mouseleave="ppSUMMARY = varDefaultSummary; img_off_Base(\'Xtra Add-On FDB\',22);" ng-mouseover="ppSUMMARY = arrayBaseSummary[32]; img_on_Base(\'Xtra Add-On FDB\',22);">' +
            '<img alt="Select" border="0" id="Select" name="Select" src="../common_assets/img/greenBoxNorm.gif"></a>' +
            '<a class="step3" href="javascript:newWindow(\'http://agentanswercenter.directv.com/en-us/res/programming/select.html\');" ng-mouseleave="ppSUMMARY = varDefaultSummary;" ng-mouseover="ppSUMMARY = arrayBaseSummary[32]; importXML();"> Select</a>' +
            '</div>' +
            '<div class="col-sm-3 pdr0 pdl0">' +
            '<a href="" ng-click="img_click_Base(\'Entertainment\',28);" ng-mouseleave="ppSUMMARY = varDefaultSummary; img_off_Base(\'Entertainment\',28);" ng-mouseover="ppSUMMARY = arrayBaseSummary[5]; img_on_Base(\'Entertainment\',28);">' +
            '<img alt="Entertainment" border="0" id="Entertainment" name="Entertainment" src="../common_assets/img/greenBoxNorm.gif"></a>' +
            '<a class="step3" href="javascript:newWindow(\'http://agentanswercenter.directv.com/en-us/res/programming/entertainment_2.html\');" ng-mouseleave="ppSUMMARY = varDefaultSummary;" ng-mouseover="ppSUMMARY = arrayBaseSummary[5]; importXML();"> Entertainment</a>' +
            '</div>' +
            '<div class="col-sm-3 pdr0 pdl0">' +
            '<a href="" ng-click="img_click_Base(\'Choice\',2);" ng-mouseleave="ppSUMMARY = varDefaultSummary; img_off_Base(\'Choice\',2);" ng-mouseover="ppSUMMARY = arrayBaseSummary[2]; img_on_Base(\'Choice\',2);">' +
            '<img alt="Choice" border="0" id="Choice" name="Choice" src="../common_assets/img/greenBoxNorm.gif"></a>' +
            '<a class="step3" href="javascript:newWindow(\'http://agentanswercenter.directv.com/en-us/res/programming/choice.html\');" ng-mouseleave="ppSUMMARY = varDefaultSummary;" ng-mouseover="ppSUMMARY = arrayBaseSummary[2]; importXML();"> Choice</a>' +
            '</div>' +
            '</div>' +
            '<div class="col-sm-12 innerboxHeadBig pdr0 pdl0 marb10">' +
            '<div class="col-sm-3 pdr0 pdl0">' +
            '<a href="" ng-click="img_click_Base(\'Xtra\',3);" ng-mouseleave="ppSUMMARY = varDefaultSummary; img_off_Base(\'Xtra\',3);" ng-mouseover="ppSUMMARY = arrayBaseSummary[3]; img_on_Base(\'Xtra\',3);">' +
            '<img alt="Xtra" border="0" id="Xtra" name="Xtra" src="../common_assets/img/greenBoxNorm.gif"></a>' +
            '<a class="step3" href="javascript:newWindow(\'http://agentanswercenter.directv.com/en-us/res/programming/choice_xtra_new.html\');" ng-mouseleave="ppSUMMARY = varDefaultSummary;" ng-mouseover="ppSUMMARY = arrayBaseSummary[3]; importXML();"> Xtra</a>' +
            '</div>' +
            '<div class="col-sm-3 pdr0 pdl0">' +
            '<a href="" ng-click="img_click_Base(\'Ultimate\',4);" ng-mouseleave="ppSUMMARY = varDefaultSummary; img_off_Base(\'Ultimate\',4);" ng-mouseover="ppSUMMARY = arrayBaseSummary[4]; img_on_Base(\'Ultimate\',4);">' +
            '<img alt="Ultimate" border="0" id="Ultimate" name="Ultimate" src="../common_assets/img/greenBoxNorm.gif"></a>' +
            '<a class="step3" href="javascript:newWindow(\'http://agentanswercenter.directv.com/en-us/res/programming/choice_ultimate.html\');" ng-mouseleave="ppSUMMARY = varDefaultSummary;" ng-mouseover="ppSUMMARY = arrayBaseSummary[4]; importXML();"> Ultimate</a>' +
            '</div>' +
            '<div class="col-sm-3 pdr0 pdl0">' +
            '<a href="" ng-click="img_click_Base(\'Premier\',6);" ng-mouseleave="ppSUMMARY = varDefaultSummary; img_off_Base(\'Premier\',6);" ng-mouseover="ppSUMMARY = arrayBaseSummary[6]; img_on_Base(\'Premier\',6);">' +
            '<img alt="Premier" border="0" id="Premier" name="Premier" src="../common_assets/img/greenBoxNorm.gif"></a>' +
            '<a class="step3" href="javascript:newWindow(\'http://agentanswercenter.directv.com/en-us/res/programming/premier.html\');" ng-mouseleave="ppSUMMARY = varDefaultSummary;" ng-mouseover="ppSUMMARY = arrayBaseSummary[6]; importXML();"> Premier</a>'+
            '</div>' +
            '<div class="col-sm-3 pdr0 pdl0">' +
            '<a href="" ng-click="img_click_Base(\'Preferred Extra\',33);" ng-mouseleave="ppSUMMARY = varDefaultSummary; img_off_Base(\'Preferred Extra\',33);" ng-mouseover="ppSUMMARY = arrayBaseSummary[33]; img_on_Base(\'Preferred Extra\',33);">' +
            '<img alt="Preferred Xtra" border="0" id="Preferred_extra" name="Preferred Extra" src="../common_assets/img/greenBoxNorm.gif"></a>' +
            '<a class="step3" href="javascript:newWindow(\'http://agentanswercenter.directv.com/en-us/res/programming/preferred_xtra.html\');" ng-mouseleave="ppSUMMARY = varDefaultSummary;" ng-mouseover="ppSUMMARY = arrayBaseSummary[33]; importXML();"> Preferred Xtra</a>' +
            '</div>' +
            '</div>' +
            '<div class="col-sm-12 pdr0 pdl0">' +
            'Base package required for premiums/additional services. See' +
            '<a class="step3" href="javascript:newWindow(\'http://agentanswercenter.directv.com/en-us/res/programming/programming_purchase_reqs.html\');"> Package Requirements</a>.' +
            '</div>';
        // MDUdiv default innerhtml

        arrayMDUInnerHTML[8] = '&nbsp;<br />' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Preferred Choice" name="Preferred Choice" border="0" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Total Choice" name="Total Choice for TCD/JCD" border="0" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Choice Tier" name="Choice Tier for TCD/JCD" border="0" style="display:none;"/>' +
            '<a id="total_choice_plus_anchor" onMouseOver=\'return false;\' onMouseOut=\'return false;\' href=\'#\'><img src="../common_assets/img/greenBoxNorm.gif" alt="Total Choice Plus" name="Total Choice Plus" border="0" style="display:none;"/></a><br />' +
            '<a id="xtra_tier_anchor" onMouseOver=\'return false;\' onMouseOut=\'return false;\' href=\'#\'><img src="../common_assets/img/greenBoxNorm.gif" alt="Xtra Tier" name="Xtra Tier" border="0" style="display:none;"/></a><br />' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Xtra Add-On" name="Xtra Add-On" border="0" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Premier Add-On" name="Premier Add-On" border="0" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Total Choice Plus TMU" name="Total Choice Plus TMU" border="0" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Xtra Add-On FDB" name="Xtra Add-On FDB" border="0" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Xtra Add-On EDB" name="Xtra Add-On EDB" border="0" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Choice Add-On FDB" name="Choice Add-On FDB" border="0" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Entertainment Add-On" name="Entertainment Add-On" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Premier Add-On FDB" name="Premier Add-On FDB" border="0" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Student Choice Add-On" name="Student Choice Add-On" style="display:none;"/>' +
            '<img src="../common_assets/img/greenBoxNorm.gif" alt="Student Xtra Add-On" name="Student Xtra Add-On" style="display:none;"/>';

        function xhrSuccess() {
            this.callback.apply(this, this.arguments);
        }

        function xhrError() {
            console.error(this.statusText);
        }

        function loadFile(sURL, fCallback /*, argumentToPass1, argumentToPass2, etc. */ ) {
            var oReq = new XMLHttpRequest();
            oReq.callback = fCallback;
            oReq.arguments = Array.prototype.slice.call(arguments, 2);
            oReq.onload = xhrSuccess;
            oReq.onerror = xhrError;
            oReq.open("get", sURL, true);
            oReq.send(null);
        }

        function importXML() {
            // console.log('importXML');
        }

        // JavaScript Document
        // JavaScript Document
        // code needed for floating layer //
        //Joe's version
        var floatX = 495, //Defines the horizontal distance from the border
        floatY = 32, //Defines the vertical distance from the border.
        layerwidth = 200, //Defines the width of the menu layer.
        layerheight = 400, //Defines the height of the menu layer.
        halign = "left", //Defines which border floatX should be counted from. (left, center, right)
        valign = "top", //Defines which border floatY should be counted from. (top, center, bottom)
        delayspeed = 1, //Defines the time delay before the layer's position is updated. (0-3)
        numLayers = 2;

        // check for changed client width 1131 = full screen on 1152x864
        function getTheWidth() {
            if ((document.body.clientWidth == "1131") || (document.body.clientWidth == "1170")) {
                document.styleSheets[1].disabled = true;
                document.styleSheets[0].disabled = false;
            } else {
                document.styleSheets[0].disabled = true;
                document.styleSheets[1].disabled = false;
            }
        }



        // Constants ////////////////////////////////////////////////////////////////////////////////////
        var xmlDoc2;
        var varBase = new Array();
        var numDVR = new Array(); //DVR prices
        var numARS = new Array();
        var varProtect = new Array(); //0 because doesn't start 'til 2nd month
        var varHDx = 0; //HD ExtraPack doesn't start 'til 3rd month
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

        var image_check_src = '../common_assets/img/greenBoxDown.gif';
        var image_box_src = '../common_assets/img/greenBoxNorm.gif';


        // GLOBALS ////////////////////////////////////////////////////////////////////////////////////

        var varImageOn = 0; //Base Package flag
        var xImageOn = 0;
        var spanishLayerVis = 0; //Show the spanish layer? 0=no, 1=yes
        var MDULayerVis = 0; //Show the MDU layer? 0=no, 1=yes
        var varImageOn_ds = 0; //Number of tv's
        var varImageOn_Protect = 0; //Protection Plan flag
        var varImageOn_DVR = 0; //DVR service flag
        var varImageOn_ARS = 0;
        var varImageOn_HD_Access = 0; //HD Access flag
        var varImageOn_MRV = 0; //MRV flag
        var varImageOn_HDExtraPack = 0; //HD Extra Pack flag
        var varImageOn_TotChoicePlus = 0; //For the $5 add on package for select
        var varImageOn_Xtier = 0; //For the xtra tier $5 add on package 
        var varImageOn_familiar_mdu = 0; //For the Familiar MDU Tier $5 add on package
        var varImageOn_TC_plus_mdu = 0; //For the TC PLus MDU Tier $5 add on package
        var varImageOn_xtra_addon_mdu = 0; // Xtra Add_On TMU $14.99 addition
        var varImageOn_premier_addon_mdu = 0; // Premier Add_On TMU $65.99 addition
        var varImageOn_choice_addon_fdb = 0;
        var varImageOn_choice_xtra_addon_fdb = 0;
        var varImageOn_choice_ultimate_addon_cdb = 0;
        var varImageOn_choice_ultimate_addon_fdb = 0;
        var varImageOn_choice_premier_addon_cdb = 0;
        var varImageOn_choice_xtra_digital_bulk = 0;
        var varImageOn_choice_ultimate_addon = 0;
        var varImageOn_premier_addon_fdb = 0;
        var varImageOn_premier_addon_cdb = 0;
        var varPremierClicked = false; //Premier Package flag - true when premier base package is clicked
        var varMainWindow; //used to pop open a new window
        var varMirrorFeeWaiver = 1; // 1 for normal, 3 for TMW or JMW account selected
        var varProtectTotal = 0.00;
        var varHD_ExtraTotal = 0.00;
        var varHD_AccessTotal = 0.00;
        var siteBit = ""; //This is the bit that determines what site they're coming from

        var varImageOn_Premier = 0;
        var varMRVMonthly = 0;

        getSiteBit();
        // start image rollovers ///////////////////////////////////////////////////////////////////////

        var myTab = new Array(); //<------this array is used in the function "img_click_Base".  it is used to distinguish what image to turn off
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




        var myTab_BaseNum = new Array(),
        m; //<------this array is used in the function "img_click_Base".  needed since images were not in order...
        for (m = 1; m < 34; m++) {
            myTab_BaseNum[m] = m;
        }

        var myTab_Prem = new Array(); //<------this array is used in the function "img_click_Prem".  it is used to distinguish what image to turn off
        myTab_Prem[1] = "hbo";
        myTab_Prem[2] = "showtime";
        myTab_Prem[3] = "starz";
        myTab_Prem[4] = "cinemax";
        myTab_Prem[5] = "sportspack";

        var myFlag_Prem = new Array();
        for (var a = 1; a <= 6; a++) {
            myFlag_Prem[a] = false;
        }

        //<------this array is used in the function "img_click_ds".  it is used to distinguish what image to turn off
        var myTab_ds = new Array();
        for (var b = 1; b <= 7; b++) {
            myTab_ds[b] = '' + b + 'receiver';
        }


        //=========start preloading images=========
        var numRolImages = 33;
        var rollover = true;

        var dtvImages = new Array(numRolImages * 2),
        i;
        for (i = 1; i <= numRolImages; i++) {
            dtvImages[i] = new Image();
            dtvImages[i + numRolImages] = new Image();

            dtvImages[i].src = "../common_assets/img/greenBoxNorm.gif";
            dtvImages[i + numRolImages].src = "../common_assets/img/greenBoxDown.gif";
        }

        dtvImages[65] = new Image();
        dtvImages[65].src = "../common_assets/img/greenBoxOver.gif";
        var numRolImages_ds = 6; //direct sales preload (for number of tv's)
        var dtvImages_ds = new Array(numRolImages_ds * 2)
        for (i = 1; i <= numRolImages_ds; i++) {
            dtvImages_ds[i] = new Image();
            dtvImages_ds[i + numRolImages_ds] = new Image();
            var srcPath1PieceOne = "button" + i + "normal.png",
            srcPath2PieceOne = "button" + i + "down.png";
            dtvImages_ds[i].src = "../common_assets/img/" + srcPath1PieceOne.replace("/", "");
            dtvImages_ds[i + numRolImages_ds].src = "../common_assets/img/" + srcPath2PieceOne.replace("/", "");
            var innerStuff = '\r\n Image:' + i + '.src =' + dtvImages_ds[i].src + '\r\n Image:' + (i + numRolImages_ds) + '.src =' + dtvImages_ds[i + numRolImages_ds].src + '';
        }


        //=========end preloading images=========

        //============ PRE LOAD PRICING =================
        if (window.ActiveXObject) {

            xmlDoc2 = new ActiveXObject("Microsoft.XMLDOM");
            xmlDoc2.async = false;
            xmlDoc2.load('tools/programming_package/packagepricesx.xml');
            getPriceMatrix();


        } else {
            function showMessage() {
                xmlDoc2 = this.responseXML;
                getPriceMatrix();
            }
            loadFile('tools/programming_package/packagepricesx.xml', showMessage);
        }

        function getPriceMatrix() {
            var AllPackages = xmlDoc2.getElementsByTagName('package');
            varBase[0] = 0.00; //default value
            varBase[1] = dataProg.packages[10].price; // parseFloat(AllPackages[10].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));      //29.99;            //Family#
            varBase[2] = dataProg.packages[3].price; // parseFloat(AllPackages[3].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));        //52.99;            //Choice#
            varBase[3] = dataProg.packages[5].price; // parseFloat(AllPackages[135].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));      //57.99;            //Xtra#

            varBase[4] = dataProg.packages[6].price; // parseFloat(AllPackages[102].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));      //68.99;            //Ultimate#
            varBase[5] = 999; // parseFloat(AllPackages[104].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));     //19.99;            //Basic Choice#

            varBase[6] = dataProg.packages[7].price; // parseFloat(AllPackages[27].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));       //104.99;           //Premier#
            varBase[7] = dataProg.packages[27].price; // parseFloat(AllPackages[130].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));     //34.99;            //Mas Latino#
            varBase[8] = dataProg.packages[28].price; // parseFloat(AllPackages[90].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));      //36.99;            //Optimo Mas#
            varBase[9] = dataProg.packages[235].price; // parseFloat(AllPackages[143].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));        //Xtra Add-On EDB#
            varBase[10] = dataProg.packages[20].price; // parseFloat(AllPackages[11].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));     //104.99;           //Lo Maximo#
            varBase[11] = dataProg.packages[30].price; // parseFloat(AllPackages[26].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));     //32.99;            //Preferred Choice#
            varBase[12] = dataProg.packages[233].price; // parseFloat(AllPackages[38].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));        //10.99;            //Total Choice for TCD/JCD
            varBase[13] = dataProg.packages[169].price; // parseFloat(AllPackages[59].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));        //19.99;            //Choice Tier for TCD/JCD
            varBase[14] = dataProg.packages[62].price; // parseFloat(AllPackages[142].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));        //17.99->19.99;         //Xtra Add-On
            varBase[15] = dataProg.packages[244].price; // parseFloat(AllPackages[147].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));       //17.99;            //Prmeier Add On EDB
            varBase[16] = dataProg.packages[232].price; // parseFloat(AllPackages[121].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));       //5.00;         //TC Plus TMU
            varBase[17] = dataProg.packages[238].price; // parseFloat(AllPackages[146].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));;  //Ultimate Add-On EDB
            varBase[18] = 990; // parseFloat(AllPackages[36].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));     //19.99;            //total_choice_plus  Total Choice Plus
            varBase[19] = 0;
            varBase[20] = dataProg.packages[167].price; // parseFloat(AllPackages[145].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));       //Choice Add On EDB
            varBase[21] = dataProg.packages[175].price; // parseFloat(AllPackages[106].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));       //Choice Add On FDB
            varBase[22] = dataProg.packages[236].price; // parseFloat(AllPackages[144].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));       //27.99;            //Xtra Add-On FDB"
            varBase[23] = dataProg.packages[243].price; // parseFloat(AllPackages[107].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));       //80.99;            //Premier Add-On FDB
            varBase[24] = dataProg.packages[17].price; // parseFloat(AllPackages[98].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$","")); // mas ultra
            varBase[25] = dataProg.packages[62].price; // parseFloat(AllPackages[118].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));        //29.99 -> 31.99;           //cultimate add on choice digital bulk
            varBase[26] = dataProg.packages[239].price; // parseFloat(AllPackages[119].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));       //32.99;            //ultimate add on FDB
            varBase[27] = dataProg.packages[240].price; // parseFloat(AllPackages[120].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));       //70.99;            

            //Entertainment
            varBase[28] = dataProg.packages[2].price; // parseFloat(AllPackages[161].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));                 
            varBase[29] = dataProg.packages[69].price; // parseFloat(AllPackages[128].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$","")); // Student Choice Add an   
            varBase[30] = dataProg.packages[68].price; // parseFloat(AllPackages[129].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$","")); // Student Xtra Add on
            varBase[31] = dataProg.packages[39].price; // parseFloat(AllPackages[141].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$","")); // FDB Entertainment Add On
            varBase[32] = dataProg.packages[1].price; // parseFloat(AllPackages[125].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$","")); // Select

            varBase[33] = dataProg.packages[4].price; // parseFloat(AllPackages[179].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$","")); // Preferred Extra

            varBase[34] = dataProg.packages[28].price; // parseFloat(AllPackages[90].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$","")); // Optimo Mas

            varBase[35] = dataProg.packages[241].price; // Choice Xtra Classic MDU Tier


            varHBOadjust = dataProg.fees[157].price; // parseFloat(AllPackages[65].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));   //2.00;         //HBO adjustment value

            varPREM1 = dataProg.fees[186].price; // parseFloat(AllPackages[66].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));   //12.99;
            varPREM2 = dataProg.fees[220].price; // parseFloat(AllPackages[67].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));   //11.01;
            varPREM3 = dataProg.fees[228].price; // parseFloat(AllPackages[68].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));   //10.00;
            varPREM4 = dataProg.fees[187].price; // parseFloat(AllPackages[69].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));   //8.00;
            varPREM5 = dataProg.fees[184].price; // parseFloat(AllPackages[70].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));   //7.00;

            numARS[0] = 0.00;
            numARS[1] = dataProg.fees[158].price; // parseFloat(AllPackages[134].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$","")); //ARS Monthly Fee 25
            numARS[2] = 0.00;
            //numARS[2] = parseFloat(AllPackages[133].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$","")); //ARS DVR Service


            numDVR[0] = 0.00; //default value
            numDVR[1] = dataProg.fees[160].price; // parseFloat(AllPackages[138].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$","")); //ARS receiver = DVR Monthly Fee
            numDVR[2] = 0.00; //advanced products

            varMirrorFee = dataProg.fees[156].price; // parseFloat(AllPackages[75].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));   //4.99;         //mirroring fee per extra receiver
            varHDACCESSmonthly = dataProg.fees[161].price; // parseFloat(AllPackages[139].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));
            varMRVMonthly = dataProg.fees[208].price; // parseFloat(AllPackages[115].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));//3.00

            varHDExtraPackMonthly = dataProg.fees[201].price; // parseFloat(AllPackages[78].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));      //4.99/mo       //HD Extra Pack Plan (monthly)first 3 months free

            varProtect[0] = dataProg.fees[202].price; // parseFloat(AllPackages[79].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));          //5.99/mo Protection Plan (monthly)
            varProtect[1] = 0.00; //  Protection Plan (1-pay - expired)
            varProtect[2] = 0.00; //  "None" selected 


            varProtectionProtectionPlanMonthly = dataProg.fees[205].price; //parseFloat(AllPackages[163].getElementsByTagName("price")[0].childNodes[0].nodeValue.replace("$",""));
        }

        function importPricingXML() {
                importXML();
            }
            //=========start mouseover=========
        var img_on = function(loc, img) {
            if (rollover) {
                img += numRolImages; //img=img+numRolImages
                document.images[loc].src = dtvImages[img].src;
            }
            importPricingXML();
        }

        var img_on_Base = function(loc, img) { //loc is image name, img is image number

            if (rollover) {
                document.images[loc].src = dtvImages[myTab_BaseNum[img] + numRolImages].src;
                if (img == 22) {
                    if (document.images['Select'])
                        document.images['Select'].src = image_check_src;
                }
            }
            importPricingXML();
        }

        ////////////////////////////////start primary credit update/////////////////////////////////////////

        var img_on_primaryCredit = function() {
            if (rollover) {
                document.images['PrimaryCredit'].src = image_check_src;
            }
            importPricingXML();
        }


        var img_off_primaryCredit = function() {
            if (rollover && !addPrimaryCredit) {
                document.images['PrimaryCredit'].src = image_box_src;
            }
        }

        var img_click_primaryCredit = function() {

            if (!addPrimaryCredit) {
                document.images['PrimaryCredit'].src = image_check_src;
                addPrimaryCredit = true;
            } else {
                addPrimaryCredit = false;
                document.images['PrimaryCredit'].src = image_box_src;
            }

            motherCalc();

        }

        ////////////////////////////////end primary credit update/////////////////////////////////////////



        var img_on_ds = function(loc, img) {
                if (rollover) {
                    img += numRolImages_ds; //img=img+numRolImages_ds
                    document.images[loc].src = dtvImages_ds[img].src;
                }
                importPricingXML();
            }
            //=========end mouseover=========


        //=========start mouseout=========
        var img_off_Base = function(loc, img) {
            changed = 0;

            if (rollover) {
                if (varImageOn != img) {
                    if ((img == 18) && (varImageOn_TotChoicePlus == 1)) {
                        //nothing
                        changed = 0;
                    } else if ((img == 9) && (varImageOn_choice_ultimate_addon == 1)) {
                        // again, nothing
                        changed = 0;
                    } else if ((img == 13) && (varImageOn_Xtier == 1)) {
                        // again, nothing
                        changed = 0;
                    } else if ((img == 14) && (varImageOn_xtra_addon_mdu == 1)) {
                        // again, nothing
                        changed = 0;
                    } else if ((img == 15) && (varImageOn_premier_addon_mdu == 1)) {
                        // again, nothing
                        changed = 0;
                    } else if ((img == 16) && (varImageOn_TC_plus_mdu == 1)) {
                        // again, nothing
                        changed = 0;
                    } else if ((img == 21) && (varImageOn_choice_addon_fdb == 1)) {
                        // again, nothing
                        changed = 0;
                    } else if ((img == 22) && (varImageOn_choice_xtra_addon_fdb == 1)) {
                        // again, nothing
                        changed = 0;
                    } else if ((img == 23) && (varImageOn_premier_addon_fdb == 1)) {
                        // again, nothing
                        changed = 0;
                    } else if ((img == 24) && (varImageOn_choice_xtra_digital_bulk == 1)) {
                        // again, nothing
                        changed = 0;
                    } else if ((img == 25) && (varImageOn_choice_ultimate_addon_cdb == 1)) {
                        // again, nothing
                        changed = 0;
                    } else if ((img == 26) && (varImageOn_choice_ultimate_addon_fdb == 1)) {
                        // again, nothing
                        changed = 0;
                    } else if ((img == 27) && (varImageOn_premier_addon_cdb == 1)) {
                        // again, nothing
                        changed = 0;
                    } else if (document.images[loc].src != dtvImages[65].src) {
                        changed = 1;
                        document.images[loc].src = dtvImages[myTab_BaseNum[img]].src;
                    }
                }

                if (img == 22 && !isSelectClick) {
                    if (document.images['Select'])
                        document.images['Select'].src = image_box_src;
                }
            }
        }

        var img_off_Prem = function(loc, img) {
            if (rollover) {
                for (var n = 1; n <= 5; ++n) {
                    if (myTab_Prem[n] == loc) {
                        if (myFlag_Prem[n] == false) {
                            document.images[loc].src = dtvImages[img].src;
                        }
                    }
                }
            }
        }


        var img_off_Protect = function(loc, img) {
            if (rollover) {
                if (varImageOn_Protect != img) { //<-----this checks which tab is on and disables "onmouseout" state
                    document.images[loc].src = dtvImages[img].src;
                }
            }
        }

        var img_off_hdextra = function(loc, img) {
            if (rollover) {
                if (varImageOn_HDExtraPack != img) { //<-----this checks which tab is on and disables "onmouseout" state            
                    document.images[loc].src = dtvImages[img].src;
                }
            }
        }


        var img_off_premier = function(loc, img) {
            if (rollover) {
                if (varImageOn_Premier != img) { //<-----this checks which tab is on and disables "onmouseout" state            
                    document.images[loc].src = dtvImages[img].src;
                }
            }
        }




        var img_off_ds = function(loc, img) {
            if (rollover) {
                if (varImageOn_ds != img) { //<-----this checks which tab is on and disables "onmouseout" state
                    document.images[loc].src = dtvImages_ds[img].src;
                }
            }
        }

        var img_off_MRV = function(loc, img) {
            if (rollover) {
                if (varImageOn_MRV == 1) { //<-----this checks which tab is on and disables "onmouseout" state
                    document.images["MRV1"].src = dtvImages[42].src; //on
                    document.images["MRV2"].src = dtvImages[10].src; //off
                } else if (varImageOn_MRV == 2) {
                    document.images["MRV1"].src = dtvImages[10].src; //off
                    document.images["MRV2"].src = dtvImages[42].src; //on
                } else {
                    document.images["MRV1"].src = dtvImages[10].src; //off
                    document.images["MRV2"].src = dtvImages[12].src; //off
                }
            }
        }

        var img_off_HD_Access = function(loc, img) {
            if (rollover) {
                if (varImageOn_HD_Access == 1) { //<-----this checks which tab is on and disables "onmouseout" state
                    document.images["HD_Access1"].src = dtvImages[42].src; //on
                    document.images["HD_Access2"].src = dtvImages[10].src; //off
                } else if (varImageOn_HD_Access == 2) {
                    document.images["HD_Access1"].src = dtvImages[10].src; //off
                    document.images["HD_Access2"].src = dtvImages[42].src; //on
                } else {
                    document.images["HD_Access1"].src = dtvImages[10].src; //off
                    document.images["HD_Access2"].src = dtvImages[12].src; //off
                }
            }
        }



        //=========end mouseout=========

        var total_choice_plus_off = function() {
            total_choice_plus_anchor.setAttribute('ng-mouseover', '');
            total_choice_plus_anchor.href = '';
            total_choice_plus_anchor.setAttribute('ng-click', '');
            total_choice_plus_anchor.setAttribute('ng-mouseleave', '');
            $compile(document.getElementById("total_choice_plus_anchor"))($scope);
        };

        var total_choice_plus_on = function() {
            total_choice_plus_anchor.setAttribute('ng-mouseover', 'ppSUMMARY = arrayBaseSummary[10]; img_on_Base(\'Total Choice Plus\',18);');
            total_choice_plus_anchor.setAttribute('ng-mouseleave', 'ppSUMMARY = varDefaultSummary; img_off_Base(\'Total Choice Plus\',18);'); /**/
            total_choice_plus_anchor.setAttribute('ng-click', 'img_click_Base(\'Total Choice Plus\',18);');
            total_choice_plus_anchor.href = '';
            $compile(document.getElementById("total_choice_plus_anchor"))($scope);
        };

        var xtra_tier_off = function() {
            xtra_tier_anchor.setAttribute('ng-mouseover', '');
            xtra_tier_anchor.href = '';
            xtra_tier_anchor.setAttribute('ng-click', '');
            xtra_tier_anchor.setAttribute('ng-mouseleave', '');
            $compile(document.getElementById("xtra_tier_anchor"))($scope);
        };

        var xtra_tier_on = function() {
            xtra_tier_anchor.setAttribute('ng-mouseover', 'ppSUMMARY = arrayBaseSummary[11]; img_on_Base(\'Choice Xtra Classic MDU Tier\',19);');
            xtra_tier_anchor.setAttribute('ng-mouseleave', 'ppSUMMARY = varDefaultSummary; img_off_Base(\'Choice Xtra Classic MDU Tier\',19);'); /**/
            xtra_tier_anchor.href = '';
            xtra_tier_anchor.setAttribute('ng-click', 'img_click_Base(\'Choice Xtra Classic MDU Tier\',19);');
            $compile(document.getElementById("xtra_tier_anchor"))($scope);
        };



        var layerSwap = function() {
            //if(without.innerHTML== 'without HBO'){
            if (document.images.hbo.src.indexOf('greenBoxDown.gif') > 0) {
                without.innerHTML = 'with HBO';
                firstPrem.innerHTML = '<font color=red>$17.99</font>';
                secondPrem.innerHTML = '$13';
                fifthPrem.innerHTML = '<font color=red>$8</font>';
            } else {
                //if(!myFlag_Prem[1] && !myFlag_Prem[2] && !myFlag_Prem[3] && !myFlag_Prem[4] && !myFlag_Prem[5]){
                without.innerHTML = 'without HBO';
                firstPrem.innerHTML = '$13.99';
                secondPrem.innerHTML = '$12';
                fifthPrem.innerHTML = 'n/a';
                //}
            }
        }

        //=========start mouseclick=========
        var img_click_Base = function(loc, img) {
            if (rollover) {

                if ((img == 6) || (img == 10)) { //<-- if premier is selected, this turns on all premium services
                    varPremierClicked = true;
                    document.images["hbo"].src = image_check_src; //dtvImages[25].src;
                    document.images["showtime"].src = image_check_src; //dtvImages[26].src;     
                    document.images["starz"].src = image_check_src; //dtvImages[26].src;        
                    document.images["cinemax"].src = image_check_src; //dtvImages[26].src;      
                    document.images["sportspack"].src = image_check_src; //dtvImages[27].src;
                    layerSwap();

                    myFlag_Prem[1] = myFlag_Prem[2] = myFlag_Prem[3] = myFlag_Prem[4] = myFlag_Prem[5] = true; //<-- variables are set to "true" to disable "rollout" 

                } else if ((img != 6) && (img != 10)) { //<-- if Plus is selected, this turns off all premium services
                    //myFlag_Prem[1] = myFlag_Prem[2] = myFlag_Prem[3] = myFlag_Prem[4] = myFlag_Prem[5] = false;

                    if (img == 12) { // /Total Choice Was selected, activate total_choice_plus_anchor for Total Choice Plus
                        xtra_tier_off();
                        varImageOn_TotChoicePlus = 0;
                        varImageOn_Xtier = 0;
                        document.images['Choice Xtra Classic MDU Tier'].src = dtvImages[65].src;
                        total_choice_plus_on();
                        document.images['Total Choice Plus'].src = dtvImages[14].src;
                    } else if (img == 13) { // Choice Tier was selected, activate xtra_tier_anchor for Xtra Tier
                        total_choice_plus_off();
                        varImageOn_TotChoicePlus = 0;
                        varImageOn_Xtier = 0;
                        document.images['Total Choice Plus'].src = dtvImages[65].src;
                        xtra_tier_on();
                        document.images['Choice Xtra Classic MDU Tier'].src = dtvImages[15].src;
                    } else if (img == 14) { //Xtra Tier $5 base package add on was clicked
                        img_Click_5_Buck_Base_Upgrade(loc, img);
                    } else if (img == 15) { //Familiar MDU $5 base package add on was clicked
                        img_Click_5_Buck_Base_Upgrade(loc, img);
                    } else if (img == 16) { //
                        img_Click_5_Buck_Base_Upgrade(loc, img);
                    } else if (img == 18) { //
                        img_Click_5_Buck_Base_Upgrade(loc, img);
                    } else if (img == 19) { //
                        img_Click_5_Buck_Base_Upgrade(loc, img);
                    } else if (img == 20) { //
                        img_Click_5_Buck_Base_Upgrade(loc, img);
                    } else if (img == 21) { //
                        img_Click_5_Buck_Base_Upgrade(loc, img);
                    } else if (img == 22) { //
                        img_Click_5_Buck_Base_Upgrade(loc, img);
                    } else if (img == 23) { //
                        img_Click_5_Buck_Base_Upgrade(loc, img);
                    } else if (img == 25) { //
                        img_Click_5_Buck_Base_Upgrade(loc, img);
                    } else if (img == 26) { //
                        img_Click_5_Buck_Base_Upgrade(loc, img);
                    } else if (img == 9) { //
                        img_Click_5_Buck_Base_Upgrade(loc, img);
                    } else if (img == 27) { //
                        img_Click_5_Buck_Base_Upgrade(loc, img);
                    } else if (img == 31) { //
                        img_Click_5_Buck_Base_Upgrade(loc, img);

                        //}else{                        // niether Total Choice or Choice Tier was selected, de-activate imgs                   
                        //total_choice_plus_anchor.onMouseOver='return false;';
                        //total_choice_plus_anchor.href='#';
                        //total_choice_plus_anchor.onMouseOut='return false;';
                        //xtra_tier_anchor.onMouseOver='return false;';
                        //xtra_tier_anchor.href='#';
                        //xtra_tier_anchor.onMouseOut='return false;';
                    } else if (img == 33) {
                        //img_Click_5_Buck_Base_Upgrade(loc, img);
                    }

                    varPremierClicked = false;

                    document.images["hbo"].src = dtvImages[7].src;
                    document.images["showtime"].src = dtvImages[8].src;
                    document.images["starz"].src = dtvImages[8].src;
                    document.images["cinemax"].src = dtvImages[8].src;
                    document.images["sportspack"].src = dtvImages[9].src;

                    myFlag_Prem[1] = false; //<-- variables are set to "true" to disable "rollout" 
                    myFlag_Prem[2] = false;
                    myFlag_Prem[3] = false;
                    myFlag_Prem[4] = false;
                    myFlag_Prem[5] = false;

                    layerSwap();
                }


                if (img < 32 || img != 18 || img != 19 || img != 31) {
                    for (var m = 1; m < 18; ++m) { //<-----this loop checks what image is at its "on" state and turns "off" the rest
                        if (myTab[m] != loc) {
                            document.images[myTab[m]].src = dtvImages[myTab_BaseNum[m]].src; //<-- turns everything "off"
                        } else {
                            document.images[loc].src = dtvImages[myTab_BaseNum[img] + numRolImages].src; //<-- turns selected item "on"
                            varImageOn = img;
                        }
                    }

                    for (var m = 20; m < 34; ++m) { //<-----this loop checks what image is at its "on" state and turns "off" the rest
                        if (myTab[m] != loc) {
                            if (document.images[myTab[m]])
                                document.images[myTab[m]].src = dtvImages[myTab_BaseNum[m]].src; //<-- turns everything "off"
                        } else {
                            document.images[loc].src = dtvImages[myTab_BaseNum[img] + numRolImages].src; //<-- turns selected item "on"
                            varImageOn = img;
                        }
                    }
                }

                if (img == 32) {
                    if (document.images['Select'])
                        document.images['Select'].src = image_check_src;
                    isSelectClick = true;
                } else {
                    if (document.images['Select'])
                        document.images['Select'].src = image_box_src;
                    isSelectClick = false;
                }
            }


            resetLayer(lyrSuggestion);
            motherCalc();
        }

        var resetLayer = function(lyr) {

            lyr.innerHTML = "&nbsp;";
        }


        var img_click_Prem = function(loc, img) {
            if (rollover) {
                if (varPremierClicked == false) {
                    img += numRolImages; //img=img+numRolImages
                    for (var n = 1; n <= 5; ++n) {
                        if (myTab_Prem[n] == loc) {
                            if (myFlag_Prem[n] == false) { //<!-- checks if image is "on"
                                document.images[loc].src = dtvImages[img].src;
                                myFlag_Prem[n] = true;
                            } else {
                                document.images[myTab_Prem[n]].src = dtvImages[img - numRolImages].src;
                                myFlag_Prem[n] = false;
                            }
                        }
                    }
                }
            }
            motherCalc();
            layerSwap();
        }


        var img_click_Protect = function(loc, img) {
            if (rollover) {
                if (img == 10) {

                    document.images["protect_1"].src = "../common_assets/img/greenBoxDown.gif"; //on
                    document.images["protect_3"].src = "../common_assets/img/greenBoxNorm.gif"; //off          
                    varImageOn_Protect = 10;
                } else if (img == 11) {
                    document.images["protect_1"].src = "../common_assets/img/greenBoxNorm.gif"; //off  
                    document.images["protect_3"].src = "../common_assets/img/greenBoxDown.gif"; //on                   
                    varImageOn_Protect = 11;
                }
            }
            motherCalc();
        }

        var img_click_hdextra = function(loc, img) {
            if (rollover) {
                if (img == 10) {
                    document.images["hdextra_1"].src = "../common_assets/img/greenBoxDown.gif"; //on
                    document.images["hdextra_2"].src = "../common_assets/img/greenBoxNorm.gif"; //off          

                    varImageOn_HDExtraPack = 10;
                } else if (img == 11) {
                    document.images["hdextra_1"].src = "../common_assets/img/greenBoxNorm.gif"; //off  
                    document.images["hdextra_2"].src = "../common_assets/img/greenBoxDown.gif"; //on
                    varImageOn_HDExtraPack = 11;
                } else {
                    varImageOn_HDExtraPack = 0;
                }
            }
            motherCalc();
        }

        /** Newly Added Function **/
        var img_click_premier = function(loc, img) {
            if (rollover) {
                if (img == 12) {
                    document.images["premier_1"].src = "../common_assets/img/greenBoxDown.gif"; //on
                    document.images["premier_2"].src = "../common_assets/img/greenBoxNorm.gif"; //off          
                    varImageOn_Premier = 12;
                } else if (img == 13) {
                    document.images["premier_1"].src = "../common_assets/img/greenBoxNorm.gif"; //off  
                    document.images["premier_2"].src = "../common_assets/img/greenBoxDown.gif"; //on
                    varImageOn_Premier = 13;
                } else {
                    varImageOn_Premier = 0;
                }
            }
            motherCalc();
        }

        var img_click_ds = function(loc, img) {
            if (rollover) {
                numberOfTvSelected = true;
                img += numRolImages_ds; //img=img+numRolImages

                for (var m = 1; m <= 6; ++m) { //<-----this loop checks what image is at its "on" state and turns "off" the rest
                    if (myTab_ds[m] != loc) {
                        document.images[myTab_ds[m]].src = dtvImages_ds[m].src; //<-- turns everything "off"
                    } else {
                        document.images[loc].src = dtvImages_ds[img].src; //<-- turns selected item "on"
                        varImageOn_ds = (img - numRolImages_ds);
                    }
                }
            }

            motherCalc();
        }

        var img_Click_ARS = function(loc, img) {
            if (img == 1) {
                document.images["ARS1"].src = dtvImages[42].src; //on
                document.images["ARS2"].src = dtvImages[30].src; //off
                varImageOn_ARS = 1;
            } else if (img == 2) {
                document.images["ARS1"].src = dtvImages[30].src; //on
                document.images["ARS2"].src = dtvImages[42].src;
                document.images["MRV3"].src = image_box_src; //on
                varImageOn_ARS = 2;
                addMonthlyMRVExtra = false;
            }
            motherCalc();
        }

        ///////Start of New ARS functions///////////////
        var img_Click_ARS_New = function() {
            if (!addMonthlyArs) {
                document.images["ARS1"].src = image_check_src;
                varImageOn_ARS = 1;
                addMonthlyArs = true;
            } else {
                if (addMonthlyMRVExtra)
                    img_Click_ARS_Extra();
                document.images["ARS1"].src = image_box_src;
                varImageOn_ARS = 2;
                addMonthlyArs = false;

            }
            motherCalc();
        }


        var img_Click_DVR_New = function() {

            if (!addMonthlyDvr) {

                document.images["DVR1"].src = image_check_src;
                varImageOn_DVR = 1;
                addMonthlyDvr = true;
            } else {

                document.images["DVR1"].src = image_box_src;
                varImageOn_DVR = 2;
                addMonthlyDvr = false;
            }
            motherCalc();
        }


        var img_Click_HD_Access_New = function() {
            if (rollover) {
                if (!addMonthlyHdAccess) {
                    document.images["HD_Access1"].src = image_check_src;
                    varImageOn_HD_Access = 1;
                    addMonthlyHdAccess = true;
                } else {
                    document.images["HD_Access1"].src = image_box_src;
                    varImageOn_HD_Access = 2;
                    addMonthlyHdAccess = false;
                }
            }
            motherCalc();
        }


        var img_Click_MRV_New = function() {
            if (rollover) {
                if (!addMonthlyMRV) {
                    document.images["MRV1"].src = image_check_src;
                    varImageOn_MRV = 1;
                    addMonthlyMRV = true;
                } else {
                    document.images["MRV1"].src = image_box_src;
                    varImageOn_MRV = 2;
                    addMonthlyMRV = false;
                }
            }
            motherCalc();
        }

        var img_Click_ARS_Extra = function() {

            if (rollover) {
                if (!addMonthlyMRVExtra) {
                    document.images["MRV3"].src = image_check_src;
                    document.images["ARS2"].src = image_box_src;
                    addMonthlyMRVExtra = true;
                }
            }
            motherCalc();

        }


        var img_mouseover_ars_extra = function() {
            if (rollover) {
                if (!addMonthlyMRVExtra) {
                    document.images["MRV3"].src = image_check_src;
                }
            }
        }


        var img_mouseout_ars_extra = function() {
                if (rollover) {
                    if (!addMonthlyMRVExtra) {
                        document.images["MRV3"].src = image_box_src;

                    }
                }
            }
            ///////End of New ARS functions///////////////



        var img_off_ARS = function(loc, img) {
            if (rollover) {
                if (varImageOn_ARS == 1) { //<-----this checks which tab is on and disables "onmouseout" state
                    document.images["ARS1"].src = dtvImages[42].src; //on
                    document.images["ARS2"].src = dtvImages[30].src; //off
                } else if (varImageOn_ARS == 2) {
                    document.images["ARS1"].src = dtvImages[30].src; //off
                    document.images["ARS2"].src = dtvImages[42].src; //on
                } else {
                    document.images["ARS1"].src = dtvImages[10].src; //off
                    document.images["ARS2"].src = dtvImages[12].src; //off
                }
            }
        }



        var img_Click_DVR = function(loc, img) {
            if (img == 1) {
                document.images["DVR1"].src = dtvImages[42].src; //on
                document.images["DVR2"].src = dtvImages[30].src; //off
                varImageOn_DVR = 1;
            } else if (img == 2) {
                document.images["DVR1"].src = dtvImages[30].src; //on
                document.images["DVR2"].src = dtvImages[42].src; //on
                varImageOn_DVR = 2;
            }
            motherCalc();
        }

        var img_off_DVR = function(loc, img) {
            if (rollover) {
                if (varImageOn_DVR == 1) { //<-----this checks which tab is on and disables "onmouseout" state
                    document.images["DVR1"].src = dtvImages[42].src; //on
                    document.images["DVR2"].src = dtvImages[30].src; //off
                } else if (varImageOn_DVR == 2) {
                    document.images["DVR1"].src = dtvImages[30].src; //off
                    document.images["DVR2"].src = dtvImages[42].src; //on
                } else {
                    document.images["DVR1"].src = dtvImages[10].src; //off
                    document.images["DVR2"].src = dtvImages[12].src; //off
                }
            }
        }

        var img_Click_HD_Access = function(loc, img) {
            if (rollover) {
                if (img == 1) {
                    document.images["HD_Access1"].src = dtvImages[42].src; //on
                    document.images["HD_Access2"].src = dtvImages[12].src; //off
                    varImageOn_HD_Access = 1;
                } else if (img == 2) {
                    document.images["HD_Access1"].src = dtvImages[10].src; //on
                    document.images["HD_Access2"].src = dtvImages[42].src; //on
                    varImageOn_HD_Access = 2;
                }
            }
            motherCalc();
        }

        var img_Click_MRV = function(loc, img) {
            if (rollover) {
                if (img == 1) {
                    document.images["MRV1"].src = dtvImages[42].src; //on
                    document.images["MRV2"].src = dtvImages[12].src; //off
                    varImageOn_MRV = 1;
                } else if (img == 2) {
                    document.images["MRV1"].src = dtvImages[10].src; //on
                    document.images["MRV2"].src = dtvImages[42].src; //on
                    varImageOn_MRV = 2;
                }
            }
            motherCalc();
        }

        var img_Click_5_Buck_Base_Upgrade = function(loc, img) {
            if (img == 19) { // 14, Total Choice Plus, was clicked
                if (document.images["Choice Xtra Classic MDU Tier"].src != dtvImages[65].src) { // if pic not purple, turn pic off
                    document.images["Choice Xtra Classic MDU Tier"].src = dtvImages[15].src; // turn 15, Xtra Tier, off
                }
                varImageOn_TotChoicePlus = 0;
                if (varImageOn_Xtier == 1) { //clicked 15 and it's on -- now turn it off
                    varImageOn_Xtier = 0;
                } else { //clicked 15, turn it on
                    varImageOn_Xtier = 1;
                    img += numRolImages;
                }
            }
            if (img == 18) {
                if (document.images['Total Choice Plus'].src != dtvImages[65].src) { // if pic not purple, turn pic off
                    document.images['Total Choice Plus'].src = dtvImages[14].src; // turn 14, Total Choice Plus, off
                }
                varImageOn_Xtier = 0;
                if (varImageOn_TotChoicePlus == 1) { //clicked 14 and it's on -- now turn it off
                    varImageOn_TotChoicePlus = 0;
                } else { //clicked 14, turn it on
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
            varImageOn_choice_ultimate_addon = 1;               //clicked 9, turn it on
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
            if (img == 14) {
                if (varImageOn_xtra_addon_mdu == 1) { //clicked 14 and it's on -- now turn it off
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
                } else { //clicked 14, turn it on
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
            }
            /*
                if (img == 15){
                    if (varImageOn_premier_addon_mdu == 1){                                     //clicked 15 and it's on -- now turn it off
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
                    }else{                                                          //clicked 15, turn it on
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
            if (img == 16) {
                if (varImageOn_TC_plus_mdu == 1) {
                    varImageOn_TC_plus_mdu = 0 //clicked 16 and it's on -- now turn it off
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
                } else { //clicked 16, turn it on
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
            }
            /*
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
            if (img == 22) {
                if (varImageOn_choice_xtra_addon_fdb == 1) {
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
                } else {
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
            if (img == 23) {
                if (varImageOn_premier_addon_fdb == 1) {
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
                } else { //clicked 18, turn it on
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
            if (img == 25) {
                if (varImageOn_choice_ultimate_addon_cdb = 1) {
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
                } else {
                    varImageOn_choice_ultimate_addon_cdb = 1; //clicked 18, turn it on
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
            if (img == 26) {
                if (varImageOn_choice_ultimate_addon_fdb == 1) {
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
                } else {
                    varImageOn_choice_ultimate_addon_fdb = 1; //clicked 18, turn it on
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
            if (img == 27) {
                if (varImageOn_premier_addon_cdb == 1) {
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
                } else { //clicked 18, turn it on
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

        function motherCalc() { // this is the mother brain of the calcuations...
            var theform = document.frmNewPackage,
            varPremPackTotal = 0,
            addPrimaryCreditValue = 0,

            addMonthlyArsExtraValue = 0,
            //varNumTvs = varImageOn_ds;
            varExtraReceiverTotal = getExtraReceiver(),

            varBasePackTotal = getBasePack(),
            varPremPackTotal = getPremPack();

            var round = Math.round(getPremPack() * 100) / 100;
            //offset for premium pack by adding $1
            if (round === 29.99 || round === 40.99 || round === 49.99) {
                varPremPackTotal += 1;
            }

            var varProtectTotal = getProtectPack(),


            varHD_AccessTotal = getHD_Access(),
            varHD_ExtraTotal = getHDExtraPack(),
            varDVR = getDVR(),
            varARS = getARS(),
            varProtectionProtectionPlan = getPremierProtection(),
            varProtectTotal = varProtectTotal + varProtectionProtectionPlan,

            varMRVTotal = getMRV();

            if (addPrimaryCredit) {
                //code
                addPrimaryCredit = 7;
            }

            if (addMonthlyMRVExtra) {
                addMonthlyArsExtraValue = 15;
            }

            var varStateTax = getStateTax(),
            varExtraTotal = varExtraReceiverTotal + varDVR + varARS + varHD_AccessTotal + varMRVTotal + varHD_ExtraTotal + addPrimaryCredit + addMonthlyArsExtraValue,
            varGrandTotal = varBasePackTotal + varPremPackTotal + varStateTax + varExtraTotal;

            document.getElementById('txtBase').innerHTML = formatCurrency(varBasePackTotal);
            document.getElementById('txtPrem').innerHTML = formatCurrency(varPremPackTotal);
            document.getElementById('txtExtra').innerHTML = formatCurrency(varExtraTotal);
            //theform.txtTax.value = formatCurrency(varStateTax);
            document.getElementById('txtGrandTotal').innerHTML = formatCurrency(varGrandTotal);

            get2ndMonthText(varProtectTotal);

            //rightSizing();
            importPricingXML();
        }

        function removeTax() {
            document.frmNewPackage.dropdown.value = "none";
            motherCalc();
        }

        function getStateTax() {
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

        function getExtraReceiver() {
            if ((varImageOn_ds - varMirrorFeeWaiver) > 0) {
                MirrorFee = ((varImageOn_ds - varMirrorFeeWaiver) * varMirrorFee);
                return MirrorFee;
            } else {
                return 0;
            }
        }

        function getBasePack() {
            var returnBase = 0;
            for (var i = 0; i <= 35; i++) { //<--checks which images are on and sums the base package price
                xImageOn = varImageOn;
                if (xImageOn == i) {
                    returnBase += varBase[i];
                }
            }
            if (varImageOn_TotChoicePlus == 1) {
                returnBase += varBase[16];
            }
            if (varImageOn_Xtier == 1) {
                returnBase += varBase[35];
            }
            if (varImageOn_familiar_mdu == 1) {
                returnBase += 5.00;
            }
            if (varImageOn_TC_plus_mdu == 1) {
                returnBase += 5.00;
            }
            if (varImageOn_premier_addon_mdu == 1) {
                returnBase += 51.00;
            }
            if (varImageOn_choice_addon_fdb == 1) {
                returnBase += 24.99;
            }
            if (varImageOn_choice_ultimate_addon == 1) {
                returnBase += 6.00;
            }
            return returnBase;
        }

        function getPremPack() {
            premCount = 0;
            HBOadjust = 0.00;
            if (myFlag_Prem[1] == true) {
                HBOadjust = varHBOadjust;
            }
            if (varPremierClicked == true) { //<-- if premier package is chosen, premium services are included
                return 0.00;
            } else {
                for (var h = 1; h <= 5; ++h) { //<-- checks which image is on and adds up the premiums accordingly
                    if (myFlag_Prem[h] == true) {
                        premCount = premCount + 1;
                    }
                }

                if (premCount == 0) {
                    return 0.00;
                }
                if (premCount == 1) {
                    return varPREM1 + HBOadjust;
                }
                if (premCount == 2) {
                    return varPREM1 + varPREM2 + HBOadjust;
                }
                if (premCount == 3) {
                    if (HBOadjust == 4) {
                        return varPREM1 + varPREM2 + varPREM3 + HBOadjust + 1;
                    } else {
                        return varPREM1 + varPREM2 + varPREM3 + HBOadjust;
                    }
                }
                if (premCount == 4) {
                    if (HBOadjust == 4) {
                        return varPREM1 + varPREM2 + varPREM3 + varPREM4 + HBOadjust + 1;
                    } else {
                        return varPREM1 + varPREM2 + varPREM3 + varPREM4 + HBOadjust;
                    }
                }
                if (premCount == 5) {
                    if (varImageOn == '3') {
                        img_click_Base('Premier', '6');
                        lyrSuggestion.innerHTML = arrayLyrSuggestion[1];
                        return 0.00;
                    }
                    if (varImageOn == '4') {
                        img_click_Base('Premier', '6');
                        lyrSuggestion.innerHTML = arrayLyrSuggestion[2];
                        return 0.00;
                    }
                    if (varImageOn == '24') {
                        img_click_Base('Lo Maximo', '10');
                        lyrSuggestion.innerHTML = arrayLyrSuggestion[8];
                        return 0.00;
                    }
                    if (varImageOn == '5') {
                        img_click_Base('Premier', '6');
                        img_Click_HD_Access('HD_Access1', 1);
                        lyrSuggestion.innerHTML = arrayLyrSuggestion[3];
                        return 0.00;
                    }

                    return varPREM1 + varPREM2 + varPREM3 + varPREM4 + varPREM5 + HBOadjust + 1;

                }
            }
        }


        function getProtectPack() {
            if (varImageOn_Protect == 10) {
                return varProtect[0];
            } else if (varImageOn_Protect == 11) {
                return varProtect[1];
            } else if (varImageOn_Protect == 12) {
                return varProtect[2];
            } else {
                return 0.00;
            }
        }

        /**calculation for premier plan**/
        function getPremierProtection() {
            if (varImageOn_Premier == 12) {
                return varProtectionProtectionPlanMonthly;
            } else {
                return 0.00;
            }
        }

        function getHDExtraPack() {
            if (varImageOn_HDExtraPack == 10) {
                return varHDExtraPackMonthly;
            } else {
                return 0.00;
            }
        }

        function getHD_Access() {

            if (varImageOn_HD_Access == 1 && varImageOn != 5) {
                return varHDACCESSmonthly; //was set to 0.00 because it's free for first 3 months for new and existing customers.
                //setting to 10.00 for HD access
            } else {
                return 0.00;
            }
        }

        function getMRV() {
            if (varImageOn_MRV == 1) {
                return varMRVMonthly; //was set to 0.00 because it's free for first 3 months for new and existing customers.
                //setting to 3.00 
            } else {
                return 0.00;
            }
        }


        function getDVR() {
            //  if ( varImageOn == 4 || varImageOn == 5 || varImageOn == 7){
            //      return numDVR[0];               // dvr is free with plus DVR and plus HD DVR and Optimo Mas Plus DVR.
            //  }else{
            return numDVR[varImageOn_DVR];
            //  }   
        }

        function getARS() {
            return numARS[varImageOn_ARS];
        }


        function get2ndMonthText(varProtectTotal) {
            var strText = '';
            var numProtect = 0;
            if (varImageOn_Protect == 10 || varImageOn_Premier == 12) {
                numProtect = formatCurrency(parseFloat(document.getElementById('txtGrandTotal').textContent) + varProtectTotal);
                strText = 'Customers are not charged for Protection Plan until the 2nd month.  The total with <b>DIRECTV Protection Plan</b> is $' + numProtect + '.';
                if (varImageOn_Protect == 10 && varImageOn_Premier == 12) {
                    strText = 'Customers are not charged for Protection Plan until the 2nd month.  The total with <b>DIRECTV Protection Plan</b> and <b>Protection Plan Premier</b> is $' + numProtect + '.';
                } else if (varImageOn_Protect != 10 && varImageOn_Premier == 12) {
                    strText = 'Customers are not charged for Protection Plan until the 2nd month.  The total with <b>Protection Plan Premier</b> is $' + numProtect + '.';
                }
            }
            document.getElementById("lyr2ndMonth").innerHTML = strText;
        }


        // Utilities ///////////////////////////////////////////////////////////////////////////////////////////////////

        //formats textbox prices to enable addition functions
        function formatCurrency(num) {
            num = num.toString().replace(/\$|\,/g, '');
            if (isNaN(num)) num = "0";
            cents = Math.floor((num * 100 + 0.5) % 100);
            num = Math.floor((num * 100 + 0.5) / 100).toString();
            if (cents < 10) cents = "0" + cents;
            for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
                num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));
            return (num + "." + cents);
        }

        //opens a new 800x300 window
        function newWindow(content) {
            if (siteBit != "") {
                if (content.match('/' + siteBit + '/') == null) {
                    content = '/' + siteBit + content;
                    newMatchVar4 = 'yes, siteBit Added';
                }
            }
            if (varMainWindow == null || varMainWindow.closed) {
                varMainWindow = window.open(content, 'popup', 'width=800,height=300,status=no,toolbar=no,menubar=no,scrollbars=yes,resizable=yes');
            } else {
                varMainWindow.location.href = content;
                varMainWindow.focus();
            }
        }

        function swapBasePackageLanguage() {
            MDULayerVis = 0;
            document.getElementById("lyrEnglish2").innerHTML = arrayMDUInnerHTML[7];
            document.getElementById("MDUdefault").style.display = 'none';
            if (spanishLayerVis == 0) {
                document.getElementById("lyrEnglish1").style.display = 'none';
                document.getElementById("lyrEnglish2").style.display = 'none';
                document.getElementById("lyrSpanish1").style.display = 'block';
                document.getElementById("lyrSpanish2").style.display = 'block';
                document.getElementById("lyrMDU1").style.display = 'none';
                document.getElementById("MDUdiv").style.display = 'none';
                spanishLayerVis = 1;
            } else {
                document.getElementById("lyrEnglish1").style.display = 'block';
                document.getElementById("lyrEnglish2").style.display = 'block';
                document.getElementById("lyrSpanish1").style.display = 'none';
                document.getElementById("lyrSpanish2").style.display = 'none';
                document.getElementById("lyrMDU1").style.display = 'none';
                document.getElementById("MDUdiv").style.display = 'none';
                spanishLayerVis = 0;
            }
            resetAllNoRefresh();
        };

        function swapBasePackageMDU() {
            if (MDULayerVis == 0) {
                document.getElementById("lyrMDU1").style.display = 'block';
                document.getElementById("MDUdiv").style.display = 'block';
                //document.getElementById("MDUdiv").innerHTML = '';
                document.getElementById("MDUdefault").style.display = 'block';
                document.getElementById("MDUselectionInfo").style.display = 'block';
                document.getElementById("MDUselectionInfo").innerHTML = '';
                if (spanishLayerVis == 0) {
                    document.getElementById("lyrEnglish1").style.display = 'block';
                    document.getElementById("lyrEnglish2").style.display = 'none';
                    document.getElementById("lyrSpanish1").style.display = 'none';
                    document.getElementById("lyrSpanish2").style.display = 'none';
                } else {
                    document.getElementById("lyrEnglish1").style.display = 'none';
                    document.getElementById("lyrEnglish2").style.display = 'none';
                    document.getElementById("lyrSpanish1").style.display = 'block';
                    document.getElementById("lyrSpanish2").style.display = 'none';
                }
                MDULayerVis = 1;
            } else {
                document.getElementById("MDUdefault").style.display = 'none';
                document.getElementById("MDUselectionInfo").style.display = 'none';
                document.getElementById("lyrMDU1").style.display = 'none';
                document.getElementById("MDUdiv").style.display = 'none';
                if (spanishLayerVis == 0) {
                    document.getElementById("lyrEnglish1").style.display = 'block';
                    document.getElementById("lyrEnglish2").style.display = 'block';
                    document.getElementById("lyrSpanish1").style.display = 'none';
                    document.getElementById("lyrSpanish2").style.display = 'none';
                } else {
                    document.getElementById("lyrEnglish1").style.display = 'none';
                    document.getElementById("lyrEnglish2").style.display = 'none';
                    document.getElementById("lyrSpanish1").style.display = 'block';
                    document.getElementById("lyrSpanish2").style.display = 'block';
                }
                MDULayerVis = 0;
            }
            resetAllNoRefresh();
        };

        var fillMDUdiv = function(textEntry) {
            varMirrorFeeWaiver = 1;
            if (textEntry == 'TMW/JMW') {
                document.getElementById("MDUselectionInfo").innerHTML = (textEntry + ' : <span style="color:red;">Mirroring fee begins after 3rd receiver</span><br>Mouseover a package for Quick Summary instructions.');
            } else if (textEntry == 'TCD/JCD') {
                document.getElementById("MDUselectionInfo").innerHTML = (textEntry + ': Verify Customer\'s current programming<br>(Mouseover a package for Quick Summary instructions.)');
            } else {
                document.getElementById("MDUselectionInfo").innerHTML = ('You selected: ' + textEntry + '<br>Mouseover a package for Quick Summary instructions.');
            }

            if ((textEntry == null) || (textEntry == '')) { //default  
                MDUdiv.innerHTML = arrayMDUInnerHTML[1];
                $compile(document.getElementById("MDUdiv"))($scope);
                document.getElementById("lyrEnglish2").style.display = 'none';
                document.getElementById("MDUdefault").style.display = 'none';
            }
            if (textEntry == 'MDU/JDU') { //MDU / JDU / MDD / MDL
                MDUdiv.innerHTML = arrayMDUInnerHTML[2];
                $compile(document.getElementById("MDUdiv"))($scope);
                document.getElementById("lyrEnglish2").innerHTML = "&nbsp;";
                document.getElementById("MDUdefault").style.display = 'none';
            }
            if (textEntry == "TCD/JCD") { //TCD / JCD
                MDUdiv.innerHTML = arrayMDUInnerHTML[3];
                $compile(document.getElementById("MDUdiv"))($scope);
                document.getElementById("lyrEnglish2").innerHTML = "&nbsp;";
                document.getElementById("MDUdefault").style.display = 'none';
            }
            if (textEntry == "TMW/JMW") { //TMW / JMW
                MDUdiv.innerHTML = arrayMDUInnerHTML[4];
                $compile(document.getElementById("MDUdiv"))($scope);
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
            if (textEntry == "TMU/JMU") { // TMU / JMU
                MDUdiv.innerHTML = arrayMDUInnerHTML[6];
                $compile(document.getElementById("MDUdiv"))($scope);
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

        function resetAll() {
            var arrElements = document.getElementsByTagName('form');
            var numLen = arrElements.length;
            for (var j = 0; j < numLen; j++) {
                var myObj = arrElements[j];
                if (myObj != null) {
                    myObj.reset();
                }
            }
            document.getElementById('txtBase').innerHTML = '0.00';
            document.getElementById('txtPrem').innerHTML = '0.00';
            document.getElementById('txtExtra').innerHTML = '0.00';
            document.getElementById('txtGrandTotal').innerHTML = '0.00';
            var packages = ['HD_Access2','HD_Access1','DVR2','DVR1','MRV3','MRV2','MRV1','ARS2','ARS1','Family',
            'Select','Entertainment','Choice','Xtra','Ultimate','Premier','Preferred Extra','Mas Latino',
            'Mas Ultra','Optimo_Mas','Lo Maximo','Family Digital Bulk','Xtra Add-On','Xtra Add-On FDB',
            'Xtra Add-On EDB','Choice Add-On FDB','Choice Add-On EDB','Premier Add-On FDB','Entertainment Add-On',
            'Preferred Choice','Total Choice for TCD/JCD','Choice Tier for TCD/JCD','Ultimate Add-On CDB','Ultimate Add-On FDB',
            'Ultimate Add-On EDB','Premier Add-On CDB','Premier Add-On EDB','Xtra Digital Bulk','Student Choice Add-On',
            'Total Choice Plus','Xtra Tier','hbo','starz','showtime','cinemax','sportspack','protect_1','protect_3',
            'hdextra_1','hdextra_2','premier_1','premier_2'];
            for(var i=0; i < packages.length ; i++){
                a = document.getElementById(packages[i]);
                if (a !== null)
                    a.src = "../common_assets/img/greenBoxNorm.gif";
            }
            for(var i=1; i < 7 ; i++){
                link = "../common_assets/img/button"+i+"normal.png";
                a = document.getElementById(i+'receiver');
                if (a !== null)
                    a.src = link;
            }
            layerSwap();
            document.getElementById('lyr2ndMonth').innerHTML = '';

            myFlag_Prem[1] = false; //<-- variables are set to "true" to disable "rollout" 
            myFlag_Prem[2] = false;
            myFlag_Prem[3] = false;
            myFlag_Prem[4] = false;
            myFlag_Prem[5] = false;

            varImageOn = 0, //Base Package flag
            xImageOn = 0,
            spanishLayerVis = 0, //Show the spanish layer? 0=no, 1=yes
            MDULayerVis = 0, //Show the MDU layer? 0=no, 1=yes
            varImageOn_ds = 0, //Number of tv's
            varImageOn_Protect = 0, //Protection Plan flag
            varImageOn_DVR = 0, //DVR service flag
            varImageOn_ARS = 0,
            varImageOn_HD_Access = 0, //HD Access flag
            varImageOn_MRV = 0, //MRV flag
            varImageOn_HDExtraPack = 0, //HD Extra Pack flag
            varImageOn_TotChoicePlus = 0, //For the $5 add on package for select
            varImageOn_Xtier = 0, //For the xtra tier $5 add on package 
            varImageOn_familiar_mdu = 0, //For the Familiar MDU Tier $5 add on package
            varImageOn_TC_plus_mdu = 0, //For the TC PLus MDU Tier $5 add on package
            varImageOn_xtra_addon_mdu = 0, // Xtra Add_On TMU $14.99 addition
            varImageOn_premier_addon_mdu = 0, // Premier Add_On TMU $65.99 addition
            varImageOn_choice_addon_fdb = 0,
            varImageOn_choice_xtra_addon_fdb = 0,
            varImageOn_choice_ultimate_addon_cdb = 0,
            varImageOn_choice_ultimate_addon_fdb = 0,
            varImageOn_choice_premier_addon_cdb = 0,
            varImageOn_choice_xtra_digital_bulk = 0,
            varImageOn_choice_ultimate_addon = 0,
            varImageOn_premier_addon_fdb = 0,
            varImageOn_premier_addon_cdb = 0,
            varPremierClicked = false, //Premier Package flag - true when premier base package is clicked
            addMonthlyMRVExtra = false,
            addPrimaryCredit =  false,
            
            // addMonthlyArs = false,
            // addMonthlyDvr = false,
            // addMonthlyHdAccess = false,
            // addMonthlyMRV = false,

            varMirrorFeeWaiver = 1, // 1 for normal, 3 for TMW or JMW account selected
            varProtectTotal = 0.00,
            varHD_ExtraTotal = 0.00,
            varHD_AccessTotal = 0.00,
            siteBit = "", //This is the bit that determines what site they're coming from
            varImageOn_Premier = 0;
        };

        $(function() {
            $('.stp45').matchHeight();
            $('.stp12').matchHeight();
        });

        function resetAllNoRefresh() {
            var arrElements = document.getElementsByTagName('form');
            var numLen = arrElements.length;
            for (var j = 0; j < numLen; j++) {
                var myObj = arrElements[j];
                if (myObj != null) {
                    myObj.reset();
                }
            }
            varImageOn_TotChoicePlus = 0;
            varImageOn_Xtier = 0;
            resetLayer(lyrSuggestion);
            varImageOn = 0; //Base Package flag
            importPricingXML();
        };

        function getSiteBit() {
            var isTeamsiteServer = location.href.lastIndexOf('iw-mount');
            if (isTeamsiteServer >= 0) {
                return;
            }

            var sURL = new String,
            bits = new Object;

            var x = 0;
            var stop = 0;

            sURL = location.href;
            sURL = sURL.slice(8, sURL.length);

            var chunkStart = sURL.indexOf("/");
            sURL = sURL.slice(chunkStart + 1, sURL.length)

            while (!stop) {
                chunkStart = sURL.indexOf("/");

                if (chunkStart != -1) {
                    bits[x] = sURL.slice(0, chunkStart)
                    sURL = sURL.slice(chunkStart + 1, sURL.length);
                } else {
                    stop = 1;
                }

                x++;
            }

            //This strips off any initial folders which we don't want to show on the breadcrumbs

            if (bits[0] == 'res' || bits[0] == 'ret' || bits[0] == 'com' || bits[0] == 'srvc' || bits[0] == 'telco' || bits[0] == 'telco2' || bits[0] == 'comext') {
                siteBit = bits[0];
            }
        };

        $scope.varDefaultSummary = varDefaultSummary;
        $scope.ppSUMMARY = varDefaultSummary;
        $scope.arrayBaseSummary = arrayBaseSummary;
        $scope.arrayParaSummary = arrayParaSummary;
        $scope.arrayPremSummary = arrayPremSummary;
        $scope.arrayExtraSummary = arrayExtraSummary;
        $scope.img_click_Base = img_click_Base;
        $scope.img_on_ds = img_on_ds;
        $scope.img_off_ds = img_off_ds;
        $scope.img_click_ds = img_click_ds;
        $scope.img_click_primaryCredit = img_click_primaryCredit;
        $scope.img_on_primaryCredit = img_on_primaryCredit;
        $scope.img_off_primaryCredit = img_off_primaryCredit;
        $scope.img_Click_ARS = img_Click_ARS;
        $scope.img_Click_ARS_Extra = img_Click_ARS_Extra;
        $scope.img_Click_DVR = img_Click_DVR;
        $scope.img_Click_HD_Access = img_Click_HD_Access;
        $scope.img_Click_MRV = img_Click_MRV;
        $scope.img_on = img_on;
        $scope.img_off_ARS = img_off_ARS;
        $scope.img_off_DVR = img_off_DVR;
        $scope.img_off_MRV = img_off_MRV;
        $scope.img_off_HD_Access = img_off_HD_Access;
        $scope.img_mouseout_ars_extra = img_mouseout_ars_extra;
        $scope.img_mouseover_ars_extra = img_mouseover_ars_extra;
        $scope.img_click_Prem = img_click_Prem;
        $scope.img_off_Prem = img_off_Prem;
        $scope.img_click_Protect = img_click_Protect;
        $scope.img_off_Protect = img_off_Protect;
        $scope.img_click_hdextra = img_click_hdextra;
        $scope.img_off_hdextra = img_off_hdextra;
        $scope.img_off_premier = img_off_premier;
        $scope.img_click_premier = img_click_premier;
        $scope.swapBasePackageMDU = swapBasePackageMDU;
        $scope.swapBasePackageLanguage = swapBasePackageLanguage;
        $scope.img_off_Base = img_off_Base;
        $scope.img_on_Base = img_on_Base;
        $scope.fillMDUdiv = fillMDUdiv;
        $scope.mduoptions = ["MDU/JDU","TCD/JCD","TMW/JMW","TMU/JMU"];
        $scope.resetAllNoRefresh = resetAllNoRefresh;
        $scope.resetAll = resetAll;
    }
]);
