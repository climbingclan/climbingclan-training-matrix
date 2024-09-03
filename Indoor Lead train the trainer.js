function reportIndoorLeadTrainer() {
 var conn = Jdbc.getConnection(url, username, password);
 var stmt = conn.createStatement();
 

let cell = setupCell("Dashboard","B16")
let sheet = setupSheet("Indoor Lead TtTer")

 var results = stmt.executeQuery('select distinct b.nickname "FB Name", skills_belaying_lead "Lead Belay",b.stats_volunteer_for_numerator_cached "Vlntrd",CAST(b.`stats_attendance_indoor_wednesday_attended_cached` AS UNSIGNED INTEGER)"attndd",FLOOR(b.scores_volunteer_score_cached) "Recptvnss",  skillshare_climbing_indoors_lead_belaying as "Lead Belaying",  skillshare_climbing_indoors_seconding_leads as "Seconding Leads",  skillshare_climbing_indoors_lead_climbing as "Lead Climbing",  skillshare_climbing_indoors_lead_falls as "Lead Falls",    skillshare_climbing_indoors_lead_belaying_trainer_trainer as "Lead Belaying Trainer Trainer",  skillshare_climbing_indoors_lead_climbing_trainer_trainer as "Lead Climbing Trainer Trainer", cc_compliance_last_date_of_climbing "Last attended", b.id "user ID" from   wp_member_db b JOIN wp_member_db_skills skills on b.id = skills.id JOIN wp_member_db_skillshare sk on b.id = sk.id where skills_belaying_lead<>"No" and cc_compliance_last_date_of_climbing BETWEEN DATE_SUB(CURDATE(), INTERVAL 4 MONTH) AND CURDATE() AND CAST(stats_volunteer_for_numerator_cached as UNSIGNED INTEGER) >4 order by skillshare_climbing_indoors_lead_belaying desc,CAST(b.`stats_attendance_indoor_wednesday_attended_cached` AS UNSIGNED INTEGER) desc,CAST(b.`stats_volunteer_for_numerator_cached` AS UNSIGNED INTEGER) DESC , CAST(b.stats_volunteer_for_denominator_cached AS UNSIGNED INTEGER) DESC limit 70');
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