function reportMilestonesReport() {
 var conn = Jdbc.getConnection(url, username, password);
 var stmt = conn.createStatement();
 

let cell = setupCell("Dashboard","B16")
let sheet = setupSheet("Milestone Skillshare Report")

 var results = stmt.executeQuery('select distinct b.nickname "FB Name", b.stats_volunteer_for_numerator_cached "volunteered",b.stats_volunteer_for_denominator_cached "attended",FLOOR(b.scores_volunteer_score_cached) "Recptvnss",skills_belaying_top_rope "TR Belay",skillshare_climbing_indoors_top_rope_belaying as "Share TR Belaying",skills_belaying_lead "Lead Bly",skillshare_climbing_indoors_lead_belaying as "Share Lead Belaying",skills_sport_leading_outside "Lead Sport",skillshare_climbing_sport_lead_climbing as "Sport Lead Climbing",skills_trad_leading "Lead Trad",skillshare_climbing_trad_leading_trad as "Share Trad", skills_trad_multipitch_anchors "Multipitch Trad",  skillshare_climbing_trad_multipitch_anchors as "Multipitch Anchors",cc_compliance_last_date_of_climbing "Last attended climbing",b.`committee_current` "Committee",b.scores_volunteer_score_cached "Receptiveness Score",   b.id "user ID" from  wp_member_db b JOIN wp_member_db_skills skills on b.id = skills.id JOIN wp_member_db_skillshare sk on b.id = sk.id where cc_member="yes" and cc_compliance_last_date_of_climbing BETWEEN DATE_SUB(CURDATE(), INTERVAL 4 MONTH) AND CURDATE()  and cc_compliance_last_date_of_climbing is not null order by CAST(b.`stats_volunteer_for_numerator_cached` AS UNSIGNED INTEGER) DESC , CAST(b.stats_volunteer_for_denominator_cached AS UNSIGNED INTEGER) DESC limit 90');
appendToSheet(sheet, results);
setColoursFormat(sheet, "D2:Z","No","#F0E68C")

results.close();
stmt.close();
} 