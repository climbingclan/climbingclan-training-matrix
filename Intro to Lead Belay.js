function introLeadBelayTrainingData() {
 var conn = Jdbc.getConnection(url, username, password);
 var stmt = conn.createStatement();


let cell = setupCell("Dashboard","B16")
let sheet = setupSheet("Intro to Lead Belaying")
 
 var results = stmt.executeQuery('select distinct nickname "FB Name", db.scores_volunteer_score_cached "Rcptvnss",db.stats_volunteer_for_numerator_cached "voluntred",CAST(`stats_attendance_indoor_wednesday_attended_cached` AS UNSIGNED INTEGER) "attndd", `skills-belaying` AS `Belay?`, `skills-sport-climbing` AS `Sport?`, `climbing-indoors-leading-grades` AS `Indoor Lead`,  `climbing-indoors-toproping-grades` AS `Indoor TR` ,`cc_member` AS `Member?`,cc_compliance_last_date_of_climbing AS `Last climbed` \
FROM wp_member_db db \
LEFT JOIN wp_order_product_customer_lookup pd ON pd.user_id = db.id \
WHERE `skills-belaying` IN ("Top-rope-belaying", "learner-lead-belayer") \
AND DATE(`cc_compliance_last_date_of_climbing`) >= DATE_SUB(NOW(), INTERVAL 3 MONTH) \
ORDER BY CAST(`stats_volunteer_for_numerator_cached` AS UNSIGNED INTEGER) DESC, `skills-belaying` DESC,  `skills-sport-climbing` ASC, `cc_compliance_last_date_of_climbing` DESC LIMIT 50; \
');
appendToSheet(sheet, results);

results.close();
stmt.close();
} 