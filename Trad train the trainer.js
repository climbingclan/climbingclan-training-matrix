function reportTradTrainer() {
 var conn = Jdbc.getConnection(url, username, password);
 var stmt = conn.createStatement();
 

let cell = setupCell("Dashboard","B16")
let sheet = setupSheet("Trad TtTer")

 var results = stmt.executeQuery('select distinct b.nickname "FB Name", skills_trad_leading "TradLead",b.stats_volunteer_for_numerator_cached "Vlntrd",(CAST(b.`stats_attendance_outdoor_thursday_attended_cached` AS UNSIGNED INTEGER) + CAST(b.`stats_attendance_overnight_attended_cached` AS UNSIGNED INTEGER))"attndd outdoors",FLOOR(b.scores_volunteer_score_cached) "Recptvnss", skillshare_climbing_trad_seconding as "Trad Seconding",skillshare_climbing_trad_belaying_half_ropes as "Belaying Half Ropes",  skillshare_climbing_trad_leading_trad as "Leading Trad",  skillshare_climbing_trad_setting_up_top_rope as "Setting Up Top Rope",   skillshare_climbing_trad_multipitch_anchors as "Multipitch Anchors",skillshare_climbing_trad_abseiling as "Abseiling",  skillshare_climbing_trad_retrievable_abseils as "Retrievable Abseils", skillshare_climbing_trad_moving_together as "Moving Together",   skillshare_climbing_trad_belay_escape as "Belay Escape",  skillshare_climbing_trad_prussiking_upwards as "Prussiking Upwards",  skillshare_climbing_trad_hauling_systems as "Hauling Systems",    skillshare_climbing_trad_big_walling as "Big Walling", cc_compliance_last_date_of_climbing "Last attended", b.id "user ID" from   wp_member_db b JOIN wp_member_db_skills skills on b.id = skills.id JOIN wp_member_db_skillshare sk on b.id = sk.id where cc_member="yes" AND skills_belaying_lead<>"No" AND skills_trad_leading<>"No" and cc_compliance_last_date_of_climbing BETWEEN DATE_SUB(CURDATE(), INTERVAL 4 MONTH) AND CURDATE() AND CAST(stats_volunteer_for_numerator_cached as UNSIGNED INTEGER) >4 order by skillshare_climbing_trad_leading_trad desc,(CAST(b.`stats_attendance_outdoor_thursday_attended_cached` AS UNSIGNED INTEGER) + CAST(b.`stats_attendance_overnight_attended_cached` AS UNSIGNED INTEGER)) desc,CAST(b.`stats_volunteer_for_numerator_cached` AS UNSIGNED INTEGER) DESC , CAST(b.stats_volunteer_for_denominator_cached AS UNSIGNED INTEGER) DESC limit 70');
//setTextFormat(sheet,"D2:V","No","#a9a9a9")
setColoursFormat(sheet, "D2:Z","No","#F0E68C")
setColoursFormatLessThanOrEqualTo(sheet, "c2:c","5","#ff75d8")
setColoursFormatLessThanOrEqualTo(sheet, "c2:c","9","#ffd898")
setColoursFormatLessThanOrEqualTo(sheet, "d2:d","5","#ffd898")
setColoursFormatLessThanOrEqualTo(sheet, "e2:e","20","#FFFF8F")
setColoursFormatLessThanOrEqualTo(sheet, "e2:e","25","#FFEA00")
setColoursFormatLessThanOrEqualTo(sheet, "e2:e","30","#fad02c")

appendToSheet(sheet, results);

results.close();
stmt.close();
} 