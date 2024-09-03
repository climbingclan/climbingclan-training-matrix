function reportTradReportAS() {
 var conn = Jdbc.getConnection(url, username, password);
 var stmt = conn.createStatement();
 

let cell = setupCell("Dashboard","B16")
let sheet = setupSheet("Trad Advanced")

 var results = stmt.executeQuery('select distinct b.nickname "FB Name", b.scores_volunteer_score_cached "Rcptvnss",b.stats_volunteer_for_numerator_cached "voluntred",(CAST(b.`stats_attendance_outdoor_thursday_attended_cached` AS UNSIGNED INTEGER) + CAST(b.`stats_attendance_overnight_attended_cached` AS UNSIGNED INTEGER))"attndd outdoors",skills_belaying_lead "Ld-Bly",skills_trad_leading "Lead Trad", skills_trad_toprope "Trad Toprope",skills_belaying_halfropes "twin belay",skills_trad_multipitch_anchors "Multipitch Trad",skills_trad_abseiling "Abseiling for trad", skills_trad_retrievable_abseils "ret abseils", skills_trad_prussiking "Trad ascending", skills_trad_belay_escape "Trad Escape",skills_trad_hauling "Hauling",skills_trad_moving_together "moving Together",  b.cc_compliance_last_date_of_climbing "Last attended climbing",  b.id "user ID"  from  wp_member_db b JOIN wp_member_db_skills sk on b.id = sk.id where cc_member="yes" AND skills_belaying_lead<>"No" AND skills_trad_leading<>"No" and cc_compliance_last_date_of_climbing BETWEEN DATE_SUB(CURDATE(), INTERVAL 4 MONTH) AND CURDATE() AND CAST(b.stats_volunteer_for_numerator_cached as UNSIGNED INTEGER) > 4 order by (CAST(b.`stats_attendance_outdoor_thursday_attended_cached` AS UNSIGNED INTEGER) + CAST(b.`stats_attendance_overnight_attended_cached` AS UNSIGNED INTEGER)) desc, CAST(b.`stats_volunteer_for_numerator_cached` AS UNSIGNED INTEGER) DESC , CAST(b.stats_volunteer_for_denominator_cached AS UNSIGNED INTEGER) DESC limit 80');
appendToSheet(sheet, results);

results.close();
stmt.close();
} 