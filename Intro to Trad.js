function tradTrainingData() {
 var conn = Jdbc.getConnection(url, username, password);
 var stmt = conn.createStatement();


let cell = setupCell("Dashboard","B16")
let sheet = setupSheet("Intro to Trad")
 
 var results = stmt.executeQuery('select distinct nickname "FB Name", db.scores_volunteer_score_cached "Rcptvnss",db.stats_volunteer_for_numerator_cached "voluntred",(CAST(db.`stats_attendance_outdoor_thursday_attended_cached` AS UNSIGNED INTEGER) + CAST(db.`stats_attendance_overnight_attended_cached` AS UNSIGNED INTEGER))"attndd outdoors", `skills-belaying` "Belaying Skills", `skills-trad-climbing` "Trad Skills", `skills-sport-climbing` "Sport Skills",`cc_compliance_last_date_of_climbing`"Last Climbed",   `climbing-indoors-toproping-grades` "Indoor TR", `climbing-indoors-leading-grades` "Indoor Lead",`climbing-sport-grades` "Sport Lead",`climbing-trad-grades` "Lead Trad" from wp_member_db db LEFT JOIN wp_order_product_customer_lookup pd on pd.user_id = db.id where  DATE(db.`cc_compliance_last_date_of_climbing`) >= DATE_SUB(NOW(), INTERVAL 3 MONTH) and  db.`cc_member`="yes" AND  db.`skills-belaying` = "lead-belayer" AND `skills-sport-climbing` like ("%lead%") AND `skills-trad-climbing` in ("learning trad", "seconding")  order by CAST(`stats_volunteer_for_numerator_cached` AS UNSIGNED INTEGER) DESC, `skills-belaying` DESC, `skills-trad-climbing` ASC ');
appendToSheet(sheet, results);

results.close();
stmt.close();
} 