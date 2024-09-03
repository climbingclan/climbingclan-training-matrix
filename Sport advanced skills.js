function reportSportReportAS() {
 var conn = Jdbc.getConnection(url, username, password);
 var stmt = conn.createStatement();

let cell = setupCell("Dashboard","B16")
let sheet = setupSheet("Sport Advanced")

 var results = stmt.executeQuery('select distinct b.nickname "FB Name", b.scores_volunteer_score_cached "Rcptvnss",b.stats_volunteer_for_numerator_cached "voluntred",(CAST(b.`stats_attendance_outdoor_thursday_attended_cached` AS UNSIGNED INTEGER) + CAST(b.`stats_attendance_overnight_attended_cached` AS UNSIGNED INTEGER))"attndd outdoors",skills_belaying_lead "Ld-Bly",skills_sport_leading_outside "Lead Outdoors",skills_sport_stripping "Clean Anchors",skills_sport_setting_up_top_rope "Top Rope", skills_sport_leading_clipstick "Use Clipstick",skills_sport_leading_multipitch_anchors "Multipitch Lead", skills_sport_leading_multipitch_abseiling "Multi Abseil",  b.cc_compliance_last_date_of_climbing "Last attended climbing",  b.id "user ID"  from  wp_member_db b JOIN wp_member_db_skills sk on b.id = sk.id where cc_member="yes" AND skills_belaying_lead<>"No" AND skills_sport_leading_outside<>"No" and cc_compliance_last_date_of_climbing BETWEEN DATE_SUB(CURDATE(), INTERVAL 4 MONTH) AND CURDATE() AND CAST(b.stats_volunteer_for_numerator_cached as UNSIGNED INTEGER) > 4 order by (CAST(b.`stats_attendance_outdoor_thursday_attended_cached` AS UNSIGNED INTEGER) + CAST(b.`stats_attendance_overnight_attended_cached` AS UNSIGNED INTEGER)) desc, CAST(b.`stats_volunteer_for_numerator_cached` AS UNSIGNED INTEGER) DESC , CAST(b.stats_volunteer_for_denominator_cached AS UNSIGNED INTEGER) DESC limit 80');
appendToSheet(sheet, results);

results.close();
stmt.close();
} 